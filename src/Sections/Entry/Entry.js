import { useState, useEffect } from "react";
import Input from "../../Components/Input";
import LocationSearchInput from "../../Components/PlacesAutocomplete";
import ReactDatePicker from "react-datepicker";

const Entry = ({
  entry,
  index,
  onChangeHandler,
  onDeleteHandler,
  onCollapseHandler,
  setIsError,
}) => {
  const [data, setData] = useState({ ...entry });
  const [birthDate, setBirthDate] = useState(new Date());

  const returnData = (key, returnValue) => {
    setData((prevData) => ({
      ...prevData,
      [key]: returnValue,
    }));
  };

  const handleOnDelete = () => {
    onDeleteHandler(index);
  };

  const handleCollapse = () => {
    onCollapseHandler(index);
  };

  const handleBirthDate = (date) => {
    setBirthDate(date);
    setData((prevData) => ({
      ...prevData,
      dateOfBrith: date,
    }));
  };

  const handleEmailField = (evt) => {
    returnData("email", evt.target.value);
  };

  const handlePhoneField = (evt) => {
    returnData("phone", evt.target.value);
  };

  const handleAddressChange = (address) => {
    returnData("address", address);
  };

  useEffect(() => {
    onChangeHandler(index, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, data]);

  useEffect(() => {
    setData({ ...entry });
  }, [entry]);

  return (
    <div className="single-entry row">
      <div className="d-flex justify-content-between align-items-center">
        <div className="">
          <h5>
            <div className="badge badge-secondary">{index + 1}</div>
            {data.firstName || "New referral"}
          </h5>
        </div>
        <div className="">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleOnDelete}
          >
            <i className="fa fa-trash" />
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCollapse}
          >
            <i className="fa fa-chevron-down" />
          </button>
        </div>
      </div>
      <div className="row data-row">
        <div className="col-12 col-md-6 mb-2">
          <Input
            type="text"
            required
            placeholder="First Name"
            value={data.firstName}
            onChange={(evt) => returnData("firstName", evt.target.value)}
          />
        </div>
        <div className="col-12 col-md-6 mb-2">
          <Input
            type="text"
            required
            placeholder="Last Name"
            value={data.lastName}
            onChange={(evt) => returnData("lastName", evt.target.value)}
          />
        </div>
        <div className="col-12 col-md-6 mb-2">
          <ReactDatePicker
            selected={birthDate}
            onChange={handleBirthDate}
            excludeTimes
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-6 mb-2">
          <Input
            type="text"
            required
            placeholder="Contact Language"
            value={data.contactLanguage}
            onChange={(evt) => returnData("contactLanguage", evt.target.value)}
          />
        </div>
        <div className="col-12 col-md-6 mb-2">
          <Input
            type="text"
            required
            placeholder="Phone"
            value={data.phone}
            onChange={handlePhoneField}
          />
        </div>
        <div className="col-12 col-md-6 mb-2">
          <Input
            type="email"
            required
            placeholder="Email"
            value={data.email}
            onChange={handleEmailField}
          />
        </div>
        <div className="col-12 mb-2">
          <LocationSearchInput handleAddressChange={handleAddressChange} />
        </div>
        <div className="col-12 mb-2">
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
