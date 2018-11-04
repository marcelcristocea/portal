import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress as MuiCircularProgress} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import styles from './styles';

function CircularProgress({classes, size}) {
  return (
    <div className={classes.circularProgressWrapper}>
      <MuiCircularProgress size={size} className={classes.circularProgress} />
    </div>
  );
}

CircularProgress.propTypes = {
  size: PropTypes.number
};

CircularProgress.defaultProps = {
  size: 50
};

export default withStyles(styles)(CircularProgress);
