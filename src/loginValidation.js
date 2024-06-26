import { toast } from "react-toastify";

const LoginValidation = (values) => {
  let errors = {};
  if (values.email.length === 0) {
    errors.email = "Email is required";
    console.log(errors.email);
    toast.error("Email is required");
  } else if (values.password.length === 0) {
    errors.password = "Password is required";
    console.log(errors.password);
    toast.error("Password is required");
  }
  return errors;
};

export default LoginValidation;
