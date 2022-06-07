import PropTypes from "prop-types";
import Button from "./Button";

const OpenClose = ({ title, onAdd, showAdd }) => {
  return (
    <header class='header'>
      <h2>{title}</h2>
      <Button
        color='#f4f4f4'
        text={showAdd ? "close" : "open"}
        onClick={onAdd}
      />
    </header>
  );
};

OpenClose.defaultProps = {
  title: "to do list",
};

OpenClose.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OpenClose;
