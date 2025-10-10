import { useParams } from "react-router-dom";
import { DESTINATIONS } from "../data/destinations.data";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import NotFound from "./NotFound";
import MobileNav from "../components/layout/MobileNav";

const PlaceDetail = () => {
  const { city, id } = useParams<{ city: string; id: string }>();
  const destination = DESTINATIONS.find(
    (d) => d.city.toLowerCase() === city?.toLowerCase()
  );
  const place = destination?.places.find((p) => p.id === Number(id));
  const host = place?.host;

  if (!place) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      <Header isCompactPermanent={true} />

      <main className="main o-container o-container--margin">
        <nav className="c-back">
          <a href="#" className="c-back__link">
            <i className="fas fa-chevron-left"></i>
            <span>Resultados de la búsqueda</span>
          </a>
        </nav>

        <section className="c-property-title">
          <h1 className="c-property-title__heading">{place.title}</h1>
          <div className="c-property-title__actions">
            <div className="c-property-title__meta">
              <span>★ {place.rating}</span>
              <span>·</span>
              <a href="#" className="c-property-title__link">{place.reviews} reseñas</a>
              <span>·</span>
              <a href="#" className="c-property-title__link">{destination?.city}, Perú</a>
            </div>
            <div className="c-property-title__buttons">
              <button className="c-property-title__button">
                <i className="fas fa-arrow-up-from-bracket"></i>
                <span>Compartir</span>
              </button>
              <button className="c-property-title__button">
                <i className="far fa-heart"></i>
                <span>Guardar</span>
              </button>
            </div>
          </div>
        </section>

        <section className="c-gallery">
          <div className="c-gallery__item c-gallery__item--main">
            <img src={place.images[0]} alt="Vista principal del loft" className="c-gallery__image" />
            <button className="c-gallery__button">
              <i className="fas fa-th"></i>
              <span>Mostrar todas las fotos</span>
            </button>
          </div>
          <div className="c-gallery__item">
            <img src={place.images[1]} alt="Habitación con cama" className="c-gallery__image" />
          </div>
          <div className="c-gallery__item">
            <img src={place.images[3]} alt="Vista exterior" className="c-gallery__image" />
          </div>
          <div className="c-gallery__item">
            <img src={place.images[2]} alt="Área de comedor" className="c-gallery__image" />
          </div>
          <div className="c-gallery__item">
            <img src={place.images[4]} alt="Vista desde ventana" className="c-gallery__image" />
          </div>
        </section>

        <div className="c-main">
          <div className="c-property">
            <header className="c-property__header">
              <h2 className="c-property__type">Alojamiento entero: {place.type} en {destination?.city}, Perú</h2>
              <p className="c-property__details">{place.beds} huespedes</p>
            </header>

            <div className="c-host">
              <div className="c-host__avatar">
                <img src={host?.imageUrl} alt="Anfitrión: Hilda" />
              </div>
              <div className="c-host__info">
                <h3 className="c-host__name">Anfitrión: {host?.name}</h3>
                <p className="c-host__badge">{host?.superhost && "Superanfitrión · "}{host?.yearsHosting} años anfitrionando</p>
              </div>
            </div>

            <div className="c-badges">
              <div className="c-badge">
                <i className="fas fa-medal c-badge__icon"></i>
                <div>
                  <div className="c-badge__text">{place.rating}</div>
                  <div className="c-badge__subtext">Valoración</div>
                </div>
              </div>
              <div className="c-badge">
                <i className="fas fa-comment c-badge__icon"></i>
                <div>
                  <div className="c-badge__text">{place.reviews}</div>
                  <div className="c-badge__subtext">Reseñas</div>
                </div>
              </div>
            </div>

            <section className="c-features">
              <article className="c-feature">
                <i className="fas fa-award c-feature__icon"></i>
                <div>
                  <h3 className="c-feature__title">Favorito entre huéspedes</h3>
                  <p className="c-feature__description">Según los huéspedes, uno de los alojamientos más populares en Airbnb</p>
                </div>
              </article>
              <article className="c-feature">
                <i className="fas fa-door-open c-feature__icon"></i>
                <div>
                  <h3 className="c-feature__title">Fabulosa experiencia de check-in</h3>
                  <p className="c-feature__description">A los huéspedes recientes les encantó el buen comienzo de esta estancia.</p>
                </div>
              </article>
              <article className="c-feature">
                <i className="fas fa-map-marker-alt c-feature__icon"></i>
                <div>
                  <h3 className="c-feature__title">Zona protegida donde todo está muy bien</h3>
                  <p className="c-feature__description">Los huéspedes dicen que esta zona es protegida y que es fácil moverse por ella.</p>
                </div>
              </article>
              <article className="c-feature">
                <i className="fas fa-calendar-times c-feature__icon"></i>
                <div>
                  <h3 className="c-feature__title">Cancelación gratuita antes del 22 nov</h3>
                  <p className="c-feature__description">Si cambias de opinión, recibirás un reembolso total.</p>
                </div>
              </article>
            </section>

            <section className="c-description">
              <p className="c-description__text">{place.description}</p>
              <button className="c-description__more">Mostrar más</button>
            </section>

            <section className="c-amenities">
              <h2 className="c-amenities__title">Lo que este lugar ofrece</h2>
              <ul className="c-amenities__list">
                <li className="c-amenities__item" dangerouslySetInnerHTML={{ __html: place.amenities }}>
                </li>
              </ul>
            </section>

            <section className="c-calendar">
              <h2 className="c-calendar__title">7 noches en Cusco</h2>
              <p className="c-calendar__subtitle">26 de nov. de 2025 - 3 de dic. de 2025</p>
              <div className="c-calendar__grid">
                <div className="c-calendar__day">Do</div>
                <div className="c-calendar__day">Lu</div>
                <div className="c-calendar__day">Ma</div>
                <div className="c-calendar__day">Mi</div>
                <div className="c-calendar__day">Ju</div>
                <div className="c-calendar__day">Vi</div>
                <div className="c-calendar__day">Sa</div>
                <div className="c-calendar__day c-calendar__day--disabled">25</div>
                <div className="c-calendar__day c-calendar__day--selected">26</div>
                <div className="c-calendar__day c-calendar__day--available">27</div>
                <div className="c-calendar__day c-calendar__day--available">28</div>
                <div className="c-calendar__day c-calendar__day--available">29</div>
                <div className="c-calendar__day c-calendar__day--available">30</div>
                <div className="c-calendar__day c-calendar__day--available">1</div>
                <div className="c-calendar__day c-calendar__day--available">2</div>
                <div className="c-calendar__day c-calendar__day--selected">3</div>
                <div className="c-calendar__day c-calendar__day--disabled">4</div>
                <div className="c-calendar__day c-calendar__day--disabled">5</div>
                <div className="c-calendar__day c-calendar__day--disabled">6</div>
                <div className="c-calendar__day c-calendar__day--disabled">7</div>
                <div className="c-calendar__day c-calendar__day--disabled">8</div>
              </div>
            </section>

            <section className="c-rating">
              <div className="c-rating__header">
                <div className="c-rating__score">4.86</div>
                <div>
                  <div className="c-rating__subtitle">★ 28 reseñas</div>
                  <p className="c-rating__subtitle">La puntuación media se calcula a partir de las reseñas de los huéspedes y de otros factores</p>
                </div>
              </div>
              <div className="c-rating__categories">
                <div className="c-rating-category">
                  <span className="c-rating-category__name">Limpieza</span>
                  <div className="c-rating-category__bar">
                    <div className="c-rating-category__fill" style={{ width: "98%" }}></div>
                  </div>
                  <span className="c-rating-category__score">4.9</span>
                </div>
                <div className="c-rating-category">
                  <span className="c-rating-category__name">Precisión</span>
                  <div className="c-rating-category__bar">
                    <div className="c-rating-category__fill" style={{ width: "96%" }}></div>
                  </div>
                  <span className="c-rating-category__score">4.8</span>
                </div>
                <div className="c-rating-category">
                  <span className="c-rating-category__name">Check-in</span>
                  <div className="c-rating-category__bar">
                    <div className="c-rating-category__fill" style={{ width: "100%" }}></div>
                  </div>
                  <span className="c-rating-category__score">5.0</span>
                </div>
                <div className="c-rating-category">
                  <span className="c-rating-category__name">Comunicación</span>
                  <div className="c-rating-category__bar">
                    <div className="c-rating-category__fill" style={{ width: "98%" }}></div>
                  </div>
                  <span className="c-rating-category__score">4.9</span>
                </div>
                <div className="c-rating-category">
                  <span className="c-rating-category__name">Ubicación</span>
                  <div className="c-rating-category__bar">
                    <div className="c-rating-category__fill" style={{ width: "100%" }}></div>
                  </div>
                  <span className="c-rating-category__score">5.0</span>
                </div>
                <div className="c-rating-category">
                  <span className="c-rating-category__name">Relación calidad-precio</span>
                  <div className="c-rating-category__bar">
                    <div className="c-rating-category__fill" style={{ width: "94%" }}></div>
                  </div>
                  <span className="c-rating-category__score">4.7</span>
                </div>
              </div>
            </section>

            <section className="c-reviews">
              <div className="c-reviews__grid">
                <article className="c-review">
                  <div className="c-review__header">
                    <div className="c-review__avatar">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="Usuario" />
                    </div>
                    <div>
                      <h4 className="c-review__author">Diego</h4>
                      <p className="c-review__date">Octubre de 2025</p>
                    </div>
                  </div>
                  <p className="c-review__text">Hilda fue excelente! Su alojamiento es hermoso, el espacio es de diseño muy creativo. El anfitrión hizo sentir muy bien tratado.</p>
                </article>
                <article className="c-review">
                  <div className="c-review__header">
                    <div className="c-review__avatar">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" alt="Usuario" />
                    </div>
                    <div>
                      <h4 className="c-review__author">María</h4>
                      <p className="c-review__date">Septiembre de 2025</p>
                    </div>
                  </div>
                  <p className="c-review__text">La ubicación es perfecta para explorar Cusco. Las vistas desde el loft son impresionantes y Hilda fue muy atenta en todo momento.</p>
                </article>
                <article className="c-review">
                  <div className="c-review__header">
                    <div className="c-review__avatar">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop" alt="Usuario" />
                    </div>
                    <div>
                      <h4 className="c-review__author">Carlos</h4>
                      <p className="c-review__date">Agosto de 2025</p>
                    </div>
                  </div>
                  <p className="c-review__text">Excelente alojamiento en pleno centro de San Blas. La vista es increíble y el espacio es muy acogedor.</p>
                </article>
                <article className="c-review">
                  <div className="c-review__header">
                    <div className="c-review__avatar">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop" alt="Usuario" />
                    </div>
                    <div>
                      <h4 className="c-review__author">Ana</h4>
                      <p className="c-review__date">Julio de 2025</p>
                    </div>
                  </div>
                  <p className="c-review__text">Un lugar mágico con una anfitriona excepcional. Las escaleras de caracol son un detalle único que hace la experiencia especial.</p>
                </article>
              </div>
              <button className="c-reviews__button">Mostrar las 28 reseñas</button>
            </section>

            <section className="c-map">
              <h2 className="c-map__title">Dónde estarás</h2>
              <div className="c-map__container">
                <div className="c-map__pin">
                  <i className="fab fa-airbnb"></i>
                </div>
              </div>
              <p className="u-mb-md" style={{ marginTop: "16px", fontSize: "14px", color: "#717171" }}>Cusco, Cusco, Perú</p>
            </section>

            <section className="c-host-profile">
              <h2 className="c-host-profile__title">Conoce al anfitrión</h2>
              <div className="c-host-profile__content">
                <div className="c-host-profile__avatar">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop" alt="Hilda" />
                </div>
                <div className="c-host-profile__info">
                  <h3 className="c-host-profile__name">Hilda</h3>
                  <div className="c-host-profile__stats">
                    <span>★ 92 reseñas</span>
                    <span>✓ Identidad verificada</span>
                    <span>★ Superanfitrión</span>
                  </div>
                  <p style={{ fontSize: "14px", lineHeight: 1.5, marginBottom: "16px" }}>Los Superanfitriones son anfitriones con experiencia y valoraciones muy altas que se comprometen a ofrecer estancias extraordinarias a sus huéspedes.</p>
                  <div className="c-host-profile__badges">
                    <div className="c-host-profile__badge">
                      <i className="fas fa-bolt"></i>
                      <span>Tiempo de respuesta: en menos de una hora</span>
                    </div>
                    <div className="c-host-profile__badge">
                      <i className="fas fa-comment"></i>
                      <span>Tasa de respuesta: 100%</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "12px", color: "#717171", marginTop: "16px" }}>Para proteger tu pago, nunca transfieras dinero ni te comuniques fuera de la página o la aplicación de Airbnb.</p>
                </div>
              </div>
            </section>

            <section className="c-policies">
              <h2 className="c-policies__title">Lo que debes saber</h2>
              <div className="c-policies__grid">
                <div className="c-policy">
                  <h3 className="c-policy__title">Normas de la casa</h3>
                  <ul className="c-policy__list">
                    <li className="c-policy__item">Llegada: A partir de las 14:00</li>
                    <li className="c-policy__item">Salida: 11:00</li>
                    <li className="c-policy__item">2 huéspedes como máximo</li>
                  </ul>
                  <button className="c-policy__more">Mostrar más</button>
                </div>
                <div className="c-policy">
                  <h3 className="c-policy__title">Seguridad y propiedad</h3>
                  <ul className="c-policy__list">
                    <li className="c-policy__item">No se indica si hay detector de monóxido</li>
                    <li className="c-policy__item">Se indica que hay detector de humo</li>
                    <li className="c-policy__item">Se requiere un depósito de S/ 100</li>
                  </ul>
                  <button className="c-policy__more">Mostrar más</button>
                </div>
                <div className="c-policy">
                  <h3 className="c-policy__title">Política de cancelación</h3>
                  <ul className="c-policy__list">
                    <li className="c-policy__item">Cancelación gratuita durante 48 horas</li>
                    <li className="c-policy__item">Cancela antes del 22 de nov. para obtener un reembolso parcial</li>
                  </ul>
                  <button className="c-policy__more">Mostrar más</button>
                </div>
              </div>
            </section>
          </div>

          <aside className="c-booking">
            <div className="c-booking__price">
              <div>
                <span className="c-booking__amount">S/256</span>
                <span className="c-booking__amount-label"> noche</span>
              </div>
              <div className="c-booking__rating">
                <span>★</span>
                <span>4.86</span>
                <span>·</span>
                <span style={{ textDecoration: "underline" }}>28 reseñas</span>
              </div>
            </div>

            <form className="c-booking__form">
              <div className="c-booking__dates">
                <div className="c-booking__date">
                  <label className="c-booking__date-label">Llegada</label>
                  <div className="c-booking__date-value">28/11/2025</div>
                </div>
                <div className="c-booking__date">
                  <label className="c-booking__date-label">Salida</label>
                  <div className="c-booking__date-value">30/11/2025</div>
                </div>
              </div>
              <div className="c-booking__guests">
                <div>
                  <label className="c-booking__date-label">Huéspedes</label>
                  <div className="c-booking__date-value">1 huésped</div>
                </div>
                <i className="fas fa-chevron-down"></i>
              </div>
            </form>

            <button className="c-booking__button">Reservar</button>

            <p className="c-booking__note">No se hará ningún cargo por el momento</p>

            {/* <div className="c-booking__fees">
                    <div className="c-booking__fee">
                        <span className="c-booking__fee-label">S/256 x 2 noches</span>
                        <span>S/512</span>
                    </div>
                    <div className="c-booking__fee">
                        <span className="c-booking__fee-label">Tarifa de servicio de Airbnb</span>
                        <span>S/73</span>
                    </div>
                    <div className="c-booking__total">
                        <span>Total antes de impuestos</span>
                        <span>S/585</span>
                    </div>
                </div> */}

            <div className="c-booking__report">
              <a href="#" className="c-booking__report-link">
                <i className="fas fa-flag"></i>
                <span>Denunciar este anuncio</span>
              </a>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
};

export default PlaceDetail;