import PropTypes from "prop-types";

function Contenedor(props) {
  return (
    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      {props.children}
    </div>
  );
}
Contenedor.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contenedor;
