import "lenis/dist/lenis.css";
import { useLenis } from "./hooks/useLenis";
import { Index } from "./Index";

function App() {
  useLenis();
  return <Index />;
}

export default App;
