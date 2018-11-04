import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';


import styles from './styles';
import LoginForm from './subcomponents/LoginForm';
import {loginUser} from '../../actions';

function mapStateToProps(state) {
  return {
    loginForm: state.form.loginForm,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators({
      loginUser
    }, dispatch)
  };
}

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.actionCreators.loginUser(this.props.loginForm.values);
  };

  render() {
    const {classes} = this.props;

    return(
      <Fragment>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <h1 className={classes.loginTitle}>Login</h1>
            <LoginForm handleSubmit={this.handleSubmit} />
          </div>
        </Grid>
      </Fragment>
    )
  }
}

Login.propTypes = {
  actionCreators: PropTypes.object,
  classes: PropTypes.object,
  app: PropTypes.object
};

Login = withStyles(styles)(Login);

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;

