import React from "react";
import PropTypes from "prop-types";

const FacebookIcon = props => {
  const { width, height, color, theme } = props;

  switch (theme) {
    case "minimal":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      );
    case "round":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
        </svg>
      );
    case "roundedunfilled":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
        </svg>
      );
    case "roundedsquare":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
        </svg>
      );
    case "square":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${width}`}
          height={`${height}`}
          fill={`${color}`}
          viewBox="0 0 24 24"
        >
          <path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
        </svg>
      );
  }
};

FacebookIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string
};

export default FacebookIcon;
