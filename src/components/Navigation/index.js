import React from "react";

function Navigation(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <header className="px-1 flex-row">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a onClick={() => setCurrentPage('about')}>
              Home
            </a>
          </li>
          <li className="mx-2" onClick={() => setCurrentPage('portfolio')}>
            <a>
              Portfolio
            </a>
          </li>
          <li className="mx-2" onClick={() => setCurrentPage('resume')}>
            <a>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;