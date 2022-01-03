
import { Button, makeStyles, styled } from '@material-ui/core';
import styleGuide from '../../../styleGuide';
import CustomButton from './CustomButton';

const useSytles = makeStyles({
	label: {
		...styleGuide.fontStyles.inputLabel1
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
		...styleGuide.fontStyles.buttonLabelWhite
	},
	"&.Mui-disabled": {
		backgroundColor: styleGuide.colors.strongCyan,
		"& .MuiButton-label": {
			...styleGuide.fontStyles.buttonLabelCyan
		},
	},
	[theme.breakpoints.down("sm")]: {
		width: 151,
		height: 48
	},
}));

function SelectTip({ onChangeTip, currentTip, onCustomClicked, customOpen, customActive, customValue }) {
	const classes = useSytles();
	const tips = [5, 10, 15, 25, 50];


	function onClick(e) {
		onChangeTip(Number(e.currentTarget.value));
	}

	function onCustomChange(e) {
		if (e.target.value === '') {
			onChangeTip(0, true);
		} else if (!!e.target.value.match(/^\d+$/)) {
			const num = Number(e.target.value);
			if (num >= 0 && num <= 100) {
				onChangeTip(num, true);
			}
		}
	}

	return (
		<div>
			<p className={classes.label}>Select Tip %</p>
			<div className={classes.buttonContainer}>
				{tips.map((tip) => (<PredefinedButton key={tip} value={tip} onClick={onClick} disabled={Number(currentTip) === tip && !customActive}>{tip}%</PredefinedButton>))}
				<CustomButton
					isOpen={customOpen}
					onClicked={onCustomClicked}
					onChange={onCustomChange}
					value={customValue} />
			</div>
		</div>
	);
}

export default SelectTip;
