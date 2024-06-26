import validator from "validator";
import "react-toastify/dist/ReactToastify.css";

const adminValidation = (values) => {
  let errors = {};

  if (values.password === "") {
    errors.password = "Password is required";
    console.log(errors.password);
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

 
  if (values.adminName.length === 0) {
    errors.adminName = "Admin Name is required";
    console.log(errors.adminName);
  } else if (values.adminName.search(/^[a-zA-Z ]{2,40}$/)) {
    errors.adminName = "Enter valid name";
  }
  else {
    errors = {};
  }

  return errors;
};

export default adminValidation;