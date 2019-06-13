import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class BirthdayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: new Date()
      };
      this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(date) {
      this.setState({
        startDate: date
      });
    }
   
    render() {
      return (
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
/>
      );
    }
  }

export default BirthdayForm;
