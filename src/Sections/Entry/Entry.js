import { useState, useContext } from "react";
import Input from "../../Components/Input";
import 'bootstrap/dist/css/bootstrap.min.css';

const Entry = ({ entry, index, onChangeHandler, onDeleteHandler }) => {
  return (
    <div className="row">
      <div className="col-10">
        <h3>{index + 1} {entry.firstName ?? "New referal"}</h3>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger" onClick={onDeleteHandler}>X</button>
      </div>
      <div className="col-6">
        <div className="input-group mb-2">
          <Input type="text" 
            placeholder="First Name" 
            value={entry.firstName} />
        </div>
        <div className="input-group mb-2">
          <Input type="text" placeholder="Date of birth" value={entry.dateOfBirth} />
        </div>
        <div className="input-group mb-2">
          <Input type="text" placeholder="Phone" value={entry.phone} />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group mb-2">
          <Input type="text" placeholder="Last Name" value={entry.lastName}  />
        </div>
        <div className="input-group mb-2">
          <Input type="text" placeholder="Contact Language" value={entry.contactLanguage}  />
        </div>
        <div className="input-group mb-2">
          <Input type="email" placeholder="Email" value={entry.email}  />
        </div>
      </div>
      <div className="col-12 mb-4">
        <div className="input-group mb-2">
          <Input type="text" placeholder="Address" value={entry.address} />
        </div>
        <div className="input-group mb-2">
          <Input type="text" placeholder="Notes / Reason" value={entry.notes} />
        </div>
      </div>
    </div>
  );
};

export default Entry;
