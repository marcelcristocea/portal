import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function mapStateToProps(state) {
  return {
    loggedIn: state.app.loggedUser
  };
}

class AuthLayout extends Component {
  shouldComponentUpdate(nextProps) {
    if (!this.props.loggedIn) {
      return true;
    }

    if (nextProps.loggedUser) {
      return this.props.history.push('/')
    }

    return false;
  }

  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

AuthLayout = connect(mapStateToProps, {})(AuthLayout);

export default withRouter(AuthLayout);
