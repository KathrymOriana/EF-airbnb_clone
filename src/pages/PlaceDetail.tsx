import { useParams } from "react-router-dom";
import { DESTINATIONS } from "../data/destinations.data";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import NotFound from "./NotFound";
import MobileNav from "../components/layout/MobileNav";
import PropertyTitle from "../components/components/PropertyTitle";
import GalleryPlace from "../components/components/GalleryPlace";
import PropertyDetail from "../components/components/PropertyDetail";
import BookingAside from "../components/components/BookingAside";

const PlaceDetail = () => {
  const { city, id } = useParams<{ city: string; id: string }>();
  const destination = DESTINATIONS.find(
    (d) => d.city.toLowerCase() === city?.toLowerCase()
  );
  const place = destination?.places.find((p) => p.id === Number(id));
  const host = place?.host;

  if (!place) {
    return <NotFound />;
  }

  return (
    <>
      <Header isCompactPermanent={true} />

      <main className="main o-container o-container--margin">
        <PropertyTitle title={place.title} />
        <GalleryPlace images={place.images} />

        <div className="c-main c-main--detail">
          <PropertyDetail place={place} host={host} destination={destination} />
          <BookingAside place={place} />
        </div>
         <section className="c-policies">
        <h2 className="c-policies__title">Lo que debes saber</h2>
        <div className="c-policies__grid">
          <div className="c-policy">
            <h3 className="c-policy__title">Normas de la casa</h3>
            <ul className="c-policy__list">
              <li className="c-policy__item">
                Llegada: A partir de las 14:00
              </li>
              <li className="c-policy__item">Salida: 11:00</li>
              <li className="c-policy__item">2 huéspedes como máximo</li>
            </ul>
            <button className="c-policy__more">Mostrar más</button>
          </div>
          <div className="c-policy">
            <h3 className="c-policy__title">Seguridad y propiedad</h3>
            <ul className="c-policy__list">
              <li className="c-policy__item">
                No se indica si hay detector de monóxido
              </li>
              <li className="c-policy__item">
                Se indica que hay detector de humo
              </li>
              <li className="c-policy__item">
                Se requiere un depósito de S/ 100
              </li>
            </ul>
            <button className="c-policy__more">Mostrar más</button>
          </div>
          <div className="c-policy">
            <h3 className="c-policy__title">Política de cancelación</h3>
            <ul className="c-policy__list">
              <li className="c-policy__item">
                Cancelación gratuita durante 48 horas
              </li>
              <li className="c-policy__item">
                Cancela antes del 22 de nov. para obtener un reembolso
                parcial
              </li>
            </ul>
            <button className="c-policy__more">Mostrar más</button>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
};

export default PlaceDetail;
