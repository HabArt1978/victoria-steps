## This project uses the following dependencies

"node": "20.16.0",
"pnpm": "9.15.4"

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Stack

- Next.js - is a React framework for building full-stack web applications.

- TypeScript - is a strongly typed programming language that builds on JavaScript.

- Tailwind CSS - is a utilitarian CSS framework that allows you to quickly create user interfaces using predefined classes.
  Infrastructure used to work with tailwindcss:
  1. daisyUI - is a component library built on top of Tailwind CSS. It adds ready-made, stylish and customizable UI components.
  2. tailwind-merge - utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
  3. clsx - is a small utility library for JavaScript that helps you conveniently combine CSS classes. It is especially useful when working with Tailwind CSS, where you often have to dynamically generate classes based on conditions. clsx simplifies class management, making code more readable and maintainable.

## Volta - is a JavaScript tool manager that helps you manage versions of Node.js, npm, Yarn, and other tools in your project.

    Start using Volta:
     1.  Download the installer from the official Volta website ( https://volta.sh/ ) and follow the instructions.
     2.  Make sure Volta is installed correctly: ( volta --version )
     3.  Volta makes it easy to install the right version of Node.js: ( volta install node )
     4.  To install a specific version of Node.js: ( volta install node@20.16.0 )
     Read more - https://volta.sh/
