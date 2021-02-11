import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import Toggle from "./Toggle";
const CallToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const [toggled, setToggled] = React.useState(true);
  const handleClick = () => {
    setToggled((s) => !s);
    toggleTheme((s) => !s);
  };
  return (
    <div>
      <Toggle toggled={toggled} onClick={handleClick} />
    </div>
  );
};

export default CallToggle;
