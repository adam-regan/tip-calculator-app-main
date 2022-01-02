import { InputBase, makeStyles, styled } from '@material-ui/core'
import styleGuide from '../styleGuide';

const useStyles = makeStyles({
	label: {
		...styleGuide.fontStyles.inputLabel
	}
});

const StyledInput = styled(InputBase)(({ theme }) => ({
	width: 339,
	backgroundColor: styleGuide.colors.lightGreyishCyan2,
	...styleGuide.fontStyles.inputValue,
	padding: 10,
	marginTop: 10,
	"& input": {
		textAlign: "right"
	}
}));

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
				placeholder={String(value)}
				startAdornment={startAdornment}
				onChange={onChangeValue}
				value={value !== 0 ? String(value) : ''}>
			</StyledInput>
		</div>
	);
}

export default TextInput;
