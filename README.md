# Hardware Mafia Website
## The Stack
The website is built on the following stack:
- [Astro](https://astro.build/) - The web framework for content-driven websites.
- [Tailwind CSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.
- [ASTROMAX](https://github.com/michael-andreuzza/astromax) - Free template, designed and developed by [Michael Andreuzza](https://twitter.com/Mike_Andreuzza).

## Project Structure
Inside of your Astro project, you'll see the following folders and files:
```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```
Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.
Any static assets, like images, can be placed in the `public/` directory.

## Commands
All commands are run from the root of the project, from a terminal:
| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Want to learn more?
Feel free to check Astro's [documentation](https://docs.astro.build)
