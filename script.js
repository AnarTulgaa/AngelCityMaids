const routes = {
  "/": renderHomePage,
  "/services": renderServicesPage,
  "/pricing": renderPricingPage,
  "/about": renderAboutPage,
  "/contact": renderContactPage,
};

const services = [
  {
    title: "Standard Cleaning",
    description: "Perfect for maintaining a clean and healthy home on a regular basis.",
    icon: "home",
    link: "#/services",
  },
  {
    title: "Deep Cleaning",
    description: "A thorough top-to-bottom clean for homes that need extra attention.",
    icon: "sparkles",
    link: "#/services",
  },
  {
    title: "Move-In / Move-Out",
    description: "Ensure your old or new home is spotless for the next chapter.",
    icon: "key",
    link: "#/services",
  },
  {
    title: "Airbnb Cleaning",
    description: "Fast, reliable turnover cleaning to keep your guests happy and reviews high.",
    icon: "building",
    link: "#/services",
  },
  {
    title: "Office Cleaning",
    description: "Professional commercial cleaning for a productive workspace.",
    icon: "briefcase",
    link: "#/services",
  },
];

const features = [
  {
    title: "Experienced Cleaners",
    description:
      "Our team consists of vetted, trained, and highly experienced professionals who know how to make a home shine.",
    icon: "users",
  },
  {
    title: "Eco-Friendly Products",
    description:
      "We use safe, non-toxic, and environmentally friendly cleaning products that are tough on dirt but safe for your family and pets.",
    icon: "leaf",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Book online in seconds. We offer weekly, bi-weekly, monthly, or one-time cleans that fit around your busy life.",
    icon: "calendar-clock",
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "If you are not completely satisfied with our service, let us know within 24 hours and we will re-clean for free.",
    icon: "heart-handshake",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Online",
    description:
      "Select your service, choose a date and time, and get instant pricing. It takes less than 60 seconds.",
    icon: "calendar",
  },
  {
    number: "02",
    title: "We Clean",
    description:
      "Our fully equipped, professional cleaners arrive on time and make your home sparkle from top to bottom.",
    icon: "sparkles",
  },
  {
    number: "03",
    title: "Enjoy Your Home",
    description:
      "Come back to a beautifully clean, fresh-smelling home and spend your free time doing what you love.",
    icon: "house",
  },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Santa Monica",
    text: "Angel City Maids did an amazing job. My home has never looked better! The team was punctual, professional, and paid attention to every little detail.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Pasadena",
    text: "I use them for my Airbnb properties and they are lifesavers. Always reliable, and the places look spotless for every new guest. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    location: "Los Angeles",
    text: "Booking was incredibly easy, and the cleaners were so friendly. They managed to get stains out of my carpet I thought were permanent. Worth every penny.",
    rating: 5,
  },
  {
    name: "David Thompson",
    location: "Burbank",
    text: "Moved into a new house that needed a serious deep clean. The team spent 6 hours making it perfect. It smelled so fresh when we finally moved our stuff in.",
    rating: 5,
  },
  {
    name: "Jessica Walsh",
    location: "Glendale",
    text: "I love coming home on Thursdays after Angel City Maids has been here. It is the best feeling in the world. Consistent quality every single time.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What is included in a standard cleaning?",
    answer:
      "Our standard cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning bathrooms (toilets, showers, sinks, mirrors), and cleaning the kitchen (counters, sink, outside of appliances, microwave inside). We also empty all trash bins.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No, our professional cleaners bring all their own high-quality, eco-friendly cleaning supplies and equipment. If you have a specific product you prefer us to use on certain surfaces, just let us know and leave it out for the team.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "It is completely up to you! Many of our clients provide us with a spare key, garage code, or lockbox code so we can clean while they are at work. If you prefer to be home, that is perfectly fine too.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations or rescheduling. Cancellations made with less than 24 hours notice may be subject to a $50 cancellation fee, as we have reserved that time specifically for you.",
  },
  {
    question: "Are your cleaners insured and background checked?",
    answer:
      "Yes, absolutely. Every member of our cleaning team undergoes a thorough background check, reference check, and rigorous training. Angel City Maids is fully licensed, bonded, and insured for your peace of mind.",
  },
  {
    question: "How do I pay for the service?",
    answer:
      "We accept all major credit cards. A hold is placed on your card the day before service, but you are not actually charged until after the cleaning is completed to your satisfaction.",
  },
];

