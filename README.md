# The Atelier Gallery

A static website for a curated art gallery and auction house featuring two artists: Claude Monet and Vincent van Gogh.

## Overview

The Atelier Gallery presents a small, curated collection of six paintings across two artists. The site supports browsing the collection, reading artist biographies, viewing auction lots, registering for sales, placing bids, and contacting the gallery.

## Requirements

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools, server, or dependencies required
- Internet connection (for Google Fonts)

## Installation

1. Download or clone all project files into a single directory.
2. Open `index.html` in a web browser.

No installation steps, package managers, or servers are required. All pages are static HTML.

## File Structure

```
.
├── index.html            Homepage — collection grid with artist/category filters
├── artist.html            Artist directory and biographies
├── auction.html           Auction lot listings with filters
├── register.html          Sale registration and bidding forms
├── news.html               Gallery news and announcements
├── painting.html           Individual painting detail page
├── contacts.html           Contact information and message form
├── atelier-style.css     Shared stylesheet for all pages
├── atelier-script.js     Shared JavaScript for all pages
└── images/                    Image assets (not included — see Assets)
```

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home. Displays the six-painting collection with filter buttons (All / Monet / Van Gogh). |
| `artist.html` | Lists both artists with portraits, years, and biographies. |
| `auction.html` | Lists auction lots with filters for artist, status, and price range. |
| `register.html` | Reserve a seat for the sale and submit bids on open lots. |
| `news.html` | Displays gallery announcements and past sale results. |
| `painting.html` | Displays detail for a single painting (image, medium, dimensions, description). |
| `contacts.html` | Displays gallery contact information and a message form. |

## Assets

This repository does not include image files. Populate an `images/` directory at the project root with the filenames referenced in `atelier-script.js` and each HTML file (for example, `monet-water-lilies-1906.jpg`, `vangogh-portrait.jpg`). Pages will not render correctly without these assets.

All painting images and artist portraits are public domain. Photos used on the News page are stock photography sourced from Unsplash.

## Data

Painting and artist data (titles, years, descriptions, tags) is defined in `atelier-script.js` in the `paintings` and `artists` arrays. To add or edit a painting or artist, edit these arrays directly. There is no external database or API.

## Forms

All forms (`register.html`, `contacts.html`) are handled client-side in `atelier-script.js`. No form submits to a server or persists data after the page is reloaded. This is a front-end demonstration only.

## Browser Support

Tested against current versions of Chrome, Firefox, Safari, and Edge. No support is provided for Internet Explorer.

## License

No license specified.
