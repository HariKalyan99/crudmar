import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Postsection from "../components/Postsection";
import Crudstorecontextprovider from "../store/Crudstore";

function App() {
  return (
    <Crudstorecontextprovider>
      <Header />
      <Postsection />
      <Footer />
    </Crudstorecontextprovider>
  );
}

export default App;
