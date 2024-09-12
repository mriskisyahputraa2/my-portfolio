import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div className="relative h-full overflow-y-hidden antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Navbar />

          {/* hero section */}
          <Hero />
        </div>
      </div>
    </>
  );
}
