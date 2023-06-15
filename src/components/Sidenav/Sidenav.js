import React, { useState, useEffect, useRef } from "react";
import FaceAvatar from "../FaceAvatar/FaceAvatar";
import "./Sidenav.scss";

const navItems = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "experience",
    name: "Experience",
  },
  {
    id: "fun-facts",
    name: "Fun facts",
  },
];

export default function Sidenav() {
  const myRef = useRef();
  const [active, setActive] = useState(navItems[0].id);

  useEffect(() => {

    const url = window.location.href;
    const hashIndex = url.lastIndexOf("#");
    if (hashIndex > 0) {
      const id = url.substring(hashIndex + 1);
      scrollToId(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function scrollToId(id) {
    if (!id || navItems.filter((el) => el.id === id).length !== 1) {
      document.getElementById(active).scrollIntoView({
        block: "nearest",
        inline: "center",
        behavior: "smooth",
        alignToTop: false,
      });
      setActive(active);
    } else {
      document.getElementById(id).scrollIntoView({
        block: "nearest",
        inline: "center",
        behavior: "smooth",
        alignToTop: false,
      });
      setActive(id);
    }
  }

  function handleClick(e, id) {
    e.stopPropagation();
    setActive(id);
  }

  return (
    <div className="sidenav">
      <FaceAvatar />
      <h2>Vlad Hutupasu</h2>
      <nav ref={myRef}>
        {navItems.map((navItem) => {
          return (
            <a
              href={"#" + navItem.id}
              key={navItem.id}
              className={navItem.id === active ? "active" : ""}
              onClick={(e) => handleClick(e, navItem.id)}
            >
              {navItem.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
