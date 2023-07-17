import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda online"} />
    </div>
  );
}

export default App;
