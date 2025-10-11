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

        <div className="c-main">
          <PropertyDetail place={place} host={host} destination={destination} />
          <BookingAside place={place} />
        </div>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
};

export default PlaceDetail;
