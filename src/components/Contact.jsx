import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaPen
} from "react-icons/fa";

function Contact({ data, editField }) {
  return (
    <div className="card">

      <div className="headingRow">

        <h3>Contact</h3>

        <button
          onClick={() => editField("phone")}
        >
          <FaPen />
        </button>

      </div>

      <p>
        <FaPhone />
        {" "}
        {data.phone}
      </p>

      <p>
        <FaEnvelope />
        {" "}
        {data.email}
      </p>

      <p>
        <FaLinkedin />
        {" "}
        {data.linkedin}
      </p>

      <p>
        <FaGithub />
        {" "}
        {data.github}
      </p>

    </div>
  );
}

export default Contact;