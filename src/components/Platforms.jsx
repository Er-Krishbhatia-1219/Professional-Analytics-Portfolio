function Platforms({ data }) {
  return (
    <div className="card">

      <h3>Platforms</h3>

      <div className="skillsGrid">

        {data.platforms.map((platform, index) => (
          <div
            key={index}
            className="skill"
          >
            {platform}
          </div>
        ))}

      </div>

    </div>
  );
}

export default Platforms;