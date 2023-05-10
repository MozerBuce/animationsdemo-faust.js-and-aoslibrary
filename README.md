# Animations on Scroll Demo (Faust.js + Wordpress)

## Description

Welcome to our project! This is a small demo showing how can you easily use the Animations on Scroll Library with headless wordpress in the backend and faust.js in the frontend. With the knowledge gained here you can use it for React.js and Next,js projects.

About few weeks ago, i was working on a wordpress headless project and one of the main goal was to set animations on scroll, during my researches i found AOS Library, i had to perform some tests of the usage before implementing it in the main project, so i decided to improve it and share here.

Basically this project just shows different animations on the componentes when your scroll down or up, but you can set it to what you what and have different animations.

## Technologies
- ### [Faust.js](https://legacy.faustjs.org/)
  Actually, this is the legacy version right now but you can find the stable one [here](https://faustjs.org/) 
- ### [Headless Wordpress](https://wordpress.org/)
  Actually, wordpress is not headless, but if you follow the instructions provided on faust.js documentation you will turn it.
- ### [AOS Library](https://michalsnik.github.io/aos/)
- ### [Bootstrap](https://getbootstrap.com/)

## Install and run the project
   To have this project running on your local environment, you just need to follow the steps below:

1. Clone the project

```bash
git clone https://github.com/MozerBuce/animationsdemo-faust.js-and-aoslibrary.git
```

2. Install all dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

4. Connect to wordpress
   
   At this point you will have the project running on your local machine, but only the frontend and the animations, if you want to have dynamic information from the backend, wordpress, you need to turn your wordpress into headless and connect it to the frontend and you can follow the steps provided [here](https://legacy.faustjs.org/docs/next/getting-started#connecting-your-wordpress-site) to achieve this.
