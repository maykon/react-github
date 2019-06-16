import React from "react";

export default function Project({ project }) {
  const { name, full_name, html_url, description } = project;
  const fullname = `${name} - ${full_name}`;
  return (
    <li>
      <h3>{fullname}</h3>
      <p>{description}</p>
      <a href={html_url}>{html_url}</a>
    </li>
  );
}
