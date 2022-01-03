import { InputBase, styled } from '@material-ui/core'
import styleGuide from '../styleGuide';

const StyledInput = styled(InputBase)(({ theme }) => ({
	width: 339,
	backgroundColor: styleGuide.colors.lightGreyishCyan2,
	...styleGuide.fontStyles.inputValue,
	padding: 8,
	marginTop: 10,
	borderRadius: 6,
	"&.Mui-focused": {
		border: '2px solid ' + styleGuide.colors.strongCyan,
		padding: 6,
	},
	"& input": {
		textAlign: "right",
		caretColor: styleGuide.colors.strongCyan
	},
}));

export default StyledInput;