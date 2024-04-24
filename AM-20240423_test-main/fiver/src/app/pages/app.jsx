import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, PageProps }) {
  return (
    <div>
      <div className="mb-auto w-full mx-auto">
        <Component {...PageProps} />
      </div>
      <Footer />
    </div>
  );
}
