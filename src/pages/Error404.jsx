import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error404-clouds">
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="c">
        <div className="_404">404</div>
        {/* <hr /> */}
        <div className="_1">LA PÁGINA</div>
        <div className="_2">NO FUÉ ENCONTRADA</div>
        <a className="btn-404" href="/">
          VOLVER AL INICIO
        </a>
      </div>
    </div>
  );
};

export default Error404;
