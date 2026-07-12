const ATELIER_WORKS = [
  {
    id: "monet-water-lilies-1906",
    title: "Water Lilies (Nymphéas)",
    artist: "monet",
    artistName: "Claude Monet",
    year: "1906",
    medium: "Oil on Canvas",
    dimensions: "89.9 x 94.1 cm",
    category: "water-lilies",
    categoryLabel: "Water Lilies Series",
    image: "images/monet-water-lilies-1906.jpg",
    tags: ["Impressionism", "Landscape", "Giverny"],
    description: [
      "Painted in the water garden Monet built at his home in Giverny, this piece belongs to a series of over 250 studies of the same pond, each one a record of a specific hour and season.",
      "Monet worked without a horizon line here, letting the surface of the water fill the entire canvas so the viewer floats above the reflection rather than looking across a landscape."
    ]
  },
  {
    id: "monet-haystacks-autumn-1891",
    title: "Haystacks, Autumn",
    artist: "monet",
    artistName: "Claude Monet",
    year: "1891",
    medium: "Oil on Canvas",
    dimensions: "60.5 x 100.8 cm",
    category: "haystacks",
    categoryLabel: "Haystacks Series",
    image: "images/monet-haystacks-autumn-1891.jpg",
    tags: ["Impressionism", "Landscape", "Series Study"],
    description: [
      "One of roughly twenty-five canvases Monet painted of the same two haystacks near his home, each capturing a different season and quality of light.",
      "The autumn palette here sits between the warm gold of late summer and the cooler tones that dominate his winter studies of the same subject."
    ]
  },
  {
    id: "monet-poplars-epte-1891",
    title: "Poplars on the Epte",
    artist: "monet",
    artistName: "Claude Monet",
    year: "1891",
    medium: "Oil on Canvas",
    dimensions: "81.8 x 81.3 cm",
    category: "poplars",
    categoryLabel: "Poplars Series",
    image: "images/monet-poplars-epte-1891.jpg",
    tags: ["Impressionism", "Landscape", "River Scene"],
    description: [
      "Monet painted this row of poplars along the Epte River from a boat he'd converted into a floating studio, working quickly to keep pace with the changing light.",
      "The tall, evenly spaced trunks give the composition a rhythmic, almost decorative structure that was unusual for a landscape of this period."
    ]
  },
  {
    id: "vangogh-starry-night-1889",
    title: "The Starry Night",
    artist: "vangogh",
    artistName: "Vincent van Gogh",
    year: "1889",
    medium: "Oil on Canvas",
    dimensions: "73.7 x 92.1 cm",
    category: "night-scenes",
    categoryLabel: "Night Scenes",
    image: "images/vangogh-starry-night-1889.jpg",
    tags: ["Post-Impressionism", "Night Scene", "Saint-Rémy"],
    description: [
      "Painted while van Gogh was a patient at the asylum in Saint-Rémy-de-Provence, this view looks out from his window before sunrise, built partly from memory and imagination.",
      "The swirling sky and the cypress tree in the foreground share the same thick, directional brushstrokes, blurring the line between sky and earth."
    ]
  },
  {
    id: "vangogh-sunflowers-1888",
    title: "Sunflowers",
    artist: "vangogh",
    artistName: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on Canvas",
    dimensions: "92.1 x 73 cm",
    category: "still-life",
    categoryLabel: "Still Life",
    image: "images/vangogh-sunflowers-1888.jpg",
    tags: ["Post-Impressionism", "Still Life", "Arles"],
    description: [
      "Painted in Arles as part of a series meant to decorate the room where van Gogh hoped to host fellow painter Paul Gauguin.",
      "Working almost entirely in shades of yellow, he pushed the limits of a single color family to give the flowers a sense of weight and life."
    ]
  },
  {
    id: "vangogh-cafe-terrace-1888",
    title: "Café Terrace at Night",
    artist: "vangogh",
    artistName: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on Canvas",
    dimensions: "80.7 x 65.3 cm",
    category: "night-scenes",
    categoryLabel: "Night Scenes",
    image: "images/vangogh-cafe-terrace-1888.jpg",
    tags: ["Post-Impressionism", "Night Scene", "Arles"],
    description: [
      "Van Gogh set up his easel on the street at night to paint this Arles café, working from the glow of gas lighting rather than a studio lamp.",
      "He wrote at the time that he was drawn to painting night scenes on the spot, straight from observation rather than from a preliminary sketch."
    ]
  }
];

