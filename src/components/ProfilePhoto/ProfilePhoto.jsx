export function ProfilePhoto() {
    return (
      <div className="photo-section">
        <div>
          <img className="img" src="img/profile.jpg" alt="profile" />
        </div>
        <div className="group">
        <button className="Upload-btn">Upload Photo</button>
        <button className="remove-btn">remove</button>
        </div>
      </div>
    );
  }