const cities = [
  "Los Angeles",
  "Pasadena",
  "Burbank",
  "Glendale",
  "Santa Monica",
  "Beverly Hills",
  "West Hollywood",
  "Culver City",
];

const logo = document.getElementById("logoLink");

logo?.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.hash = "/";
  window.scrollTo({ top: 0, behavior: "smooth" });

  renderRoute(); // re-render home page
});

const detailedServices = [
  {
    id: "standard",
    title: "Standard Cleaning",
    description:
      "Our standard cleaning service is perfect for maintaining a consistently clean and healthy home. We recommend this service weekly, bi-weekly, or monthly.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    time: "2 - 4 hours",
    includes: [
      "Dusting all accessible surfaces",
      "Wiping down exterior of appliances",
      "Cleaning and sanitizing countertops and sinks",
      "Cleaning toilets, tubs, and showers",
      "Vacuuming and mopping all floors",
      "Emptying trash bins",
      "Making beds (upon request)",
    ],
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description:
      "A comprehensive top-to-bottom clean. Ideal for spring cleaning, before hosting an event, or if your home has not been professionally cleaned in the last 3 months.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    time: "4 - 8 hours",
    includes: [
      "Everything in Standard Cleaning",
      "Dusting baseboards, doors, and frames",
      "Cleaning inside window sills and tracks",
      "Detailed scrubbing of bathroom tile grout",
      "Cleaning exterior of cabinets",
      "Dusting ceiling fans and light fixtures",
      "Moving light furniture to clean underneath",
    ],
  },
  {
    id: "move",
    title: "Move-In / Move-Out Cleaning",
    description:
      "Make sure your old home is spotless to get your deposit back, or ensure your new home is perfectly sanitized before you unpack your life.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    time: "5 - 10 hours",
    includes: [
      "Everything in Deep Cleaning",
      "Cleaning inside all empty cabinets and drawers",
      "Cleaning inside the refrigerator",
      "Cleaning inside the oven",
      "Spot cleaning walls",
      "Sweeping garage or patio (if requested)",
    ],
  },
];

const plans = [
  {
    name: "Basic Cleaning",
    priceRange: "$120 - $180",
    description: "Perfect for regular upkeep.",
    features: [
      "Dusting all surfaces",
      "Vacuuming & mopping",
      "Bathroom sanitization",
      "Kitchen counter & sink",
      "Trash removal",
      "1-2 Cleaners",
    ],
    popular: false,
  },
  {
    name: "Deep Cleaning",
    priceRange: "$200 - $350",
    description: "Thorough top-to-bottom clean.",
    features: [
      "Everything in Basic",
      "Baseboards & doors",
      "Inside window sills",
      "Detailed grout scrubbing",
      "Cabinet exteriors",
      "2-3 Cleaners",
    ],
    popular: true,
  },
  {
    name: "Move-Out Clean",
    priceRange: "$250 - $450",
    description: "Get your deposit back.",
    features: [
      "Everything in Deep Clean",
      "Inside all cabinets",
      "Inside refrigerator",
      "Inside oven",
      "Spot clean walls",
      "Guaranteed satisfaction",
    ],
    popular: false,
  },
];

const addons = [
  { name: "Inside Oven", price: "+$30" },
  { name: "Inside Fridge", price: "+$25" },
  { name: "Interior Windows", price: "+$40" },
  { name: "Laundry (per load)", price: "+$35" },
  { name: "Baseboard Detail", price: "+$45" },
  { name: "Patio Sweep", price: "+$20" },
];

