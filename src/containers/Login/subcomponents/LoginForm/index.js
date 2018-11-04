import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

import styles from './styles';
import validations from './validations';
import TextInputField from '../../../../components/TextInputField';

function mapStateToProps(state) {
  return {
    loginForm: state.form.loginForm
  };
}

class LoginForm extends Component {
  render() {
    const {pristine, submitting, invalid, classes, handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit}>
        <label className={classNames(classes.label)}>
          <span className={classNames(classes.labelContent)}>Email</span>
          <div className={classNames(classes.textInputWrapper)}>
            <Field
              component={TextInputField}
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
        </label>

        <label className={classNames(classes.label)}>
          <span className={classNames(classes.labelContent)}>Password</span>
          <div className={classNames(classes.textInputWrapper)}>
            <Field
              component={TextInputField}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </label>

        <div className={classNames(classes.actionWrapper)}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={pristine || submitting || invalid}
          >
            Login
          </Button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  actionCreators: PropTypes.object,
  classes: PropTypes.object,
  handleSubmit: PropTypes.func
};

LoginForm = reduxForm({
  form: 'loginForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  validate: validations
})(LoginForm);

LoginForm = withStyles(styles)(LoginForm);

LoginForm = connect(
  mapStateToProps,
  {},
)(LoginForm);

export default LoginForm;
