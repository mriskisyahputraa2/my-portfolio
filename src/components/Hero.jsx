import { HERO } from "../constants/index";
import rizkiImg from "../assets/rizki-.jpg";

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
          {/* hero deskripsi */}
          <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        </div>
        {/* hero foto profile */}
        <div className="w-full md:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={rizkiImg}
              alt="Muhammad Rizki Syahputra"
              width={550}
              height={550}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
