import { FC, CSSProperties } from 'react';
import InputWrap from '../ui/InputWrap';

export type FormRow = {
  title: string,
  name: string,
  component: FC<any>,
  containerStyle?: CSSProperties,
  props?: Record<string, any>
};

export type FormConfig = Array<FormRow>

export function renderFormConfig(formConfig: FormConfig, formik: any) {
  return formConfig.map((RowConfig, index) => (
    <InputWrap style={RowConfig.containerStyle || {}} key={index} title={RowConfig.title} hasError={!!formik.errors[RowConfig.name]}>
      <RowConfig.component
        value={formik.values[RowConfig.name]}
        key={RowConfig.name}
        name={RowConfig.name}
        onChange={formik.handleChange}
        setFieldValue={formik.setFieldValue}
        {...RowConfig.props}
      />
    </InputWrap>
  ));
}
