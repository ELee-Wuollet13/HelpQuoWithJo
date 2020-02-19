import React from "react";
import Moment from 'moment';
import PropTypes from "prop-types";

function Ticket(props){

  let content = {
   textAlign: 'center',
   border: '5px solid #ADD2CC',
   margin: '10px 100px',
   backgroundColor: 'lightgrey',
   borderRadius: '70px',
   boxShadow:'5px 5px 10px black',
   marginTop: '50px',
   padding:"30px"
  }
  let hrStyle = {
  padding:"10px",
  borderRadius:"5px",


  }
  function displayTimeOpen(timeOpen) {
    console.log(props.timeOpen);
    console.log(timeOpen);
    return timeOpen.from(new Moment(), true);
  }

  return (
    <div>
    <div style={content}>
    {console.log(props)}
    <h3>{props.location} - {props.names}</h3>
    <hr style={hrStyle}/>
    <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
    <p><em>{props.issue}</em></p>

    </div>
    </div>
  );
}
Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};
export default Ticket;
