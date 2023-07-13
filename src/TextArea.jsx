import PropTypes from "prop-types";

function TextArea(props) {
  return (
    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
      <label htmlFor="editor" className="sr-only">
        Preguntar
      </label>
      <textarea
        id="editor"
        rows="8"
        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
        placeholder={props.placeholder}
        value={props.texto}
        onChange={(e) => props.onchange(e.target.value)}
        disabled={props.disabled}
        required
      ></textarea>
    </div>
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  texto: PropTypes.string.isRequired, // onChange function
  onchange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

TextArea.defaultProps = {
  placeholder: "Realiza una pregunta relacionada al tema...",
  disabled: false,
};

export default TextArea;
