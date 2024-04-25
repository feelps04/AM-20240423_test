import Footer from "../components/Footer";
import "@/styles/globals.css";
import AuthWrapper from "../components/AuthWrapper"

export default function App({ Component, PageProps }) {
  return (
    <StateProvider initialState={initialState} reducer = {reducer}>
      <div className="mb-auto w-full mx-auto">
        <Component {...PageProps} />
      </div>
      
      <Footer />
    </StateProvider>
  );
}
