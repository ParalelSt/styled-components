function Cards() {
  return (
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
  );
}

export default Cards;
