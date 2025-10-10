import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import LoginContainer from "../components/modules/LoginContainer";

const Login = () => {
  return (
    <>
      <Header isCompactPermanent={true}/>
      <main className="main c-main--login">
        <LoginContainer />
      </main>
      <Footer />
    </>
  );
};

export default Login;
