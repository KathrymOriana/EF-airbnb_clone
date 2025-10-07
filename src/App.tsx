import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import MobileNav from "./components/layout/MobileNav"
import DestinationListing from "./components/modules/DestinationListing"

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <DestinationListing />
      </main>
      <Footer />
      <MobileNav />
    </>
  )
}

export default App
