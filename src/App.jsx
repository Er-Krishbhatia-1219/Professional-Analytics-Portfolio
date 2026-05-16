import {
  useRef,
  useState,
  useEffect,
} from "react";

export default function App() {

  const ADMIN_PASSWORD = "@Khatu1219";

  const profileInputRef = useRef(null);

  // ---------------- STATES ----------------

  const [isAdmin, setIsAdmin] =
    useState(false);

  const [showSettings, setShowSettings] =
    useState(false);

  const [passwordInput, setPasswordInput] =
    useState("");

  const [profileImage, setProfileImage] =
    useState(
      localStorage.getItem("profileImage") ||
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    );

  const [bio, setBio] = useState(
    localStorage.getItem("bio") ||
      "Passionate Data Analyst and BI Developer focused on analytics dashboards, machine learning systems, and business intelligence solutions."
  );

  const [cgpa, setCgpa] = useState(
    localStorage.getItem("cgpa") || "6.96"
  );

  const [resumeFile, setResumeFile] =
    useState(
      JSON.parse(
        localStorage.getItem("resumeFile")
      ) || {
        name: "",
        url: "",
      }
    );

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
          "https://github.com/",
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
        "MS Excel",
        "Power BI",
        "SQL",
        "Python",
        "Pandas",
        "Data Cleaning",
      ]
    );

  const [skillInput, setSkillInput] =
    useState("");

  const [projects, setProjects] =
    useState(
      JSON.parse(
        localStorage.getItem("projects")
      ) || []
    );

  const [newProject, setNewProject] =
    useState({
      title: "",
      description: "",
      github: "",
      pdfName: "",
      pdfUrl: "",
    });

  // ---------------- LOCAL STORAGE ----------------

  useEffect(() => {
    localStorage.setItem(
      "profileImage",
      profileImage
    );
  }, [profileImage]);

  useEffect(() => {
    localStorage.setItem("bio", bio);
  }, [bio]);

  useEffect(() => {
    localStorage.setItem("cgpa", cgpa);
  }, [cgpa]);

  useEffect(() => {
    localStorage.setItem(
      "resumeFile",
      JSON.stringify(resumeFile)
    );
  }, [resumeFile]);

  useEffect(() => {
    localStorage.setItem(
      "contact",
      JSON.stringify(contact)
    );
  }, [contact]);

  useEffect(() => {
    localStorage.setItem(
      "socials",
      JSON.stringify(socials)
    );
  }, [socials]);

  useEffect(() => {
    localStorage.setItem(
      "skills",
      JSON.stringify(skills)
    );
  }, [skills]);

  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  // ---------------- FUNCTIONS ----------------

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const uploadProfilePhoto = (e) => {

    const file = e.target.files[0];

    if (file) {
      setProfileImage(
        URL.createObjectURL(file)
      );
    }
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

    setSkills([
      ...skills,
      skillInput,
    ]);

    setSkillInput("");
  };

  const removeSkill = (index) => {

    setSkills(
      skills.filter(
        (_, i) => i !== index
      )
    );
  };

  const addProject = () => {

    if (!newProject.title)
      return;

    setProjects([
      ...projects,
      newProject,
    ]);

    setNewProject({
      title: "",
      description: "",
      github: "",
      pdfName: "",
      pdfUrl: "",
    });
  };

  const deleteProject = (index) => {

    setProjects(
      projects.filter(
        (_, i) => i !== index
      )
    );
  };

  // ---------------- STYLES ----------------

  const card =
    "bg-[#111827] border border-cyan-500/20";

  const buttonStyle =
    "h-11 px-5 rounded-xl transition-all duration-300 font-medium border text-sm hover:scale-105";

  // ---------------- UI ----------------

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 h-20 border-b border-cyan-500/10 backdrop-blur-xl">

        <div className="max-w-[1700px] mx-auto h-full px-6 flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center font-black text-xl text-white">
              DA
            </div>

            <div>

              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Data Analyst Dashboard
              </h1>

              <p className="text-sm text-gray-400">
                Portfolio & Career Manager
              </p>

            </div>
          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setShowSettings(true)
              }
              className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xl"
            >
              ⚙
            </button>

            <img
              src={profileImage}
              alt=""
              className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
            />

          </div>
        </div>
      </nav>

      {/* PASSWORD MODAL */}

      {showSettings &&
        !isAdmin && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="w-[400px] rounded-3xl bg-[#111827] border border-cyan-500/20 p-8">

            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
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
              className="w-full h-14 rounded-2xl bg-black/30 border border-white/10 px-4"
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

      <div className="max-w-[1700px] mx-auto px-6 py-8 grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* LEFT */}

        <div className="xl:col-span-3 space-y-6">

          {/* PROFILE */}

          <div
            className={`rounded-3xl p-8 ${card}`}
          >

            <div className="flex flex-col items-center text-center">

              <img
                src={profileImage}
                alt=""
                className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400"
              />

              <h2 className="text-4xl font-black mt-6">
                Krish Bhatia
              </h2>

              <p className="text-cyan-300 mt-2">
                Data Analyst • BI Developer
              </p>

            </div>
          </div>

          {/* EDUCATION */}

          <div
            className={`rounded-3xl p-8 ${card}`}
          >

            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              Education
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="text-xl font-bold">
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
                <h3 className="text-xl font-bold">
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
                <h3 className="text-xl font-bold">
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
            className={`rounded-3xl p-10 ${card}`}
          >

            <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent leading-none">
              ANALYTICS
              <br />
              COMMAND CENTER
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-4xl">
              Professional dashboard for analytics,
              portfolio management, resume workflow,
              and technical profile tracking.
            </p>

          </section>

          {/* ABOUT */}

          <section
            className={`rounded-3xl p-8 ${card}`}
          >

            <h2 className="text-4xl font-black text-cyan-300 mb-6">
              About Me
            </h2>

            <p className="text-lg leading-relaxed text-gray-400">
              {bio}
            </p>

          </section>

          {/* SKILLS */}

          <section
            className={`rounded-3xl p-8 ${card}`}
          >

            <h2 className="text-4xl font-black text-cyan-300 mb-8">
              Skills
            </h2>

            <div className="flex flex-wrap gap-4">

              {skills.map(
                (skill, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 rounded-2xl bg-black/30 border border-cyan-500/20"
                  >
                    {skill}
                  </div>
                )
              )}

            </div>
          </section>

          {/* PROJECTS */}

          <section
            className={`rounded-3xl p-8 ${card}`}
          >

            <h2 className="text-4xl font-black text-purple-300 mb-8">
              Projects
            </h2>

            <div className="space-y-5">

              {projects.map(
                (
                  project,
                  index
                ) => (

                  <div
                    key={index}
                    className="rounded-3xl bg-black/30 border border-white/10 p-6"
                  >

                    <h3 className="text-2xl font-bold">
                      {
                        project.title
                      }
                    </h3>

                    <p className="text-gray-400 mt-3">
                      {
                        project.description
                      }
                    </p>

                    <div className="flex gap-4 mt-5">

                      {project.github && (
                        <button
                          onClick={() =>
                            openLink(
                              project.github
                            )
                          }
                          className={`${buttonStyle} bg-cyan-500 text-white`}
                        >
                          GitHub
                        </button>
                      )}

                      {project.pdfUrl && (
                        <button
                          onClick={() =>
                            openLink(
                              project.pdfUrl
                            )
                          }
                          className={`${buttonStyle} bg-green-500 text-white`}
                        >
                          PDF
                        </button>
                      )}

                      {isAdmin && (
                        <button
                          onClick={() =>
                            deleteProject(
                              index
                            )
                          }
                          className={`${buttonStyle} bg-red-500 text-white`}
                        >
                          Delete
                        </button>
                      )}

                    </div>
                  </div>
                )
              )}

            </div>
          </section>

          {/* CONTACT + SOCIAL */}

          <section className="grid grid-cols-1 2xl:grid-cols-2 gap-6">

            {/* CONTACT */}

            <div
              className={`rounded-3xl p-8 ${card}`}
            >

              <h2 className="text-4xl font-black text-pink-300 mb-8">
                Contact
              </h2>

              <div className="space-y-5">

                <div className="rounded-2xl bg-black/30 border border-white/10 p-5">
                  {contact.email}
                </div>

                <div className="rounded-2xl bg-black/30 border border-white/10 p-5">
                  {contact.phone}
                </div>

              </div>
            </div>

            {/* SOCIAL */}

            <div
              className={`rounded-3xl p-8 ${card}`}
            >

              <h2 className="text-4xl font-black text-cyan-300 mb-8">
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
                      className="flex items-center justify-between rounded-2xl bg-black/30 border border-white/10 p-5"
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
            className={`rounded-3xl p-8 ${card}`}
          >

            <h2 className="text-4xl font-black text-cyan-300 mb-6">
              Resume
            </h2>

            {resumeFile.url && (

              <div className="rounded-3xl bg-black/30 border border-white/10 p-6">

                <h3 className="text-xl font-bold">
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
                  Open Resume
                </button>

              </div>
            )}
          </section>
        </div>
      </div>

      {/* SETTINGS PANEL */}

      {isAdmin && (

        <div className="fixed bottom-8 right-8 w-[430px] max-h-[85vh] overflow-y-auto rounded-3xl bg-[#111827] border border-cyan-500/20 p-8 shadow-2xl z-50">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-black text-cyan-300">
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

            {/* PROFILE */}

            <div>

              <p className="mb-3 font-bold">
                Upload Profile Photo
              </p>

              <button
                onClick={() =>
                  profileInputRef.current.click()
                }
                className="w-full h-12 rounded-xl bg-cyan-500 text-white"
              >
                Upload
              </button>

              <input
                type="file"
                accept="image/*"
                ref={profileInputRef}
                onChange={
                  uploadProfilePhoto
                }
                className="hidden"
              />

            </div>

            {/* BIO */}

            <div>

              <p className="mb-3 font-bold">
                Update Bio
              </p>

              <textarea
                value={bio}
                onChange={(e) =>
                  setBio(
                    e.target.value
                  )
                }
                className="w-full min-h-[120px] rounded-2xl bg-black/30 border border-white/10 p-4"
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
                  setCgpa(
                    e.target.value
                  )
                }
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4"
              />

            </div>

            {/* CONTACT */}

            <div>

              <p className="mb-3 font-bold">
                Update Contact
              </p>

              <input
                value={
                  contact.email
                }
                onChange={(e) =>
                  setContact({
                    ...contact,
                    email:
                      e.target.value,
                  })
                }
                placeholder="Email"
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4 mb-3"
              />

              <input
                value={
                  contact.phone
                }
                onChange={(e) =>
                  setContact({
                    ...contact,
                    phone:
                      e.target.value,
                  })
                }
                placeholder="Phone"
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4"
              />

            </div>

            {/* SOCIALS */}

            <div>

              <p className="mb-3 font-bold">
                Update URLs
              </p>

              {Object.entries(
                socials
              ).map(
                ([
                  key,
                  value,
                ]) => (

                  <input
                    key={key}
                    value={value}
                    onChange={(e) =>
                      setSocials({
                        ...socials,
                        [key]:
                          e.target
                            .value,
                      })
                    }
                    className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4 mb-3"
                  />
                )
              )}

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
                  className="flex-1 h-12 rounded-xl bg-black/30 border border-white/10 px-4"
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

            {/* RESUME */}

            <div>

              <p className="mb-3 font-bold">
                Resume Public Link
              </p>

              <input
                placeholder="Resume Name"
                value={
                  resumeFile.name
                }
                onChange={(e) =>
                  setResumeFile({
                    ...resumeFile,
                    name:
                      e.target.value,
                  })
                }
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4 mb-3"
              />

              <input
                placeholder="Resume URL"
                value={
                  resumeFile.url
                }
                onChange={(e) =>
                  setResumeFile({
                    ...resumeFile,
                    url:
                      e.target.value,
                  })
                }
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4"
              />

            </div>

            {/* PROJECTS */}

            <div>

              <p className="mb-3 font-bold">
                Add Project
              </p>

              <input
                placeholder="Project Title"
                value={
                  newProject.title
                }
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    title:
                      e.target.value,
                  })
                }
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4 mb-3"
              />

              <textarea
                placeholder="Description"
                value={
                  newProject.description
                }
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    description:
                      e.target.value,
                  })
                }
                className="w-full min-h-[120px] rounded-2xl bg-black/30 border border-white/10 p-4 mb-3"
              />

              <input
                placeholder="GitHub URL"
                value={
                  newProject.github
                }
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    github:
                      e.target.value,
                  })
                }
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4 mb-3"
              />

              <input
                placeholder="PDF Name"
                value={
                  newProject.pdfName
                }
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    pdfName:
                      e.target.value,
                  })
                }
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4 mb-3"
              />

              <input
                placeholder="PDF Public URL"
                value={
                  newProject.pdfUrl
                }
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    pdfUrl:
                      e.target.value,
                  })
                }
                className="w-full h-12 rounded-xl bg-black/30 border border-white/10 px-4 mb-3"
              />

              <button
                onClick={
                  addProject
                }
                className="w-full h-12 rounded-xl bg-green-500 text-white"
              >
                Add Project
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}