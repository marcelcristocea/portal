export default (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email address must not be empty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address format';
  }

  if (!values.password) {
    errors.password = 'Password must not be empty';
  }

  return errors;
};
