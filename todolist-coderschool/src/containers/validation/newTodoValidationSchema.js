import * as yup from 'yup';

const validationSchema = yup.object().shape({
    note: yup
      .string()
      .min(2, 'Seems a bit short...')
      .required('Không bỏ trống'),
});

export default validationSchema;