import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Confetti from "react-confetti";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Confetti />
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Success" />
            <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>
              Thank You For Your Submission
            </h1>
            <p style={{ fontFamily: "Roboto", textAlign: "center" }}>
              You will soon receive an email with further instructions.
            </p>
            <p style={{ fontFamily: "Roboto", textAlign: "center" }}>
              <a href="https://links.ieeesrmist.in" className="text-dark">
                About Us
              </a>
            </p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
