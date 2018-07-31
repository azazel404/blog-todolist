import React, { Component } from 'react';//export react
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // export react router componenrt
import { connect } from 'react-redux'; // export connect react redux connect 
import * as actions from '../actions'; // export data dari folder action creator secara keseluruh

import Header from './Header'; // header component
import Landing from './Landing';
import Dashboard from './Dashboard'; //export dashboard component
import BlogNew from './blogs/BlogNew'; //export blog new component
import BlogShow from './blogs/BlogShow'; // export block spesifik data show component

class App extends Component {
  //akan berjalan jika hasil smua render sudah keluar , didmount akan mengambil data dari fetch user action creator
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/blogs/new" component={BlogNew} />
              <Route exact path="/blogs/:_id" component={BlogShow} />
              <Route path="/blogs" component={Dashboard} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//null adalah tempat pengisian map state props (property dari reducer ) ,action adalah dispatch dari actions creator
export default connect(null, actions)(App);
