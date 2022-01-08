import React from 'react';
import { useFormikContext } from 'formik';

import Button from '../Button';

function SubmitButton({ children }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={children} onPress={handleSubmit} />;
}

export default SubmitButton;
