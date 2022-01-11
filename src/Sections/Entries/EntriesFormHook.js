import { useState } from "react";
import LocationSearchInput from "../../Components/PlacesAutocomplete";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import PlainButton from "../../Components/Button/PlainButton";
import * as Yup from 'yup';

const Entries = ({ setIsError }) => {
  const defaultFields = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    contactLanguage: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  };

  const [ activeAccordion, setActiveAccordion] = useState(0);

  // form validation rules 
  const validationSchema = Yup.object().shape({
    referals: Yup.array().of(
        Yup.object().shape({
          firstName: Yup.string()
              .required('First name is required'),
          lastName: Yup.string()
              .required('Last name is required'),
          dateOfBirth: Yup.string()
              .required('DOB is required'),
          contactLanguage: Yup.string()
              .required('Contact language is required'),
          phone: Yup.string()
              .required('Phone is required'),
          email: Yup.string()
              .email('Email is Invalid')
              .required('Email is required'),
          address: Yup.string()
              .required('Address is required'),
        })
    )
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // functions to build form returned by useForm() and useFieldArray() hooks
  const { register, control, handleSubmit, formState,setValue  } = useForm(formOptions);
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({ name: 'referals', control });

  const onSubmit = (data) => {
    // display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
  }
  
  const addNewEntry = () => {
    if (fields.length < 5) {
      append(defaultFields);
      setActiveAccordion(fields.length);
    }
  };

  const removeEntry = (index) => {
    if (fields.length > 1) {
      if(window.confirm("Are you sure?")) {
        remove(index);
      }  
    }
  };

  const handleCollapse = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  }

  const handleAddressChange = (address, index) => {
    setValue(`referals.${index}.address`, address);  
  }

  return ( 
    <>
      <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, i) => (
            <div key={i} className={activeAccordion === i ? "list-group list-group-flush": "list-group list-group-flush collapsed"}>
                <div className="list-group-item pt-0 pb-0 mb-2"> 
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                      <h5>
                        <div className="badge badge-secondary">{i + 1}</div>
                        {fields[i].firstName || fields[i].lastName ? fields[i].firstName + " " + fields[i].lastName : "New refferal"}
                      </h5>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        onClick={() => removeEntry(i)}
                      >
                        <i className="fa fa-trash"/>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleCollapse(i)}
                      >
                        {activeAccordion === i ?<i className="fa fa-chevron-up"/> :<i className="fa fa-chevron-down"/> }
                        
                      </button>
                    </div>
                  </div>
                  <div className="row data-row">
                      <div className="form-group mb-3 col-6">
                          <input name={`referals[${i}]firstName`}
                          placeholder="First name" 
                          {...register(`referals.${i}.firstName`)} 
                          type="text" className={`form-control 
                          ${errors.referals?.[i]?.firstName ? 'is-invalid' : ''}`} />
                          <div className="invalid-feedback">{errors.referals?.[i]?.firstName?.message}</div>
                      </div>
                      <div className="form-group mb-3 col-6">
                          <input name={`referals[${i}]lastName`} 
                            placeholder="Last name" {...register(`referals.${i}.lastName`)} 
                            type="text" 
                            className={`form-control ${errors.referals?.[i]?.lastName 
                            ? 'is-invalid' : ''}`} />
                          <div className="invalid-feedback">{errors.referals?.[i]?.lastName?.message}</div>
                      </div>
                      <div className="form-group mb-3 col-6">
                          <input name={`referals[${i}]dateOfBirth`} 
                            placeholder="Date of birth" 
                            {...register(`referals.${i}.dateOfBirth`)} 
                            type="date" 
                            className={`form-control ${errors.referals?.[i]?.dateOfBirth ? 'is-invalid' : ''}`} />
                          <div className="invalid-feedback">{errors.referals?.[i]?.dateOfBirth?.message}</div>
                      </div>
                      <div className="form-group mb-3 col-6">
                          <input name={`referals[${i}]contactLanguage`} 
                            placeholder="Contact language" 
                            {...register(`referals.${i}.contactLanguage`)} 
                            type="text" 
                            className={`form-control ${errors.referals?.[i]?.contactLanguage ? 'is-invalid' : ''}`} />
                          <div className="invalid-feedback">{errors.referals?.[i]?.contactLanguage?.message}</div>
                      </div>
                      <div className="form-group mb-3 col-6">
                          <input name={`referals[${i}]phone`} 
                            placeholder="Phone" 
                            {...register(`referals.${i}.phone`)} 
                            type="text" 
                            className={`form-control ${errors.referals?.[i]?.phone ? 'is-invalid' : ''}`} />
                          <div className="invalid-feedback">{errors.referals?.[i]?.phone?.message}</div>
                      </div>
                      <div className="form-group mb-3 col-6">
                          <input name={`referals[${i}]email`} 
                            placeholder="Email"
                            {...register(`referals.${i}.email`)} 
                            type="text" 
                            className={`form-control ${errors.referals?.[i]?.email ? 'is-invalid' : ''}`} />
                          <div className="invalid-feedback">{errors.referals?.[i]?.email?.message}</div>
                      </div>
                      <div className="form-group mb-3 col-12">
                          <LocationSearchInput index={i} handleAddressChange={handleAddressChange} />
                          <div className="invalid-feedback">{errors.referals?.[i]?.address?.message}</div>
                      </div>
                      <div className="form-group mb-3 col-12">
                          <input name={`referals[${i}]notes`} 
                            placeholder="Notes / Reason" 
                            {...register(`referals.${i}.notes`)} 
                            type="text" 
                            className={`form-control ${errors.referals?.[i]?.notes ? 'is-invalid' : ''}`} />
                          <div className="invalid-feedback">{errors.referals?.[i]?.notes?.message}</div>
                      </div>
                  </div>
                </div>
            </div>
        ))}
        <div className="text-center">
          <PlainButton
            onClick={addNewEntry}
            text={"+Add another referral"}
          ></PlainButton>
          <button type="submit" className="btn-main">Save referrals</button>
        </div>
      </form>
    </>
  );
};

export default Entries;
