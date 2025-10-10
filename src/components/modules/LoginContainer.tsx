import LoginForm from "../components/LoginForm";

const LoginContainer = () => {
  return (
    <div className="c-modal">
          <header className="c-modal__header">
            <button className="c-modal__close" aria-label="Cerrar">
              <i className="fas fa-times"></i>
            </button>
            <h2 className="c-modal__title">Iniciar sesión o registrarse</h2>
          </header>

          <div className="c-modal__body">
            <LoginForm />
          </div>
        </div>
  );
};

export default LoginContainer;
