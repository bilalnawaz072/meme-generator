import MemeEditor from "./components/MemeEditor";
import { MemeProvider } from "./context/MemeContext";


export default function Home() {
  return (
    <MemeProvider>
      <div>
        
        <main>
          <MemeEditor />
        </main>
      </div>
    </MemeProvider>
  );
}
