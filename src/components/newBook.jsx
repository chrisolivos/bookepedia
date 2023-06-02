import React from 'react';
import { useFormik } from 'formik';
import '../styles/newbook.css'

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  // const regExp = ([0-9]{3}-[0-9]{10});
  // const found = data.match(regExp);
  if (!values.isbnBook) {
    errors.isbnBook = 'Required';
  } else if (!/^[0-9]{3}-[0-9]{10}$/i.test(values.isbnBook)) {
    errors.isbnBook = 'Invalid ISBN';
  }

  if (!values.authors) {
    errors.authors = 'Required';
  } else if (values.authors.length > 20) {
    errors.authors = 'Must be 20 characters or less';
  }

  if (!values.country) {
    errors.country = 'Required';
  } else if (values.country.length > 20) {
    errors.country = 'Must be 20 characters or less';
  }
  if (!values.publisher) {
    errors.publisher = 'Required';
  } else if (values.publisher.length > 20) {
    errors.publisher = 'Must be 20 characters or less';
  }
  
  return errors;
};

export default function NewBook(){
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      isbnBook: '',
      authors: '',
      country: '',
      publisher:''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='container-form-newbook'>
      <div className='card-form'>
    <form onSubmit={formik.handleSubmit} className='form-newbook'>
      <label htmlFor="isbnBook">ISBN</label>
      <input className='input'
        id="isbnBook"
        name="isbnBook"
        type="text"
        placeholder='###-##########'
        onChange={formik.handleChange}
        value={formik.values.isbnBook}
      />
      {formik.errors.isbnBook ? <div>{formik.errors.isbnBook}</div> : null}

      <label htmlFor="authors">Authors</label>
      <input className='input'
        id="authors"
        name="authors"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.authors}
      />
      {formik.errors.authors ? <div>{formik.errors.authors}</div> : null}


      <label htmlFor="country">Country</label>
      <input className='input'
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      {formik.errors.country ? <div>{formik.errors.country}</div> : null}


      <label htmlFor="publisher">Publisher</label>
      <input className='input'
        id="publisher"
        name="publisher"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.publisher}
      />
      {formik.errors.publisher ? <div>{formik.errors.publisher}</div> : null}


      <button className='buttonSubmit' type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};