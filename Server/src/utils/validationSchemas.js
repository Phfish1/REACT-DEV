const formValidationScheme = {
  firstName: {
    notEmpty: {
      errorMessage: "firstName: cannot be empty",
    },
    isString: {
      errorMessage: "firstName: submitForm only accepts Strings",
    },
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "firstName: Message must be between 2 and 50 chr",
    },
  },
  lastName: true,
  email: {
    notEmpty: {
      errorMessage: "email: cannot be empty",
    },
    isEmail: {
      errorMessage: "email: Invalid mail format",
    },
  },
  age: true,
  zipCode: true,
};

module.exports = formValidationScheme;
