import { toast } from "react-toastify";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";

const PatientValidation = (values) => {
  let errors = {};

  if (values.email === "") {
    //npm install validator (used library)
    errors.email = "Email is required";
    console.log(errors.email);
    // toast.error("Email is required")
  } else if (!validator.isEmail(values.email)) {
    errors.email = "please enter valid email";
  }
  if (values.password === "") {
    errors.password = "Password is required";
    console.log(errors.password);
    // toast.error("Password is required")
  } else if (
    !validator.isStrongPassword(values.password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    errors.password = "Is not Strong Password";
  }

  if (values.cpassword.length === 0) {
    errors.cpassword = "Confirm Password is required";
    console.log(errors.cpassword);
    //toast.error("Confirm Password is required")
  }
  if (
    values.password &&
    values.cpassword &&
    values.password !== values.cpassword
  ) {
    errors.cpassword = "Password does not match";
    console.log(errors.cpassword);
    //toast.error("Password does not match");
  }

  if (values.firstName.length === 0) {
    errors.firstName = "First Name is required";
    console.log(errors.firstName);
    // toast.error("First Name is required")
  } else if (values.firstName.search(/^[a-zA-Z ]{2,40}$/)) {
    errors.firstName = "Enter valid name";
  }

  if (values.lastName.length === 0) {
    errors.lastName = "Last Name is required";
    console.log(errors.lastName);
    // toast.error("Last Name is required")
  } else if (values.lastName.search(/^[a-zA-Z ]{2,40}$/)) {
    errors.lasttName = "Enter valid name";
  }

  if (values.contact.length === 0) {
    errors.contact = "Phone number is required";
    console.log(errors.contact);
    // toast.error("City is required")
  } else if (values.contact.search(/^\d{10}$/)) {
    errors.contact = "please enter valid phone number";
  }

  if (values.address.length === 0) {
    errors.address = "address is required";
    console.log(errors.address);
    toast.error("address is required");
  } else {
    errors = {};
  }

  return errors;
};

export default PatientValidation;
