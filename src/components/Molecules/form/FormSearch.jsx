import React, { useRef } from "react";
import PropTypes from "prop-types";

const USID = require("usid");
const usid = new USID();

const Form = ({ data }) => {
  const imageRef = useRef();

  const { childData, onAdd } = data;

  const onFormSubmit = (e) => {
    console.log("onFormSubmit");

    const imgElem = imageRef.current;

    const file = imgElem.files && imgElem.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
      const result = { id: usid.rand(), data: event.target.result };

      onAdd(result);
    });

    reader.readAsDataURL(file);

    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="form-field-wrapper">
        <form className={childData.type + "-form"} onChange={onFormSubmit}>
          <input
            id="file-input"
            className="file-select"
            type="file"
            accept="image/*"
            multiple
            ref={imageRef}
          />
          <label htmlFor="file-input">{childData.text}</label>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
Form.propTypes = {
  data: PropTypes.shape({
    childData: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
  }),
};
