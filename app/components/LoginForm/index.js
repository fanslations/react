/**
*
* LoginForm
*
*/

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

// import styled from 'styled-components';


const renderField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <input {...input} className="form-control" type={type}/>
    {touched && error && <span>{error}</span>}
  </div>
)

const renderGroup = (field) => (
<div className="form-group">
  <label>dddddddd</label>
  <Field name={field} type={field} component={renderField} />
</div>
)

let LoginForm = (props) => {
  const { error, handleSubmit, submitting } = props;
  console.log('props', props);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>eeeeee</label>
        <Field name="email" type="email" component={renderField} />
      </div>

      <div className="form-group">
        <label>dddddddd</label>
        <Field name="password" type="password" component={renderField} label="Password"/>
      </div>

      {/* Render error if any. */}
      {error && <strong>{error}</strong>}

      <div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>Login</button>
      </div>
    </form>
  )
}

//LoginForm.propTypes = {
 // onSubmit: PropTypes.func.isRequired
//};

export default reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

//export default LoginForm;
