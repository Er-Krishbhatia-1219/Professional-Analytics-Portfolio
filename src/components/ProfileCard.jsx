function ProfileCard({
  data,
  profileImage,
  uploadProfile,
  calculateAge
}) {
  return (
    <div className="profileCard">
      <img
        src={
          profileImage ||
          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        }
        alt="profile"
      />

      <label className="uploadBtn">
        Upload Photo
        <input
          type="file"
          hidden
          onChange={uploadProfile}
        />
      </label>

      <h2>{data.name}</h2>

      <p>Age : {calculateAge()}</p>

      <p>{data.city}</p>
    </div>
  );
}

export default ProfileCard;