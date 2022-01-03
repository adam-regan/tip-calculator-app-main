import { makeStyles } from '@material-ui/core';
import TextInput from './TextInput';
import { ReactComponent as DollarIcon } from '../assets/icon-dollar.svg';
import { ReactComponent as PersonIcon } from '../assets/icon-person.svg';
import SelectTip from './SelectTip';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		maxWidth: 339,
	},
	[theme.breakpoints.down("sm")]: {
		root: {
			height: 488
		}
	},
}));
function InputContainer(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<TextInput label='Bill' startAdornment={<DollarIcon />} value={props.bill} onChange={props.onChangeBill} />
			<SelectTip
				onChangeTip={props.onChangeTip}
				currentTip={props.tip}
				onCustomClicked={props.onCustomClicked}
				customOpen={props.customOpen}
				customActive={props.customActive} />
			<TextInput label='Number of People' startAdornment={<PersonIcon />} value={props.numberOfPeople} onChange={props.onChangeNumberOfPeople} />
		</div>
	);
}

export default InputContainer;
