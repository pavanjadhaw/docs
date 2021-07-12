import { useEffect, useState } from 'react';

export default function SubmitListener(props: any) {
  const [lastValues, updateState] = useState(props.formik.values);

  useEffect(() => {
    const valuesEqualLastValues = lastValues === props.formik.values;
    const valuesEqualInitialValues = props.formik.values === props.formik.initialValues;

    if (!valuesEqualLastValues) {
      updateState(props.formik.values);
    }

    if (!valuesEqualLastValues && !valuesEqualInitialValues) {
      props.formik.submitForm();
    }
  }, [
    lastValues,
    props.formik.values,
    props.formik.initialValues,
    props.onChange,
    props.formik,
  ]);

  return null;
}
