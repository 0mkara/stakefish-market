import React, { ReactElement } from 'react';
import {
  useTable,
  useColumnOrder,
  useSortBy,
  usePagination,
  useFlexLayout,
  useResizeColumns,
  useRowSelect,
  TableOptions
} from 'react-table';
import { IExchange } from '../types';
import './style.css';

interface IProps {
  exchanges: Array<IExchange>;
}
const hooks = [
  useColumnOrder,
  useSortBy,
  usePagination,
  useFlexLayout,
  useResizeColumns,
  useRowSelect
]

export interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T> {
  exchanges: Array<IExchange>;
}

export function TableView({ exchanges }: IProps): ReactElement {
  const columns = React.useMemo(
  () => [
  {
    Header: 'Exchanges',
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'URL',
        accessor: 'url',
      },
      {
        Header: 'Image',
        accessor: 'image',
      },
      {
        Header: 'Rank',
        accessor: 'trust_score_rank',
      }
    ],
  }
], []);
  const instance = useTable(
    {
      columns,
      data: exchanges
    },
    ...hooks
  )
  const { getTableProps, headerGroups, getTableBodyProps, prepareRow, rows } = instance
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}