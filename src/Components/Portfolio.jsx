/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "React Portfolio Website",
    description:
      "A responsive portfolio website built with React and deployed to GitHub Pages. Features modern design, smooth animations, and showcases my projects and skills.",
    url: "https://github.com/Osmi-Bytes/React_Portfolio",
  },
  {
    title: "Task Management App",
    description:
      "A full-stack task management application with user authentication, real-time updates, and collaborative features. Built with React, Node.js, and MongoDB.",
    url: "https://github.com/Osmi-Bytes/TaskManager",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that provides real-time weather data and forecasts. Features location search, favorites, and responsive design using React and OpenWeather API.",
    url: "https://github.com/Osmi-Bytes/WeatherDashboard",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A complete e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard. Built with React, Express.js, and Stripe API.",
    url: "https://github.com/Osmi-Bytes/EcommercePlatform",
  },
  {
    title: "Mobile-First Recipe App",
    description:
      "A progressive web app for recipe discovery and meal planning. Features offline functionality, ingredient search, and social sharing capabilities.",
    url: "https://github.com/Osmi-Bytes/RecipeApp",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for data visualization using D3.js and React. Displays complex datasets with charts, graphs, and filtering capabilities.",
    url: "https://github.com/Osmi-Bytes/DataVizDashboard",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
