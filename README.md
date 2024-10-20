# Etch-a-Sketch

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)
- [Extra Features](#extra-features)
- [Lessons Learned](#lessons-learned)
- [Acknowledgments](#acknowledgments)

---

## Introduction
This project is a browser-based Etch-a-Sketch-style drawing tool. It is a part of my web development learning journey, where I focused on manipulating the DOM, working with Flexbox, and practicing event handling in JavaScript.

The application generates a grid of squares and allows users to "sketch" by hovering over the grid, which changes the color of the squares.

## Features
- Create a customizable grid of up to 100 squares per side.
- Each square's color changes randomly upon hovering.
- Progressive darkening effect applied to squares on each hover, becoming fully dark after 10 interactions.
- Button to reset and generate a new grid with user-defined dimensions.

## How to Use
1. Open the webpage.
2. Click the "Create Grid" button to enter the number of squares per side (maximum 100).
3. Move your mouse over the grid to "sketch" as squares change colors and become progressively darker.
4. Press the "Create Grid" button again to reset the grid with a new size.

## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: Styling and layout using Flexbox to create a responsive grid.
- **JavaScript**: DOM manipulation and event handling to make the grid interactive.

## Extra Features
- **Randomized Colors**: Each square's RGB color changes randomly on hover.
- **Opacity Increment**: Each hover increases the square's opacity by 10%, with a maximum of 100% opacity.

## Lessons Learned
- How to manipulate the DOM to dynamically create elements.
- Working with Flexbox to design a responsive grid.
- Implementing hover effects and progressively changing styles with event listeners.
- Using random number generation to create dynamic colors.
- Handling edge cases for user input and ensuring a responsive user experience.

## Acknowledgments
This project is part of The Odin Project curriculum. It allowed me to solidify my DOM manipulation and JavaScript skills.
