const PLACE_HOLDER = "Realiza una pregunta relacionada al tema...";

function TextArea() {
  return (
    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
      <label htmlFor="editor" className="sr-only">
        Preguntar
      </label>
      <textarea
        id="editor"
        rows="8"
        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
        placeholder={PLACE_HOLDER}
        required
      ></textarea>
    </div>
  );
}

export default TextArea;
