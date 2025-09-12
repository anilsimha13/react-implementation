import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>I am Learning</h2>
      <User name={"Anil Simha"} />
      <UserClass twitter={"@ursanilsimha"} />
    </div>
  );
};

export default About;
