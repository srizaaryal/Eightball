import "./styles.css";
import EightBall from "./EightBall";
import EBdata from "./data";

export default function App() {
  return (
    <div className="App">
      <EightBall data={EBdata} />
    </div>
  );
}
