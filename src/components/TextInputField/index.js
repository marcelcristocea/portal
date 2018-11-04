import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

import styles from './styles';

const TextInputField = ({
    classes,
    input,
    label,
    meta: {touched, error},
    children,
    placeholder,
    ...custom
  }) => (
  <div className={classes.textInputWrapper}>
    <TextField
      className={classes.input}
      InputProps={{
        className: classes.inputInner,
        classes: {focused: classes.inputFocused},
        placeholder: placeholder,
        disableUnderline: true
      }}
      {...input}
      onChange={(event, index, value) => input.onChange(event, index, value)}
      children={children}
      {...custom}
    />
    {(touched && error) && <div
      className={classes.errorLabel}>{error}</div>}
  </div>
);

TextInputField.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.array,
  placeholder: PropTypes.string
};

export default withStyles(styles)(TextInputField);
