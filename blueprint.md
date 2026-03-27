# Blueprint for Lotto Number Generator

## Overview
This project implements a web-based lotto number generator with a Korean user interface. Users can generate 5 sets of lotto numbers (6 main numbers + 1 bonus number) with a single click. The application features a vibrant design, animations, and sound effects.

## Current Features
- **Korean Localization:** The UI is entirely in Korean ("로또 번호 추천기", "번호 뽑기").
- **Bonus Number Support:** Each set now includes 6 main numbers and 1 distinct bonus number.
- **Dynamic Styling:**
    *   Lotto balls are color-coded based on their value (1-10: yellow, 11-20: blue, 21-30: red, 31-40: gray, 41-45: green).
    *   Responsive layout with a modern gradient background.
    *   Hover effects on buttons and interactive shadows.
- **Animations:** Subtle "bounce" animation when numbers are generated.
- **Sound Effects:** Button click sound effect using an external audio source.
- **Project Structure:** Adheres to a clean separation of concerns with `index.html`, `style.css`, and `main.js`.

## Implementation Details
- `index.html`: Entry point with Korean text, links to external CSS and JS, and an audio element for sound.
- `style.css`: Contains all visual styles, including the gradient background, ball colors, and the bounce animation keyframes.
- `main.js`: Contains the logic for generating unique numbers, determining ball colors, and updating the DOM dynamically.
