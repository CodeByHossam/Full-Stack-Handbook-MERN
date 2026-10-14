/* ============================================================
   FULL-STACK HANDBOOK-MERN — catalog + sidebar builder
   Single source of truth for all library pages.
   ============================================================ */
(function () {
    "use strict";

    /* Base path to library root, injected per page:
       <script src="assets/js/nav.js" data-base=""></script>   (root)
       <script src="../assets/js/nav.js" data-base="../"></script>  (subfolder) */
    var BASE = "";
    if (document.currentScript) BASE = document.currentScript.getAttribute("data-base") || "";
    function path(p) { return BASE + p; }

    var CATALOG = [
        {
            name: "Getting Started",
            pages: [
                { t: "MERN Roadmap", p: "01-getting-started/mern-roadmap.html", d: "Full learning path: 18 skill areas to master" }
            ]
        },
        {
            name: "Fundamentals",
            pages: [
                { t: "Internet & Web Fundamentals", p: "02-fundamentals/internet-web.html", d: "HTTP/HTTPS, DNS, ports, cookies, sessions, CORS, CDN" },
                { t: "Networking Layers", p: "02-fundamentals/networking-layers.html", d: "TCP, IP, MAC, DHCP, ARP, encapsulation" },
                { t: "Data Representation & Encoding", p: "02-fundamentals/data-representation.html", d: "Bits, bytes, binary, hex, ASCII, UTF-8, Base64" },
                { t: "Web Request Flow", p: "02-fundamentals/web-request-flow.html", d: "From the browser to the server and back, layer by layer" },
                { t: "Terminal & Command Line", p: "02-fundamentals/terminal.html", d: "OS, shell (PowerShell/CMD/Bash), Node, npm" },
                { t: "Git & GitHub", p: "02-fundamentals/git-github.html", d: "A-Z Git workflow: add, commit, branch, merge, PR" }
            ]
        },
        {
            name: "JavaScript",
            pages: [
                { t: "JavaScript Basics", p: "03-javascript/javascript-basics.html", d: "Variables to async/await; functions & callbacks deep-dive" },
                { t: "JavaScript Data Structures", p: "03-javascript/javascript-data-structures.html", d: "Array, Object, Set, Map, Stack, Queue" },
                { t: "JavaScript Event Loop", p: "03-javascript/javascript-event-loop.html", d: "Single-threaded model, call stack, micro/macro tasks" }
            ]
        },
        {
            name: "Frontend",
            pages: [
                { t: "HTML", p: "04-frontend/html.html", d: "Semantic structure, forms, media, accessibility, SEO" },
                { t: "CSS", p: "04-frontend/css.html", d: "Selectors, box model, Flexbox, Grid, animation, BEM" },
                { t: "Tailwind CSS", p: "04-frontend/tailwind.html", d: "Utility-first classes, responsive, dark mode, React" },
                { t: "GSAP", p: "04-frontend/gsap.html", d: "Tweens, timelines, ScrollTrigger, React integration" },
                { t: "React", p: "04-frontend/react.html", d: "Components, JSX, state, hooks, events, forms, Router" },
                { t: "React State & useEffect", p: "04-frontend/react-state-hooks.html", d: "State snapshots, onClick gotchas, when to use effects" },
                { t: "React Native", p: "04-frontend/react-native.html", d: "Expo, core components, navigation, API, permissions" },
                { t: "Redux Toolkit + RTK Query", p: "04-frontend/redux-toolkit.html", d: "Store, slices, selectors, queries, mutations, cache tags" }
            ]
        },
        {
            name: "Backend",
            pages: [
                { t: "Node.js", p: "05-backend/nodejs.html", d: "Runtime, npm, modules, fs/path/crypto, env, server setup" },
                { t: "Express", p: "05-backend/express.html", d: "Routes, middleware, routers, controllers, error handling" },
                { t: "REST API", p: "05-backend/rest-api.html", d: "HTTP methods, status codes, filtering, pagination, versioning" },
                { t: "Authentication & JWT", p: "05-backend/authentication-jwt.html", d: "bcrypt, JWT, protect/role middleware, cookies, refresh tokens" },
                { t: "File Uploads", p: "05-backend/file-uploads.html", d: "FormData, Multer, validation, signed URLs on the client" },
                { t: "File Storage: S3 & Cloudinary", p: "05-backend/file-storage-s3-cloudinary.html", d: "Full professional guide: AWS S3, Cloudinary, Multer, presigned URLs" }
            ]
        },
        {
            name: "Database",
            pages: [
                { t: "MongoDB Basics", p: "06-database/mongodb-basics.html", d: "Shell CRUD, operators, indexes, beginner Mongoose" },
                { t: "MongoDB & Mongoose Deep Dive", p: "06-database/mongodb-mongoose.html", d: "Query vs document, populate, authorization, methods/virtuals/statics" },
                { t: "Database Complete Reference", p: "06-database/database-mongo-sql.html", d: "Atlas + Mongoose vs PostgreSQL/MySQL + Prisma, full guide" },
                { t: "AWS RDS MySQL Guide", p: "06-database/sql-rds.html", d: "Provision RDS, MySQL Workbench, Node.js / mysql2, troubleshooting" }
            ]
        },
        {
            name: "Testing",
            pages: [
                { t: "Testing", p: "07-testing/testing.html", d: "Vitest, React Testing Library, Supertest, API & auth tests" }
            ]
        },
        {
            name: "TypeScript",
            pages: [
                { t: "TypeScript", p: "08-typescript/typescript.html", d: "Types, interfaces, generics, utility types, TS + React/Express/Mongoose" }
            ]
        },
        {
            name: "Deployment",
            pages: [
                { t: "Docker & Deployment", p: "09-deployment/docker.html", d: "Images, containers, Dockerfile, Compose, CI/CD, production build" },
                { t: "Deploy on Linux (Nginx/PM2)", p: "09-deployment/deploy-linux-nginx.html", d: "SSH → Node → PM2 → Nginx → HTTPS step-by-step" },
                { t: "SSH into Docker", p: "09-deployment/ssh-docker.html", d: "SSH keys, containers, Linux prompts, command cheat sheet" }
            ]
        },
        {
            name: "Planning & Engineering",
            pages: [
                { t: "Project Planning & Engineering", p: "11-planning/project-planning-engineering.html", d: "From business idea to development readiness: SDLC, requirements, architecture, design, estimation, risks" }
            ]
        },
        {
            name: "Security",
            pages: [
                { t: "MERN Security Handbook", p: "12-security/mern-security.html", d: "Comprehensive security guide: auth, access control, injection, API, DB, secrets, testing, OWASP" }
            ]
        },
        {
            name: "Practices",
            pages: [
                { t: "Programming Principles", p: "10-practices/programming-principles.html", d: "DRY/KISS/YAGNI, state, immutability, security, debugging" },
                { t: "Clean Code & Best Practices", p: "10-practices/clean-code.html", d: "Naming, small functions, error handling, code review checklist" },
                { t: "MERN Architecture", p: "10-practices/mern-architecture.html", d: "Project structure, layer responsibilities, API/DB design, production" },
                { t: "Problem Solving", p: "10-practices/problem-solving.html", d: "Algorithm playbook: patterns, templates, debugging" },
                { t: "Big O / Time Complexity", p: "10-practices/big-o-time-complexity.html", d: "Complexity classes, space vs time, Big O in MERN" },

            ]
        }
    ];

    /* Build index for search */
    var flat = [];
    CATALOG.forEach(function (g) {
        g.pages.forEach(function (pg) {
            flat.push({ t: pg.t, p: path(pg.p), c: pg.d });
        });
    });
    window.__CST_INDEX__ = flat;

    /* Build sidebar */
    var sidebar = document.getElementById("sidebar");
    if (sidebar) {
        var nav = sidebar.querySelector("#navTree") || sidebar;
        nav.querySelectorAll(".nav-group").forEach(function (g) { g.remove(); });
        CATALOG.forEach(function (g) {
            var group = document.createElement("div");
            group.className = "nav-group";
            var title = document.createElement("span");
            title.className = "group-title";
            title.textContent = g.name;
            group.appendChild(title);
            g.pages.forEach(function (pg) {
                var a = document.createElement("a");
                a.className = "nav-link";
                a.href = path(pg.p);
                a.setAttribute("data-desc", pg.d);
                var t = document.createElement("span");
                t.textContent = pg.t;
                a.appendChild(t);
                group.appendChild(a);
            });
            nav.appendChild(group);
        });
    }
})();