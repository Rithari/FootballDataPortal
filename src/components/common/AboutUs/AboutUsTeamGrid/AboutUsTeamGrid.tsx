import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const AboutUsTeamGrid = (): JSX.Element => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      description: "John is a visionary leader with a passion for football.",
      image: "placeholder-jobs.png",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      description:
        "Jane is a tech expert who ensures our platform runs smoothly.",
      image: "placeholder-jobs.png",
    },
    {
      name: "Mark Johnson",
      role: "Head of Design",
      description: "Mark is a creative genius who brings our ideas to life.",
      image: "placeholder-jobs.png",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Manager",
      description: "Sarah is a strategic thinker who drives our brand forward.",
      image: "placeholder-jobs.png",
    },
    {
      name: "Michael Brown",
      role: "Data Analyst",
      description:
        "Michael is a data expert who uncovers insights from football statistics.",
      image: "placeholder-jobs.png",
    },
    {
      name: "We're hiring!",
      role: "Join Us",
      description:
        "Be part of our team and make a difference in football analytics.",
      image: "placeholder-jobs.png",
    },
  ];

  return (
    <div className="about-us-team-grid">
      <div className="section-title">
        <div className="subheading">Passionate</div>
        <div className="content">
          <div className="heading">Meet Our Team</div>
          <p className="text-wrapper">
            We are a dedicated group of professionals.
          </p>
        </div>
      </div>
      <div className="content-wrapper">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div style={{ marginRight: "auto" }}>
              <img
                className="placeholder-image"
                alt={`Profile of ${member.name} - ${member.role}`}
                src={`/media/${member.image}`}
              />
            </div>
            <div className="content-2">
              <div className="title">
                <div className="name">{member.name}</div>
                <div className="text-wrapper">{member.role}</div>
              </div>
              <p className="text">{member.description}</p>
            </div>
            <div style={{ display: "flex", marginRight: "auto" }}>
              <a
                href="https://www.linkedin.com/company/footballxdata"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ marginRight: "0.5em" }}
                />
              </a>
              <a
                href="https://twitter.com/footballxdata"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