const ATELIER_ARTISTS = [
  {
    id: "monet",
    name: "Claude Monet",
    years: "1840 – 1926",
    nationality: "French",
    tags: ["Impressionism", "Plein Air", "Landscape"],
    portrait: "images/monet-portrait.jpg",
    bio: "Monet was a founder of French Impressionism, known for painting the same subject at different times of day and year to study how light transforms a scene. His garden at Giverny became the setting for his most sustained body of work, the Water Lilies."
  },
  {
    id: "vangogh",
    name: "Vincent van Gogh",
    years: "1853 – 1890",
    nationality: "Dutch",
    tags: ["Post-Impressionism", "Expressive Color", "Arles"],
    portrait: "images/vangogh-portrait.jpg",
    bio: "Van Gogh worked across a brief, intense decade, developing a style built on bold color and visible, directional brushwork. His time in Arles, and later at the asylum in Saint-Rémy, produced much of the work he's best known for today."
  }
];

let atelierMode = null;
let atelierWorkIndex = 0;
let atelierArtistIndex = 0;

function atelierBuildLightbox() {
  if (document.getElementById("atelier-lightbox")) return;

  const overlay = document.createElement("div");
  overlay.id = "atelier-lightbox";
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <div class="lightbox-box">
      <button type="button" class="lightbox-close" aria-label="Close">&times;</button>
      <button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous">&larr;</button>
      <button type="button" class="lightbox-nav lightbox-next" aria-label="Next">&rarr;</button>
      <div class="lightbox-body" id="atelier-lightbox-body"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector(".lightbox-close").addEventListener("click", atelierCloseLightbox);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) atelierCloseLightbox();
  });
  overlay.querySelector(".lightbox-prev").addEventListener("click", () => atelierNavigate(-1));
  overlay.querySelector(".lightbox-next").addEventListener("click", () => atelierNavigate(1));

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("active")) return;
    if (e.key === "Escape") atelierCloseLightbox();
    if (e.key === "ArrowLeft") atelierNavigate(-1);
    if (e.key === "ArrowRight") atelierNavigate(1);
  });
}

function atelierRenderWork(index) {
  const w = ATELIER_WORKS[index];
  const body = document.getElementById("atelier-lightbox-body");
  body.innerHTML = `
    <div class="lightbox-painting lightbox-track">
      <img class="lightbox-image" src="${w.image}" alt="${w.title}, ${w.year}">
      <div>
        <p class="lightbox-counter">Work ${index + 1} of ${ATELIER_WORKS.length}</p>
        <h2>${w.title}</h2>
        <p class="lightbox-subline" data-open-artist="${w.artist}">${w.artistName}, ${w.year}</p>
        <div class="info-row"><span>Category</span><span>${w.categoryLabel}</span></div>
        <div class="info-row"><span>Medium</span><span>${w.medium}</span></div>
        <div class="info-row"><span>Date</span><span>${w.year}</span></div>
        <div class="info-row"><span>Dimensions</span><span>${w.dimensions}</span></div>
        <div class="painting-description">${w.description.map((p) => `<p>${p}</p>`).join("")}</div>
        <div class="tags">${w.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </div>
  `;
  body.querySelector("[data-open-artist]").addEventListener("click", (e) => {
    atelierOpenArtist(e.currentTarget.dataset.openArtist);
  });
}

function atelierRenderArtist(index) {
  const a = ATELIER_ARTISTS[index];
  const body = document.getElementById("atelier-lightbox-body");
  body.innerHTML = `
    <div class="lightbox-artist lightbox-track">
      <img class="lightbox-portrait" src="${a.portrait}" alt="Portrait of ${a.name}">
      <div>
        <p class="lightbox-counter">Artist ${index + 1} of ${ATELIER_ARTISTS.length}</p>
        <h2>${a.name}</h2>
        <p class="artist-years">${a.years} &middot; ${a.nationality}</p>
        <p>${a.bio}</p>
        <div class="artist-movement-tags">${a.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <a href="index.html?artist=${a.id}#gallery" class="lightbox-view-works">View Works by ${a.name.split(" ").pop()}</a>
      </div>
    </div>
  `;
}

