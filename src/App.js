import { makeStyles } from '@material-ui/core/styles';
import Content from './components/Content';
import styleGuide from './styleGuide'
import { ReactComponent as Logo } from './assets/logo.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 140,
    marginBottom: 100,
  },
  background: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 1440,
    height: 1024,
    backgroundColor: styleGuide.colors.lightGreyishCyan1
  },
  [theme.breakpoints.down("sm")]: {
    logo: {
      marginTop: 50,
      marginBottom: 50
    },
    background: {
      width: 379,
      height: 993
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Logo className={classes.logo} />
        <Content />
      </div>
    </div>
  );
}

export default App;
