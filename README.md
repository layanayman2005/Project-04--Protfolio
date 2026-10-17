# Layan's Personal Portfolio

A responsive personal portfolio built from scratch using HTML5, CSS3,
JavaScript ES6+, and Git.

## Features

- Responsive layout using Flexbox, CSS Grid, and CSS media queries.
- Personal introduction, skills, projects, experience, and hobbies.
- Interactive dark/light theme switcher.
- Contact form with basic browser validation.
- Accessible navigation and form labels.

## Technologies

- HTML5
- CSS3
- JavaScript ES6+
- Git

No frameworks, templates, or UI libraries are used.

## Project Structure

ex00/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── profile.jpg
└── README.md

## JavaScript Event Lifecycle

1. User action: the user clicks the theme switcher.
2. Event firing: the browser dispatches a click event.
3. JavaScript callback: the registered event listener executes.
4. DOM mutation: `classList.toggle()` adds or removes the
   `light-theme` class on the body.
5. CSS update: the browser recalculates the CSS custom properties
   and renders the new theme.

## Contact Form

The form uses native HTML validation. JavaScript prevents the
default submission and displays an explanatory status message.
No message is sent to a server.

## Running the Project

Open `index.html` in a browser.

## Author

Layan Ayman Al-Najdawi
