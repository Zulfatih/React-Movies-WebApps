import Appbar from "./components/Appbar";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Appbar />
      <Hero />
      <CardList header="Trending" />
      <CardList header="What's Popular" />
      <Footer />
    </div>
  );
}

export default App;
