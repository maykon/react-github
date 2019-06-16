import React from "react";

export default function Project({ project }) {
  const { name, html_url, description } = project;
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={html_url}>{html_url}</a>
    </li>
  );
}
