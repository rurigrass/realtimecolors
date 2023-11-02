import BottomBar from "./components/BottomBar/BottomBar";
import { useColoursStore } from "./state/colours";

function App() {
  const { textColour, backgroundColour } = useColoursStore();

  return (
    <div className="h-[200vh]" style={{ backgroundColor: backgroundColour }}>
      <BottomBar />
      <div className="flex flex-col items-center justify-center h-[80vh] ">
        <p className="font-extrabold text-9xl" style={{ color: textColour }}>
          SWAG
        </p>
        <p className={`font-bold text-2xl `} style={{ color: textColour }}>
          nothing else matters
        </p>
      </div>
    </div>
  );
}

export default App;
