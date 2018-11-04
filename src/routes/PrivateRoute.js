import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

class PrivateRoute extends React.Component {
  checkIsAuthenticated() {
    const {app} = this.props;

    return app.loggedUser;
  }

  render() {
    const {render: Component, location} = this.props;

    return (
      <Route
        {...this.props}
        render={(props) =>
          this.checkIsAuthenticated() ? (
            <Component {...props} {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: {from: location}
              }}
            />
          )
        }
      />
    );
  }
}

PrivateRoute.propTypes = {
  app: PropTypes.object
};

export default withRouter(connect(mapStateToProps, {})(PrivateRoute));