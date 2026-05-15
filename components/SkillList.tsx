"use client";

// ─── Skill Categories ──────────────────────────────────────────────────────────
const SKILL_CATEGORIES = [
  {
    label: "LANGUAGE",
    skills: [
      { name: "JAVA", cls: "devicon-java-plain colored" },
      { name: "C++", cls: "devicon-cplusplus-plain colored" },
      { name: "Python", cls: "devicon-python-plain colored" },
    ],
  },


  {
    label: "FRONTEND",
    skills: [

      { name: "Javascript", cls: "devicon-javascript-plain colored" },
      { name: "React", cls: "devicon-react-original colored" },
      { name: "Tailwind CSS", cls: "devicon-tailwindcss-plain colored" },
      { name: "HTML", cls: "devicon-html5-plain colored" },
      { name: "CSS", cls: "devicon-css3-plain colored" },
      { name: "Framer Motion", cls: "devicon-framermotion-original colored" },
    ],
  },
  {
    label: "BACKEND",
    skills: [
      { name: "Node.js", cls: "devicon-nodejs-plain colored" },
      { name: "Next.js", cls: "devicon-nextjs-plain inverted-icon" },
      { name: "Express.js", cls: "devicon-express-original inverted-icon" },
      { name: "Nodemon", cls: "devicon-nodemon-plain colored" },
      { name: "Bootstrap", cls: "devicon-bootstrap-plain colored" },
    ],
  },
  {
    label: "DATABASE",
    skills: [
      { name: "Mongoose", cls: "devicon-mongoose-original colored" },
      { name: "MongoDB", cls: "devicon-mongodb-plain colored" },
    ],
  },
  {
    label: "TOOLS",
    skills: [
      { name: "Git", cls: "devicon-git-plain colored" },
      { name: "GitHub", cls: "devicon-github-original inverted-icon" },
      { name: "VS Code", cls: "devicon-vscode-plain colored" },
      { name: "Figma", cls: "devicon-figma-plain colored" },
      { name: "Postman", cls: "devicon-postman-plain colored" },
      { name: "Android Studio", cls: "devicon-androidstudio-plain colored" },
    ],
  },
];

export default function SkillList() {
  return (
    <div className="skill-list-root">
      {/* Decorative ambient glows */}
      <div className="sl-glow sl-glow-amber" />
      <div className="sl-glow sl-glow-teal" />

      <div className="skill-list-inner">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.label} className="skill-category">
            <h3 className="skill-category-label">{cat.label}</h3>
            <div className="skill-items-grid">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <i className={`${skill.cls} skill-item-icon`} />
                  <span className="skill-item-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
