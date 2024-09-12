import { HERO } from "../constants/index";

export default function Hero() {
  return (
    <>
      <section className="flex min-h-screen flex-wrap items-center">
        <div className="w-full md:w-1/2">
          {/* hero name */}
          <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
            {HERO.name}
          </h2>
          {/* hero menyapa */}
          <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
            {HERO.greet}
          </p>
        </div>
      </section>
    </>
  );
}
