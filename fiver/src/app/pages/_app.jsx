import { useRouter } from "next/router";
import "@/styles/globals.css";
import reducer, { initialState } from "../context/StateReducers";
import { StateProvider } from "../context/StateReducers";
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) { // Corrigido o nome da variável pageProps
  const router = useRouter();
  console.log('_app.tsx');

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="relative flex flex-col min-h-screen justify-between"> {/* Corrigido o nome da classe e removido h-screen */}
        <Navbar /> {/* Corrigido o nome do componente Navbar */}
        <div className={`${router.pathname !== "/" ? "mt-36" : ""} mb-auto w-full mx-auto`}> {/* Corrigido o posicionamento do navbar */}
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </StateProvider>
  );
}