import ErrorIllustration from "../components/components/ErrorIllustration";
import ErrorMessage from "../components/components/ErrorMessage";

const NotFound = () => {
  return (
    <>
      <main className=" o-container c-error-page">
        <ErrorMessage />
        <ErrorIllustration />
      </main>
    </>
  );
};

export default NotFound;
