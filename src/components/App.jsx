import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';
import EditTicket from './EditTicket.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };

      this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }
  handleAddingNewTicketToList(newTicket){
    console.log('newTicket: ', newTicket);
    // const position = this.indexOf()
    const newMasterTicketList = this.state.masterTicketList.slice();
    // console.log('masterTicketList: ', this.state.masterTicketList);
    // console.log('newMasterTicketList: ', newMasterTicketList);
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
    newMasterTicketList.push(newTicket);
    // console.log('newMasterTicketList: ', newMasterTicketList);
    this.setState({
      masterTicketList: newMasterTicketList
    });
  }


  handleAddingEditTicketToList =(editTicket) =>{

    console.log(this.getIndex);
    const editMasterTicketList = this.state.masterTicketList.slice(1);
    console.log('masterTicketList: ', this.state.masterTicketList);
    console.log('editMasterTicketList: ', editMasterTicketList);
    editTicket.formattedWaitTime = (editTicket.timeOpen).fromNow(true)
    editMasterTicketList.push(editTicket);
    console.log('editMasterTicketList: ', editMasterTicketList);
    this.setState({
      masterTicketList: editMasterTicketList
    });
  }

  updateTicketElapsedWaitTime() {
     console.log("check");
     let newMasterTicketList = this.state.masterTicketList.slice();
     newMasterTicketList.forEach((ticket) =>
       ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
     );
     this.setState({masterTicketList: newMasterTicketList})
   }

   componentDidMount() {
     this.waitTimeUpdateTimer = setInterval(() =>
       this.updateTicketElapsedWaitTime(),
       5000
     );
  }
  componentWillUnmount(){
  clearInterval(this.waitTimeUpdateTimer);
}

  render(){
    return (
      <div>
        <Header/>
          <Switch>
            <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
            <Route path='/NewTicket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
            <Route path='/EditTicket' render={()=><EditTicket onEditTicketCreation={this.handleAddingEditTicketToList} />} />
            <Route component={Error404} />
          </Switch>
      </div>
    );
  }
}

export default App;
