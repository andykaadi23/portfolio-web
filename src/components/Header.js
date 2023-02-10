import React from "react";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="lgo" />
          </a>
          <a
            href="https://www.linkedin.com/in/andyka-adi-pratama/"
            className="btn btn-sm flex justify-center items-center"
            target="_blank"
            rel="noreferrer"
          >
            Work with me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
