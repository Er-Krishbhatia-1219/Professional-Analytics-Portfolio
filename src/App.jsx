import {
  useState,
} from "react";

import profilePic from "./assets/profile.jpg";

export default function App() {

  const ADMIN_PASSWORD = "@Khatu1219";

  // ---------------- STATES ----------------

  const [isAdmin, setIsAdmin] =
    useState(false);

  const [showSettings, setShowSettings] =
    useState(false);

  const [passwordInput, setPasswordInput] =
    useState("");

  const [profileImage] =
    useState(profilePic);

  const [bio, setBio] = useState(
    localStorage.getItem("bio") ||
      "Results-driven Data Analyst with expertise in transforming complex datasets into actionable insights and business solutions. Skilled in SQL, Python, Excel, Power BI, and data visualization, with a strong foundation in analytical thinking, reporting, and dashboard development. Passionate about leveraging data-driven strategies to optimize performance, identify trends, and support decision-making. Experienced in working with real-world datasets, building interactive dashboards, and applying statistical analysis to solve practical business problems. Continuously exploring modern analytics tools and AI-powered technologies to deliver impactful and efficient data solutions."
  );

  const [cgpa, setCgpa] = useState(
    localStorage.getItem("cgpa") || "6.96"
  );

  const [resumeFile, setResumeFile] =
    useState({
      name: "Krish_Bhatia_Resume.pdf",
      url:
        "https://drive.google.com/file/d/1LXlhtrmT0QU7C3S3VXDhGOKf7yjx3YMX/view?usp=sharing",
    });

  const [contact, setContact] =
    useState(
      JSON.parse(
        localStorage.getItem("contact")
      ) || {
        email:
          "krishbhatia624@gmail.com",
        phone:
          "+91-7657909464",
      }
    );

  const [socials, setSocials] =
    useState(
      JSON.parse(
        localStorage.getItem("socials")
      ) || {
        github:
          "https://github.com/Er-Krishbhatia-1219",
        linkedin:
          "https://linkedin.com/",
        leetcode:
          "https://leetcode.com/",
      }
    );

  const [skills, setSkills] =
    useState(
      JSON.parse(
        localStorage.getItem("skills")
      ) || [
        "MS EXCEL",
        "SQL",
        "POWER BI",
        "PYTHON",
        "PANDAS",
        "NUMPY",
        "DATA CLEANING",
        "DATA TRANSFORMATION",
        "DATA VISUALISATION",
        "DASHBOARD CREATION",
        "DATA REPRESENTATION",
      ]
    );

  const [skillInput, setSkillInput] =
    useState("");

  // ---------------- FUNCTIONS ----------------

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const unlockAdmin = () => {

    if (
      passwordInput ===
      ADMIN_PASSWORD
    ) {

      setIsAdmin(true);
      setShowSettings(false);

      alert(
        "Admin Access Granted"
      );

    } else {

      alert("Wrong Password");
    }
  };

  const addSkill = () => {

    if (!skillInput) return;

    const updatedSkills = [
      ...skills,
      skillInput,
    ];

    setSkills(updatedSkills);

    localStorage.setItem(
      "skills",
      JSON.stringify(updatedSkills)
    );

    setSkillInput("");
  };

  const removeSkill = (index) => {

    const updatedSkills =
      skills.filter(
        (_, i) => i !== index
      );

    setSkills(updatedSkills);

    localStorage.setItem(
      "skills",
      JSON.stringify(updatedSkills)
    );
  };

  const updateBio = (value) => {

    setBio(value);

    localStorage.setItem(
      "bio",
      value
    );
  };

  const updateCgpa = (value) => {

    setCgpa(value);

    localStorage.setItem(
      "cgpa",
      value
    );
  };

  // ---------------- STYLES ----------------

  const card =
    "bg-[#111827] border border-cyan-500/20";

  const buttonStyle =
    "h-11 px-5 rounded-xl transition-all duration-300 font-medium border text-sm hover:scale-105";

  // ---------------- UI ----------------

  return (
    <div className="min-h-screen bg-[#070B14] text-white overflow-x-hidden">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 h-20 border-b border-cyan-500/10 backdrop-blur-xl bg-[#070B14]/80">

        <div className="max-w-[1700px] mx-auto h-full px-3 md:px-6 flex items-center justify-between">

          <div className="flex items-center gap-3 md:gap-5">

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center font-black text-lg md:text-xl text-white">
              DA
            </div>

            <div>

              <h1 className="text-lg md:text-2xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Data Analyst Dashboard
              </h1>

              <p className="text-xs md:text-sm text-gray-400">
                Portfolio & Career Manager
              </p>

            </div>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                setShowSettings(true)
              }
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-lg"
            >
              ⚙
            </button>

            <img
              src={profileImage}
              alt=""
              className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-cyan-400"
            />

          </div>
        </div>
      </nav>

      {/* PASSWORD MODAL */}

      {showSettings &&
        !isAdmin && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <div className="w-full md:w-[400px] rounded-3xl bg-[#111827] border border-cyan-500/20 p-8">

            <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">
              Admin Access
            </h2>

            <input
              type="password"
              placeholder="Enter Password"
              value={passwordInput}
              onChange={(e) =>
                setPasswordInput(
                  e.target.value
                )
              }
              className="w-full h-14 rounded-2xl bg-black/30 border border-white/10 px-4 outline-none"
            />

            <button
              onClick={
                unlockAdmin
              }
              className="w-full h-14 rounded-2xl bg-cyan-500 mt-6 text-white font-bold"
            >
              Unlock
            </button>

          </div>
        </div>
      )}

      {/* MAIN */}

      <div className="max-w-[1700px] mx-auto px-3 md:px-6 py-4 md:py-8 grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* LEFT */}

        <div className="xl:col-span-3 space-y-6">

          {/* PROFILE */}

          <div
            className={`rounded-3xl p-6 md:p-8 ${card}`}
          >

            <div className="flex flex-col items-center text-center">

              <img
                src={profileImage}
                alt=""
                className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/20"
              />

              <h2 className="text-2xl md:text-4xl font-black mt-6">
                Krish Bhatia
              </h2>

              <p className="text-cyan-300 mt-2 text-sm md:text-base">
                Data Analyst • BI Developer
              </p>

            </div>
          </div>

          {/* EDUCATION */}

          <div
            className={`rounded-3xl p-6 md:p-8 ${card}`}
          >

            <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">
              Education
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  CLASS X
                </h3>

                <p className="text-gray-400">
                  CBSE • 2020-2021
                </p>

                <p className="mt-2">
                  68.3%
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  CLASS XII
                </h3>

                <p className="text-gray-400">
                  CBSE PCM • 2022-2023
                </p>

                <p className="mt-2">
                  60.4%
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  BE-CSE Chandigarh University
                </h3>

                <p className="text-gray-400">
                  Graduation 2023-2027
                </p>

                <p className="mt-2">
                  CGPA : {cgpa}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="xl:col-span-9 space-y-6">

          {/* HERO */}

          <section
            className={`rounded-3xl p-6 md:p-10 ${card}`}
          >

            <h1 className="text-3xl md:text-5xl xl:text-6xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent leading-none">
              PROFESSIONAL
              <br />
              PORTFOLIO
            </h1>

            <p className="text-gray-400 text-sm md:text-lg mt-6 max-w-4xl">
              Professional portfolio for analytics,
              dashboard development, resume workflow,
              and technical profile presentation.
            </p>

          </section>

          {/* ABOUT */}

          <section
            className={`rounded-3xl p-6 md:p-8 ${card}`}
          >

            <h2 className="text-2xl md:text-4xl font-black text-cyan-300 mb-6">
              About Me
            </h2>

            <p className="text-sm md:text-lg leading-relaxed text-gray-400">
              {bio}
            </p>

          </section>

          {/* SKILLS */}

          <section
            className={`rounded-3xl p-6 md:p-8 ${card}`}
          >

            <h2 className="text-2xl md:text-4xl font-black text-cyan-300 mb-8">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3 md:gap-4">

              {skills.map(
                (skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 md:px-5 md:py-3 rounded-2xl bg-black/30 border border-cyan-500/20 text-xs md:text-sm lg:text-base"
                  >
                    {skill}
                  </div>
                )
              )}

            </div>
          </section>

          {/* CONTACT + SOCIAL */}

          <section className="grid grid-cols-1 2xl:grid-cols-2 gap-6">

            {/* CONTACT */}

            <div
              className={`rounded-3xl p-6 md:p-8 ${card}`}
            >

              <h2 className="text-2xl md:text-4xl font-black text-pink-300 mb-8">
                Contact
              </h2>

              <div className="space-y-5">

                <div className="rounded-2xl bg-black/30 border border-white/10 p-5 break-all">
                  {contact.email}
                </div>

                <div className="rounded-2xl bg-black/30 border border-white/10 p-5">
                  {contact.phone}
                </div>

              </div>
            </div>

            {/* SOCIAL */}

            <div
              className={`rounded-3xl p-6 md:p-8 ${card}`}
            >

              <h2 className="text-2xl md:text-4xl font-black text-cyan-300 mb-8">
                Social Platforms
              </h2>

              <div className="space-y-5">

                {Object.entries(
                  socials
                ).map(
                  ([
                    key,
                    value,
                  ]) => (

                    <div
                      key={key}
                      className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl bg-black/30 border border-white/10 p-5"
                    >

                      <div>

                        <p className="capitalize text-lg font-bold">
                          {key}
                        </p>

                        <p className="text-gray-400 text-sm">
                          Connected
                        </p>

                      </div>

                      <button
                        onClick={() =>
                          openLink(
                            value
                          )
                        }
                        className={`${buttonStyle} bg-cyan-500 text-white`}
                      >
                        Open
                      </button>

                    </div>
                  )
                )}

              </div>
            </div>
          </section>

          {/* RESUME */}

          <section
            className={`rounded-3xl p-6 md:p-8 ${card}`}
          >

            <h2 className="text-2xl md:text-4xl font-black text-cyan-300 mb-6">
              Resume
            </h2>

            <div className="rounded-3xl bg-black/30 border border-white/10 p-6">

              <h3 className="text-lg md:text-xl font-bold break-all">
                {resumeFile.name}
              </h3>

              <button
                onClick={() =>
                  openLink(
                    resumeFile.url
                  )
                }
                className={`${buttonStyle} bg-cyan-500 text-white mt-5`}
              >
                View Resume
              </button>

            </div>
          </section>
        </div>
      </div>

      {/* SETTINGS PANEL */}

      {isAdmin && (

        <div className="fixed bottom-4 right-2 md:right-8 w-[95%] md:w-[430px] max-h-[85vh] overflow-y-auto rounded-3xl bg-[#111827] border border-cyan-500/20 p-6 md:p-8 shadow-2xl z-50">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-2xl md:text-3xl font-black text-cyan-300">
              Admin Settings
            </h2>

            <button
              onClick={() =>
                setIsAdmin(false)
              }
              className="px-4 py-2 rounded-xl bg-red-500 text-white"
            >
              Back
            </button>

          </div>

          <div className="space-y-6">

            {/* BIO */}

            <div>

              <p className="mb-3 font-bold">
                Update Bio
              </p>

              <textarea
                value={bio}
                onChange={(e) =>
                  updateBio(
                    e.target.value
                  )
                }
                className="w-full min-h-[120px] rounded-2xl bg-black/30 border border-white/10 p-4 outline-none"
              />

            </div>

            {/* CGPA */}

            <div>

              <p className="mb-3 font-bold">
                Update CGPA
              </p>

              <input
                value={cgpa}
                onChange={(e) =>
                  updateCgpa(
                    e.target.value
                  )
                }
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4 outline-none"
              />

            </div>

            {/* SKILLS */}

            <div>

              <p className="mb-3 font-bold">
                Manage Skills
              </p>

              <div className="flex gap-3">

                <input
                  value={
                    skillInput
                  }
                  onChange={(e) =>
                    setSkillInput(
                      e.target.value
                    )
                  }
                  className="flex-1 h-12 rounded-xl bg-black/30 border border-white/10 px-4 outline-none"
                />

                <button
                  onClick={
                    addSkill
                  }
                  className="px-5 rounded-xl bg-cyan-500 text-white"
                >
                  Add
                </button>

              </div>

              <div className="flex flex-wrap gap-3 mt-4">

                {skills.map(
                  (
                    skill,
                    index
                  ) => (

                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/30 border border-cyan-500/20"
                    >

                      {skill}

                      <button
                        onClick={() =>
                          removeSkill(
                            index
                          )
                        }
                        className="text-red-400"
                      >
                        ✕
                      </button>

                    </div>
                  )
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}