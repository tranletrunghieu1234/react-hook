import React from "react";
import PropTypes from "prop-types";
const MOT = 1;
Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);
  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div className="text-center">
      <button
        className="buttonPrev"
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - MOT)}
      >
        Prev
      </button>
      <button
        className="buttonNext"
        disabled={_page >= totalPage}
        onClick={() => handlePageChange(_page + MOT)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
