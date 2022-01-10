import { useState, useEffect } from "react";
import Input from "../../Components/Input";
import { validateEmail, validatePhone } from "../../utils/validator";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const Entry = ({
  entry,
  index,
  onChangeHandler,
  onDeleteHandler,
  setIsError,
}) => {
  const [data, setData] = useState({ ...entry });
  const returnData = (key, returnValue) => {
    setData((prevData) => ({
      ...prevData,
      [key]: returnValue,
    }));
  };

  const handleOnDelete = () => {
    onDeleteHandler(index);
  };

  const handleEmailField = (evt) => {
    setTimeout(() => {
      if (!validateEmail(evt.target.value)) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }, 500);
    returnData("email", evt.target.value);
  };

  const handlePhoneField = (evt) => {
    setTimeout(() => {
      if (!validatePhone(evt.target.value)) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }, 500);
    returnData("phone", evt.target.value);
  };

  useEffect(() => {
    onChangeHandler(index, data);
  }, [index, data]);

  useEffect(() => {
    setData({ ...entry });
  }, [entry]);

  useEffect(() => {
    geocodeByAddress(entry.address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log(latLng);
      });
  }, [entry.address]);

  return (
    <div className="row single-entry">
      <div className="row">
        <div className="col-10">
          <h5>
            <div className="badge badge-secondary">{index + 1}</div>
            {data.firstName || "New referral"}
          </h5>
        </div>
        {index !== 0 && (
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleOnDelete}
            >
              X
            </button>
          </div>
        )}
      </div>
      <div className="col-6">
        <div className="input-group mb-2">
          <Input
            type="text"
            required
            placeholder="First Name"
            value={data.firstName}
            onChange={(evt) => returnData("firstName", evt.target.value)}
          />
        </div>
        <div className="input-group mb-2">
          <Input
            type="text"
            required
            placeholder="Date of birth"
            value={data.dateOfBirth}
            onChange={(evt) => returnData("dateOfBirth", evt.target.value)}
          />
        </div>
        <div className="input-group mb-2">
          <Input
            type="text"
            required
            placeholder="Phone"
            value={data.phone}
            onChange={handlePhoneField}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group mb-2">
          <Input
            type="text"
            required
            placeholder="Last Name"
            value={data.lastName}
            onChange={(evt) => returnData("lastName", evt.target.value)}
          />
        </div>
        <div className="input-group mb-2">
          <Input
            type="text"
            required
            placeholder="Contact Language"
            value={data.contactLanguage}
            onChange={(evt) => returnData("contactLanguage", evt.target.value)}
          />
        </div>
        <div className="input-group mb-2">
          <Input
            type="email"
            required
            placeholder="Email"
            value={data.email}
            onChange={handleEmailField}
          />
        </div>
      </div>
      <div className="col-12 mb-4">
        <div className="input-group mb-2">
          <Input
            type="text"
            required
            placeholder="Address"
            value={data.address}
            onChange={(evt) => returnData("address", evt.target.value)}
          />
        </div>
        <div className="input-group mb-2">
          <Input
            type="text"
            placeholder="Notes / Reason"
            value={data.notes}
            onChange={(evt) => returnData("notes", evt.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Entry;
