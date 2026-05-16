import { FaPen } from "react-icons/fa";

function Settings({ data, editField }) {
  return (
    <div className="card">

      <h3>Education</h3>

      <p>X : {data.tenth}</p>

      <p>XII : {data.twelfth}</p>

      <p>{data.graduation}</p>

      <p>{data.stream}</p>

      <div className="editable">

        <p>CGPA : {data.cgpa}</p>

        <button
          onClick={() => editField("cgpa")}
        >
          <FaPen />
        </button>

      </div>

    </div>
  );
}

export default Settings;