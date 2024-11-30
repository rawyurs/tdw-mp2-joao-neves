import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
    return (
        <ReactPaginate
            className={`pagination justify-content-center gap-4 my-4 ${styles.pagination}`}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}  // Ajuste conforme a página atual
            previousLabel='Previous'
            nextLabel='Next'
            nextClassName='btn btn-danger'
            previousClassName='btn btn-danger'
            pageClassName='page-item'
            pageLinkClassName='page-link text-danger'
            activeLinkClassName='text-white bg-danger border-danger'
            activeClassName='active'
            onPageChange={(data) => {
                setPageNumber(data.selected + 1);  // Atualizando a página selecionada
            }}
            pageCount={totalPages}  // Número total de páginas calculado dinamicamente
        />
    );
};

export default Pagination;
