import { Button, styled } from '@material-ui/core';
import styleGuide from '../styleGuide';
import StyledInput from './StyledInput';

const StyledButton = styled(Button)(({ theme }) => ({
	backgroundColor: styleGuide.colors.lightGreyishCyan2,
	width: 100,
	marginBottom: 13,
	"& .MuiButton-label": {
		...styleGuide.fontStyles.buttonLabelCyan,
		textTransform: 'none'
	},
	[theme.breakpoints.down("sm")]: {
		width: 151,
		height: 48
	},
}));
const CustomInput = styled(StyledInput)(({ theme }) => ({
	width: 100,
	margin: 0,
	height: 45,
	[theme.breakpoints.down("sm")]: {
		width: 151,
		height: 48
	},
}));

function CustomButton({ isOpen, onClicked, onChange }) {
	return (
		<div>
			{!isOpen &&
				(<StyledButton onClick={onClicked}>
					Custom
				</StyledButton>)
			}
			{isOpen &&
				(<CustomInput
					onChange={onChange}
					autoFocus={true}
					placeholder='0' />)}
		</div>
	);
}

export default CustomButton;
