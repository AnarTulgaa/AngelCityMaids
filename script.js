const routes = {
 "/": renderHomePage,
  "/services": renderServicesPage,
  "/pricing": renderPricingPage,
  "/about": renderAboutPage,
  "/booking": renderBookingPage,
  "/terms": renderTermsPage,
  "/privacy": renderPrivacyPage,
};

function renderTermsPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Terms of Service</h1>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container" style="max-width: 900px;">
          <div class="contact-card reveal">
            <p>At Angel City Maid, we are committed to delivering exceptional cleaning services to our customers throughout California. By booking our services, you agree to the following terms and conditions:</p>

            <h2>Booking & Scheduling</h2>
            <p>Appointments can be scheduled online, by phone, or via email. All bookings are subject to availability and confirmation. Please ensure that accurate details regarding your home (size, condition, and specific needs) are provided to ensure proper service planning.</p>

            <h2>Pricing & Payment</h2>
            <p>Our pricing is customized based on the size, layout, and condition of your property, as well as the type of service requested. Final pricing may be adjusted if the home’s condition differs significantly from the initial description.</p>
            <p>Payment is due upon completion of service unless otherwise agreed. We accept major credit/debit cards and approved digital payment methods.</p>

            <h2>Cancellations & Rescheduling</h2>
            <p>We kindly request at least 24 hours’ notice for any cancellations or changes.</p>
            <p>Cancellations made within 24 hours may incur a fee of up to 50% of the scheduled service.</p>
            <p>Same-day cancellations or missed appointments may be charged at full service value.</p>

            <h2>Access to Property</h2>
            <p>Clients are responsible for ensuring access to the property at the scheduled time. This may include providing entry codes, keys, or on-site access.</p>
            <p>If our team is unable to access the property, a lockout fee may apply. For safety, please secure pets or inform us in advance.</p>

            <h2>Scope of Services</h2>
            <p>Our team focuses on detailed and efficient cleaning within reasonable limits.</p>
            <p>We do not move heavy furniture (generally over 30–50 lbs)</p>
            <p>We do not handle hazardous materials, including biohazards or severe mold</p>
            <p>Excessive clutter may limit the areas we can clean effectively</p>

            <h2>Satisfaction Guarantee</h2>
            <p>Your satisfaction is important to us. If you are not fully satisfied, please notify us within 24 hours of service. We will gladly return to address any missed areas at no additional cost.</p>

            <h2>Damages & Liability</h2>
            <p>We are fully insured and take great care in your home. In the rare event of damage:</p>
            <p>Claims must be reported within 24–48 hours of service</p>
            <p>We will assess and resolve valid claims promptly</p>
            <p>We are not responsible for pre-existing damage, normal wear and tear, or improperly secured items</p>

            <h2>Health & Safety Compliance (California Standards)</h2>
            <p>In accordance with California health and safety guidelines:</p>
            <p>Our team reserves the right to refuse or stop service in unsafe conditions</p>
            <p>Clients must disclose any hazards such as pests, mold, or ongoing construction</p>
            <p>We follow safe handling practices for cleaning chemicals in compliance with state regulations</p>

            <h2>Supplies & Equipment</h2>
            <p>We provide all necessary professional-grade cleaning supplies and equipment. Eco-friendly or hypoallergenic products are available upon request.</p>

            <h2>Recurring Services</h2>
            <p>Recurring service clients (weekly, bi-weekly, or monthly) agree to ongoing scheduling unless canceled with prior notice. Pricing adjustments, if necessary, will be communicated in advance.</p>

            <h2>Privacy Policy (California Consumer Privacy Act – CCPA)</h2>
            <p>We respect your privacy. Any personal information collected is used solely for scheduling and service purposes. In compliance with the California Consumer Privacy Act (CCPA):</p>
            <p>We do not sell or share your personal data</p>
            <p>You may request access to or deletion of your personal information at any time</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right to update these Terms of Service at any time. Continued use of our services constitutes acceptance of any revised terms.</p>
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderPrivacyPage() {
  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container" style="max-width: 900px;">
          <div class="contact-card reveal">
            <p>We respect your privacy. Any personal information collected is used solely for scheduling and service purposes.</p>
            <p>In compliance with the California Consumer Privacy Act (CCPA):</p>
            <p>We do not sell or share your personal data</p>
            <p>You may request access to or deletion of your personal information at any time</p>
          </div>
        </div>
      </section>
    </main>
  `;
}

const services = [
  {
    title: "Standard Cleaning",
    description: "Standard Cleaning",
    icon: "home",
    link: "#/services",
  },
  {
    title: "Deep Cleaning",
    description: "Deep Cleaning",
    icon: "sparkles",
    link: "#/services",
  },
  {
    title: "Move-in/Move-out Cleaning",
    description: "Move-in/Move-out Cleaning",
    icon: "key",
    link: "#/services",
  },
  {
    title: "AirBnB Cleaning",
    description: "AirBnB Cleaning",
    icon: "building",
    link: "#/services",
  },
  {
    title: "Office Cleaning",
    description: "Office Cleaning",
    icon: "briefcase",
    link: "#/services",
  },
  {
    title: "Post-Construction Cleaning",
    description: "Post-Construction Cleaning",
    icon: "hammer",
    link: "#/services",
  },
  {
    title: "Professional Janitorial Cleaning",
    description: "Professional Janitorial Cleaning",
    icon: "shield-check",
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
    question: "How do I book a cleaning?",
    answer:
      "Appointments can be scheduled online, by phone, or by email. All bookings are subject to availability and confirmation.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on the size, layout, condition of the property, and the type of cleaning requested. Final pricing may be adjusted if the home condition differs significantly from the original description.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We kindly request at least 24 hours' notice for cancellations or changes. Cancellations made within 24 hours may incur a fee of up to 50% of the scheduled service. Same-day cancellations or missed appointments may be charged at full service value.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No. We provide all necessary professional-grade cleaning supplies and equipment. Eco-friendly or hypoallergenic products are also available upon request.",
  },
  {
    question: "What if I am not satisfied with the cleaning?",
    answer:
      "Your satisfaction matters to us. If you are not fully satisfied, please notify us within 24 hours of service and we will gladly return to address any missed areas at no additional cost.",
  },
  {
    question: "Are there any cleaning limitations?",
    answer:
      "Yes. We do not move heavy furniture, handle hazardous materials such as biohazards or severe mold, and excessive clutter may limit the areas we can clean effectively.",
  },
];

const cities = [
  "Los Angeles",
  "West Hollywood",
  "Pasadena",
  "Santa Monica",
  "Burbank",
  "Beverly Hills",
  "Glendale",
  "Studio City",
  "Culver City",
];

const logo = document.getElementById("logoLink");

logo?.addEventListener("click", (e) => {
  e.preventDefault();

  closeMobileMenu();
  window.location.hash = "/";
  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    renderRoute();
    updateLogo();
  }, 0);
});
const detailedServices = [
  {
    id: "standard",
    title: "Standard Cleaning",
    description: "Our standard cleaning service is ideal for maintaining a clean, healthy, and welcoming home. Perfect for recurring weekly, bi-weekly, or monthly service.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    time: "2 - 4 hours",
    includes: [
      "Dusting all accessible surfaces",
      "Vacuuming carpets and rugs",
      "Mopping hard floors",
      "Cleaning kitchen counters and sink",
      "Cleaning bathroom sinks, toilets, tubs, and showers",
      "Emptying trash bins",
      "General tidying and straightening",
    ],
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description: "A more thorough top-to-bottom cleaning service for homes that need extra attention, seasonal resets, or first-time professional service.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    time: "4 - 8 hours",
    includes: [
      "Everything in Standard Cleaning",
      "Detailed dusting of baseboards, doors, and frames",
      "Cleaning window sills and ledges",
      "Extra attention to bathrooms and kitchen buildup",
      "Wiping cabinet exteriors",
      "Cleaning light fixtures and ceiling fans",
      "Detailed floor and surface care",
    ],
  },
  {
    id: "move",
    title: "Move-in/Move-out Cleaning",
    description: "A detailed cleaning service designed for empty homes, apartments, and transitions so the space is spotless and ready for the next chapter.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    time: "5 - 10 hours",
    includes: [
       "Everything in Deep Cleaning",
      "Cleaning inside empty cabinets and drawers",
      "Cleaning inside oven",
      "Cleaning inside refrigerator",
      "Spot cleaning walls where needed",
      "Sweeping patios or entry areas if requested",
      "Preparing the property for move-in or handoff",
    ],
  },
  {
    id: "office",
    title: "Office Cleaning",
    description:
      "A clean office isn’t just about appearance—it’s about creating a healthier, more productive environment for your team and a lasting impression for your clients. Our office cleaning services are designed to keep your workspace spotless, organized, and welcoming every day. We specialize in reliable, detail-oriented cleaning tailored to your business needs. From daily maintenance to deep cleaning, our trained professionals use high-quality products and proven techniques to ensure every corner of your office shines. Whether you run a small office or a large corporate space, we provide flexible scheduling, consistent results, and exceptional service you can count on. Let us handle the cleaning—so you can focus on growing your business.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    time: "",
    includes: [
      "General Cleaning",
      "Dusting desks, surfaces, and office furniture",
      "Emptying trash and recycling bins",
      "Vacuuming carpets and mopping floors",
      "Restroom Cleaning & Sanitizing",
      "Cleaning and disinfecting toilets, sinks, and fixtures",
      "Restocking paper products and soap",
      "Floor cleaning and odor control",
      "Kitchen & Breakroom Cleaning",
      "Cleaning countertops, tables, and sinks",
      "Wiping down appliances (microwaves, refrigerators, etc.)",
      "Trash removal and floor care",
      "High-Touch Surface Disinfection",
      "Door handles, light switches, keyboards, and shared equipment",
      "Regular sanitization to reduce germs and bacteria",
      "Glass & Window Cleaning (Interior)",
      "Cleaning interior windows and glass partitions",
      "Removing smudges and fingerprints",
      "Floor Care",
      "Sweeping, mopping, and vacuuming",
      "Optional deep cleaning (carpet shampoo, floor polishing)",
      "Customized Cleaning Plans",
      "Daily, weekly, or monthly service options",
      "Tailored solutions based on your office size and needs",
    ],
  },
  {
    id: "airbnb",
    title: "AirBnB Cleaning",
    description:
      "Elevate your guest experience with our luxury Airbnb cleaning services. We deliver immaculate, hotel-quality results with meticulous attention to every detail—from pristine linens to perfectly styled spaces. Designed for hosts who expect excellence, our reliable and discreet service ensures your property is always flawless, inviting, and five-star ready.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    time: "",
    includes: [
      "Full Property Cleaning",
      "Dusting all surfaces, furniture, and décor",
      "Vacuuming carpets and rugs, mopping floors",
      "Removing trash and replacing liners",
      "Bedroom Reset",
      "Changing and making beds with fresh linens",
      "Fluffing pillows and staging the space",
      "Checking for guest belongings",
      "Bathroom Cleaning & Sanitizing",
      "Disinfecting toilets, showers, tubs, and sinks",
      "Cleaning mirrors and fixtures",
      "Restocking essentials (toilet paper, toiletries if provided)",
      "Kitchen Cleaning",
      "Cleaning countertops, cabinets, and backsplash",
      "Washing dishes or loading dishwasher",
      "Wiping down appliances (microwave, fridge, stove)",
      "High-Touch Surface Disinfection",
      "Door handles, remotes, switches, and frequently used items",
      "Sanitizing to maintain a hygienic environment",
      "Interior Window & Glass Cleaning",
      "Removing smudges from mirrors, glass doors, and windows",
      "Turnover Inspection",
      "Checking for damages or missing items",
      "Reporting issues promptly",
      "Ensuring everything is in place for the next guest",
      "Restocking Supplies (Optional)",
      "Toiletries, paper goods, and cleaning essentials",
      "Replenishing guest welcome items",
      "Laundry Service (Optional)",
      "Washing, drying, and folding linens and towels",
      "Replacing with fresh sets",
      "Staging & Final Touches",
      "Arranging furniture and décor neatly",
      "Creating a clean, inviting, hotel-like presentation",
    ],
  },
  {
    id: "construction",
    title: "Post-Construction Cleaning",
    description:
      "Transform your newly built or renovated space into a flawless, move-in-ready environment. Our post-construction cleaning services deliver meticulous, detail-driven results—removing dust, debris, and residue to reveal a pristine finish. With a focus on precision and excellence, we ensure every surface is polished to perfection, leaving your space clean, refined, and ready to impress.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    time: "",
    includes: [
      "Detailed Dust Removal",
      "Elimination of fine dust from all surfaces, including walls, ceilings, baseboards, and fixtures",
      "Careful cleaning of vents, light fixtures, and hard-to-reach areas",
      "Surface Cleaning & Polishing",
      "Wiping and polishing of countertops, cabinets, and built-ins",
      "Removing construction residue, smudges, and adhesive marks",
      "Floor Care",
      "Vacuuming, sweeping, and mopping all flooring surfaces",
      "Deep cleaning to remove dust, debris, and buildup",
      "Window & Glass Cleaning",
      "Interior window, frame, and sill cleaning",
      "Removal of stickers, paint splatter, and construction residue",
      "Kitchen & Bathroom Detailing",
      "Deep cleaning and sanitizing of sinks, faucets, appliances, and fixtures",
      "Polishing surfaces to a spotless, showroom-quality finish",
      "Debris & Trash Removal",
      "Collection and removal of leftover construction debris and materials",
      "Leaving the space clean, safe, and presentable",
      "Final Touch & Inspection",
      "Thorough walkthrough to ensure every detail meets our high standards",
      "Preparing the space for immediate use, staging, or handover",
    ],
  },
  {
    id: "janitorial",
    title: "Professional Janitorial Cleaning",
    description:
      "Maintain a pristine, polished workspace with our premium janitorial cleaning services. We provide consistent, detail-oriented care designed to uphold the highest standards of cleanliness and professionalism. With a focus on reliability, discretion, and excellence, our team ensures your environment remains spotless, healthy, and always ready to impress.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80",
    time: "",
    includes: [
      "Daily & Routine Cleaning",
      "Dusting surfaces, furniture, and work areas",
      "Emptying trash and recycling bins",
      "General tidying and upkeep",
      "Restroom Cleaning & Sanitization",
      "Thorough disinfection of toilets, sinks, and fixtures",
      "Restocking paper products and soap",
      "Odor control and floor cleaning",
      "Floor Care",
      "Sweeping, vacuuming, and mopping",
      "Detailed care for all flooring types",
      "Optional polishing and deep cleaning services",
      "Breakroom & Kitchen Cleaning",
      "Cleaning countertops, tables, and sinks",
      "Wiping down appliances and cabinets",
      "Maintaining a clean, hygienic shared space",
      "High-Touch Surface Disinfection",
      "Door handles, light switches, and shared equipment",
      "Routine sanitization to promote a healthy environment",
      "Glass & Surface Detailing",
      "Interior glass, mirrors, and partitions",
      "Smudge-free, polished finishes",
      "Supply Management (Optional)",
      "Monitoring and restocking essential supplies",
      "Ensuring your facility remains fully equipped",
      "Customized Cleaning Plans",
      "Flexible scheduling (daily, weekly, or custom)",
      "Services tailored to your business size and requirements",
    ],
  },
];

const plans = [
  {
    name: "Basic Cleaning",
    priceRange: "$150 - $180",
    description: "",
    features: [],
    popular: false,
  },
  {
    name: "Deep Cleaning",
    priceRange: "$220 - $350",
    description: "",
    features: [],
    popular: false,
  },
  {
    name: "Move-Out Cleaning",
    priceRange: "$285 - $450",
    description: "",
    features: [],
    popular: false,
  },
];

const addons = [
  { name: "Inside Oven", price: "+$30" },
  { name: "Inside Fridge", price: "+$25" },
  { name: "Interior Windows", price: "+$40 (10 per window)" },
  { name: "Laundry (per load)", price: "+$20" },
  { name: "Pet Hair Removal", price: "+$35" },
  { name: "Patio Sweep", price: "+$20" },
];

function getCurrentPath() {
  const hash = window.location.hash || "#/";
  return hash.replace("#", "") || "/";
}

function updateLogo() {
  const logoImg = document.getElementById("siteLogo");
  if (!logoImg) return;

  const isHome = getCurrentPath() === "/";
  const isScrolled = window.scrollY > 20;

  if (isHome && !isScrolled) {
    // homepage top over purple hero
    logoImg.src = "img/ANGEL CITY MAIDS Logo-06.png"; 
  } else {
    // scrolled navbar or inner pages
    logoImg.src = "img/ANGEL CITY MAIDS Logo-05.png";
  }
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
  updateLogo();
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

  if (!isHome) {
    navbar.classList.add("not-home");
  } else {
    navbar.classList.remove("not-home");
  }

  updateLogo();
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
        <p class="cta-text">
        </p>
        <a href="#/booking" class="btn btn-primary">Book Your Cleaning Today</a>
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
          <div class="ownership-badge">
            <i data-lucide="sparkles"></i>
            <span>Woman-Owned Business</span>
          </div>

          <span class="hero-badge">Premium Cleaning Services in LA</span>

          <h1 class="hero-title">
            Professional House Cleaning You Can <span>Trust</span>
          </h1>

          <p class="hero-text">
            Reliable, affordable, and high-quality home cleaning services tailored to your busy lifestyle.
            Experience the joy of a spotless home.
          </p>

          <div class="hero-actions">
            <a href="#/booking" class="btn btn-primary">Book a Cleaning</a>
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
              <a href="#/booking" class="btn btn-light">Get a Quote</a>
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

function renderBookingPage() {
  return `
    <main style="padding-top: 6rem; background: var(--brand-50); min-height: 100vh;">
      <section class="section section-lg">
        <div class="container">

          <div class="text-center reveal">
            <h1 class="section-title">Book Your Cleaning</h1>
            <p class="section-subtitle">
              Schedule your cleaning in seconds. Choose your service, date, and time — it's that simple.
            </p>
          </div>

          <div class="booking-wrap reveal" style="margin-top: 3rem;">
            
            <div class="booking-card">
              <!-- BookingKoala Embed -->
              <iframe 
                src="YOUR_BOOKINGKOALA_LINK_HERE"
                width="100%" 
                height="900" 
                style="border: none; border-radius: 16px;"
                loading="lazy">
              </iframe>
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
          <h1>Pricing</h1>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container">
          <div class="pricing-grid">
            ${plans.map((plan) => `
              <div class="price-card reveal">
                <div>
                  <h3>${plan.name}</h3>
                  <div class="price-value">${plan.priceRange}</div>
                </div>
                <a href="#/booking" class="btn btn-primary full">Book Now</a>
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
  const residential = detailedServices.filter(service =>
    ["standard", "deep", "move"].includes(service.id)
  );

  const commercial = detailedServices.filter(service =>
    ["office", "airbnb", "construction", "janitorial"].includes(service.id)
  );

  const renderServiceBlock = (service, index) => `
    <div class="service-detail ${index % 2 === 1 ? "reverse" : ""}">
      <div class="service-detail-image reveal-${index % 2 === 1 ? "right" : "left"}">
        <img src="${service.image}" alt="${service.title}" />
      </div>
      <div class="reveal-${index % 2 === 1 ? "left" : "right"}">
        <h2 class="section-title" style="font-size: 2.2rem;">${service.title}</h2>

        ${service.description ? `<p>${service.description}</p>` : ""}

        ${service.time ? `
          <div class="service-time">
            <i data-lucide="clock"></i>
            <span>${service.time}</span>
          </div>
        ` : ""}

        ${service.includes.length ? `
          <h3>Our ${service.title} Services Include</h3>
          <ul class="feature-list">
            ${service.includes.map((item) => `
              <li>
                <i data-lucide="check-circle-2"></i>
                <span>${item}</span>
              </li>
            `).join("")}
          </ul>
        ` : ""}

        <a href="#/booking" class="btn btn-primary">Book This Service</a>
      </div>
    </div>
  `;

  return `
    <main style="padding-top: 6rem;">
      <section class="page-hero light">
        <div class="container text-center reveal">
          <h1>Our Services</h1>
        </div>
      </section>

      <section class="section section-lg">
        <div class="container services-detail-wrap">
          <div class="text-center reveal">
            <h2 class="section-title">Residential Cleaning</h2>
          </div>
          ${residential.map((service, index) => renderServiceBlock(service, index)).join("")}

          <div class="text-center reveal" style="margin-top: 3rem;">
            <h2 class="section-title">Commercial Cleaning</h2>
          </div>
          ${commercial.map((service, index) => renderServiceBlock(service, index)).join("")}
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