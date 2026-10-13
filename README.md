# Full-Stack Handbook-MERN

A curated, offline, static reference library for full-stack web development.

Full-Stack Handbook-MERN collects the fundamentals, the MERN stack, and everything
around it — HTTP and networking, JavaScript, frontend (HTML/CSS/React), backend
(Node/Express), databases (MongoDB/SQL), testing, TypeScript, deployment
(Docker/Nginx), and engineering practices — into one fast, searchable,
dependency-free documentation site.

Every page is hand-written HTML with clear explanations (What / Why / When),
comparison tables, inline comments, and runnable examples. There is **no build
step** and **no external service** — clone it and open `index.html`.

---

## Highlights

- **38 topic pages** organized into **10 categories**, from fundamentals to deployment.
- **Instant client-side search** across every page — no server, no index files.
- **Works fully offline** — no CDNs, no fonts, no analytics, no network calls.
- **Zero dependencies / no build step** — plain HTML, CSS, and vanilla JavaScript.
- **Dark & light theme** with saved preference.
- **Responsive layout** with a collapsible sidebar for small screens.
- **Auto-generated table of contents** with scroll-spy highlighting on each page.
- **Copy-to-clipboard** buttons on every code block.
- **Consistent design system** shared through `assets/css/style.css`.

---

## Content Map

### Getting Started
| Page | Description |
| --- | --- |
| [MERN Roadmap](01-getting-started/mern-roadmap.html) | Full learning path: 18 skill areas to master |

### Fundamentals
| Page | Description |
| --- | --- |
| [Internet & Web Fundamentals](02-fundamentals/internet-web.html) | HTTP/HTTPS, DNS, ports, cookies, sessions, CORS, CDN, TLS |
| [Networking Layers](02-fundamentals/networking-layers.html) | TCP, IP, MAC, DHCP, ARP, encapsulation |
| [Data Representation & Encoding](02-fundamentals/data-representation.html) | Bits, bytes, binary, hex, ASCII, UTF-8, Base64 |
| [Web Request Flow](02-fundamentals/web-request-flow.html) | From the browser to the server and back, layer by layer |
| [Terminal & Command Line](02-fundamentals/terminal.html) | OS, shell (PowerShell/CMD/Bash), Node, npm |
| [Git & GitHub](02-fundamentals/git-github.html) | A-to-Z Git workflow: add, commit, branch, merge, PR |

### JavaScript
| Page | Description |
| --- | --- |
| [JavaScript Basics](03-javascript/javascript-basics.html) | Variables to async/await; functions and callbacks |
| [JavaScript Data Structures](03-javascript/javascript-data-structures.html) | Array, Object, Set, Map, Stack, Queue, iterators |
| [JavaScript Event Loop](03-javascript/javascript-event-loop.html) | Single-threaded model, call stack, micro/macro tasks |

### Frontend
| Page | Description |
| --- | --- |
| [HTML](04-frontend/html.html) | Semantic structure, forms, media, accessibility, SEO |
| [CSS](04-frontend/css.html) | Selectors, box model, Flexbox, Grid, animation, BEM |
| [Tailwind CSS](04-frontend/tailwind.html) | Utility-first classes, responsive, dark mode, React |
| [GSAP](04-frontend/gsap.html) | Tweens, timelines, ScrollTrigger, React integration |
| [React](04-frontend/react.html) | Components, JSX, state, hooks, events, forms, Router |
| [React State & useEffect](04-frontend/react-state-hooks.html) | State snapshots, onClick gotchas, when to use effects |
| [React Native](04-frontend/react-native.html) | Expo, core components, navigation, API, permissions |
| [Redux Toolkit + RTK Query](04-frontend/redux-toolkit.html) | Store, slices, selectors, queries, mutations, cache tags |

### Backend
| Page | Description |
| --- | --- |
| [Node.js](05-backend/nodejs.html) | Runtime, npm, modules, fs/path/crypto, env, server setup |
| [Express](05-backend/express.html) | Routes, middleware, routers, controllers, error handling |
| [REST API](05-backend/rest-api.html) | HTTP methods, status codes, filtering, pagination, versioning |
| [Authentication & JWT](05-backend/authentication-jwt.html) | bcrypt, JWT, protect/role middleware, cookies, refresh tokens |
| [File Uploads](05-backend/file-uploads.html) | FormData, Multer, validation, signed URLs on the client |
| [File Storage: S3 & Cloudinary](05-backend/file-storage-s3-cloudinary.html) | AWS S3, Cloudinary, Multer, presigned URLs |

### Database
| Page | Description |
| --- | --- |
| [MongoDB Basics](06-database/mongodb-basics.html) | Shell CRUD, operators, indexes, beginner Mongoose |
| [MongoDB & Mongoose Deep Dive](06-database/mongodb-mongoose.html) | Query vs document, populate, methods/virtuals/statics |
| [Database Complete Reference](06-database/database-mongo-sql.html) | Atlas + Mongoose vs PostgreSQL/MySQL + Prisma |
| [AWS RDS MySQL Guide](06-database/sql-rds.html) | Provision RDS, MySQL Workbench, Node.js / mysql2 |