function atelierOpenWork(id) {
  atelierBuildLightbox();
  const idx = ATELIER_WORKS.findIndex((w) => w.id === id);
  atelierWorkIndex = idx >= 0 ? idx : 0;
  atelierMode = "work";
  atelierRenderWork(atelierWorkIndex);
  document.getElementById("atelier-lightbox").classList.add("active");
  document.body.classList.add("lightbox-open");
}

function atelierOpenArtist(id) {
  atelierBuildLightbox();
  const idx = ATELIER_ARTISTS.findIndex((a) => a.id === id);
  atelierArtistIndex = idx >= 0 ? idx : 0;
  atelierMode = "artist";
  atelierRenderArtist(atelierArtistIndex);
  document.getElementById("atelier-lightbox").classList.add("active");
  document.body.classList.add("lightbox-open");
}

function atelierCloseLightbox() {
  const overlay = document.getElementById("atelier-lightbox");
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.classList.remove("lightbox-open");
}

function atelierNavigate(dir) {
  if (atelierMode === "work") {
    atelierWorkIndex = (atelierWorkIndex + dir + ATELIER_WORKS.length) % ATELIER_WORKS.length;
    atelierRenderWork(atelierWorkIndex);
  } else if (atelierMode === "artist") {
    atelierArtistIndex = (atelierArtistIndex + dir + ATELIER_ARTISTS.length) % ATELIER_ARTISTS.length;
    atelierRenderArtist(atelierArtistIndex);
  }
}

function atelierInitTriggers() {
  document.querySelectorAll("a[data-work]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      atelierOpenWork(el.dataset.work);
    });
  });

  document.querySelectorAll("[data-artist-trigger]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      atelierOpenArtist(el.dataset.artistTrigger);
    });
  });
}

function atelierInitFilterButtons() {
  document.querySelectorAll(".filters").forEach((group) => {
    const buttons = Array.from(group.querySelectorAll("button[data-filter]"));
    if (!buttons.length) return;
    const section = group.closest("section");
    const grid = section ? section.querySelector(".gallery-grid") : null;
    if (!grid) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active-filter"));
        btn.classList.add("active-filter");
        const value = btn.dataset.filter;
        grid.querySelectorAll(".gallery-item").forEach((item) => {
          const matches =
            value === "all" ||
            item.dataset.artist === value ||
            item.dataset.category === value;
          item.classList.toggle("is-hidden", !matches);
        });
      });
    });
  });
}

