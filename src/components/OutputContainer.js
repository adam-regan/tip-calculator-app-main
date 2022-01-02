import { Button, makeStyles, styled } from '@material-ui/core';
import styleGuide from '../styleGuide';
import OutputInfo from './OutputInfo';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: styleGuide.colors.veryDarkCyan,
		borderRadius: 10,
		padding: 30,
		width: 315,
		height: 315,
	}
});

const ResetButton = styled(Button)(({ theme }) => ({
	backgroundColor: styleGuide.colors.strongCyan,
	"& .MuiButton-label": {
		...styleGuide.fontStyles.predefinedButtonLabel
	}
}));


function OutputContainer({ tipPerPerson, totalPerPerson, onReset }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<OutputInfo label='Tip Amount' amount={tipPerPerson} />
				<OutputInfo label='Total' amount={totalPerPerson} />
			</div>
			<ResetButton onClick={onReset}>RESET</ResetButton>
		</div>
	);
}

export default OutputContainer;
