import { Button, makeStyles, styled } from '@material-ui/core';
import styleGuide from '../../../styleGuide';
import OutputInfo from './OutputInfo';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: styleGuide.colors.veryDarkCyan,
		borderRadius: 10,
		padding: 30,
		width: 315,
		height: 315,
	},
	[theme.breakpoints.down("sm")]: {
		root: {
			width: 'auto',
			height: 200
		}
	},
}));

const ResetButton = styled(Button)(({ theme }) => ({
	backgroundColor: styleGuide.colors.strongCyan,
	"& .MuiButton-label": {
		...styleGuide.fontStyles.resetLabel
	},
	"&:hover": {
		backgroundColor: styleGuide.colors.lightGreyishCyan1,
	},
	"&.Mui-disabled": {
		backgroundColor: styleGuide.colors.mildCyan,

	}
}));


function OutputContainer({ tipPerPerson, totalPerPerson, onReset, isReset }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<OutputInfo label='Tip Amount' amount={parseFloat(tipPerPerson).toFixed(2)} />
				<OutputInfo label='Total' amount={parseFloat(totalPerPerson).toFixed(2)} />
			</div>
			<ResetButton onClick={onReset} disabled={isReset}>RESET</ResetButton>
		</div>
	);
}

export default OutputContainer;
