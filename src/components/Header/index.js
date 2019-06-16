import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Header({ title, onClick: handler }) {
  return (
    <header>
      <h1>GitHub Top</h1>
      <ul>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </header>
  );
}
