import { useContext } from "react";
import { UserContext } from "./Handler";

function Currentdate() {
  const val = useContext(UserContext);
  const data = val && val;
  console.log(data);
  return <div>{data && data.name}</div>;
}

export default Currentdate;
