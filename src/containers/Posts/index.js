import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';

import styles from './styles';
import {fetchPosts, sortPosts} from '../../actions';
import CircularProgress from '../../components/CircularProgress';
import ListingTable from '../../components/ListingTable';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators({
      fetchPosts,
      sortPosts
    }, dispatch)
  };
}

class Posts extends Component {
  componentDidMount() {
    this.props.actionCreators.fetchPosts();
  }

  render() {
    const {classes, posts, actionCreators} = this.props;

    return(
      <Fragment>
        <Grid container spacing={24} direction="row" alignItems="center" justify="flex-start">
          {posts.fetching
            ? <Grid item xs={12}><CircularProgress/></Grid>
            :
            <Fragment>
              <Grid item xs={12} className={classes.content}>
                <div className={classes.appContent}>
                  <h1 className={classes.loginTitle}>Posts</h1>
                  {posts.errors.status &&
                    <div className={classes.errorText}>Oops, there was an error loading the data</div>
                  }

                  {posts.posts && posts.fetched &&
                    <ListingTable
                      data={posts.posts}
                      sortOptions={posts.sort}
                      handleOnSort={actionCreators.sortPosts}
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

Posts.propTypes = {
  actionCreators: PropTypes.object,
  classes: PropTypes.object,
  albums: PropTypes.object,
  sort: PropTypes.object,
  fetching: PropTypes.bool
};

Posts = withStyles(styles)(Posts);

Posts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default Posts;

