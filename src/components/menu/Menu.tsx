"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home", num: "01" },
  { path: "/work", label: "Work", num: "02" },
  { path: "/about", label: "About", num: "03" },
  { path: "/contact", label: "Contact", num: "04" },
  { path: "/lab", label: "Lab", num: "05" },
];

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Link holders için dinamik referans dizisi */
  const linkHoldersRef = useRef<(HTMLDivElement | null)[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  /* GSAP Timeline */
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      // Geçerli DOM elemanlarını filtrele
      const validLinks = linkHoldersRef.current.filter(Boolean);

      // Başlangıç durumları
      gsap.set(validLinks, { y: 100, opacity: 0 });
      gsap.set(sidebarRef.current, { y: 30, opacity: 0 });
      gsap.set(".menu-links-col", { opacity: 0, pointerEvents: "none" });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          ".menu-links-col",
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.4,
          },
          "-=0.6",
        )
        .to(
          validLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.04,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          sidebarRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        );
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
      // Menü açıldığında arka planın scroll olmasını kilitle
      document.body.style.overflow = "hidden";
    } else {
      tl.current?.reverse();
      // Menü kapandığında kilidi kaldır
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo1">
          <Link href={"/"}>NextJS x GSAP</Link>
        </div>
        <div className="menu-open cursor-pointer" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo2">
              <Link href={"/"}>NextJS x GSAP</Link>
            </div>
            <div className="menu-close cursor-pointer" onClick={toggleMenu}>
              <p>
                Close <span>&#x2715;</span>
              </p>
            </div>
          </div>

          <div className="menu-split-layout">
            {/* Sol Taraf: Büyük Modern Navigasyon Linkleri */}
            <div className="menu-links-col">
              <div className="menu-links">
                {menuLinks.map((link, index) => (
                  <div className="menu-link-item" key={link.label}>
                    <div
                      className="menu-link-item-holder"
                      onClick={toggleMenu}
                      ref={(el) => {
                        linkHoldersRef.current[index] = el;
                      }}
                    >
                      <Link href={link.path} className="menu-link">
                        <span className="link-num">{link.num}</span>
                        <span className="link-text">{link.label}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ Taraf: Yan Bilgi Alanı (Sidebar) */}
            <div className="menu-sidebar-col" ref={sidebarRef}>
              <div className="sidebar-section">
                <span className="sidebar-title">Featured Project</span>
                <Link
                  href="/work"
                  onClick={toggleMenu}
                  className="featured-card"
                >
                  <span className="featured-subtitle">Digital Experience</span>
                  <span className="featured-title">Aether Studio &#8599;</span>
                </Link>
              </div>

              <div className="sidebar-section">
                <span className="sidebar-title">Social Networks</span>
                <div className="sidebar-socials">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    X &#8599;
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    Instagram &#8599;
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    LinkedIn &#8599;
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    Facebook &#8599;
                  </Link>
                </div>
              </div>

              <div className="sidebar-section">
                <span className="sidebar-title">Legal & Policy</span>
                <div className="sidebar-socials">
                  <Link href="/privacy" onClick={toggleMenu}>
                    Privacy Policy
                  </Link>
                  <Link href="/terms" onClick={toggleMenu}>
                    Terms of Service
                  </Link>
                </div>
              </div>

              <div className="sidebar-section">
                <span className="sidebar-title">Direct Contact</span>
                <p className="sidebar-text">info@nextjsxgsap.com</p>
                <p className="sidebar-text">+90 123 456 78 90</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
