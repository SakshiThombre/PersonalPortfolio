import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBookOpen,
  FaSchool,
  FaFileAlt,
} from "react-icons/fa";


function Education() {
  return (
    <section className="education-section" id="education">

      <div className="heading">
        <FaGraduationCap className="heading-icon" />
        <h1 id="head3">My <span>Education</span></h1>
      </div>

      <div className="education-container">

        {/* Timeline */}
        <div className="timeline"></div>

        {/* ================= MSc ================= */}

        <div className="education-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="education-card">

            <div className="left-content">

              <h3>Master of Computer Science (M.Sc)</h3>

              <p>
                <FaUniversity />
                Tulasi College of Computer Science and Information Technology
              </p>

              <p>
                <FaMapMarkerAlt />
                Beed, Maharashtra
              </p>

            </div>

            <div className="right-content">

              <p className="year">
                <FaCalendarAlt />
                2022 - 2027
              </p>

              <span className="badge pursuing">
                Pursuing
              </span>

            </div>

          </div>

        </div>

        {/* ================= BCA ================= */}

        <div className="education-item">

          <div className="timeline-icon blue">
            <FaBookOpen />
          </div>

          <div className="education-card">

            <div className="left-content">

              <h3>Bachelor of Computer Application (BCA)</h3>

              <p>
                <FaUniversity />
                Balbhim Arts, Science and Commerce College
              </p>

              <p>
                <FaMapMarkerAlt />
                Beed, Maharashtra
              </p>

            </div>

            <div className="right-content">

              <p className="year">
                <FaCalendarAlt />
                2022 - 2025
              </p>

              <span className="badge cgpa">
                CGPA : 8.4
              </span>

              <FaFileAlt className="side-icon" />

            </div>

          </div>

        </div>

        {/* ================= HSC ================= */}

        <div className="education-item">

          <div className="timeline-icon cyan">
            <FaSchool />
          </div>

          <div className="education-card">

            <div className="left-content">

              <h3>Higher Secondary Certificate (HSC)</h3>

              <p>
                <FaUniversity />
                Jaybhawani Arts and Science College
              </p>

              <p>
                <FaMapMarkerAlt />
                Patoda, Maharashtra
              </p>

            </div>

            <div className="right-content">

              <p className="year">
                <FaCalendarAlt />
                2021 - 2022
              </p>

              <span className="badge percentage">
                81.30%
              </span>

              <FaFileAlt className="side-icon" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;