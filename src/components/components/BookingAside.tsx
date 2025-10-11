import type {Place} from "../../shared/types/place.types"

interface BookingAsideProps {
  place: Place;
}

const BookingAside = ({ place } : BookingAsideProps) => {
    return ( 
        <>
        <aside className="c-booking">
            <div className="c-booking__price">
              <div>
                <span className="c-booking__amount">{place.pricePerNight}</span>
                <span className="c-booking__amount-label"> x noche</span>
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

            <p className="c-booking__note">
              No se hará ningún cargo por el momento
            </p>

            <div className="c-booking__report">
              <a href="#" className="c-booking__report-link">
                <i className="fas fa-flag"></i>
                <span>Denunciar este anuncio</span>
              </a>
            </div>
          </aside></>
    );
}
 
export default BookingAside;