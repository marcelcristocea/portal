import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

import styles from './styles';

function mapStateToProps(state) {
  return {
    user: state.app.user
  };
}


class Home extends Component {
  render() {
    const {classes, user} = this.props;

    return(
      <Fragment>
        <Grid container spacing={24} direction="row" alignItems="center" justify="flex-start">
          <Grid item xs={12} className={classes.content}>
            <div className={classes.appContent}>
              <h1 className={classes.title}>Welcome {user.name}!</h1>
              {user.description}
            </div>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object,
  user: PropTypes.object
};

Home = withStyles(styles)(Home);

Home = connect(mapStateToProps, null)(Home);

export default Home;

