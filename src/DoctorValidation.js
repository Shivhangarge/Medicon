import { toast } from "react-toastify";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";

const DoctorValidation = (values) => {
  let errors = {};

  if (values.email === "") {
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

  // if (values.email.length === 0 || !validator.isEmail(values.email)) {
  // errors.email = "Email is required";
  // console.log(errors.email);
  // toast.error("Email is required")
  // }

  // if (values.password.length === 0 ) {
  // errors.password = "Password is required";
  // console.log(errors.password);
  // toast.error("Password is required")
  // }

  // if (values.cpassword.length === 0) {
  //     errors.cpassword = "Confirm Password is required";
  //     console.log(errors.cpassword);
  //     toast.error("Confirm Password is required")
  // }

  // if (values.password && values.cpassword && values.password !== values.cpassword) {
  //     errors.cpassword = "Password not match";
  //     console.log(errors.cpassword);
  //     toast.error("Password does not match");
  // }

  if (values.doctorName.length === 0) {
    errors.doctorName = "Full Name is required";
    console.log(errors.doctorName);
    toast.error("Full Name is required");
  } else if (values.doctorName.search(/^[a-zA-Z ]{2,40}$/)) {
    errors.doctorName = "Enter valid name";
  }

  if (values.doctorContact.length === 0) {
    errors.doctorContact = "Phone number is required";
    console.log(errors.doctorContact);
    // toast.error("City is required")
  } else if (values.doctorContact.search(/^\d{10}$/)) {
    errors.doctorContact = "please enter valid phone number";
  }

  if (values.doctorDegree.length === 0) {
    errors.doctorDegree = "Degree is required";
    console.log(errors.doctorDegree);
    toast.error("Degree is required");
  } else {
    errors = {};
  }

  return errors;
};

export default DoctorValidation;
