import React, { useState, useEffect } from "react";

import Project from "../Project";

import "./styles.css";

export default function Projects() {
  const [projects, setProjects] = useState([
    { name: "Meu projeto maravilindo", url: "" }
  ]);

  useEffect(() => {
    async function load() {
      var repositories = await fetch(
        "https://api.github.com/users/maykon/repos"
      );

      console.log(repositories);
      var data = await repositories.json();
      setProjects(data);
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="projects">
      <h1>Projetos</h1>
      <ul>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>
    </div>
  );
}
