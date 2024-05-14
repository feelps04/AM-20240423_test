'use client'
import React, { useEffect } from "react";
import Head from "next/head";
import reducer, { initialState } from "../app/context/StateReducers";
import { StateProvider } from "../app/context/StateContext";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import './globals.css'


interface LayoutProps {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  useEffect(() => {
    document.title = 'Fiverr Clone';
  }, []);

  return (
    < html >
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Fiverr Clone</title>
      </Head>
      <body>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Navbar />
          {children}
          <Footer />
        </StateProvider>
      </body>
    </html >
  );
};

export default Layout;
