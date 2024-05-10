// layout.tsx
import React from "react";
import Head from "next/head";
import reducer, { initialState } from "../../src/app/context/StateReducers";
import { StateProvider } from "../../src/app/context/StateContext";
import Navbar from "../../src/app/components/navbar";
import Footer from "../../src/app/components/Footer";

interface LayoutProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const RootLayout: React.FC<LayoutProps> = ({ Component, pageProps }) => {
  // Verifica se estamos no lado do cliente
  const isClient = typeof window !== 'undefined';

  return (
    <html>
      <body>
        {isClient && (
        <StateProvider initialState={initialState} reducer={reducer}>
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>Fiverr Clone</title>
          </Head>
          <div className="relative flex flex-col min-h-screen justify-between">
            <Navbar />
            <div className="mb-auto w-full mx-auto">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </StateProvider>
        )}
      </body>
    </html>
  );
}

export default RootLayout;
