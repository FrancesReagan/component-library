const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];
 
function SkillListWithKeys() {
  // Use the skill name itself as the key (assuming names are unique in this list)
  const listItems = skills.map((skill) => <li key={skill}>{skill}</li>);
 
  return (
    <div>
      <h2>My Skills (with Keys)</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
 
export default SkillListWithKeys;