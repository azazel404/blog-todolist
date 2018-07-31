// BlogForm shows a form for a user to add input
import _ from 'lodash'; //import lodash
import React, { Component } from 'react'; //import react
import { reduxForm, Field } from 'redux-form'; // import redux form dan field from redux form
import { Link } from 'react-router-dom'; //import react router
import BlogField from './BlogField'; //import form input child komponen
import formFields from './formFields'; // import form input child komponen feld

class BlogForm extends Component {
  //menampilkan renderfile form input 
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={BlogField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onblogSubmit)}>
          {this.renderFields()}
          <Link to="/blogs" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}
//validasi from form table input
function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}
//export reduxform from redux dan validasi dan form dari reducer dan class blogfrom
export default reduxForm({
  validate,
  form: 'blogForm',
  destroyOnUnmount: false
})(BlogForm);
