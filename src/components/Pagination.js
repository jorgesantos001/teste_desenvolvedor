import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div>
    <button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    >
      Anterior
    </button>
    <span>{currentPage} / {totalPages}</span>
    <button
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >
      Próxima
    </button>
  </div>
);

export default Pagination;