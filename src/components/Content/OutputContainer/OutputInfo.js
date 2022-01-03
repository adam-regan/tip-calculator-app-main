import { makeStyles } from '@material-ui/core';
import styleGuide from '../../../styleGuide';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 0
	},
	amount: {
		...styleGuide.fontStyles.result
	},
	label1: {
		...styleGuide.fontStyles.outputLabel1
	},
	label2: {
		...styleGuide.fontStyles.outputLabel2
	},
});

function OutputInfo({ label, amount }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div>
				<p className={classes.label1}>{label}</p>
				<p className={classes.label2}>/ person</p>
			</div>
			<p className={classes.amount}>${amount}</p>
		</div>
	);
}

export default OutputInfo;
