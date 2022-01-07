import { createContext } from "react";
import Currentdate from "./Currentdate";

const UserContext = createContext();

const Handler = () => {
  return (
    <div>
      <UserContext.Provider value={{ name: "Ankit" }}>
        <Currentdate />
      </UserContext.Provider>
    </div>
  );
};
export { UserContext };
export default Handler;
