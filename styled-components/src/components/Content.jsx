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
            <div className="shortcut-container">
              <div className="shortcuts">
                <h2>Your shortcuts</h2>
                <button>Edit</button>
              </div>
              <div className="game-shortcuts">
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
              </div>
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
                <li>
                  <p className="info-paragraph">
                    Meta &copy; <span id="year"></span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </LeftContent>
        <MiddleContent>
          <div className="cards">
            <div className="card">
              <img className="profile-image" src="Profile.jpg" alt="" />
              <div>
                <img className="add-story" src="Plus.svg" alt="" />
                <p>Create story</p>
              </div>
            </div>
            <div className="card">
              <img className="card-image" src="Card1.png" alt="" />
              <img className="card-profile" src="Card1Profile.png" alt="" />
              <p>Lorem.</p>
            </div>
            <div className="card">
              <img className="card-image" src="Card1.png" alt="" />
              <img className="card-profile" src="Card1Profile.png" alt="" />
              <p>Lorem.</p>
            </div>
            <div className="card">
              <img className="card-image" src="Card1.png" alt="" />
              <img className="card-profile" src="Card1Profile.png" alt="" />
              <p>Lorem.</p>
            </div>
          </div>
          <div className="middle-container">
            <div className="upper-section">
              <div>
                <img src="Profile.jpg" alt="" />
                <input placeholder="What's on your mind, Aron?" type="text" />
              </div>
            </div>
            <div className="lower-section">
              <ul>
                <li>
                  <img src="Live.svg" alt="" />
                  <p>Live video</p>
                </li>
                <li>
                  <img src="Photo.svg" alt="" />
                  <p>Photo/video</p>
                </li>
                <li>
                  <img src="Smiley.svg" alt="" />
                  <p>Feeling/activity</p>
                </li>
              </ul>
            </div>
          </div>
        </MiddleContent>
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
