import logo from "../assets/logo-2.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";

export default function Footer() {
  return (
    <>
      <div className="mb-8 mt-20">
        <div className="flex items-center justify-center">
          <img src={logo} width={100} className="my-20" />
        </div>
        <div className="flex items-center justify-center gap-8">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="nooper noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
          &copy; Muhammad Rizki Syahputra - 2024
        </p>
      </div>
    </>
  );
}
