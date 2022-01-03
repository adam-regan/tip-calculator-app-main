import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputContainer from './InputContainer';
import OutputContainer from './OutputContainer';
import styleGuide from '../styleGuide'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: styleGuide.colors.white,
		borderRadius: 20,
		padding: 30,
		width: 750,
		height: 375
	},
	[theme.breakpoints.down("sm")]: {
		root: {
			flexDirection: 'column',
			width: 319,
			height: 779,
			borderRadius: '30px 30px 0 0',
		}
	},
}));

function Content() {
	const classes = useStyles();
	const defaultState = {
		bill: 0,
		numberOfPeople: 0,
		tip: 0,
		tipPerPerson: 0,
		totalPerPerson: 0,
		customButtom: {
			open: false,
			active: false
		}
	};
	const [state, setState] = useState(defaultState);

	function getTipPerPerson(bill, tip, numberOfPeople) {
		if (numberOfPeople < 1) {
			return 0;
		}
		return roundToCurrency((bill * (tip / 100)) / numberOfPeople);
	}

	function getTotalPerPerson(bill, tip, numberOfPeople) {
		if (numberOfPeople < 1) {
			return 0;
		}
		return roundToCurrency((bill / numberOfPeople) + getTipPerPerson(bill, tip, numberOfPeople));
	}
	function roundToCurrency(num) {
		return Math.round(num * 100) / 100;
	}

	function onChangeBill(billAmount) {
		setState({
			...state,
			bill: billAmount,
			tipPerPerson: getTipPerPerson(billAmount, state.tip, state.numberOfPeople),
			totalPerPerson: getTotalPerPerson(billAmount, state.tip, state.numberOfPeople)
		});
	}

	function onChangeTip(tipAmount, isCustom = false) {
		let newState = {
			...state,
			tip: tipAmount,
			tipPerPerson: getTipPerPerson(state.bill, tipAmount, state.numberOfPeople),
			totalPerPerson: getTotalPerPerson(state.bill, tipAmount, state.numberOfPeople)
		};
		if (isCustom) {
			newState.customButtom.active = true;
		} else {
			newState.customButtom.active = false;
			newState.customButtom.open = false;
		}
		setState(newState);
	}

	function onChangeNumberOfPeople(numberOfPeople) {
		setState({
			...state,
			numberOfPeople,
			tipPerPerson: getTipPerPerson(state.bill, state.tip, numberOfPeople),
			totalPerPerson: getTotalPerPerson(state.bill, state.tip, numberOfPeople)
		});
	}
	function onCustomClicked() {
		const newState = {
			...state
		};
		newState.customButtom.open = true;
		setState(newState);
	}

	function reset() {
		setState(defaultState);
	}
	function isReset() {
		return state.bill === defaultState.bill
			&& state.numberOfPeople === defaultState.numberOfPeople
			&& state.tip === defaultState.tip
			&& !state.customButtom.open;
	}

	return (
		<div className={classes.root}>
			<InputContainer
				bill={state.bill}
				numberOfPeople={state.numberOfPeople}
				tip={state.tip}
				onChangeBill={onChangeBill}
				onChangeNumberOfPeople={onChangeNumberOfPeople}
				onChangeTip={onChangeTip}
				customOpen={state.customButtom.open}
				customActive={state.customButtom.active}
				onCustomClicked={onCustomClicked}
			/>
			<OutputContainer tipPerPerson={state.tipPerPerson} totalPerPerson={state.totalPerPerson} onReset={reset} isReset={isReset()} />
		</div>
	);
}

export default Content;
