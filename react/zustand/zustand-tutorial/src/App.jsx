import {useBears} from "../store";
import {Toaster} from "react-hot-toast";
import toast from "react-hot-toast";
import './App.css';

function App() {
  const bears = useBears((state) => state.bears);
  const increaseBears = useBears((state) => state.increaseBears);
  const resetBears = useBears((state) => state.resetBears);
  const updateBears = useBears((state) => state.updateBears);
  console.log("bears", bears)
  return (
    <div className="flex justify-center gap-20 flex-col h-screen">
      <Toaster position="top-right" />
      <div className="text-4xl text-center">Bears: {bears}</div>
      <div className="text-xl flex justify-center space-x-4">
        <button className="border-2 border-black rounded-md bg-green-400 p-2" onClick={increaseBears}>Increase Bears by 1</button>
        <button className="border-2 border-black rounded-md bg-green-400 p-2" onClick={resetBears}>Reset Bears</button>
        <button className="border-2 border-black rounded-md bg-green-400 p-2" onClick={() => updateBears(10)}>Update Bears value to 10</button>

        <button className="border-2 border-black rounded-md bg-green-400 p-2" onClick={() => toast('Plain message')}>Show Toast</button>
      </div>
    </div>
  )
}

export default App
