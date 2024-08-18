import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feature">App 1</Link>
          </li>
          <li>
            <Link to="/app2">App 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
