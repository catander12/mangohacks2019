import React, { Component } from 'react';
import SideBar from './components/navBar.js';
import InvPage from './components/pages/inv.js';
import FlightsPage from './components/pages/flights.js';
import TrucksPage from './components/pages/trucks.js';
import RecordsPage from './components/pages/records.js';
import NewBatch from './components/pages/newBatch.js';
import Genbar from './components/pages/genBar.js';
import AddPackage from './components/pages/addPack.js';
import './App.css';



class App extends Component {
constructor(props) {
  super(props)
   this.state = {
    CurrentPage: 'inv',
    CurrentTask: 'none',
    CurrentResult:'none',
    CurrentForm:'none'
  }
    this.HandlePageChange = this.HandlePageChange.bind(this)
  };




  HandlePageChange = (pageName) => {
    this.setState({CurrentPage: pageName, CurrentForm:'none',CurrentTask:'none'});
  };

  HandleTaskChange = (newTask) => {
    this.setState({CurrentTask: newTask,CurrentForm:'none'});
  };

  HandleFormChange = (newForm) => {
    this.setState({CurrentForm: newForm,disabled:'hidden'});
  };

  HandleResultChange = (newResult) => {
    this.setState({CurrentResult: newResult});
  };

  




  RenderCurrentPage = (type) => {
    const currentPage =  this.state.CurrentPage;
    const currentTask = this.state.CurrentTask;
    var reducer = {
      inv: <InvPage CurrentTask={currentTask} HandleTaskChange={this.HandleTaskChange} />,
      air: <FlightsPage CurrentTask={currentTask} HandleTaskChange={this.HandleTaskChange} />,
      ground: <TrucksPage CurrentTask={currentTask} HandleTaskChange={this.HandleTaskChange} />,
      records: <RecordsPage CurrentTask={currentTask} HandleTaskChange={this.HandleTaskChange} />
    }
    return reducer[currentPage]
  };




  RenderCurrentTask = (type) => {
    const currentTask =  this.state.CurrentTask;
    var reducer = {
      none: "",
      newBatch:<NewBatch date={Date()} addPackage={this.HandleFormChange}/>,
      addPack:<AddPackage date={Date()} addPackage={this.HandleFormChange}/>,
      deletePackage:"",
      searchInv:"",
      viewAllInv:""
    }
    return reducer[currentTask]
  };




  RenderForm = (type) => {
    const currentForm = this.state.CurrentForm;

    var reducer = {
      none: "",
      genBar:<Genbar />
    }
    return reducer[currentForm]
  };




  RenderResults = (type) => {
    const currentResult = this.state.CurrentResult;
    var reducer = {
      none: "",
    }
    return reducer[currentResult]
  };


  render() {
    return (
      <div className='main'>

        <SideBar
          CurrentPage={this.state.CurrentPage} 
          HandlePageChange={this.HandlePageChange}
         />
      <div className='rightSide'>
        <div className='choices' >{this.RenderCurrentPage()}</div>
        <hr/>
        <div className='task'>{this.RenderCurrentTask()}</div>
        <br/>
        <div className='inputForm'>{this.RenderForm()}</div>
        <br/>
        <div className='results'>{this.RenderResults()}</div>
      </div>

      </div>
        
    );
  };
}

export default App;
