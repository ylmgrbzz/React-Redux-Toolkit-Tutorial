import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <Counter />
      <PostsList />
    </div>
  );
}

export default App;
