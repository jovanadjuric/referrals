import { useState, useContext } from "react";
import Input from "../../Components/Input";

const Entry = ({ entry }) => {
  // const [entry, setEntry] = useState({
  //   firstName: "",
  //   lastName: "",
  //   dateOfBirth: "",
  //   contactLanguage: "",
  //   phone: "",
  //   email: "",
  //   address: "",
  //   notes: "",
  // });

  return (
    <div>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
    </div>
  );
};

export default Entry;
