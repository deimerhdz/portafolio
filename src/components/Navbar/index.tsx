import { useState } from "react";

interface NavbarLinkProps {
  label: string;
  isOpen?: boolean;
}

const links: string[] = ["Home", "Project", "Resume"];

export const NavbarLink = ({ label, isOpen }: NavbarLinkProps) => {
  return (
    <>
      {isOpen ? (
        <li className="list-none w-ful text-center p-3 transition-all hover:text-esmeralda cursor-pointer">
          {label}
        </li>
      ) : (
        <li className="list-none p-3 hover:text-esmeralda transition-all cursor-pointer">
          {label}
        </li>
      )}
    </>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white bg-grafito">
      <div className="page-container flex justify-between items-center py-3">
        <a className="w-52 hover:scale-105 transition-all">
          Deimer Hernandez <span className="text-esmeralda text-2xl">.</span>
        </a>

        <ul className="hidden xl:flex items-center gap-12 text-base">
          {links.map((link) => (
            <NavbarLink key={link} label={link} />
          ))}
          <li className="p-3 hover:text-esmeralda transition-all cursor-pointer">
            <a className="py-3 px-4 font-semibold rounded-full bg-esmeralda hover:bg-white text-negro-azulado transition-all ">
              Get in touch
            </a>
          </li>
        </ul>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        <div
          style={{ transition: "transform 0.3s ease, opacity o.es ease" }}
          className={`absolute xl:hidden top-24 left-0 w-full bg-grafito flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        >
          {links.map((link) => (
            <NavbarLink key={link} label={link} isOpen={isMenuOpen} />
          ))}
          <li className="list-none w-ful text-center p-4 transition-all cursor-pointer">
            <a className="py-3 px-4 font-semibold rounded-full bg-esmeralda hover:bg-white text-negro-azulado transition-all ">
              Get in touch
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};
