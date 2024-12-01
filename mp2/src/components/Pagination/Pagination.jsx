import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {

    let [width, setWidth] = useState(window.innerWidth);

    let updateDimension = () => { setWidth(window.innerWidth) }

    useEffect(() => {
        window.addEventListener("resize", updateDimension)
        return () => window.removeEventListener("resize", updateDimension)
    }, [])

    return (
        <>
            <style>

                {`
                @media (max-width: 768px){
                    .next, .prev{
                    display:none;
                    }
                    .pagtination{
                    font.size: 14px;
                    }
                }
                `}
            </style>
            <ReactPaginate
                className={`pagination justify-content-center gap-4 my-4 ${styles.pagination}`}
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}  // Ajuste conforme a página atual
                previousLabel='Previous'
                nextLabel='Next'
                nextClassName='btn btn-danger next'
                previousClassName='btn btn-danger prev'
                pageClassName='page-item'
                pageLinkClassName='page-link text-danger'
                activeLinkClassName='text-white bg-danger border-danger'
                marginPagesDisplayed={width < 576 ? 1 : 2}
                activeClassName='active'
                onPageChange={(data) => {
                    setPageNumber(data.selected + 1);  // Atualizando a página selecionada
                }}
                pageCount={totalPages}  // Número total de páginas calculado dinamicamente
            />
        </>
    );
};

export default Pagination;
