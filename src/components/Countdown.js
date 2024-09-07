import React, { Component } from 'react'
import Main from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <span style={{
            color: "#F44336",
            fontWeight: "bold",
            margin: "0 auto",
            textAlign: 'center'
        }}>The Recruitment for {new Date().getFullYear()} is over!</span>;
    } else {
        return <span style={{
            color: "#F44336",
            fontWeight: "bold",
            margin: "0 auto",
            textAlign: 'center'
        }}>Only {days ? days === 1 ? `${days} day, ` : `${days} days, ` : null}
            {hours ? hours === 1 ? `${hours} hour, ` : `${hours} hours, ` : null}
            {minutes ? minutes === 1 ? `${minutes} minute, & ` : `${minutes} minutes, & ` : null}
            {seconds ? ` ${seconds}s ` : null}
            left before the  form is closed!
        </span>;
    }
};

export class Countdown extends Component {

    render() {
        const { date } = this.props;
        return (
            <Main date={date} renderer={renderer} />
        )
    }
}

export default Countdown