export default theme => ({
  textInputWrapper: {
    flexWrap: 'wrap',
    display: 'flex',
    width: '100%'
  },
  input: {
    width: '100%',
    font: 'inherit',
    padding: '5px 10px',
    border: '1px solid #bbb',
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    color: 'inherit'
  },
  errorLabel: {
    color: '#d7444a',
    textTransform: 'none',
    padding: 5
  },
  inputInner: {
    width: '100%'
  },
  inputFocused: {
    outline: 0
  }
});
