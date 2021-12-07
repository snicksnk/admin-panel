import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import styled from 'styled-components/macro';
import { ObjectsTableRow } from './types';

interface ObjectsTableProps {
  tableData: Array<ObjectsTableRow>;
}

export default function ObjectsTable({ tableData }: ObjectsTableProps) {
  const tableConfig: ColumnsType<ObjectsTableRow> = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
    },
    {
      key: 'linkToPage',
      dataIndex: 'linkToPage',
      title: 'Link to page',
      render: (text: Text) => <LinkToPage>{text}</LinkToPage>,
    },
  ];

  return <Table<ObjectsTableRow> dataSource={tableData} columns={tableConfig} />;
}

const LinkToPage = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
