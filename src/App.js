import { RecoilRoot } from "recoil";
import Animals from "./Animals";
import PickAnimal from "./PickAnimals";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* menambahkan component pick animals */}
        <PickAnimal />
        <Animals />
      </div>
    </RecoilRoot>
  );
}
