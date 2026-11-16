const projects = [
    {
        number: "001",
        type: "APPLICATION DEVELOPMENT",
        title: "SirApp",
        description: "SirApp is a platform designed to encourage meaningful interactions between youths and the elderly through accessible community features. I contributed to developing the community-related functions, including creating and viewing communities, and handling user interactions to support a smooth user experience.",
        technologies: ["PYTHON", "FLASK", "BOOTSTRAP", "SQLALCHEMY"]
    },
    {
        number: "002",
        type: "SUSTAINABILITY CONCEPT",
        title: "HydroLink Corridor",
        description: "HydroLink Corridor is a sustainability concept developed for the CDL-GCNS Young SDG Leaders Award 2026 as part of a four-member team. It proposes sheltered pedestrian corridors that integrate atmospheric water harvesting, greenery and solar-powered fans to improve urban comfort and environmental efficiency.",
        note: "CONCEPTUAL PROPOSAL — NOT PHYSICALLY BUILT"
    },
    {
        number: "003",
        type: "HACKATHON CONCEPT",
        title: "Defend-the-box",
        description: "Defend-the-box is a hackathon concept that gamifies real-world scam scenarios. Players manage a virtual bank account and make decisions to protect their savings from different scams. AI-powered family member consultations provide hints and generate personalised scam scenarios based on different player backgrounds.",
        technologies: ["CYBER AWARENESS", "AI CONCEPT", "IDEATION"]
    }
];

function ProjectCard({ project }) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <article className="proj-description">

            <div className="project-top">
                <span>PROJECT / {project.number}</span>
                <span className="project-type">{project.type}</span>
            </div>

            <h3>{project.title}</h3>

            <button
                className="project-toggle"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
            >
                {expanded ? "SHOW LESS −" : "EXPLORE PROJECT +"}
            </button>

            {expanded && (
                <div className="project-details">
                    <p>{project.description}</p>

                    {project.technologies?.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}

                    {project.note && <p>{project.note}</p>}
                </div>
            )}

        </article>
    );
}

function ProjectList() {
    return (
        <div className="proj-container">
            {projects.map((project) => (
                <ProjectCard
                    key={project.number}
                    project={project}
                />
            ))}
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("projects-root")
);

root.render(<ProjectList />);