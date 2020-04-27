export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "E-mail can't be blank"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "E-mail is invalid or already taken"
      }
    },
    password: (value, isAuth) => {
      if (!value) {
        errors.password =
          "Passwords must contain: a minimum of 1 lower case letter [a-z],1 upper case letter [A-Z] ,1 numeric character [0-9]."
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)
      ) {
        errors.password = isAuth
          ? "Incorrect password"
          : "Passwords must contain: a minimum of 1 lower case letter [a-z],1 upper case letter [A-Z] ,1 numeric character [0-9]."
      }
    },
  }

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]))
}
