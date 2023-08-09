# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./url-shortening/src/images/Screenshot%202023-08-09%20at%2015-05-53%20React%20App.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Typescript
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Another project done with React, Tailwind CSS and TypeScript. I added an intermediate layout for tablets and an error message if the link is invalid. When resizing the screen, I made the mobile menu close, and saw that the eventListener was being called multiple times as I resized the screen. To solve that, whenever I resize the screen, the mobile menu closes and the eventListener is removed. If I open the mobile menu again, the eventListener is added again. Feedback is welcome!

## Author

- Website - [Felipe Thomé](https://www.github.com/felipetn1989)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)


