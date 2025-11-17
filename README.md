Digital Portfolio for CS5709 - Software Engineering Evolution (Phase 2)

Personal Portfolio Website – React + TypeScript + Vite

A modern, responsive, and interactive personal portfolio built using React, TypeScript, Vite, and CSS, designed to showcase my education, skills, journey, projects, and achievements.

 Features

1. Animated UI with gradients, glow effects & smooth transitions

2. Typing animation using react-typing-effect

3.  Dark/Light mode toggle

4. AI Chatbot integration (Tawk.to) for real-time chat

5. Fully responsive for mobile, tablet & desktop

6. Reusable React components (modular architecture)

7. Separate sections: About, Journey, Skills, Education, Projects, Certificates, Contact

8. Smooth scrolling navigation

9. Hover animations & interactive cards


 Tech Stack

1 React + TypeScript

2 Vite

3 CSS3 (Gradients, Flexbox, Media Queries)

4 Tawk.to Chat Integration

5 GitHub Pages Deployment

 

	Project Structure: 
src/
 ├── assets/
 ├── components/
 ├── about.tsx
 ├── journey.tsx
 ├── skills.tsx
 ├── education.tsx
 ├── projects.tsx
 ├── certificates.tsx
 ├── contact.tsx
 ├── footer.tsx
 ├── App.tsx
 └── main.tsx


  Setup & Run Locally
1. npm install
2. npm run dev


Build for production:

1. npm run build

🌐 Deployment (GitHub Pages)


Deploy steps:

1) Run npm run build

2) Commit and push the new dist/ folder

Go to:
GitHub → Repository Settings → Pages → Branch → main → /dist

Save.

Your site will be live in 1–2 minutes.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
