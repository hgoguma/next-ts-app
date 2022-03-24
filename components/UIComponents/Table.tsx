import { IColumns } from '@/types/components/tables';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, FC } from 'react';

interface ITableProps<T> {
  columns: IColumns[];
  rows: Array<T>;
  rowId: string;
  pageSize: number | 10;
}

const Table:FC<ITableProps<T>> = ({ columns, rows, rowId, pageSize }) => {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        getRowId={(row) => row[rowId]}
        checkboxSelection
      />
    </div>
  );
}


export default Table;