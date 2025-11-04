# Real Estate Finder Frontend

### Project Overview

This is the frontend of a web application built with React, Node.js, Vite, and Tailwind CSS. It provides a modern, responsive user interface with fast development and build times.
Tech Stack

React: JavaScript library for building user interfaces.
Node.js: Runtime for development and build processes.
Vite: Fast build tool and development server.
Tailwind CSS: Utility-first CSS framework for styling.

Prerequisites

Node.js (v16 or higher)
npm or yarn

## Setup Instructions

Clone the repository:git clone <https://github.com/NietoDeveloper/RealStateFinder/tree/main/client>
cd <RealEstateFinder>

Install dependencies:npm install

Start the development server:npm run dev

The app will be available at <http://localhost:5173>.

### Build Instructions

To create a production build:
npm run build

Output will be in the dist folder.
Project Structure

src/: Source code for the React application.
components/: Reusable React components.
pages/: Page-level components.
assets/: Static files (images, fonts, etc.).
styles/: Tailwind CSS configuration and custom styles.

public/: Static assets served directly.
vite.config.js: Vite configuration file.
tailwind.config.js: Tailwind CSS configuration file.

## Scripts

npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Previews the production build locally.

Tailwind CSS Usage

Tailwind is configured in tailwind.config.js.
Apply styles using utility classes directly in JSX.
Custom styles can be added in src/styles/tailwind.css.

Development Notes

Use JSX for React components.
Avoid <form> onSubmit due to sandbox restrictions; use button event handlers instead.
Use className instead of class in JSX for Tailwind classes.
Ensure components are reusable and modular.

Running the App

Development: npm run dev for hot-reloading.
Production: Serve the dist folder using a static server (e.g., npm run preview).

## Manuel Nieto Software Developer

### NietoDeveloper

### 2025
