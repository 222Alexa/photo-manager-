import React from "react";

import PropTypes from "prop-types";

/**Кнопка */
export const Button = (data) => {
  return (
    <React.Fragment>
      <button
        ref={data.btnRef}
        data-id={data.id}
        className={data.className + "__btn"}
        onClick={data.onClick ? () => data.onClick(data.id) : null}
      >
        {data.text ? data.text : data.name}
      </button>
    </React.Fragment>
  );
};

Button.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    btnRef: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};

/**Поле ввода в форме поиска */
export const Input = React.forwardRef((data, ref) => {

  return (
    <React.Fragment>
      <div className="input-wrapper">
        <label className="label" htmlFor={data.htmlFor}>
          {data.text}
        </label>
        <input
          ref={ref}
          id={data.id + "-id"}
          className={data.type + "-input"}
          type={data.type}

        />
      </div>
    </React.Fragment>
  );
});

Input.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }),
};

export const Image = (data) => {

  const { id, name, url } = data;

  if (!url) {
    return;
  }
  return (
    <>
      <div className="image-wrapper">
        <img id={id} className="card-image" src={url} alt={name} />
      </div>
    </>
  );
};

Image.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,

    name: PropTypes.string.isRequired,
  }),
};
