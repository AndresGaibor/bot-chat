import PropTypes from "prop-types";
function IconRobot(props) {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="#000000"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M320 0c17.7 0 32 14.3 32 32v64h128c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h128V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zM264 256c0-22.1-17.9-40-40-40s-40 17.9-40 40 17.9 40 40 40 40-17.9 40-40zm152 40c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40zM48 224h16v192H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16V224h16z" />
    </svg>
  );
}

function Encabezado(props) {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
      <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
        <div className="flex items-center space-x-1 sm:pr-4">
          {/* <Icono /> */}
          <IconRobot />
        </div>
        <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {props.titulo}
          </h2>
        </div>
      </div>
    </div>
  );
}
// default props
Encabezado.propTypes = {
  titulo: PropTypes.string,
};

Encabezado.defaultProps = {
  titulo: "Preguntar",
};

export default Encabezado;
