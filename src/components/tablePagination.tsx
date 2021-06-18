import React from 'react';
import { Pagination } from 'react-bootstrap';
import { TableInstance } from 'react-table';
import { IExchange } from '../types';
interface IProps {
  instance: TableInstance<IExchange>;
}
export const TablePagination: React.FC<IProps> = ({ instance }) => {
  const { nextPage, previousPage, gotoPage, pageCount } = instance;
  const pages = Array.from({length: pageCount}, (_, index) => index);
  
  return (
    <Pagination>
      <Pagination.Prev onClick={previousPage} />
      {
        pages.map((p: number) => <Pagination.Item onClick={() => gotoPage(p)}>{p + 1}</Pagination.Item>)
      }
      <Pagination.Next onClick={nextPage} />
    </Pagination>
  )
}