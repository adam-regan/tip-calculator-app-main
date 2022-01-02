
import { Button, makeStyles, styled } from '@material-ui/core';
import styleGuide from '../styleGuide';
import CustomButton from './CustomButton';

const useSytles = makeStyles({
	label: {
		...styleGuide.fontStyles.inputLabel
	},
	buttonContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingTop: 10
	}
});

const PredefinedButton = styled(Button)(({ theme }) => ({
	backgroundColor: styleGuide.colors.veryDarkCyan,
	width: 100,
	marginBottom: 13,
	"& .MuiButton-label": {
		...styleGuide.fontStyles.outputLabel1
	}
}));

function SelectTip({ onChangeTip, currentTip }) {
	const classes = useSytles();
	const tips = [5, 10, 15, 25, 50];

	function onClick(e) {
		onChangeTip(e.currentTarget.value);
	}

	return (
		<div>
			<p className={classes.label}>Select Tip</p>
			<div className={classes.buttonContainer}>
				{tips.map((tip) => (<PredefinedButton key={tip} value={tip} onClick={onClick}>{tip}%</PredefinedButton>))}
				<CustomButton />
			</div>
		</div>
	);
}

export default SelectTip;
