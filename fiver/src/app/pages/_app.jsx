import Head from "next/head"; // Adicionado importação do componente Head
import { useRouter } from "next/router";
import "@/styles/globals.css";
import reducer, { initialState } from "../context/StateReducers";
import { StateProvider } from "../context/StateReducers";

export default function App({ Component, pageProps }) { // Corrigido o nome da variável pageProps
  const router = useRouter();
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" /> {/* Corrigido o atributo rel */}
        <title>Fiverr Clone</title>
      </Head>
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
