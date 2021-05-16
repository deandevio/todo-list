// Handle errors
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  // Check if CastError
  if (err.name === "CastError") {
    return (error = `Invalid ${err.path}: ${err.value}`);
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
