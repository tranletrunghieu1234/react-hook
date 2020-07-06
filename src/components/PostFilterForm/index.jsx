import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

PostFiltersForm.propTypes = {};
PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [keyword, setKeyword] = useState("");
  const [dbValue, saveToDb] = useState("");
  const typingTimeOutRef = useRef(null);
  function handleSearchItemChange(e) {
    const value = e.target.value;
    setKeyword(value);
    if (!onSubmit) return;
    //SETtime out 100 ->clear , set 300 ->submit
    if (typingTimeOutRef.current) clearTimeout(typingTimeOutRef.current);
    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        keyword: value,
      };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <div>
      <input
        className="search"
        type="text"
        value={keyword}
        onChange={(e) => handleSearchItemChange(e)}
      />
    </div>
  );
}

export default PostFiltersForm;
