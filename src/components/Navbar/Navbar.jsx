import React from "react";
import Logo from "../../assets/happy-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavMenu = [
  {
    id: 1,
    title: "Services",
    link: "#",
  },
  {
    id: 2,
    title: "Works",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="py-8 bg-gray text-white">
        <div className="container flex justify-between items-center ">
          {/* Image */}
          <div>
            <img src={Logo} alt="" className="w-20" />
          </div>
          {/* Nav Menu section */}
          <div>
            <ul className="md:flex justify-center gap-10 hidden">
              {NavMenu.map((item, i) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="hover:text-primary text-xl font-semibold text-white/70 duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* Mobile Hamburget Menu */}
            <div className="md:hidden">
              <GiHamburgerMenu className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
