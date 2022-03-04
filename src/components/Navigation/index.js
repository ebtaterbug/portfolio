import React from "react";

function Navigation(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Ian Joseph
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a onClick={() => setCurrentPage('about')}>
              About me
            </a>
          </li>
          <li className="mx-2" onClick={() => setCurrentPage('portfolio')}>
            <a>
              Portfolio
            </a>
          </li>
          <li className="mx-2" >
            <a onClick={() => setCurrentPage('contact')}>
              Contact
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