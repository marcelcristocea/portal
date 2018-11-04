export default theme => ({
  topMenu: {
    padding: 0,
    background: '#dbdbd9',
    height: 80,
    position: 'static',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    flexShrink: 0,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    zIndex: 1100
  },
  contentItem: {
    textDecoration: 'none',
    color: '#000',
    fontSize: 24,
    display: 'flex',
    height: 44,
    alignItems: 'center',
    padding: 20,
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#fff'
    }
  },
  contentItemLabelActive: {
    backgroundColor: '#fff'
  },
  button: {
    margin: '0 0 0 30px'
  }
});
