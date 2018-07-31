import React from 'react'; //export react component
import { Link } from 'react-router-dom'; // export react router dom component
import BlogList from './blogs/BlogList'; // export bloglist component

const Dashboard = () => {
  //create add button / child component
  return (
    <div>
      <BlogList />
      <div className="fixed-action-btn">
        <Link to="/blogs/new" className="btn-floating btn-large blue">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
