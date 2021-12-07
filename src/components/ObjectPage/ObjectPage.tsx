import ObjectForm from './ObjectForm';

export default function ObjectPage() {
  const onFormSubmit = () => console.log('submit');

  return <ObjectForm onFormSubmit={onFormSubmit} />;
}
