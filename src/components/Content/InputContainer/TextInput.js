import { makeStyles } from '@material-ui/core'
import styleGuide from '../../../styleGuide';
import StyledInput from './StyledInput';

const useStyles = makeStyles({
	label1: {
		...styleGuide.fontStyles.inputLabel1
	},
	label2: {
		...styleGuide.fontStyles.inputLabel2
	},
	labelsContainer: {
		display: 'flex',
		justifyContent: 'space-between'
	}
});



function TextInput({ label, startAdornment, value, onChange, inputType }) {
	const classes = useStyles();
	function onChangeValue(e) {
		if (isValid(e.target.value)) {
			const value = e.target.value ? e.target.value : 0
			onChange(value);
		}
	}

	function isValid(value) {
		switch (true) {
			case inputType === INPUT_TYPES.CURRENCY:
				return !!value.match(/^\d*(\.\d{0,2})?$/);
			case inputType === INPUT_TYPES.INTEGER:
				return !!value.match(/^\d+$/) || value === '';
			default:
				return false
		}
	}
	function getIsZero() {
		if (value === '0') {
			return 'isZero';
		}

	}
	return (
		<div>
			<div className={classes.labelsContainer}>
				<p className={classes.label1}>{label}</p>
				{value === '0' && (<p className={classes.label2}>Can't be zero</p>)}
			</div>
			<StyledInput
				className={getIsZero()}
				placeholder='0'
				startAdornment={startAdornment}
				onChange={onChangeValue}
				value={value !== 0 ? String(value) : ''}>
			</StyledInput>
		</div >
	);
}

export const INPUT_TYPES = {
	CURRENCY: Symbol('CURRENCY'),
	INTEGER: Symbol('INTEGER'),
}
export default TextInput;
