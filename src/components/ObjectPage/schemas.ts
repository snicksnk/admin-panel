import * as yup from 'yup';
import { ObjectFormType } from './types';

export const CreateObjectSchema: yup.SchemaOf<ObjectFormType> = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  number: yup.number().required(),
});
