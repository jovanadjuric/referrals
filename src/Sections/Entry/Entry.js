import { useState, useContext, useEffect } from "react";
import Input from "../../Components/Input";
import 'bootstrap/dist/css/bootstrap.min.css';

const Entry = ({ entry, index, onChangeHandler, onDeleteHandler }) => {
  const [data, setData] = useState({...entry})

  const returnData = (key, returnValue) => {
    setData((prevData) => ({
      ...prevData,
      [key]: returnValue,
    }))
  }

  useEffect(() => {
    onChangeHandler(index, data);
  }, [index, data]);

  return (
    <div className="row">
      <div className="col-10">
        <h3>{index + 1} {data.firstName ?? "New referal"}</h3>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger" onClick={onDeleteHandler}>X</button>
      </div>
      <div className="col-6">
        <div className="input-group mb-2">
          <Input type="text" 
            placeholder="First Name" 
            value={data.firstName} 
            onChange={(evt) => returnData("firstName", evt.target.value )}/>
        </div>
        <div className="input-group mb-2">
          <Input type="text" placeholder="Date of birth" value={data.dateOfBirth} 
            onChange={(evt) => returnData("dateOfBirth", evt.target.value )}/>
        </div>
        <div className="input-group mb-2">
          <Input type="text" placeholder="Phone" value={data.phone} 
            onChange={(evt) => returnData("phone", evt.target.value )}/>
        </div>
      </div>
      <div className="col-6">
        <div className="input-group mb-2">
          <Input type="text" placeholder="Last Name" value={data.lastName} 
            onChange={(evt) => returnData("lastName", evt.target.value )}/>
        </div>
        <div className="input-group mb-2">
          <Input type="text" placeholder="Contact Language" value={data.contactLanguage}
            onChange={(evt) => returnData("contactLanguage", evt.target.value )}/>
        </div>
        <div className="input-group mb-2">
          <Input type="email" placeholder="Email" value={data.email} 
            onChange={(evt) => returnData("email", evt.target.value )}/>
        </div>
      </div>
      <div className="col-12 mb-4">
        <div className="input-group mb-2">
          <Input type="text" placeholder="Address" value={data.address}
            onChange={(evt) => returnData("address", evt.target.value )}/>
        </div>
        <div className="input-group mb-2">
          <Input type="text" placeholder="Notes / Reason" value={data.notes}
            onChange={(evt) => returnData("notes", evt.target.value )}/>
        </div>
      </div>
    </div>
  );
};

export default Entry;
