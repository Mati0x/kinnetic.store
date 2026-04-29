"use client"

import { useEffect } from "react"

const carouselImages = [
  {
    src: "/keep-white.png",
    alt: "Keep It Simple white garment",
  },
  {
    src: "/kinnetic-expression-black.png",
    alt: "Expression black garment",
  },
  {
    src: "/kinnetic-expression-gray.png",
    alt: "Expression gray garment",
  },
  {
    src: "/kinnetic-expression-gris.png",
    alt: "Expression light garment",
  },
  {
    src: "/kinnetic-keepitsimple-gray.png",
    alt: "Keep It Simple gray logo",
  },
]

export default function Home() {
  useEffect(() => {
    // Mouse Blob Follower
    const blob = document.getElementById("cursor-blob")
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (blob) {
        blob.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
    }
    document.addEventListener("mousemove", handleMouseMove)

    // Parallax Effect
    const handleScroll = () => {
      const scroll = window.pageYOffset

      // Hero parallax
      const parallaxTexts = document.querySelectorAll(".parallax-text")
      parallaxTexts.forEach((text) => {
        const speed = text.getAttribute("data-speed")
        if (speed) {
          ; (text as HTMLElement).style.transform = `translateX(${scroll * Number.parseFloat(speed) * 0.1}px)`
        }
      })

      const heroImg = document.getElementById("hero-img")
      if (heroImg) {
        heroImg.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.2}px)) scale(${1 + scroll * 0.0005})`
      }

      // Floating labels in project section
      const labels = document.querySelectorAll(".floating-label")
      labels.forEach((label, index) => {
        const direction = index % 2 === 0 ? 1 : -1
          ; (label as HTMLElement).style.transform = `translateY(${scroll * 0.1 * direction}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)

    // Simple reveal on enter (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".reveal-text").forEach((text) => {
      observer.observe(text)
    })

    // Add smooth scrolling for anchor links
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const href = anchor.getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="blob" id="cursor-blob"></div>

      <nav>
        <div className="logo">KINNETIC</div>
        <ul className="nav-links">
          <li>
            <a href="#work">Drops</a>
          </li>
          <li>
            <a href="#about">Quienes somos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero">
          <img
            src="/kinnetic-logo-white.png"
            alt="Kinnetic logo"
            id="hero-img"
            width={500}
            height={500}
            className="hero-img"
          />
          <div className="hero-title-container container">
            {/* <span className="huge-type parallax-text" data-speed="-2">
              KINNETIC
            </span> */}
            {/* <span className="huge-type outline-text parallax-text" data-speed="2" style={{ paddingLeft: "200px" }}>
              SYSTEMS
            </span> */}
          </div>
        </section>

        {/* INTRO */}
        <section id="about">
          <div className="container about-grid">
            <div style={{ maxWidth: "800px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontFamily: "var(--syne)",
                  marginBottom: "40px",
                }}
              >
                KINNETIC STREETWEAR.
              </h2>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "#888",
                }}
              >
                Kinnetic streetwear. Alguna muy breve descripcion de la marca aca.
              </p>
            </div>
            <img
              src="/kinnetic-keepitsimple-white.png"
              alt="Keep It Simple logo"
              className="about-mark"
            />
          </div>
        </section>

        {/* MARQUEE */}
        <div className="scrolling-marquee">
          <div className="marquee-inner">
            <span className="huge-type outline-text">NEW DROP — NEW STYLES — KINNETIC</span>
            <span className="huge-type outline-text">NEW DROP — NEW STYLES — KINNETIC</span>
          </div>
        </div>

        {/* WORK SECTION */}
        <section id="work" className="container">
          <div className="sticky-type">ARCHIVE</div>

          {/* Project 1 */}
          <div className="project-row">
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>001 / KEEP IT SIMPLE</span>
              <img
                src="/kinnetic-keepitsimple-white.png"
                alt="Keep It Simple logo"
                className="drop-mark"
              />
              <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                DROP 1
              </h3>
              <p>
                Alguna muy breve descripcion o carasteristica del drop aca.
              </p>
              <div className="divider"></div>
              <p>YEAR: 2026</p>
            </div>
            <div className="project-media">
              <img
                src="/keep-black.png"
                alt="Keep It Simple black garment"
                className="project-image"
              />
              <div className="floating-label huge-type outline-text" style={{ fontSize: "8rem" }}>
                SIMPLE
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-row" style={{ flexDirection: "row-reverse" }}>
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>002 / EXPRESSION BY KINNETIC </span>
              <img
                src="/expression-logo.png"
                alt="Expression logo"
                className="drop-mark"
              />
              <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                DROP 2
              </h3>
              <p>
                Alguna descripcion o carasteristica del drop aca.
              </p>
              <div className="divider"></div>
              <p>YEAR: 2026</p>
            </div>
            <div className="project-media">
              <img
                src="/kinnetic-expression-bosque.png"
                alt="Expression bosque garment"
                className="project-image"
              />
              <div
                className="floating-label huge-type outline-text"
                style={{ fontSize: "8rem", right: "auto", left: "-100px" }}
              >
                EXPRESSION
              </div>
            </div>
          </div>
        </section>

        {/* OVERLAPPING COMPOSITION SECTION */}
        <section>
          <div className="container composition">
            <div className="comp-item-1">
              <img
                src="/keep-white.png"
                className="comp-image"
                alt="Keep It Simple white garment"
              />
            </div>
            <div className="comp-item-2">
              <img
                src="/kinnetic-expression-gray.png"
                className="comp-image"
                alt="Expression gray garment"
              />
            </div>
            <div className="comp-item-3">
              <div
                style={{
                  background: "var(--accent)",
                  padding: "40px",
                  color: "white",
                }}
              >
                <h4 style={{ fontFamily: "var(--syne)", fontSize: "2rem" }}>LAYERED DEPTH</h4>
                <p style={{ marginTop: "20px" }}>
                  Se puede poner algo aca si te parece.
                </p>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "400px",
                zIndex: 10,
              }}
            >
              <img
                src="/kinnetic-logo-white.png"
                className="comp-image"
                alt="Layer 3"
              />
            </div>
          </div>
        </section>

        {/* CAROUSEL */}
        <section className="carousel-section">
          <div className="container">
            <div className="carousel-heading">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>003 / REMAINING ARCHIVE</span>
              <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                CAROUSEL
              </h3>
            </div>
          </div>
          <div className="image-carousel" aria-label="Kinnetic archive carousel">
            <div className="carousel-track">
              {[...carouselImages, ...carouselImages].map((image, index) => (
                <div className="carousel-card" key={`${image.src}-${index}`}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact">
          <div className="container">
            <div className="footer-cta">
              <a href="mailto:hello@kinnetic.studio">keep it — simple</a>
            </div>
            <div className="divider"></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--syne)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                color: "#555",
              }}
            >
              <div>© 2026 KINNETIC</div>
              <div style={{ display: "flex", gap: "30px" }}>
                <a
                  href="https://www.instagram.com/kinnetic.streetwear/?hl=es-la"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-cta"
                  aria-label="Open Kinnetic Streetwear on Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" />
                    <circle cx="12" cy="12" r="4.25" />
                    <circle cx="17.35" cy="6.65" r="1.15" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
              <div>MONTEVIDEO // URUGUAY</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
