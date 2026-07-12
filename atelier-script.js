// ==========================================================
// Data: the paintings and artists shown across the site.
// (In a real gallery this would come from a database instead
// of being hard-coded here.)
// ==========================================================

const paintings = [
  {
    id: "monet-water-lilies-1906",
    title: "Water Lilies (Nymphéas)",
    artistId: "monet",
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
    artistId: "monet",
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
    artistId: "monet",
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
    artistId: "vangogh",
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
    artistId: "vangogh",
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
    artistId: "vangogh",
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

const artists = [
  {
    id: "monet",
    name: "Claude Monet",
    years: "1840 – 1926",
    nationality: "French",
    tags: ["Impressionism", "Plein Air", "Landscape"],
    portrait: "images/monet-portrait.jpg",
    bio: "Monet basically invented Impressionism, he'd paint the same haystack or pond over and over, chasing how the light changed on it hour by hour. His garden at Giverny became his life's work, giving us the Water Lilies series he painted almost until the day he died."
  },
  {
    id: "vangogh",
    name: "Vincent van Gogh",
    years: "1853 – 1890",
    nationality: "Dutch",
    tags: ["Post-Impressionism", "Expressive Color", "Arles"],
    portrait: "images/vangogh-portrait.jpg",
    bio: "Van Gogh only painted seriously for about a decade, but he packed it with bold color and thick, swirling brushstrokes unlike anything painters had done before. His time in sunny Arles, and later at the asylum in Saint-Rémy, produced the paintings he's most loved for today."
  }
];

// Tracks which item is currently showing in the pop-up viewer,
// and whether that item is a painting or an artist.
let viewerMode = null; // "painting" | "artist"
let currentPaintingIndex = 0;
let currentArtistIndex = 0;

// ==========================================================
// Pop-up viewer (the "lightbox" that opens over the page)
// ==========================================================

function buildViewer() {
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

  overlay.querySelector(".lightbox-close").addEventListener("click", closeViewer);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeViewer();
  });
  overlay.querySelector(".lightbox-prev").addEventListener("click", () => showNextOrPrevious(-1));
  overlay.querySelector(".lightbox-next").addEventListener("click", () => showNextOrPrevious(1));

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("active")) return;
    if (event.key === "Escape") closeViewer();
    if (event.key === "ArrowLeft") showNextOrPrevious(-1);
    if (event.key === "ArrowRight") showNextOrPrevious(1);
  });
}

function renderPaintingInViewer(index) {
  const painting = paintings[index];
  const body = document.getElementById("atelier-lightbox-body");
  body.innerHTML = `
    <div class="lightbox-painting lightbox-track">
      <img class="lightbox-image" src="${painting.image}" alt="${painting.title}, ${painting.year}">
      <div>
        <p class="lightbox-counter">Lot ${index + 1} of ${paintings.length}</p>
        <h2>${painting.title}</h2>
        <p class="lightbox-subline" data-open-artist="${painting.artistId}">${painting.artistName}, ${painting.year}</p>
        <div class="info-row"><span>Category</span><span>${painting.categoryLabel}</span></div>
        <div class="info-row"><span>Medium</span><span>${painting.medium}</span></div>
        <div class="info-row"><span>Date</span><span>${painting.year}</span></div>
        <div class="info-row"><span>Dimensions</span><span>${painting.dimensions}</span></div>
        <div class="painting-description">${painting.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
        <div class="tags">${painting.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </div>
  `;
  body.querySelector("[data-open-artist]").addEventListener("click", (event) => {
    openArtist(event.currentTarget.dataset.openArtist);
  });
}

function renderArtistInViewer(index) {
  const artist = artists[index];
  const body = document.getElementById("atelier-lightbox-body");
  body.innerHTML = `
    <div class="lightbox-artist lightbox-track">
      <img class="lightbox-portrait" src="${artist.portrait}" alt="Portrait of ${artist.name}">
      <div>
        <p class="lightbox-counter">Artist ${index + 1} of ${artists.length}</p>
        <h2>${artist.name}</h2>
        <p class="artist-years">${artist.years} &middot; ${artist.nationality}</p>
        <p>${artist.bio}</p>
        <div class="artist-movement-tags">${artist.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <a href="index.html?artist=${artist.id}#gallery" class="lightbox-view-works">View Works by ${artist.name.split(" ").pop()}</a>
      </div>
    </div>
  `;
}

function openPainting(id) {
  buildViewer();
  const index = paintings.findIndex((painting) => painting.id === id);
  currentPaintingIndex = index >= 0 ? index : 0;
  viewerMode = "painting";
  renderPaintingInViewer(currentPaintingIndex);
  document.getElementById("atelier-lightbox").classList.add("active");
  document.body.classList.add("lightbox-open");
}

