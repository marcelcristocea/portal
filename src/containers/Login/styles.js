export default theme => ({
  paper: {
    textAlign: 'center',
    margin: '100px auto',
    [theme.breakpoints.up('sm')]: {
      padding: 30,
      maxWidth: '550px',
      boxShadow: '1px 1px 3px rgba(0, 0, 0, .2)',
      border: '1px solid #ccc',
      borderRadius: '6px',
    }
  },
  fixedContent: {
    width: '100%',
    maxWidth: 800,
    padding: 12,
    margin: '0 auto',
  },
  loginTitle: {
    fontSize: 36,
    fontWeight: 600
  }
});
