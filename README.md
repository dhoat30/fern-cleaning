# Fern Cleaning

Next.js website for Fern Cleaning, based in Hamilton, New Zealand.

```sh
npm install
npm run dev
```

Open http://localhost:3000. To verify the project:

```sh
node --test tests/*.test.mjs
npm run build
```

The confirmed contact details are `0210 254 5129`, `admin@ferncleaning.co.nz`, and `https://www.ferncleaning.co.nz`. Override them with `NEXT_PUBLIC_PHONE_NUMBER`, `NEXT_PUBLIC_EMAIL_ADDRESS` and `NEXT_PUBLIC_SITE_URL` in `.env` (see `.env.example`). Enquiries are routed to `admin@ferncleaning.co.nz` via `EMAIL_TO`. The existing Mailgun sending configuration is preserved.

The homepage uses the `fern-cleaning` WordPress entry. Shared service templates are adapted to Fern Cleaning and Hamilton in `utils/cleaningContent.js`. Hamilton service URLs redirect from their former Wellington URLs. Media assets continue to load from the shared CMS.

Fern Cleaning has no reviews yet. Review sections, carousels, rating summaries, and review-based claims are omitted from the website, including inherited CMS content.

The interactive coverage section appears on every content page: before the FAQs on shared-layout and carpet shampoo pages, below the quote form on the quote page, and below the confirmation on the thank-you page. It covers Hamilton, Matamata, Cambridge, Te Kūiti and intermediate towns. Edit location names, descriptions, coordinates and zoom levels in `utils/coverageLocations.js`. Selecting a location or map pin zooms to that town; “Show all areas” restores the regional view. On mobile, selecting an area scrolls the map into view.

The map uses Leaflet and OpenStreetMap tiles with visible attribution. It loads as the coverage section approaches the viewport and requires no API key. Optional `NEXT_PUBLIC_MAP_TILE_URL` and `NEXT_PUBLIC_MAP_ATTRIBUTION` values allow switching tile providers. Rebuild after changing these values. Follow the [OpenStreetMap tile usage policy](https://operations.osmfoundation.org/policies/tiles/) when using the default provider.
