import {
  NavbarContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
} from "./Navbar.elements";

import { useState } from "react";

function Navbar() {
  /*const pageSelector = document.querySelector(".page-selector");
  const [isSelected, setIsSelected] = useState(true);

  pageSelector.onclick(() => {
    pageSelector.className.add();
  });*/

  return (
    <>
      <NavbarContainer>
        <LeftContainer>
          <img src="FacebookLogo.svg" alt="" />
          <label htmlFor="searchBox">
            <span>
              <img src="MagnifyingGlass.svg" alt="" />
            </span>
            <input id="searchBox" type="text" placeholder="Search Facebook" />
          </label>
        </LeftContainer>
        <MiddleContainer>
          <div className="page-selector">
            <a href="#">
              <img src="Home.svg" alt="" />
            </a>
            <div></div>
          </div>
          <div className="page-selector">
            <a href="#">
              <img src="Video.svg" alt="" />
            </a>
            <div></div>
          </div>
          <div className="page-selector">
            <a href="#">
              <img src="Marketplace.svg" alt="" />
            </a>
            <div></div>
          </div>
          <div className="page-selector">
            <a href="#">
              <img src="Group.svg" alt="" />
            </a>
            <div></div>
          </div>
          <div className="page-selector">
            <a href="#">
              <img src="Games.svg" alt="" />
            </a>
            <div></div>
          </div>
        </MiddleContainer>
        <RightContainer>
          <a href="#">
            <img src="Menu.svg" alt="" />
          </a>
          <a href="#">
            <img src="Messenger.svg" alt="" />
          </a>
          <a href="#">
            <img src="Bell.svg" alt="" />
          </a>
          <div>
            <img src="Profile.jpg" alt="" />
          </div>
        </RightContainer>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
