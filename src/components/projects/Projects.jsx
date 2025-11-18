import React from "react";
import coffeeMachine from "../../assets/coffeemachine.jpg";
import ecommerce from "../../assets/e-commerce .jpg";
import todo from "../../assets/todo.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section class="projects" id="projects">
      <h1>Featured Projects</h1>
      <hr />

      <div class="card">
        <img src={todo} alt="card image" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Todo-List App</h5>
          <p class="card-text">
            The To-do list app helps to organize tasks and stay
            productive by allowing to create, edit, and prioritize
            To-do list. With a user-friendly interface, users can easily add
            tasks, set deadlines, and mark them as complete.
          </p>
          <a href="#" target="_blank">View Project</a>
        </div>
      </div>

      <div class="card">
        <img src={ecommerce} class="card-img-top" alt="card image" />
        <div class="card-body">
          <h5 class="card-title">E-commerce website</h5>
          <p class="card-text">
            The E-commerce website is an interactive Online shop that allows
            users to buy items from the shop. With various products available,
            users can choose from a wide range of products in different
            categories.
          </p>
          <a href="#" target="_blank">View Project</a>
        </div>
      </div>

      <div class="card">
        <img src={coffeeMachine} class="card-img-top" alt="card image" />
        <div class="card-body">
          <h5 class="card-title">Virtual Coffee Machine</h5>
          <p class="card-text">
            The virtual coffee machine is an interactive simulation that allows
            users design and brew their perfect cup of coffee. With various
            coffee options, users can experiment with different flavour and
            recipes.
          </p>
          <a href="#" target="_blank">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
