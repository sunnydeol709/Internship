# MERNIIC2026

A front-end learning and experimentation repository built around HTML, CSS, vanilla JavaScript, and React. It contains small, focused examples for learning browser fundamentals as well as a separate Vite-powered React application for practicing components, routing, forms, state, and API requests.

## What is included

- Standalone HTML pages covering tables, forms, images, links, and page structure
- CSS demonstrations for Flexbox, Grid, positioning, responsive layouts, and styling fundamentals
- Vanilla JavaScript exercises for variables, functions, arrays, objects, ES modules, the DOM, events, timers, storage, and `fetch`
- A multi-page HTML example with About, Service, and Contact pages
- A React single-page application with client-side routing and reusable components
- Product and post views that consume public demo APIs through Axios

This repository is primarily a learning sandbox. The pages and components are intentionally small and may contain unfinished or experimental code.

## Project structure

```text
MERNIIC2026/
├── index.html                 # Basic table and HTML examples
├── form.html                  # Native HTML form controls
├── dom.html                   # DOM interaction example
├── flex.html                  # Flexbox practice
├── grid.html                  # CSS Grid practice
├── position.html              # CSS positioning practice
├── responsive.html            # Responsive layout practice
├── test.html                  # Additional HTML/CSS test page
├── index2.html                # Alternate index exercise
├── css/                       # Styles for the standalone examples
├── javascript/                # Vanilla JavaScript and ES module exercises
├── image/                     # Images and image/navigation examples
├── page/                      # About, Service, and Contact pages
└── react/                     # React application
    ├── src/
    │   ├── components/        # Reusable UI components
    │   ├── layout/            # Shared page layouts
    │   ├── pages/             # Route-level React pages
    │   ├── App.jsx            # Router configuration
    │   └── main.jsx           # React entry point
    ├── public/                # Static public assets
    ├── package.json
    └── vite.config.js
```

## Requirements

- A modern web browser
- [Node.js](https://nodejs.org/) and npm for the React application
- Python 3 or a VS Code extension such as Live Server if you want to serve the standalone HTML pages through a local HTTP server

No database or backend is included. The React application uses public third-party APIs, so an internet connection is needed when loading API-driven pages.

## Run the standalone HTML, CSS, and JavaScript examples

The simplest files can be opened directly in a browser, for example:

```text
MERNIIC2026/index.html
MERNIIC2026/form.html
MERNIIC2026/dom.html
MERNIIC2026/flex.html
```

For paths and browser APIs to work consistently, serve the directory with a local server instead:

```powershell
cd MERNIIC2026
python -m http.server 8000
```

Then open <http://localhost:8000/> in a browser. Use the directory listing or open a specific file such as <http://localhost:8000/dom.html>.

## Run the React application

The React app is an independent Vite project located in `MERNIIC2026/react`. Run these commands from that directory:

```powershell
cd MERNIIC2026/react
npm install
npm run dev
```

Vite will print the local development URL, normally <http://localhost:5173/>.

### Available scripts

```powershell
npm run dev       # Start the Vite development server with hot reload
npm run build     # Create a production build in react/dist
npm run lint      # Run the Oxlint checks
npm run preview   # Preview the production build locally
```

## React routes

The router is defined in `react/src/App.jsx`.

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/home` | Alternate home route |
| `/about` | About page |
| `/service` | Service page |
| `/contact` | Contact page |
| `/login` | Login page/demo |
| `/register` | Registration form with client-side validation |
| `/api` | Posts fetched from JSONPlaceholder |
| `/products` | Products fetched from FakeStore API |
| `/products/:prodId` | Product detail route |
| `*` | 404/not-found page |

The main navigation and footer are supplied by the shared React layout. Pages under the root layout include the navigation and footer; login and registration currently have their own route entries.

## External APIs

The React examples use public, non-production demo services:

- `https://jsonplaceholder.typicode.com/posts` for the `/api` page
- `https://fakestoreapi.com/products` and product detail endpoints for the products pages

API requests are made from the browser with Axios. No API keys are currently required.

## Learning notes and current limitations

- The standalone files are independent exercises rather than one integrated application.
- The React app is a work in progress. Several pages and components are placeholders, and some styling and interaction code is still being developed.
- The product-detail component currently contains an unfinished request implementation. Treat the product detail route as a development demo until its request code is corrected.
- The registration form is a front-end demonstration. It uses browser state and `localStorage`; it does not create a server-side user or provide real authentication.
- API-dependent pages depend on network availability and the availability of the public demo services.

## License

No license has been specified for this repository. Add a license file if you intend to distribute the code publicly.