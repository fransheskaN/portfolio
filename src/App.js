import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter"
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header grid">
          <Gallery />
          <Counter></Counter>
        </header>
      </div>
    );
  }
}

export default App;