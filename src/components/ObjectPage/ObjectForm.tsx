import styled from 'styled-components/macro';
import { useFormik } from 'formik';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
import { ObjectFormType } from './types';
import { CreateObjectSchema } from './schemas';
import { FormConfig, renderFormConfig } from '../../utils/form';

interface ObjectFormProps {
  onFormSubmit: (formData: ObjectFormType) => void;
}

export default function ObjectForms({ onFormSubmit }: ObjectFormProps) {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      number: 0,
    },
    validationSchema: CreateObjectSchema,
    onSubmit: (values) => onFormSubmit(values),
  });

  const formConfig: FormConfig = [
    {
      title: 'Name',
      name: 'name',
      component: StyledInput,
    },
    {
      title: 'Description',
      name: 'description',
      component: StyledTextarea,
    },
    {
      title: 'Number',
      name: 'number',
      props: {
        type: 'number',
      },
      component: StyledInput,
    },
  ];

  return (
    <Form onSubmit={formik.handleSubmit}>
      {renderFormConfig(formConfig, formik)}
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 30px;
  padding: 30px;
`;

const SubmitButton = styled.button`
  background: #2682DE;
  box-shadow: 0px 4px 6px #32475C1C;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
  font-weight: 750;
  font-size: 18px;
  line-height: 22px;
  color: #FCFDFF;
  cursor: pointer;
  min-width: 231px;
  height: 65px;
  margin-top: 62px;
  float: right;
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledTextarea = styled(Textarea)`
  width: 100%;
`;
