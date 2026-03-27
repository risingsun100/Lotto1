# Blueprint for Lotto Number Generator

## Overview
This project implements a simple web-based lotto number generator. Users can click a button to generate 5 unique combinations of 6 numbers (from 1 to 45). The application uses HTML for structure, CSS for styling, and vanilla JavaScript for the generation logic.

## Current Features
- Updated `index.html` with a title, main heading, a button (`generateBtn`), and a display area (`lottoNumbers`) for combinations.
- Implemented `style.css` with styling for the body, container, button, and the display of individual lotto numbers and combinations.
- Implemented `main.js` with JavaScript logic to:
    *   Generate a single unique lotto combination (6 numbers between 1 and 45).
    *   Generate 5 such combinations upon button click or initial load.
    *   Display these combinations in the `lottoNumbers` div, clearing previous results.
    *   Added event listener to `generateBtn`.
- Enhanced styling for the `.combination` class in `style.css` to make each combination appear as a distinct, rounded container ("ball shape") for its numbers, with a background, padding, larger border-radius, and an inner shadow.
