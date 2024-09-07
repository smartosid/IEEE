import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("Name", this.props.values.fullName);
    form.append("Department", this.props.values.department);
    form.append("Email", this.props.values.email);
    form.append("Reg", this.props.values.regNum);
    form.append("Phone", this.props.values.whatsappNum);
    form.append("Linkedin URL", this.props.values.linkedinUrl);
    form.append("Experience", this.props.values.workEx);
    form.append("Year", this.props.values.year);
    var domains = [];
    for (const x in this.props.values.domain) {
      if (this.props.values.domain[x] === true) {
        domains.push(x);
      }
    }
    form.append("Roles", domains.join(", "));
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzIB7eDsoOyH3wnUmSK0dLHLc9O5IaWwkWddnNDXivDi67H6J48rL8Ti98f8kZGs7tw5A/exec";
    fetch(scriptURL, { method: "POST", body: form })
      .then((response) => { })
      .catch((error) => console.error("Error!", error.message));

    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        fullName,
        regNum,
        department,
        email,
        whatsappNum,
        year,
        linkedinUrl,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Full Name" secondary={fullName} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Registration Number"
                  secondary={regNum}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Department" secondary={department} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Whatsapp Number"
                  secondary={whatsappNum}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Linkedin Profile URL"
                  secondary={linkedinUrl}
                />
              </ListItem>

              <ListItem>
                <ListItemText primary="Year" secondary={year} />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Confirm & Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
