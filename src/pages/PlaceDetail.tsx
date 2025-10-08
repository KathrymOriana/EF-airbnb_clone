import { useParams } from "react-router-dom";
import { DESTINATIONS } from "../data/destinations.data";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import NotFound from "./NotFound";

const PlaceDetail = () => {
  const { city, id } = useParams<{ city: string; id: string }>();
  const destination = DESTINATIONS.find(
    (d) => d.city.toLowerCase() === city?.toLowerCase()
  );
  const place = destination?.places.find((p) => p.id === Number(id));

  if (!place) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      <Header />
      <main className="main">
        <h1>{place.title}</h1>
        <section className="place-info">
          <p style={{ whiteSpace: 'pre-wrap' }}>{place.description}</p>
          <p><strong>Precio:</strong> S/. {place.pricePerNight} por noche</p>
          <p><strong>Reseñas:</strong> {place.reviews} · ⭐ {place.rating}</p>
          <h3>Servicios</h3>
          <ul>
            {place.amenities.map((a, i) => (
              <li style={{ whiteSpace: 'pre-wrap' }} key={i} dangerouslySetInnerHTML={{ __html: a }} />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
 
export default PlaceDetail;