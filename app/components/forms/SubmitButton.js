import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

function SubmitButton({ children }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton onPress={handleSubmit}>{children}</AppButton>;
}

export default SubmitButton;
