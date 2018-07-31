// BlogFormReview shows users their form inputs for review
import _ from 'lodash'; // import lodash
import React, { Component } from 'react'; // import react
import { connect } from 'react-redux'; // import koneksi redux
import formFields from './formFields'; // import formfield dari child component
import { withRouter } from 'react-router-dom'; // import withrouter from react router
import * as actions from '../../actions'; // import all action center from actions

class BlogFormReview extends Component {
  constructor(props){
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.state = {
      file : null
    }
  }
  //for change file upload
  onFileChange(event){
    this.setState({file: event.target.files});
    console.log(event.target.files);
  }
  //render file 
  renderFields() {
    const { formValues } = this.props;
    //show all data array formfields yang berisi name dan label
    return _.map(formFields, ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  }
  //render function for cancel 
  renderButtons() {
    const { onCancel } = this.props;

    return (
      <div>
        <button
          className="black darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button className="green btn-flat right white-text">
          Save Blog
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }
  //mengambil state action creator submit blog dan membuat submit blog
  //form values berasal dari mapstateprops , submitblog action harus memiliki 2 parameter yaitu values dan history
  onSubmit(event) {
    event.preventDefault();

    const { submitBlog, history, formValues } = this.props;

    submitBlog(formValues, history);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h5>Please confirm your entries</h5>
        {this.renderFields()}
        <h5>Add image </h5>
        <input onChange={this.onFileChange} type="file" accept="image/*" />
        {this.renderButtons()}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.blogForm.values };
}
//withrouter akan mengupdate data dari blogformreview
export default connect(mapStateToProps, actions)(withRouter(BlogFormReview));
