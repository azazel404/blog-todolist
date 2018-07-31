import React, { Component } from 'react'; //export react component
import { connect } from 'react-redux'; //export react redux connect 
import { Link } from 'react-router-dom'; // export link react router
 
class Header extends Component {
  //function rendercontent yang akan menjalankan logic auth yang ditaro di navbAR
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={'/auth/google'}>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="3" style={{ margin: '0 10px' }}>
            <Link to="/blogs">My Blogs</Link>
          </li>,
          <li key="2">
            <a href={'/auth/logout'}>Logout</a>
          </li>
        ];
    }
  }
  render() {
    return(
      <nav className="indigo">
      <div className="nav-wrapper">
      <Link 
        to={this.props.auth ? '/blogs' : '/'}
        className="left brand-logo"
        style={{marginLeft: '10px'}}
      >
      Blog GAN 
      </Link>
      <ul className="right">{this.renderContent()}</ul>
      </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return{
    auth:state.auth
  }
}

export default connect(mapStateToProps)(Header);
