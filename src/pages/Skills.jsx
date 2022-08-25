import SkillItemGroup from "../components/SkillItemGroup";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skillsContent">
        <h2 className="heading">My Skills</h2>
        <div className="skillsWrapper">
          <div className="skillsDesc">
            <h2 className="skillTitle">I am expert in</h2>
            <p className="skillDesc">
              I have worked in the following technologies...
            </p>
            <hr />
            <ul className="expertList">
              <li>HTML</li>
              <li>CSS </li>
              <li> Javascript</li>
              <li> Bootstrap 5</li>
              <li> Material UI</li>
              <li>React JS</li>
              <li> Node JS</li>
              <li> MongoDB</li>
            </ul>
          </div>
          <div className="skillsGraph">
            <SkillItemGroup
              label="HTML"
              progressBar="progress html"
              progress="80%"
              progressSection="htmlSection spann"
            />
            <SkillItemGroup
              label="CSS"
              progressBar="progress css"
              progress="75%"
              progressSection="cssSection spann"
            />
            <SkillItemGroup
              label="JavaScript"
              progressBar="progress js"
              progress="70%"
              progressSection="jsSection spann"
            />
            <SkillItemGroup
              label="React"
              progressBar="progress react"
              progress="65%"
              progressSection="reactSection spann"
            />
            <SkillItemGroup
              label="NodeJS"
              progressBar="progress nodeJs"
              progress="55%"
              progressSection="nodeJsSection spann"
            />
            <SkillItemGroup
              label="MongoDB"
              progressBar="progress mongoDb"
              progress="60%"
              progressSection="mongoDbSection spann"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
