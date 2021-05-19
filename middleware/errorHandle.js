// Handle errors
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // Incorrect email
  if (err.message === "Incorrect Email!") {
    errors.email = "This email is not registered";
  }

  //Incorrect password\
  if (err.message === "Incorrect password!") {
    errors.password = "Wrong password, please try again";
  }

  // Check if CastError
  if (err.name === "CastError") {
    return (error = `Invalid ${err.path}: ${err.value}`);
  }

  // Duplicate error code
  if (err.code === 11000) {
    return (error = `This email is already registered`);
  }

  // Validation error
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports = handleErrors;
