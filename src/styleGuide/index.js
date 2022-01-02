const colors = {
	strongCyan: '#26C0AB',
	veryDarkCyan: '#00494D',
	darkGreyishCyan1: '#5E7A7D',
	darkGreyishCyan2: '#7F9C9F',
	lightGreyishCyan1: '#C5E4E7',
	lightGreyishCyan2: '#F4FAFA',
	white: '#FFFFFF'
}
const fontStyles = {
	inputLabel: {
		fontFamily: 'Space Mono, monospace',
		fontSize: 14,
		fontWeight: 700,
		color: colors.darkGreyishCyan1
	},
	inputValue: {
		fontFamily: 'Space Mono, monospace',
		fontSize: 16,
		fontWeight: 700,
		color: colors.darkGreyishCyan1
	},
	predefinedButtonLabel: {
		fontFamily: 'Space Mono, monospace',
		fontSize: 16,
		fontWeight: 700,
		color: colors.white
	},
	customButtonLabel: {
		fontFamily: 'Space Mono, monospace',
		fontSize: 16,
		fontWeight: 700,
		color: colors.darkGreyishCyan1
	},
	outputLabel1: {
		fontFamily: 'Space Mono, monospace',
		fontSize: 16,
		fontWeight: 700,
		color: colors.white
	},
	outputLabel2: {
		fontFamily: 'Space Mono, monospace',
		fontSize: 12,
		fontWeight: 700,
		color: colors.darkGreyishCyan2
	},
	result: {
		fontFamily: 'Space Mono, monospace',
		fontSize: 50,
		fontWeight: 700,
		color: colors.strongCyan
	},
	resetLabel: {
		fontFamily: 'Space Mono, monospace',
		fontWeight: 700,
		color: colors.veryDarkCyan,
		fontSize: 18
	}
};

const styleGuide = {
	colors,
	fontStyles
}

export default styleGuide;