import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};
function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function handleOnChangle(e) {
    let keyWords = e.target.value;
    //console.log("keyWords", keyWords);
    setValue(keyWords);
  }
  function handleSubmit(e) {
    // chặn reload browser
    e.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      title: value,
    };
    onSubmit(formValue);
    if (formValue) setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Xin mời điền vào"
        onChange={handleOnChangle}
      />
    </form>
  );
}

export default TodoForm;
