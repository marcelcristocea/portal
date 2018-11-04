export default theme => ({
  label: {
    textAlign: 'left',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '15px 0'
  },
  labelContent: {
    flex: '0 1 100%',
    margin: '0 0 15px'
  },
  textInputWrapper: {
    flexWrap: 'wrap',
    display: 'flex',
    width: '100%'
  },
  inputText: {
    width: '100%',
    display: 'flex',
    padding: 10
  },
  errorLabel: {
    color: '#d7444a',
    textTransform: 'none',
    padding: 5
  },
  actionWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  }
});
