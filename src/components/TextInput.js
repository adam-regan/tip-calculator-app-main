import { makeStyles } from '@material-ui/core'
import styleGuide from '../styleGuide';
import StyledInput from './StyledInput';

const useStyles = makeStyles({
	label: {
		...styleGuide.fontStyles.inputLabel
	}
});



function TextInput({ label, startAdornment, value, onChange }) {
	const classes = useStyles();
	function onChangeValue(e) {
		const value = e.target.value ? Number(e.target.value) : 0
		onChange(value);
	}

	return (
		<div>
			<p className={classes.label}
			>{label}</p>
			<StyledInput
				placeholder='0'
				startAdornment={startAdornment}
				onChange={onChangeValue}
				value={value !== 0 ? String(value) : ''}>
			</StyledInput>
		</div>
	);
}

export default TextInput;