function openArtist(id) {
  buildViewer();
  const index = artists.findIndex((artist) => artist.id === id);
  currentArtistIndex = index >= 0 ? index : 0;
  viewerMode = "artist";
  renderArtistInViewer(currentArtistIndex);
  document.getElementById("atelier-lightbox").classList.add("active");
  document.body.classList.add("lightbox-open");
}

function closeViewer() {
  const overlay = document.getElementById("atelier-lightbox");
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.classList.remove("lightbox-open");
}

// direction is -1 for previous, 1 for next
function showNextOrPrevious(direction) {
  if (viewerMode === "painting") {
    currentPaintingIndex = (currentPaintingIndex + direction + paintings.length) % paintings.length;
    renderPaintingInViewer(currentPaintingIndex);
  } else if (viewerMode === "artist") {
    currentArtistIndex = (currentArtistIndex + direction + artists.length) % artists.length;
    renderArtistInViewer(currentArtistIndex);
  }
}

// ==========================================================
// Click handlers that open the pop-up viewer
// ==========================================================

function setupViewerTriggers() {
  document.querySelectorAll("a[data-work]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openPainting(link.dataset.work);
    });
  });

  document.querySelectorAll("[data-artist-trigger]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      openArtist(el.dataset.artistTrigger);
    });
  });
}

// ==========================================================
// "All Artists / Monet / Van Gogh" filter buttons on the
// homepage gallery grid
// ==========================================================

function setupGalleryFilterButtons() {
  document.querySelectorAll(".filters").forEach((filterGroup) => {
    const buttons = Array.from(filterGroup.querySelectorAll("button[data-filter]"));
    if (!buttons.length) return;

    const section = filterGroup.closest("section");
    const grid = section ? section.querySelector(".gallery-grid") : null;
    if (!grid) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active-filter"));
        button.classList.add("active-filter");

        const chosenFilter = button.dataset.filter;
        grid.querySelectorAll(".gallery-item").forEach((item) => {
          const matchesFilter =
            chosenFilter === "all" ||
            item.dataset.artist === chosenFilter ||
            item.dataset.category === chosenFilter;
          item.classList.toggle("is-hidden", !matchesFilter);
        });
      });
    });
  });
}

