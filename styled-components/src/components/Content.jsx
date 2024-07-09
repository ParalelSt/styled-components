import { useEffect } from "react";
import {
  ContentContainer,
  LeftContent,
  MiddleContent,
  RightContent,
} from "./Content.elements";

function Content() {
  useEffect(() => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }, []);
  return (
    <>
      <ContentContainer>
        <LeftContent>
          <div className="upper-section">
            <ul>
              <div>
                <li>
                  <img className="profile-image" src="Profile.jpg" alt="" />
                  <p>Aron Matoic</p>
                </li>
              </div>
              <div>
                <li>
                  <img src="Friends.svg" alt="" />
                  <p>Friends</p>
                </li>
              </div>
              <div>
                <li>
                  <img src="Memories.svg" alt="" />
                  <p>Memories</p>
                </li>
              </div>
              <div>
                <li>
                  <img src="Saved.svg" alt="" />
                  <p>Saved</p>
                </li>
              </div>
              <div>
                <li>
                  <img src="Group2.svg" alt="" />
                  <p>Groups</p>
                </li>
              </div>
              <div>
                <li>
                  <img src="Video2.svg" alt="" />
                  <p>Video</p>
                </li>
              </div>
              <div>
                <li>
                  <img className="arrow-image" src="Arrow.svg" alt="" />
                  <p>See more</p>
                </li>
              </div>
            </ul>
          </div>
          <div className="lower-section">
            <div className="shortcuts">
              <h2>Your shortcuts</h2>
              <button>Edit</button>
            </div>
            <div>
              <li>
                <img src="Game2.svg" alt="" />
                <p>Game</p>
              </li>
            </div>
            <div>
              <li>
                <img src="Game2.svg" alt="" />
                <p>Game</p>
              </li>
            </div>
            <div>
              <li>
                <img src="Game2.svg" alt="" />
                <p>Game</p>
              </li>
            </div>
            <div>
              <li>
                <img src="Game2.svg" alt="" />
                <p>Game</p>
              </li>
            </div>
            <div>
              <li>
                <img className="arrow-image" src="Arrow.svg" alt="" />
                <p>See more</p>
              </li>
            </div>
            <div className="info">
              <ul>
                <li>
                  <div>
                    <a href="#">Privacy</a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#">Terms</a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#">Listing</a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#">Ad Choices</a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#">Cookies</a>
                  </div>
                </li>
                <li>
                  <a href="#">More</a>
                </li>
              </ul>
              <p className="info-paragraph">
                Meta &copy; <span id="year"></span>
              </p>
            </div>
          </div>
        </LeftContent>
        <MiddleContent></MiddleContent>
        <RightContent>
          <div className="container">
            <h2>Contacts</h2>
            <div className="image-container">
              <div>
                <img src="MagnifyingGlass.svg" alt="" />
              </div>
              <div>
                <img src="ThreeDots.svg" alt="" />
              </div>
            </div>
          </div>
          <ul className="contacts">
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
            <li>
              <img src="Profile.jpg" alt="" />
              <p>Aron Matoic</p>
            </li>
          </ul>
        </RightContent>
      </ContentContainer>
    </>
  );
}

export default Content;
