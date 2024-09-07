import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { isBefore } from "date-fns";
import { dateWithTimeZone } from "../utils/date";

const lastDateToRegister = {
	Year: '2023',
	Month: '07', // Jan - 0, Feb - 1, etc
	Day: '21',
	Hours: '21', // 24 Hour Format
	Minutes: '00',
	Seconds: '00'
}

const lastDate = new dateWithTimeZone('Asia/Kolkata', lastDateToRegister.Year,
	lastDateToRegister.Month, lastDateToRegister.Day,
	lastDateToRegister.Hours, lastDateToRegister.Minutes, lastDateToRegister.Seconds);
export class UserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			fullName: "",
			regNum: "",
			department: "",
			email: "",
			whatsappNum: "",
			linkedinUrl: "",
			year: "",
			domain: {
				RD: false,
				RAS: false,
				CES: false,
				IAS: false,
				PES: false,
				WIE: false,
				WAD: false,
				SM: false,
				MC: false,
				CLP: false,
				COMSOC: false,
			},
			skills: "",
			workEx: "",
			error: false,
			errorValue: "",
			nowDate: new Date()
		};
	}

	componentDidMount() {
		const interval = setInterval(() => {
			this.setState({ nowDate: new Date() })
		}, 1000)

		return () => clearInterval(interval)
	}

	// Proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	// Go back to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	// Handle fields change
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	handleErrorValue = (e) => {
		this.setState({ errorValue: e });
	};

	handleError = (e) => {
		this.setState({ error: !this.state.error });
	};

	handleCheck = (event) => {
		const selected = Object.keys(this.state.domain).filter(
			(key) => this.state.domain[key]
		);
		if (event.target.checked) {
			if (selected.length < 3) {
				this.setState({
					domain: {
						...this.state.domain,
						[event.target.name]: event.target.checked,
					},
				});
			}
		} else {
			this.setState({
				domain: {
					...this.state.domain,
					[event.target.name]: event.target.checked,
				},
			});
		}

		// this.setState((prevState, props) => {
		//   prevState.domain[event.target.value] = event.target.checked;
		//   return prevState;
		// });
	};

	render() {
		const { step } = this.state;
		const {
			fullName,
			regNum,
			department,
			email,
			whatsappNum,
			linkedinUrl,
			year,
			domain,
			skills,
			workEx,
			error,
			errorValue,
			nowDate
		} = this.state;
		const values = {
			fullName,
			regNum,
			department,
			email,
			whatsappNum,
			linkedinUrl,
			year,
			domain,
			skills,
			workEx,
			error,
			errorValue,
		};

		switch (step) {
			case 1:
				return (
					<FormUserDetails
						registrationOpen={isBefore(nowDate, lastDate)}
						lastDate={lastDate}
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						handleError={this.handleError}
						values={values}
						handleErrorValue={this.handleErrorValue}
					/>
				);
			case 2:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						handleCheck={this.handleCheck}
						handleError={this.handleError}
						values={values}
					/>
				);
			case 3:
				return (
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values}
					/>
				);
			case 4:
				return <Success />;
			default:
		}
	}
}

export default UserForm;
