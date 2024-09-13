import { ABOUT } from "../constants";

export default function About() {
  return (
    <>
      <section className="flex flex-col max-w-4xl gap-12 pt-12" id="about">
        <h2 className="text-center text-3xl lg:text-4xl">About</h2>
        <div>
          {ABOUT.map((about, index) => (
            <p key={index} className="mb-4 text-lg lg:text-xl">
              {about}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
