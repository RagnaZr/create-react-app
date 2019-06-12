import React from "react";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays"
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
           // Khong chon ngay tuong lai
           maxDate={addDays(new Date(), 0)}
           placeholderText="Click to select a date" 
        />
      );
    }
  }

export default BirthdayForm;