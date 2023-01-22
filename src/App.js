import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    const title = "Welcome to the new Blog!";
    const likes = 50;
    // const person = {name: "Yosho", age: 30};
    const link = "https://www.google.com";

  return (
    <div className="App">
        <Navbar />
      <div className="content">
          <Home />
      </div>
    </div>
  );
}

export default App;
