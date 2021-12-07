import ObjectsTable from './Table';
import { ObjectsTableRow } from './types';

export default function HomePage() {
  const tableData: Array<ObjectsTableRow> = [
    {
      key: '123',
      name: 'Blog posts',
      linkToPage: 'blog posts',
    },
  ];

  return (
    <ObjectsTable tableData={tableData} />
  );
}
