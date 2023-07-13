import PropTypes from "prop-types";

function SubmitButton(props) {
  return (
    <button
      type="submit"
      className="float-left inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      onClick={(e) => props.onclick(e)}
      disabled={props.disabled}
    >
      Preguntar
    </button>
  );
}

SubmitButton.propTypes = {
  onclick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default SubmitButton;
