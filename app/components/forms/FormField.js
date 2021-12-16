import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function FormField({ name, width, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
