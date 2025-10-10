import { Link } from "react-router-dom";

const ErrorMessage = () => (
  <>
    <section className="c-error-page__content">
      {" "}
      <img src="https://www.airbnb.com.pe/" alt="" />{" "}
      <h1 className="c-error-page__title">Oops!</h1>{" "}
      <p className="c-error-page__message">
        {" "}
        Parece que no podemos encontrar la página que está buscando.{" "}
      </p>{" "}
      <p className="c-error-page__code">
        Código de error: <strong>404</strong>
      </p>{" "}
      <nav className="c-error-page__links">
        {" "}
        <p>Aquí hay algunos enlaces útiles en su lugar:</p>{" "}
        <ul className="c-error-page__list">
          {" "}
          <li>
            <Link to={`/`}>
            <a href="#" className="c-error-page__link">
              Inicio
            </a>
            </Link>
          </li>{" "}
          <li>
            <a href="#" className="c-error-page__link">
              Busqueda
            </a>
          </li>{" "}
          <li>
            <a href="#" className="c-error-page__link">
              Ayuda
            </a>
          </li>{" "}
          <li>
            <a href="#" className="c-error-page__link">
              Viajes en AirBnb
            </a>
          </li>{" "}
          <li>
            <a href="#" className="c-error-page__link">
              Anfitriones de AirBnb
            </a>
          </li>{" "}
          <li>
            <a href="#" className="c-error-page__link">
              Confianza y Seguridad
            </a>
          </li>{" "}
          <li>
            <a href="#" className="c-error-page__link">
              Mapa del SItio
            </a>
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </section>
  </>
);

export default ErrorMessage;
