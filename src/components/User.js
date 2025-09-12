import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // API Call
    console.log("useEffect called");
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click to Increase
      </button>
      <h2>Anil Simha: {name}</h2>
      <h3>Location: Kakinada</h3>
      <h4>Contact: @ursanilsimha</h4>
    </div>
  );
};

export default User;
