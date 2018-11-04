import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {logoutUser} from '../../actions';
import styles from './styles';

function mapDispatchToProps(dispatch) {
  return {
    actionCreators: bindActionCreators({
      logoutUser
    }, dispatch)
  };
}

class PortalLayout extends Component {
  render() {
    const {classes} = this.props;

    return (
      <Fragment>
        <div className={classes.topMenu}>
          <Link
            to="/"
            className={classNames(
              classes.contentItem,
              this.props.location.pathname === '/' ? classes.contentItemLabelActive : ''
            )}
          >
            Home
          </Link>
          <Link
            to="/albums"
            className={classNames(
              classes.contentItem,
              this.props.location.pathname === '/albums' ? classes.contentItemLabelActive : ''
            )}
          >
            Albums
          </Link>
          <Link
            to="/posts"
            className={classNames(
              classes.contentItem,
              this.props.location.pathname === '/posts' ? classes.contentItemLabelActive : ''
            )}
          >
            Posts
          </Link>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.props.actionCreators.logoutUser()}
          >
            Logout
          </Button>
        </div>

        <section style={styles.appContent}>
          {this.props.children}
        </section>

      </Fragment>
    )
  }
}

PortalLayout.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element
};

PortalLayout = withStyles(styles)(PortalLayout);

PortalLayout = connect(null, mapDispatchToProps)(PortalLayout);

export default withRouter(PortalLayout);