// If the homepage is opened with ?artist=monet in the URL
// (e.g. from the Artists page), pre-select that artist's filter.
function applyArtistFilterFromURL() {
  const params = new URLSearchParams(window.location.search);
  const artistId = params.get("artist");
  if (!artistId) return;

  const button = document.querySelector(`.filters button[data-filter="${artistId}"]`);
  if (button) {
    button.click();
    window.setTimeout(() => {
      button.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
  }
}

// ==========================================================
// Auction page: artist / status / price filters for the lots
// ==========================================================

function setupAuctionFilters() {
  const panel = document.querySelector(".filter-panel");
  const grid = document.querySelector(".lot-grid");
  if (!panel || !grid) return;

  const artistCheckboxes = Array.from(panel.querySelectorAll("input[data-artist]"));
  const statusCheckboxes = Array.from(panel.querySelectorAll("input[data-status]"));
  const priceInputs = Array.from(panel.querySelectorAll(".price-inputs input"));

  function toNumber(value) {
    return parseInt((value || "").replace(/[^0-9]/g, ""), 10) || 0;
  }

  function applyFilters() {
    const allowedArtists = artistCheckboxes.filter((box) => box.checked).map((box) => box.dataset.artist);
    const allowedStatuses = statusCheckboxes.filter((box) => box.checked).map((box) => box.dataset.status);
    const minPrice = toNumber(priceInputs[0]?.value);
    const maxPriceText = (priceInputs[1]?.value || "").replace(/[^0-9]/g, "");
    const maxPrice = maxPriceText ? parseInt(maxPriceText, 10) : Infinity;

    grid.querySelectorAll(".lot-card").forEach((card) => {
      const price = parseInt(card.dataset.price, 10) || 0;
      const shouldShow =
        allowedArtists.includes(card.dataset.artist) &&
        allowedStatuses.includes(card.dataset.status) &&
        price >= minPrice &&
        price <= maxPrice;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  }

  [...artistCheckboxes, ...statusCheckboxes].forEach((box) => box.addEventListener("change", applyFilters));
  priceInputs.forEach((input) => input.addEventListener("change", applyFilters));
}

// ==========================================================
// Register & Bid page: seat counter + the two forms
// ==========================================================

function setupRegisterPage() {
  const reserveForm = document.getElementById("reserve-form");
  const bidForm = document.getElementById("bid-form");
  if (!reserveForm && !bidForm) return;

  const totalSeats = parseInt(document.getElementById("spots-total")?.textContent, 10) || 60;
  const seatsLeftLabel = document.getElementById("spots-left");
  const capacityBar = document.getElementById("capacity-fill");

  function seatsLeft() {
    return parseInt(seatsLeftLabel.textContent, 10);
  }

  function updateCapacityBar() {
    const left = seatsLeft();
    const percentFull = ((totalSeats - left) / totalSeats) * 100;
    capacityBar.style.width = percentFull + "%";
    capacityBar.classList.toggle("is-almost-full", left <= totalSeats * 0.15);

    if (left <= 0) {
      const card = reserveForm.closest(".form-card");
      card.classList.add("is-disabled");
      const message = document.getElementById("reserve-message");
      message.textContent = "Registration is full for the August sale.";
      message.className = "form-message error";
    }
  }

  updateCapacityBar();

  if (reserveForm) {
    reserveForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = document.getElementById("reserve-message");
      const name = document.getElementById("reserve-name").value.trim();
      const email = document.getElementById("reserve-email").value.trim();
      const seatsRequested = parseInt(document.getElementById("reserve-guests").value, 10) || 1;

      if (!name || !email) {
        message.textContent = "Please fill in your name and email.";
        message.className = "form-message error";
        return;
      }

      const left = seatsLeft();
      if (seatsRequested > left) {
        message.textContent = `Only ${left} seat${left === 1 ? "" : "s"} remaining — please reduce your seat count.`;
        message.className = "form-message error";
        return;
      }

      seatsLeftLabel.textContent = String(left - seatsRequested);
      reserveForm.reset();
      updateCapacityBar();
      message.textContent = `You're registered, ${name.split(" ")[0]}. A confirmation has been sent to ${email}.`;
      message.className = "form-message success";
    });
  }

  if (bidForm) {
    const lotSelect = document.getElementById("bid-lot");
    const bidHint = document.getElementById("bid-hint");

    function currentBidFor(option) {
      return parseInt(option.dataset.current, 10);
    }

    function updateBidHint() {
      const current = currentBidFor(lotSelect.selectedOptions[0]);
      bidHint.textContent = `Must exceed the current bid of $${current.toLocaleString()}`;
    }
    lotSelect.addEventListener("change", updateBidHint);
    updateBidHint();

    bidForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = document.getElementById("bid-message");
      const name = document.getElementById("bid-name").value.trim();
      const email = document.getElementById("bid-email").value.trim();
      const bidAmount = parseInt(document.getElementById("bid-amount").value.replace(/[^0-9]/g, ""), 10) || 0;
      const selectedOption = lotSelect.selectedOptions[0];
      const currentBid = currentBidFor(selectedOption);

      if (!name || !email || !bidAmount) {
        message.textContent = "Please fill in every field.";
        message.className = "form-message error";
        return;
      }

      if (bidAmount <= currentBid) {
        message.textContent = `Your bid must be higher than $${currentBid.toLocaleString()}.`;
        message.className = "form-message error";
        return;
      }

      const lotName = selectedOption.textContent.split("\u2014")[0].trim();
      selectedOption.dataset.current = String(bidAmount);
      selectedOption.textContent = selectedOption.textContent.split("Current")[0] + `Current $${bidAmount.toLocaleString()}`;

      bidForm.reset();
      updateBidHint();

      message.textContent = `Bid placed, ${name.split(" ")[0]}. You're currently the highest bidder on ${lotName}.`;
      message.className = "form-message success";
    });
  }
}

// ==========================================================
// Contact page form
// ==========================================================

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementById("contact-form-message");
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const messageText = document.getElementById("contact-message").value.trim();

    if (!name || !email || !messageText) {
      message.textContent = "Please fill in every field before sending.";
      message.className = "contact-form-message error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      message.textContent = "Please enter a valid email address.";
      message.className = "contact-form-message error";
      return;
    }

    form.reset();
    message.textContent = `Thank you, ${name.split(" ")[0]} — your message has been sent. We'll be in touch shortly.`;
    message.className = "contact-form-message success";
  });
}

// ==========================================================
// Run everything once the page has loaded
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  setupViewerTriggers();
  setupGalleryFilterButtons();
  setupAuctionFilters();
  applyArtistFilterFromURL();
  setupRegisterPage();
  setupContactForm();
});
