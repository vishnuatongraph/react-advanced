import "./App.css";
import { SplitScreen } from "./components/split-screen";

const LeftSide = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSide = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSide title={"Right"} />
      <RightSide title={"Left"} />
    </SplitScreen>
  );
}

export default App;
