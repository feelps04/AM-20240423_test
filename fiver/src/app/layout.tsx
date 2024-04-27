import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

/*// Importação de componentes e estilos
import Head from "next/head"; // Adicionado importação do componente Head
import { useRouter } from "next/router";
import "@/styles/globals.css"; // Estilos globais da aplicação
import reducer, { initialState } from "../context/StateReducers"; // Importação do reducer e estado inicial do contexto
import { StateProvider } from "../context/StateReducers"; // Importação do StateProvider do contexto

// Componente principal que define o layout da aplicação
export default function App({ Component, pageProps }) { // Corrigido o nome da variável pageProps
  const router = useRouter(); // Hook useRouter para acessar o objeto de roteamento
  return (
    <StateProvider initialState={initialState} reducer={reducer}> {/* Provedor de estado do contexto */}
      {/* Componente Head para configurar o cabeçalho do documento HTML */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" /> {/* Ícone da página */}
        <title>Fiverr Clone</title> {/* Título da página */}
      </Head>
      {/* Layout principal da aplicação */}
      <div className="relative flex flex-col min-h-screen justify-between"> {/* Corrigido o nome da classe e removido h-screen */}
        {/* Componente de navegação */}
        <Navbar /> {/* Corrigido o nome do componente Navbar */}
        {/* Renderização do componente da página atual */}
        <div className={`${router.pathname !== "/" ? "mt-36" : ""} mb-auto w-full mx-auto`}> {/* Corrigido o posicionamento do navbar */}
          <Component {...pageProps} /> {/* Renderização do componente da página atual */}
        </div>
        {/* Componente do rodapé */}
        <Footer />
      </div>
    </StateProvider>
  );
}
/*
// Importação de componentes e estilos
import Head from "next/head"; // Adicionado importação do componente Head
import { useRouter } from "next/router";
import "@/styles/globals.css"; // Estilos globais da aplicação
import reducer, { initialState } from "../context/StateReducers"; // Importação do reducer e estado inicial do contexto
import { StateProvider } from "../context/StateReducers"; // Importação do StateProvider do contexto

// Componente principal que define o layout da aplicação
export default function App({ Component, pageProps }) { // Corrigido o nome da variável pageProps
  const router = useRouter(); // Hook useRouter para acessar o objeto de roteamento
  return (
    <StateProvider initialState={initialState} reducer={reducer}> {/* Provedor de estado do contexto */}
      {/* Componente Head para configurar o cabeçalho do documento HTML */}
     // <Head>
      //  <link rel="shortcut icon" href="/favicon.ico" /> {/* Ícone da página */}
      //  <title>Fiverr Clone</title> {/* Título da página */}
      //</Head>
      {/* Layout principal da aplicação */}
      //<div className="relative flex flex-col min-h-screen justify-between"> {/* Corrigido o nome da classe e removido h-screen */}
        {/* Componente de navegação */}
        //<Navbar /> {/* Corrigido o nome do componente Navbar */}
        {/* Renderização do componente da página atual */}
        //<div className={`${router.pathname !== "/" ? "mt-36" : ""} mb-auto w-full mx-auto`}> {/* Corrigido o posicionamento do navbar */}
          //<Component {...pageProps} /> {/* Renderização do componente da página atual */}
        //</div>
        {/* Componente do rodapé */}
       // <Footer />
      //</div>
    //</StateProvider>
  //);
//}
//*/
