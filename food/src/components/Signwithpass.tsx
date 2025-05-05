import { useState } from "react";
import { Passwordpage } from "./Password";
import { Signuppage } from "./Signup";

export const signwithpass = () => {
  const [together, setTogether] = useState(0);
  const letsgo = () => {
    setTogether(together + 1);
  };

  const array = [<Signuppage onclick={letsgo} />, <Passwordpage />][together];
  return <div>{array}</div>;
};
