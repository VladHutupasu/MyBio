import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const myRef = useRef();
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      threshold: 0.4,
    });
    const sections = document.querySelectorAll(".main-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    }, 100);
    }
  }, [location.hash]);

  function handleScroll(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.id);
        setActive(entry.target.id);
      }
    });
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
            >
              {navItem.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
