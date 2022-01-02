import { Button, styled } from '@material-ui/core';
import styleGuide from '../styleGuide';

const StyledButton = styled(Button)(({ theme }) => ({
	backgroundColor: styleGuide.colors.lightGreyishCyan2,
	width: 100,
	marginBottom: 13,
	"& .MuiButton-label": {
		...styleGuide.fontStyles.customButtonLabel,
		textTransform: 'none'
	}
}));
function CustomButton() {
	return (
		<StyledButton>
			Custom
		</StyledButton>
	);
}

export default CustomButton;