function getCurrentPath() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "") || "/";
}

function initRouter() {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}

function renderRoute() {
  const path = getCurrentPath();
  const app = document.getElementById("app");
  const render = routes[path] || renderHomePage;
  app.innerHTML = render();

  updateNavState(path);
  initPageFeatures(path);
  window.scrollTo(0, 0);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function updateNavState(path) {
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-route") === path);
  });

  const navbar = document.getElementById("navbar");
  if (path === "/") {
    navbar.classList.remove("not-home");
  } else {
    navbar.classList.add("not-home");
  }

  closeMobileMenu();
  handleNavbarScroll();
}

function initPageFeatures(path) {
  initRevealAnimations();
  initFAQ();
  initTestimonials();
  initContactForm();
}

function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
    observer.observe(el);
  });
}

function initFAQ() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item, index) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });

    if (index === 0) item.classList.add("open");
  });
}

let testimonialIndex = 0;
let testimonialTimer = null;

function initTestimonials() {
  const track = document.querySelector(".testimonial-track");
  if (!track) return;

  const dotsWrap = document.querySelector(".carousel-dots");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  function updateCarousel() {
    track.style.transform = `translateX(-${testimonialIndex * 100}%)`;

    if (dotsWrap) {
      dotsWrap.querySelectorAll("button").forEach((dot, i) => {
        dot.classList.toggle("active", i === testimonialIndex);
      });
    }
  }

  function next() {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    updateCarousel();
  }

  function prev() {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  }

  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  dotsWrap?.querySelectorAll("button").forEach((dot, i) => {
    dot.addEventListener("click", () => {
      testimonialIndex = i;
      updateCarousel();
      restartTestimonialTimer();
    });
  });

  function restartTestimonialTimer() {
    if (testimonialTimer) clearInterval(testimonialTimer);
    testimonialTimer = setInterval(next, 5000);
  }

  updateCarousel();
  restartTestimonialTimer();
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const success = document.getElementById("contactSuccess");
    const formWrap = document.getElementById("contactFormWrap");

    btn.disabled = true;
    btn.textContent = "Sending...";

    setTimeout(() => {
      formWrap.style.display = "none";
      success.style.display = "block";
    }, 1500);
  });

  const resetBtn = document.getElementById("sendAnotherBtn");
  resetBtn?.addEventListener("click", () => {
    document.getElementById("contactSuccess").style.display = "none";
    document.getElementById("contactFormWrap").style.display = "block";
    form.reset();
    const btn = form.querySelector("button[type='submit']");
    btn.disabled = false;
    btn.textContent = "Request a Quote";
  });
}

function initNavbar() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  mobileMenuBtn?.addEventListener("click", openMobileMenu);
  mobileCloseBtn?.addEventListener("click", closeMobileMenu);
  mobileOverlay?.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) closeMobileMenu();
  });

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();
}

function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const isHome = getCurrentPath() === "/";
  const scrolled = window.scrollY > 20;

  navbar.classList.toggle("scrolled", scrolled);
  if (!isHome) navbar.classList.add("not-home");
}

