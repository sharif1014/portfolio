import "./skillItemGroup.css";

const SkillItemGroup = (props) => {
  return (
    <div className="skillItem">
      <label>{props.label}</label>
      <div className={props.progressBar}>
        <span className={props.progressSection}>{props.progress}</span>
      </div>
    </div>
  );
};

export default SkillItemGroup;