### Testing
| Page | Description |
| --- | --- |
| [Testing](07-testing/testing.html) | Vitest, React Testing Library, Supertest, API & auth tests |

### TypeScript
| Page | Description |
| --- | --- |
| [TypeScript](08-typescript/typescript.html) | Types, interfaces, generics, utility types, TS + React/Express/Mongoose |

### Deployment
| Page | Description |
| --- | --- |
| [Docker & Deployment](09-deployment/docker.html) | Images, containers, Dockerfile, Compose, production build |
| [Deploy on Linux (Nginx/PM2)](09-deployment/deploy-linux-nginx.html) | SSH to Node to PM2 to Nginx to HTTPS, step by step |
| [SSH into Docker](09-deployment/ssh-docker.html) | SSH keys, containers, Linux prompts, command cheat sheet |

### Practices
| Page | Description |
| --- | --- |
| [Programming Principles](10-practices/programming-principles.html) | DRY/KISS/YAGNI, state, immutability, security, debugging |
| [Clean Code & Best Practices](10-practices/clean-code.html) | Naming, small functions, error handling, code review checklist |
| [MERN Architecture](10-practices/mern-architecture.html) | Project structure, layer responsibilities, API/DB design |
| [Problem Solving](10-practices/problem-solving.html) | Algorithm playbook: patterns, templates, debugging |
| [Big O / Time Complexity](10-practices/big-o-time-complexity.html) | Complexity classes, space vs time, Big O in practice |

---

## Getting Started

### Option 1 — Clone and open

```bash
git clone https://github.com/CodeByHossam/Full-Stack-Handbook-MERN.git
cd Full-Stack-Handbook-MERN
```

Then open `index.html` in your browser. That's it — no install, no build, no server.

### Option 2 — Use a local server (optional)

Everything works from the filesystem, but a tiny static server avoids any
browser file-protocol quirks:

```bash
# Python
python -m http.server 8080

# or Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

> Tip: Add the folder as a browser bookmark or open `index.html` so the whole
> library is available offline, even without a network connection.

---

## Project Structure

```
Full-Stack-Handbook-MERN/
├── index.html                 # Home hub: category grid + search
├── 01-getting-started/
├── 02-fundamentals/
├── 03-javascript/
├── 04-frontend/
├── 05-backend/
├── 06-database/
├── 07-testing/
├── 08-typescript/
├── 09-deployment/
├── 10-practices/
└── assets/
    ├── css/
    │   └── style.css          # Shared design system (tokens, layout, components)
    └── js/
        ├── nav.js             # Single source of truth: catalog + sidebar + search index
        └── app.js             # Theme, menu, search, table of contents, copy buttons
```

The navigation, sidebar, and search index are all generated from the catalog
defined in `assets/js/nav.js`. To add a page, add its entry there — nothing else
needs to be edited for it to appear in the sidebar and search.

---

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (design tokens), Flexbox and Grid, no framework
- **JavaScript (ES6+)** — vanilla, no libraries or bundlers
- **No dependencies**, **no build tools**, **no network requests**

---

## Features in Detail

| Feature | How it works |
| --- | --- |
| Search | Builds an in-memory index from the `nav.js` catalog and matches titles, paths, and descriptions as you type |
| Theme | Toggles a `data-theme` attribute and remembers the choice in `localStorage` |
| Sidebar | Generated dynamically from the catalog; collapses to an overlay on small screens |
| Table of contents | Built from the page headings; the active section is highlighted while scrolling |
| Copy code | Every `<pre>` code block gets a copy button added at runtime |

---

## Authoring Conventions

If you extend the library, keep it consistent with the existing pages:

- Use the shared layout and classes from `assets/css/style.css`.
- Give each section heading a unique, stable `id`.
- Explain topics with short **What / Why / When** leads before the code.
- Escape code inside `<pre><code>` (`&lt;`, `&gt;`, `&amp;`, `=&gt;`).
- End every page with a recap section and a related-pages footer.

---

## Contributing

Contributions are welcome. To propose a change:

1. Fork the repository.
2. Create a branch: `git checkout -b fix/typo-in-react-page`.
3. Commit your changes with a clear message.
4. Open a pull request describing what changed and why.

Please keep the style consistent and avoid adding external dependencies.

---

## License

Released under the [MIT License](LICENSE). If you use or adapt this material,
a link back to the repository is appreciated.

> If a `LICENSE` file is not present yet, add one (for example the MIT template)
> so the license above is explicit.

---

## Credits

Created and maintained by **Hossam Fathi** ([@CodeByHossam](https://github.com/CodeByHossam)).

Built as a personal, professional reference for full-stack development and shared
in the hope that it helps other developers learn faster.

If this library helped you, consider starring the repository.