function openMobileMenu() {
  document.getElementById("mobileOverlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  document.getElementById("mobileOverlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function initStickyBookButton() {
  const wrap = document.getElementById("stickyBookWrap");
  function handleSticky() {
    if (window.innerWidth > 768) {
      wrap.classList.remove("show");
      return;
    }
    wrap.classList.toggle("show", window.scrollY > 500);
  }

  window.addEventListener("scroll", handleSticky);
  window.addEventListener("resize", handleSticky);
  handleSticky();
}

function renderCTASection() {
  return `
    <section class="cta-section">
      <div class="cta-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <div class="blob one"></div>
      <div class="blob two"></div>
      <div class="container cta-inner reveal">
        <h2 class="cta-title">Ready for a Cleaner Home?</h2>
        <p class="cta-text">
          Join hundreds of happy customers in Los Angeles. Book your cleaning today and experience the Angel City difference.
        </p>
        <a href="#/contact" class="btn btn-primary">Book Your Cleaning Today</a>
      </div>
    </section>
  `;
}

function renderHeroSection() {
  return `
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" alt="Clean, modern living room" />
      </div>
      <div class="hero-overlay"></div>

      <div class="container">
        <div class="hero-content reveal">
          <span class="hero-badge">Premium Cleaning Services in LA</span>
          <h1 class="hero-title">
            Professional House Cleaning You Can <span>Trust</span>
          </h1>
          <p class="hero-text">
            Reliable, affordable, and high-quality home cleaning services tailored to your busy lifestyle.
            Experience the joy of a spotless home.
          </p>

          <div class="hero-actions">
            <a href="#/contact" class="btn btn-primary">Book a Cleaning</a>
            <a href="#/pricing" class="btn btn-secondary">Get a Free Quote</a>
          </div>

          <div class="hero-trust">
            <div class="trust-item">
              <div class="trust-icon"><i data-lucide="shield-check"></i></div>
              <span>Fully Insured</span>
            </div>
            <div class="trust-item">
              <div class="trust-icon"><i data-lucide="award"></i></div>
              <span>Background Checked</span>
            </div>
            <div class="trust-item">
              <div class="trust-icon"><i data-lucide="thumbs-up"></i></div>
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServicesSection() {
  return `
    <section class="section section-muted">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">What We Do</span>
          <h2 class="section-title">Our Cleaning Services</h2>
          <p class="section-subtitle">
            We offer a comprehensive range of cleaning services tailored to meet your specific needs.
          </p>
        </div>

        <div class="grid-3" style="margin-top: 3rem;">
          ${services.map((service) => `
            <div class="card card-hover service-card reveal">
              <div class="service-icon">
                <i data-lucide="${service.icon}"></i>
              </div>
              <h3>${service.title}</h3>
              <p>${service.description}</p>
              <a href="${service.link}" class="text-link">
                Learn More <i data-lucide="arrow-right"></i>
              </a>
            </div>
          `).join("")}

          <div class="cta-service-card reveal">
            <h3>Need a Custom Clean?</h3>
            <p>Contact us for specialized requests or custom cleaning plans.</p>
            <div style="margin-top: 1rem;">
              <a href="#/contact" class="btn btn-light">Get a Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderWhyChooseUs() {
  return `
    <section class="section section-brand">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">The Angel City Difference</span>
          <h2 class="section-title">Why Choose Angel City Maids?</h2>
          <p class="section-subtitle">
            We don't just clean houses; we care for homes. Here is why thousands of LA residents trust us.
          </p>
        </div>

        <div class="grid-2" style="margin-top: 3rem;">
          ${features.map((feature) => `
            <div class="feature-item reveal">
              <div class="feature-icon">
                <i data-lucide="${feature.icon}"></i>
              </div>
              <div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderHowItWorks() {
  return `
    <section class="section">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">Simple Process</span>
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">Getting a spotless home has never been easier.</p>
        </div>

        <div class="steps-wrap" style="margin-top: 4rem;">
          <div class="steps-line"></div>
          <div class="grid-3">
            ${steps.map((step) => `
              <div class="step-card reveal">
                <div class="step-circle">
                  <div class="step-number">${step.number}</div>
                  <i data-lucide="${step.icon}"></i>
                </div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTestimonials() {
  return `
    <section class="section section-muted">
      <div class="container">
        <div class="text-center reveal">
          <span class="section-label">Reviews</span>
          <h2 class="section-title">What Our Clients Say</h2>
        </div>

        <div class="testimonial-wrap reveal" style="margin-top: 3rem;">
          <div class="testimonial-viewport">
            <div class="testimonial-track">
              ${testimonials.map((testimonial) => `
                <div class="testimonial-slide">
                  <div class="testimonial-card">
                    <div class="quote-mark">"</div>
                    <div class="stars">
                      ${Array.from({ length: testimonial.rating }).map(() => `<i data-lucide="star"></i>`).join("")}
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div>
                      <h4>${testimonial.name}</h4>
                      <p class="testimonial-location">${testimonial.location}</p>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <button class="carousel-btn prev" aria-label="Previous testimonial">
            <i data-lucide="chevron-left"></i>
          </button>
          <button class="carousel-btn next" aria-label="Next testimonial">
            <i data-lucide="chevron-right"></i>
          </button>

          <div class="carousel-dots">
            ${testimonials.map((_, i) => `
              <button class="${i === 0 ? "active" : ""}" aria-label="Go to slide ${i + 1}"></button>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServiceAreas() {
  return `
    <section class="section section-brand">
      <div class="container service-areas-wrap">
        <div class="reveal-left">
          <span class="section-label">Locations</span>
          <h2 class="section-title">Serving the Greater Los Angeles Area</h2>
          <p class="section-subtitle" style="margin: 0 0 2rem 0; max-width: none; text-align: left;">
            We provide top-tier residential and commercial cleaning services across LA county.
            Don't see your city listed? Contact us to see if we service your neighborhood.
          </p>

          <div class="city-grid">
            ${cities.map((city) => `
              <div class="city-pill">
                <i data-lucide="map-pin"></i>
                <span>${city}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="reveal-scale">
          <div class="map-card">
            <div class="map-circle">
              <div class="map-pattern"></div>
              <div class="map-pin pin1"><i data-lucide="map-pin"></i></div>
              <div class="map-pin pin2"><i data-lucide="map-pin"></i></div>
              <div class="map-pin pin3"><i data-lucide="map-pin"></i></div>
              <div class="map-pin pin4"><i data-lucide="map-pin"></i></div>
              <div class="map-label">Los Angeles County</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFAQ() {
  return `
    <section class="section">
      <div class="container faq-wrap">
        <div class="text-center reveal">
          <span class="section-label">Got Questions?</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>

        <div style="margin-top: 2.5rem;">
          ${faqs.map((faq) => `
            <div class="faq-item reveal">
              <button class="faq-question" aria-expanded="false">
                <span>${faq.question}</span>
                <i data-lucide="chevron-down" class="faq-icon"></i>
              </button>
              <div class="faq-answer">
                ${faq.answer}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderHomePage() {
  return `
    <main>
      ${renderHeroSection()}
      ${renderServicesSection()}
      ${renderWhyChooseUs()}
      ${renderHowItWorks()}
      ${renderTestimonials()}
      ${renderServiceAreas()}
      ${renderFAQ()}
      ${renderCTASection()}
    </main>
  `;
}

function renderAboutPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero navy">
        <div class="hero-bg-soft">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80" alt="Cleaning supplies" />
        </div>
        <div class="container text-center reveal">
          <h1>About Angel City Maids</h1>
          <p>Bringing sparkle, trust, and peace of mind to Los Angeles homes since 2018.</p>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container story-wrap">
          <div class="text reveal-left">
            <h2 class="section-title">Our Story</h2>
            <p>
              Angel City Maids was founded on a simple premise: finding a reliable, high-quality house cleaner shouldn't be a chore.
              We saw a gap in the Los Angeles market for a cleaning service that combined modern convenience with old-fashioned attention to detail.
            </p>
            <p>
              What started as a small team of three dedicated cleaners has grown into one of LA's most trusted premium home service companies.
              We've cleaned thousands of homes, but our core values remain exactly the same.
            </p>
            <p>
              We believe that a clean home is a happy home. It reduces stress, improves health, and gives you back your most valuable asset: time.
            </p>
          </div>

          <div class="reveal-right">
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80" alt="Team cleaning a kitchen" />
          </div>
        </div>
      </section>

      <section class="section section-brand">
        <div class="container">
          <div class="mission-box reveal-scale">
            <h2>Our Mission</h2>
            <p>
              "To elevate the standard of living for our clients by providing meticulous, reliable, and trustworthy cleaning services, allowing them to focus on what truly matters in their lives."
            </p>
          </div>
        </div>
      </section>

      <section class="section section-lg" style="background: var(--navy-900);">
        <div class="container stats-grid">
          <div class="stat-box reveal">
            <i data-lucide="shield-check"></i>
            <div class="value">6+</div>
            <div class="label">Years in Business</div>
          </div>
          <div class="stat-box reveal">
            <i data-lucide="home"></i>
            <div class="value">10k+</div>
            <div class="label">Homes Cleaned</div>
          </div>
          <div class="stat-box reveal">
            <i data-lucide="star" style="color: var(--gold-400);"></i>
            <div class="value">1.5k+</div>
            <div class="label">5-Star Reviews</div>
          </div>
          <div class="stat-box reveal">
            <i data-lucide="users"></i>
            <div class="value">100%</div>
            <div class="label">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      ${renderCTASection()}
    </main>
  `;
}

function renderContactPage() {
  return `
    <main style="padding-top: 6rem; background: var(--brand-50); min-height: 100vh;">
      <section class="section section-lg">
        <div class="container">
          <div class="text-center reveal">
            <h1 class="section-title">Get in Touch</h1>
            <p class="section-subtitle">
              Ready to book a cleaning or have a question? Fill out the form below or reach out to us directly.
              We'd love to hear from you.
            </p>
          </div>

          <div class="contact-wrap" style="margin-top: 3rem;">
            <div class="contact-card reveal-left">
              <div class="pill">
                <i data-lucide="clock"></i>
                <span>We respond within 24 hours</span>
              </div>

              <div id="contactSuccess" class="success-box" style="display:none;">
                <div class="success-icon">
                  <i data-lucide="send"></i>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button id="sendAnotherBtn" class="btn" style="background:none; color: var(--brand-600); padding: 0; margin-top: 1rem;">
                  Send another message
                </button>
              </div>

              <div id="contactFormWrap">
                <form id="contactForm">
                  <div class="form-grid">
                    <div class="form-group">
                      <label for="name">Full Name</label>
                      <input class="form-control" type="text" id="name" placeholder="John Doe" required />
                    </div>
                    <div class="form-group">
                      <label for="phone">Phone Number</label>
                      <input class="form-control" type="tel" id="phone" placeholder="(310) 555-0198" required />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email">Email Address</label>
                    <input class="form-control" type="email" id="email" placeholder="john@example.com" required />
                  </div>

                  <div class="form-group">
                    <label for="service">Service Needed</label>
                    <select class="form-control" id="service">
                      <option>Standard Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move-In / Move-Out</option>
                      <option>Airbnb Cleaning</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="message">Message / Details</label>
                    <textarea class="form-control" id="message" placeholder="Tell us about your home and what you need..."></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary full">Request a Quote</button>
                </form>
              </div>
            </div>

            <div class="reveal-right">
              <div class="contact-card" style="margin-bottom: 1.5rem;">
                <h3>Contact Information</h3>
                <ul class="info-list">
                  <li>
                    <div class="info-icon"><i data-lucide="phone"></i></div>
                    <div>
                      <div class="small-muted">Call Us</div>
                      <strong>123456</strong>
                    </div>
                  </li>
                  <li>
                    <div class="info-icon"><i data-lucide="mail"></i></div>
                    <div>
                      <div class="small-muted">Email Us</div>
                      <strong>hello@angelcitymaids.com</strong>
                    </div>
                  </li>
                  <li>
                    <div class="info-icon"><i data-lucide="clock"></i></div>
                    <div>
                      <div class="small-muted">Business Hours</div>
                      <strong>Mon - Fri: 8:00 AM - 6:00 PM</strong><br />
                      <strong>Sat - Sun: 9:00 AM - 4:00 PM</strong>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="contact-card service-area-card">
                <div class="bg-icon">
                  <i data-lucide="map-pin" style="width: 180px; height: 180px;"></i>
                </div>
                <div style="position: relative; z-index: 2;">
                  <h3 style="color:white;">Service Areas</h3>
                  <p>We proudly serve the Greater Los Angeles area including:</p>
                  <ul class="area-list">
                    <li>• Los Angeles</li>
                    <li>• Pasadena</li>
                    <li>• Santa Monica</li>
                    <li>• Burbank</li>
                    <li>• Beverly Hills</li>
                    <li>• Glendale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderPricingPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Simple, Transparent Pricing</h1>
          <p>
            No hidden fees. Pricing is based on the size of your home and the level of cleaning required.
          </p>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container">
          <div class="pricing-grid">
            ${plans.map((plan) => `
              <div class="price-card ${plan.popular ? "popular" : ""} reveal">
                ${plan.popular ? `<div class="badge-popular">Most Popular</div>` : ""}
                <div>
                  <h3>${plan.name}</h3>
                  <p class="small-muted" style="margin-bottom: 1.5rem;">${plan.description}</p>
                  <div class="price-value">${plan.priceRange}</div>
                  <div class="small-muted">*Varies by home size</div>
                </div>

                <ul class="feature-list">
                  ${plan.features.map((feature) => `
                    <li>
                      <i data-lucide="check"></i>
                      <span>${feature}</span>
                    </li>
                  `).join("")}
                </ul>

                <a href="#/contact" class="btn ${plan.popular ? "btn-primary" : ""} full" style="${!plan.popular ? "background: var(--brand-50); color: var(--brand-700);" : ""}">
                  Book Now
                </a>
              </div>
            `).join("")}
          </div>

          <div class="text-center reveal">
            <h2 class="section-title">Optional Add-ons</h2>
            <p class="section-subtitle">Customize your cleaning with these extra services.</p>
          </div>

          <div class="addons-grid" style="margin-top: 2rem;">
            ${addons.map((addon) => `
              <div class="addon-card reveal-scale">
                <div class="left">
                  <i data-lucide="plus"></i>
                  <span>${addon.name}</span>
                </div>
                <div class="addon-price">${addon.price}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      ${renderCTASection()}
    </main>
  `;
}

function renderServicesPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Our Cleaning Services</h1>
          <p>
            From routine maintenance to deep scrubbing, we have a cleaning package tailored to your home's unique needs.
          </p>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container services-detail-wrap">
          ${detailedServices.map((service, index) => `
            <div class="service-detail ${index % 2 === 1 ? "reverse" : ""}">
              <div class="service-detail-image reveal-${index % 2 === 1 ? "right" : "left"}">
                <img src="${service.image}" alt="${service.title}" />
              </div>
              <div class="reveal-${index % 2 === 1 ? "left" : "right"}">
                <h2 class="section-title" style="font-size: 2.2rem;">${service.title}</h2>
                <p>${service.description}</p>
                <div class="service-time">
                  <i data-lucide="clock"></i>
                  <span>Estimated time: ${service.time}</span>
                </div>

                <h3>What's Included:</h3>
                <ul class="feature-list">
                  ${service.includes.map((item) => `
                    <li>
                      <i data-lucide="check-circle-2"></i>
                      <span>${item}</span>
                    </li>
                  `).join("")}
                </ul>

                <a href="#/contact" class="btn btn-primary">Book This Service</a>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      ${renderCTASection()}
    </main>
  `;
}

function renderHomeSectionsOnlyForContactReuse() {
  return "";
}

function renderHomePageExtras() {
  return "";
}

function initApp() {
  document.getElementById("year").textContent = new Date().getFullYear();
  initNavbar();
  initStickyBookButton();
  initRouter();

  if (window.lucide) {
    lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", initApp);