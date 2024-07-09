import { Mushroom } from "./components/Mushroom";
import { Gnome } from "./components/Gnome";
import { Chest } from "./components/Chest";

function App() {
  return (
    <div>
      <Mushroom />
      <Mushroom />
      <Mushroom />
      <Gnome key={1} gnome={1} x={100} y={100} />
      <Gnome key={2} gnome={2} x={135} y={100} facing={'left'}/>
      <Chest />
    </div>
  );
}

export default App;
