const LoginForm = () => {
  return (
    <div className="c-login">
      <h1 className="c-login__welcome">
        Te damos la bienvenida a Airbnb
      </h1>

      <form className="c-login__form" id="loginForm">
        <div className="c-form-group">
          <label className="c-form-group__label">País o región</label>
          <select className="c-form-group__select" id="countryCode">
            <option value="+51">Perú (+51)</option>
            <option value="+1">Estados Unidos (+1)</option>
            <option value="+34">España (+34)</option>
            <option value="+52">México (+52)</option>
            <option value="+54">Argentina (+54)</option>
            <option value="+56">Chile (+56)</option>
            <option value="+57">Colombia (+57)</option>
          </select>
          <i className="fas fa-chevron-down c-form-group__icon"></i>
        </div>

        <div className="c-form-group">
          <label className="c-form-group__label">Número de teléfono</label>
          <input
            type="tel"
            className="c-form-group__input"
            placeholder="xxx xxx xxx"
            id="phoneNumber"
            required
          />
        </div>

        <p className="c-privacy">
          Te vamos a confirmar el número por teléfono o mensaje de
          texto. Sujeto a las tarifas estándar para mensajes y datos.
          <a href="#" className="c-privacy__link">
            Política de privacidad
          </a>
        </p>

        <button type="submit" className="c-button c-button--primary">
          Continúa
        </button>
      </form>

      <div className="c-divider">o</div>

      <div className="c-social-buttons">
        <button className="c-button c-button--social c-button--google">
          <i className="fab fa-google c-button--social-icon"></i>
          <span>Continúa con Google</span>
        </button>

        <button className="c-button c-button--social c-button--apple">
          <i className="fab fa-apple c-button--social-icon"></i>
          <span>Continúa con Apple</span>
        </button>

        <button className="c-button c-button--social c-button--email">
          <i className="far fa-envelope c-button--social-icon"></i>
          <span>Continúa con el correo electrónico</span>
        </button>

        <button className="c-button c-button--social c-button--facebook">
          <i className="fab fa-facebook c-button--social-icon"></i>
          <span>Continúa con Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
