import './App.css';
import { Component } from 'react';
import BoardComponent from './component/BoardComponent';
import BoardDetail from './component/BoardDetail';
import { BrowserRouter, Route } from 'react-router-dom';
import BoardModify from './component/BoardModify';

class App extends Component {
  render(){
    return(
      <div>
        <h2 className="board-view-menu" align="center">Notice</h2>
        <br/>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path='/' component={BoardComponent}/>
          <Route path='/boardDetail/:no' component={BoardDetail}/>
          <Route path='/boardModify/:no' component={BoardModify}/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

