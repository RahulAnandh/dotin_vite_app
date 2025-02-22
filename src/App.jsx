import Content from "./components/content/index";
import SelectedList from "./components/selected_list";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Content />
      </div>
      <div className="selected_list">
        <SelectedList />
      </div>
    </div>
  );
}

export default App;
