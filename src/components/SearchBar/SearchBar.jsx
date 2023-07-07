import { Formik, Form, Field, ErrorMessage } from 'formik';
import { StyledHeader } from './SearchBar.styled';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

let searchValidationSchema = Yup.object().shape({
  searchQuery: Yup.string().required('Required!'),
});

export const SearchBar = ({onSubmit}) => {
  const handleSubmit = values => {
    onSubmit(values);
  };
  return (
    <StyledHeader>
      <Formik
        initialValues={{ searchQuery: '' }}
        validationSchema={searchValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <button type="submit">
            <span>Search</span>
          </button>

          <Field
            type="text"
            autoComplete="off"
            autoFocus
            name="searchQuery"
            placeholder="Search images and photos"
          />
          <ErrorMessage name="searchQuery" component="div" />
        </Form>
      </Formik>
    </StyledHeader>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
