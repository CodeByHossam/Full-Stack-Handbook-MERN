/* ============================================================
   FULL-STACK HANDBOOK-MERN — app.js
   - Theme toggle (persisted)
   - Mobile sidebar toggle
   - Sidebar auto-TOC from page headings
   - Scrollspy
   - Copy-code buttons
   - Global page search (topbar + index hero)
   ============================================================ */
(function () {
    "use strict";

    /* ---------- Theme ---------- */
    var themeBtn = document.getElementById("themeToggle");
    function applyTheme(t) {
        document.documentElement.setAttribute("data-theme", t);
        localStorage.setItem("cst-theme", t);
        if (themeBtn) themeBtn.textContent = t === "dark" ? "☀" : "☾";
    }
    var saved = localStorage.getItem("cst-theme");
    applyTheme(saved || "light");
    if (themeBtn) themeBtn.addEventListener("click", function () {
        var cur = document.documentElement.getAttribute("data-theme") || "light";
        applyTheme(cur === "dark" ? "light" : "dark");
    });

    /* ---------- Mobile sidebar ---------- */
    var menuToggle = document.getElementById("menuToggle");
    var sidebar = document.getElementById("sidebar");
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("open");
            menuToggle.textContent = sidebar.classList.contains("open") ? "✕" : "☰";
        });
        document.addEventListener("click", function (e) {
            if (sidebar.classList.contains("open") &&
                !sidebar.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                sidebar.classList.remove("open");
                menuToggle.textContent = "☰";
            }
        });
    }

    /* ---------- Collapsible nav groups ---------- */
    document.querySelectorAll(".nav-group > .group-title").forEach(function (t) {
        if (window.innerWidth > 1024) return;
        t.addEventListener("click", function () {
            var group = t.parentElement;
            var links = group.querySelectorAll("a");
            var open = group.classList.toggle("open");
            links.forEach(function (l) { l.style.display = open ? "block" : "none"; });
        });
    });

    /* ---------- Sidebar auto-TOC from headings ---------- */
    var toc = document.getElementById("pageToc");
    var content = document.getElementById("docContent");
    if (toc && content) {
        var n = 0;
        var headings = content.querySelectorAll("h2");
        headings.forEach(function (h) {
            if (!h.id) h.id = "sec-" + (++n);
            var a = document.createElement("a");
            a.href = "#" + h.id;
            a.className = "toc-link";
            a.textContent = h.textContent;
            toc.appendChild(a);
        });
    }

    /* ---------- Scrollspy ---------- */
    var tocLinks = document.querySelectorAll(".sidebar .toc a.toc-link, .section > h2");
    function spy() {
        var pos = window.scrollY + 120;
        var current = null;
        (content ? content.querySelectorAll("h2") : []).forEach(function (h) {
            if (h.offsetTop <= pos) current = h.id;
        });
        if (current) {
            tocLinks.forEach(function (l) {
                var target = l.getAttribute("href");
                if (target && target.slice(1) === current) l.classList.add("active");
                else if (l.classList.contains("toc-link")) l.classList.remove("active");
            });
        }
    }
    if (content) window.addEventListener("scroll", spy, { passive: true });

    /* ---------- Copy buttons ---------- */
    document.querySelectorAll("pre.code-block").forEach(function (pre) {
        var btn = document.createElement("button");
        btn.className = "copy-btn";
        btn.textContent = "Copy";
        btn.setAttribute("type", "button");
        btn.addEventListener("click", function () {
            var code = pre.querySelector("code");
            var text = code ? code.innerText : pre.innerText;
            var done = function () {
                btn.textContent = "Copied!";
                btn.classList.add("copied");
                setTimeout(function () {
                    btn.textContent = "Copy";
                    btn.classList.remove("copied");
                }, 1400);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
            } else {
                fallbackCopy(text, done);
            }
        });
        pre.appendChild(btn);
    });

    function fallbackCopy(text, done) {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(); } catch (e) { alert("Copy failed — select the code manually."); }
        document.body.removeChild(ta);
    }

    /* ---------- Language label ---------- */
    document.querySelectorAll("pre.code-block[data-lang]").forEach(function (pre) {
        var label = document.createElement("span");
        label.className = "lang-label";
        label.textContent = pre.getAttribute("data-lang");
        pre.appendChild(label);
    });

    /* ---------- Global search (topbar) ---------- */
    var navSearch = document.getElementById("navSearch");
    var navResults = document.getElementById("navResults");
    var navIndex = window.__CST_INDEX__ || [];
    var heroSearch = document.getElementById("heroSearch");
    var heroResults = document.getElementById("heroResults");

    function buildIndex() {
        var idx = navIndex.slice();
        if (idx.length === 0) {
            document.querySelectorAll(".sidebar a.nav-link").forEach(function (a) {
                idx.push({ t: a.textContent.trim(), p: a.getAttribute("href"), c: a.getAttribute("data-desc") || "" });
            });
        }
        return idx;
    }

    function hideResults(el) {
        if (el) { el.classList.remove("visible"); el.innerHTML = ""; }
    }

    function renderResults(q, list) {
        var results, target;
        list.forEach(function (item) {
            if (item.id === "navResults") { results = item.el; target = navResults; }
            if (item.id === "heroResults") { results = item.el; target = heroResults; }
        });
        if (!q || !target) { hideResults(target); return; }
        var s = q.toLowerCase();
        var idx = buildIndex();
        var hits = idx.filter(function (e) {
            return (e.t.toLowerCase().indexOf(s) !== -1) || (e.c && e.c.toLowerCase().indexOf(s) !== -1);
        }).slice(0, 12);
        results.innerHTML = "";
        if (hits.length === 0) {
            var d = document.createElement("div");
            d.className = "sr-empty";
            d.textContent = "No matching pages found.";
            results.appendChild(d);
        } else {
            hits.forEach(function (h) {
                var a = document.createElement("a");
                a.className = "sr-item";
                a.href = h.p;
                var t = document.createElement("span");
                t.className = "t";
                t.textContent = h.t;
                a.appendChild(t);
                if (h.c) {
                    var c = document.createElement("span");
                    c.className = "c";
                    c.textContent = h.c;
                    a.appendChild(c);
                }
                results.appendChild(a);
            });
        }
        target.classList.add("visible");
    }

    if (navSearch) {
        navSearch.addEventListener("input", function () {
            renderResults(navSearch.value, [{ id: "navResults", el: navResults }]);
        });
        navSearch.addEventListener("keydown", function (e) {
            if (e.key === "Escape") { navSearch.value = ""; hideResults(navResults); }
        });
    }
    if (heroSearch) {
        heroSearch.addEventListener("input", function () {
            renderResults(heroSearch.value, [{ id: "heroResults", el: heroResults }]);
        });
        heroSearch.addEventListener("keydown", function (e) {
            if (e.key === "Escape") { heroSearch.value = ""; hideResults(heroResults); }
        });
    }
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".search, .big-search")) {
            hideResults(navResults);
            hideResults(heroResults);
        }
    });

    /* Mark current page in nav */
    var current = (location.pathname.split("/").pop() || "index.html").split("?")[0];
    document.querySelectorAll(".sidebar a.nav-link").forEach(function (a) {
        var href = a.getAttribute("href");
        if (href && href.split("/").pop().split("?")[0] === current) a.classList.add("active");
    });

    /* Mobile: collapse nav groups initially */
    if (window.innerWidth <= 1024) {
        document.querySelectorAll(".nav-group").forEach(function (g) {
            if (!g.querySelector("a.nav-link.active")) {
                g.querySelectorAll("a").forEach(function (l) { l.style.display = "none"; });
            }
        });
    }
})();