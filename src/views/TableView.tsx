import React, { ReactElement } from 'react';
import {
  useTable,
  useColumnOrder,
  useSortBy,
  usePagination,
  useFlexLayout,
  useResizeColumns,
  useRowSelect,
  CellProps,
} from 'react-table';
import { Table } from 'react-bootstrap';
import { Link } from "wouter";

import { IExchange } from '../types';

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

export function TableView({ exchanges }: IProps): ReactElement {
  const columns = React.useMemo(
  () => [
  {
    Header: 'List of Cryptocurrency Exchanges',
    columns: [
      {
        Header: 'Rank',
        accessor: 'trust_score_rank',
        minWidth: 60,
        width: 60,
        maxWidth: 60,
      },
      {
        Header: 'Logo',
        accessor: 'image',
        minWidth: 80,
        width: 80,
        maxWidth: 80,
        Cell: ({cell: { value }}: CellProps<IExchange>) => (
          <img src={value} alt="" />
        )
      },
      {
        Header: 'Name',
        accessor: (row: IExchange) => row,
        minWidth: 100,
        width: 140,
        maxWidth: 140,
        Cell: ({cell: { value }}: CellProps<IExchange>) => (
          <Link href={`/exchange/${value.id}`}>{value.name}</Link>
        )
      },
      {
        Header: 'Country',
        accessor: 'country',
        width: 100,
        maxWidth: 100,
      },
      {
        Header: 'URL',
        accessor: 'url',
        Cell: ({cell: { value }}: CellProps<IExchange>) => (
          <a href={value}>{value}</a>
        )
      },
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
    <Table {...getTableProps()} bordered>
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
                return <td {...cell.getCellProps()} className="overflow-auto">{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}