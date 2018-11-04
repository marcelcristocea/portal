import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';

import styles from './styles';
import {fetchAlbums, sortAlbums} from '../../actions';
import CircularProgress from '../../components/CircularProgress';
import ListingTable from '../../components/ListingTable';

function mapStateToProps(state) {
  return {
    albums: state.albums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators({
      fetchAlbums,
      sortAlbums
    }, dispatch)
  };
}

class Login extends Component {
  componentDidMount() {
    this.props.actionCreators.fetchAlbums();
  }

  render() {
    const {classes, albums, actionCreators} = this.props;

    return(
      <Fragment>
        <Grid container spacing={24} direction="row" alignItems="center" justify="flex-start">
          {albums.fetching
            ? <Grid item xs={12}><CircularProgress/></Grid>
            :
            <Fragment>
              <Grid item xs={12} className={classes.content}>
                <div className={classes.appContent}>
                  <h1 className={classes.loginTitle}>Albums</h1>
                  {albums.errors.status &&
                  <div className={classes.errorText}>Oops, there was an error loading the data</div>
                  }
                  {albums.albums && albums.fetched &&
                  <ListingTable
                    data={albums.albums}
                    sortOptions={albums.sort}
                    handleOnSort={actionCreators.sortAlbums}
                  />
                  }
                </div>
              </Grid>
            </Fragment>
          }
        </Grid>
      </Fragment>
    )
  }
}

Login.propTypes = {
  actionCreators: PropTypes.object,
  classes: PropTypes.object,
  albums: PropTypes.object,
  sort: PropTypes.object,
  fetching: PropTypes.bool
};

Login = withStyles(styles)(Login);

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;