function atelierApplyURLFilter() {
  const params = new URLSearchParams(window.location.search);
  const artist = params.get("artist");
  if (!artist) return;
  const btn = document.querySelector(`.filters button[data-filter="${artist}"]`);
  if (btn) {
    btn.click();
    window.setTimeout(() => {
      btn.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
  }
}

function atelierInitAuctionFilters() {
  const panel = document.querySelector(".filter-panel");
  const grid = document.querySelector(".lot-grid");
  if (!panel || !grid) return;

  const artistBoxes = Array.from(panel.querySelectorAll("input[data-artist]"));
  const statusBoxes = Array.from(panel.querySelectorAll("input[data-status]"));
  const priceInputs = Array.from(panel.querySelectorAll(".price-inputs input"));

  function apply() {
    const activeArtists = artistBoxes.filter((cb) => cb.checked).map((cb) => cb.dataset.artist);
    const activeStatuses = statusBoxes.filter((cb) => cb.checked).map((cb) => cb.dataset.status);
    const min = parseInt((priceInputs[0]?.value || "0").replace(/[^0-9]/g, ""), 10) || 0;
    const maxRaw = (priceInputs[1]?.value || "").replace(/[^0-9]/g, "");
    const max = maxRaw ? parseInt(maxRaw, 10) : Infinity;

    grid.querySelectorAll(".lot-card").forEach((card) => {
      const price = parseInt(card.dataset.price, 10) || 0;
      const show =
        activeArtists.includes(card.dataset.artist) &&
        activeStatuses.includes(card.dataset.status) &&
        price >= min &&
        price <= max;
      card.classList.toggle("is-hidden", !show);
    });
  }

  [...artistBoxes, ...statusBoxes].forEach((cb) => cb.addEventListener("change", apply));
  priceInputs.forEach((inp) => inp.addEventListener("change", apply));
}

function atelierInitRegisterPage() {
  const reserveForm = document.getElementById("reserve-form");
  const bidForm = document.getElementById("bid-form");
  if (!reserveForm && !bidForm) return;

  const totalSpots = parseInt(document.getElementById("spots-total")?.textContent, 10) || 60;
  const spotsLeftEl = document.getElementById("spots-left");
  const fillEl = document.getElementById("capacity-fill");

  function spotsLeft() {
    return parseInt(spotsLeftEl.textContent, 10);
  }

  function renderCapacity() {
    const left = spotsLeft();
    const pct = ((totalSpots - left) / totalSpots) * 100;
    fillEl.style.width = pct + "%";
    fillEl.classList.toggle("is-almost-full", left <= totalSpots * 0.15);

    if (left <= 0) {
      const card = reserveForm.closest(".form-card");
      card.classList.add("is-disabled");
      const msg = document.getElementById("reserve-message");
      msg.textContent = "Registration is full for the August sale.";
      msg.className = "form-message error";
    }
  }

  renderCapacity();

  if (reserveForm) {
    reserveForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("reserve-message");
      const name = document.getElementById("reserve-name").value.trim();
      const email = document.getElementById("reserve-email").value.trim();
      const guests = parseInt(document.getElementById("reserve-guests").value, 10) || 1;

      if (!name || !email) {
        msg.textContent = "Please fill in your name and email.";
        msg.className = "form-message error";
        return;
      }

      const left = spotsLeft();
      if (guests > left) {
        msg.textContent = `Only ${left} seat${left === 1 ? "" : "s"} remaining — please reduce your seat count.`;
        msg.className = "form-message error";
        return;
      }

      spotsLeftEl.textContent = String(left - guests);
      const submittedName = name;
      const submittedEmail = email;
      reserveForm.reset();
      renderCapacity();
      msg.textContent = `You're registered, ${submittedName.split(" ")[0]}. A confirmation has been sent to ${submittedEmail}.`;
      msg.className = "form-message success";
    });
  }

  if (bidForm) {
    const lotSelect = document.getElementById("bid-lot");
    const bidHint = document.getElementById("bid-hint");

    function currentBidFor(option) {
      return parseInt(option.dataset.current, 10);
    }

    function updateHint() {
      const current = currentBidFor(lotSelect.selectedOptions[0]);
      bidHint.textContent = `Must exceed the current bid of $${current.toLocaleString()}`;
    }
    lotSelect.addEventListener("change", updateHint);
    updateHint();

    bidForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("bid-message");
      const name = document.getElementById("bid-name").value.trim();
      const email = document.getElementById("bid-email").value.trim();
      const amountRaw = document.getElementById("bid-amount").value.replace(/[^0-9]/g, "");
      const amount = parseInt(amountRaw, 10) || 0;
      const option = lotSelect.selectedOptions[0];
      const current = currentBidFor(option);

      if (!name || !email || !amount) {
        msg.textContent = "Please fill in every field.";
        msg.className = "form-message error";
        return;
      }

      if (amount <= current) {
        msg.textContent = `Your bid must be higher than $${current.toLocaleString()}.`;
        msg.className = "form-message error";
        return;
      }

      const lotName = option.textContent.split("\u2014")[0].trim();
      option.dataset.current = String(amount);
      option.textContent = option.textContent.split("Current")[0] + `Current $${amount.toLocaleString()}`;

      const submittedName = name;
      bidForm.reset();
      updateHint();

      msg.textContent = `Bid placed, ${submittedName.split(" ")[0]}. You're currently the highest bidder on ${lotName}.`;
      msg.className = "form-message success";
    });
  }
}

function atelierInitContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("contact-form-message");
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      msg.textContent = "Please fill in every field before sending.";
      msg.className = "contact-form-message error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msg.textContent = "Please enter a valid email address.";
      msg.className = "contact-form-message error";
      return;
    }

    const submittedName = name;
    form.reset();
    msg.textContent = `Thank you, ${submittedName.split(" ")[0]} — your message has been sent. We'll be in touch shortly.`;
    msg.className = "contact-form-message success";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  atelierInitTriggers();
  atelierInitFilterButtons();
  atelierInitAuctionFilters();
  atelierApplyURLFilter();
  atelierInitRegisterPage();
  atelierInitContactForm();
});
