# Webpack Minify Prototype

## Overview
This project is a Webpack-based setup designed to minify and optimize JavaScript, CSS, and HTML files automatically. It ensures efficient bundling, versioning, and deployment with minimal effort.

## Features
- **Automatic Minification**: Reduces file sizes for optimized performance.
- **Versioning**: Generates unique hashed filenames for cache busting.
- **Live Build**: Updates the output files on every commit.
- **ES6+ Support**: Uses Babel for modern JavaScript transpilation.
- **CSS & HTML Processing**: Optimizes styles and markup.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/tuhinaww/webpack-minify-prototype.git
   cd webpack-minify-prototype
   ```
2. Install dependencies:
   ```sh
   npm i
   ```

## Usage
### Development Mode
To run the development server with live updates:
```sh
npm start
```

### Production Build
To generate optimized production-ready files:
```sh
npm run build
```

## Making Changes
To modify the project, update the following files:
- `index.html` (for HTML content)
- `main.js` (for JavaScript logic)
- `styles.css` (for styling)

After making changes, commit and push:
```sh
git add .
git commit -m "commit_message"
```
This will automatically minify, version, and push the changes.

## Folder Structure
```
webpack-minify-prototype/
│── src/              # Source files
│   ├── index.html    # Main HTML file
│   ├── main.js       # JavaScript entry file
│   ├── styles.css    # Stylesheet
│── dist/             # Minified build output
│── webpack.config.js # Webpack configuration
│── package.json      # Project dependencies
│── .gitignore        # Ignored files
```

## Technologies Used
- **Webpack** - Bundling & Minification
- **Babel** - JavaScript Transpilation
- **TerserPlugin** - JavaScript Minification
- **CSS & HTML Loaders** - Processing styles and markup
