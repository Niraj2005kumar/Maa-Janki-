

export const business = {
  name: "Maa Janki Tiles & Marbles",
  tagline: "Tiles & Marble Solutions for Your Home & Projects",
  address: "Jhuttham, Barmishiya Main Road, Bharkatta, Jharkhand – 825324",
  locality: "Bharkatta",
  region: "Jharkhand",
  postalCode: "825324",
  phoneDisplay: "098218 47381",
  phoneLink: "tel:+919821847381",
  whatsappNumber: "919821847381",
  mapsLink:
    "https://www.google.com/maps/place/Maa+Janki+tiles+and+marbles/@24.2407398,85.9957033,426m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f3f30061930611:0x87d5491ac7610f34!2sMaa+Janki+tiles+and+marbles!8m2!3d24.2406899!4d85.9955541!16s%2Fg%2F11wwt312yh!3m5!1s0x39f3f30061930611:0x87d5491ac7610f34!8m2!3d24.2406899!4d85.9955541!16s%2Fg%2F11wwt312yh?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  reviewsLink:
    "https://www.google.com/maps/place/Maa+Janki+tiles+and+marbles/@24.2407398,85.9957033,426m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39f3f30061930611:0x87d5491ac7610f34!2sMaa+Janki+tiles+and+marbles!8m2!3d24.2406899!4d85.9955541!16s%2Fg%2F11wwt312yh!3m5!1s0x39f3f30061930611:0x87d5491ac7610f34!8m2!3d24.2406899!4d85.9955541!16s%2Fg%2F11wwt312yh?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  mapEmbed:
    "https://www.google.com/maps?q=24.2406899,85.9955541&output=embed",
  hours: "Please call us to confirm today's showroom timings.",
  // Add real profile links here to show them in the footer.
  facebook: "",
  instagram: "",
};

export function waLink(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const categories = [
  {
    name: "Floor Tiles",
    desc: "Large format and standard floor tiles in glossy, matte and wooden finishes.",
    image: "/images/floor-tile-01.jpg",
  },
  {
    name: "Wall Tiles",
    desc: "Highlighter and plain wall tiles to finish any room neatly.",
    image: "/images/wall-tile-01.jpg",
  },
  {
    name: "Bathroom Tiles",
    desc: "Anti-skid floor options with matching wall designs for bathrooms.",
    image: "/images/bathroom-tile-01.jpg",
  },
  {
    name: "Kitchen Tiles",
    desc: "Easy-to-clean backsplash and floor tiles made for daily kitchen use.",
    image: "/images/kitchen-tile-01.jpg",
  },
  {
    name: "Living Room Tiles",
    desc: "Marble-look and premium finish tiles for living and dining areas.",
    image: "/images/living-tile-01.jpg",
  },
  {
    name: "Parking Tiles",
    desc: "Heavy-duty anti-skid tiles for parking areas, driveways and courtyards.",
    image: "/images/parking-tile-01.jpg",
  },
  {
    name: "Elevation Tiles",
    desc: "Exterior wall and stone-look tiles for house elevation work.",
    image: "/images/elevation-tile-01.jpg",
  },
  {
    name: "Marble",
    desc: "Marble slabs and pieces for flooring, stairs, counters and temples.",
    image: "/images/marble-01.jpg",
  },
];

export const collections = [
  {
    title: "Modern Floor Collection",
    note: "Glossy, matte and wooden finish floor tiles",
    images: ["/images/floor-tile-01.jpg", "/images/living-tile-01.jpg", "/images/hero.jpg"],
  },
  {
    title: "Elegant Wall Collection",
    note: "Plain and highlighter wall tile designs",
    images: ["/images/wall-tile-01.jpg", "/images/elevation-tile-01.jpg", "/images/showroom.jpg"],
  },
  {
    title: "Premium Bathroom Collection",
    note: "Anti-skid floors with matching wall tiles",
    images: ["/images/bathroom-tile-01.jpg", "/images/wall-tile-01.jpg", "/images/marble-01.jpg"],
  },
  {
    title: "Kitchen Collection",
    note: "Backsplash and floor tiles for daily use",
    images: ["/images/kitchen-tile-01.jpg", "/images/wall-tile-01.jpg", "/images/floor-tile-01.jpg"],
  },
  {
    title: "Outdoor & Parking Collection",
    note: "Durable tiles for parking, driveway and elevation",
    images: ["/images/parking-tile-01.jpg", "/images/elevation-tile-01.jpg", "/images/showroom.jpg"],
  },
  {
    title: "Marble Collection",
    note: "Marble for flooring, stairs and counters",
    images: ["/images/marble-01.jpg", "/images/floor-tile-01.jpg", "/images/living-tile-01.jpg"],
  },
];

export const products = [
  {
    name: "Marble Finish Glossy Floor Tile",
    category: "Floor Tiles",
    size: "600x1200mm",
    finish: "Glossy",
    desc: "Large format marble-look tile that brightens living rooms and halls.",
    image: "/images/floor-tile-01.jpg",
  },
  {
    name: "Ivory Premium Floor Tile",
    category: "Floor Tiles",
    size: "800x800mm",
    finish: "Glossy",
    desc: "Warm ivory tone that suits most wall colours and furniture.",
    image: "/images/living-tile-01.jpg",
  },
  {
    name: "Textured Stone Wall Tile",
    category: "Wall Tiles",
    size: "300x600mm",
    finish: "Matte Textured",
    desc: "Soft stone texture for feature walls and full wall cladding.",
    image: "/images/wall-tile-01.jpg",
  },
  {
    name: "Marble Effect Bathroom Tile",
    category: "Bathroom Tiles",
    size: "300x600mm",
    finish: "Glossy Wall / Anti-Skid Floor",
    desc: "Matching wall and floor set for a clean, modern bathroom.",
    image: "/images/bathroom-tile-01.jpg",
  },
  {
    name: "Kitchen Backsplash Tile",
    category: "Kitchen Tiles",
    size: "300x450mm",
    finish: "Glossy",
    desc: "Easy-to-wipe surface that handles daily cooking splashes.",
    image: "/images/kitchen-tile-01.jpg",
  },
  {
    name: "Heavy Duty Parking Tile",
    category: "Parking Tiles",
    size: "300x300mm",
    finish: "Anti-Skid",
    desc: "Strong grip surface built for vehicles and outdoor use.",
    image: "/images/parking-tile-01.jpg",
  },
  {
    name: "Stone Look Elevation Tile",
    category: "Elevation Tiles",
    size: "300x600mm",
    finish: "Rough Textured",
    desc: "Exterior tile for front elevation and boundary wall work.",
    image: "/images/elevation-tile-01.jpg",
  },
  {
    name: "White Veined Marble",
    category: "Marble",
    size: "Available in multiple sizes",
    finish: "Polished",
    desc: "Classic white marble with grey veining for floors and counters.",
    image: "/images/marble-01.jpg",
  },
];

export const gallery = [
  { image: "/images/showroom.jpg", alt: "Showroom interior with tile display racks" },
  { image: "/images/floor-tile-01.jpg", alt: "Floor tile display at the showroom" },
  { image: "/images/marble-01.jpg", alt: "Marble collection available in store" },
  { image: "/images/wall-tile-01.jpg", alt: "Wall tile designs on display" },
  { image: "/images/bathroom-tile-01.jpg", alt: "Bathroom tile setting" },
  { image: "/images/kitchen-tile-01.jpg", alt: "Kitchen tiles in a finished kitchen" },
  { image: "/images/elevation-tile-01.jpg", alt: "Elevation tiles used on a house exterior" },
  { image: "/images/hero.jpg", alt: "Customer project finished with premium floor tiles" },
];

export const faqs = [
  {
    q: "What types of tiles do you sell?",
    a: "We stock floor tiles, wall tiles, bathroom tiles, kitchen tiles, living room tiles, parking tiles, elevation tiles and marble.",
  },
  {
    q: "Do you sell bathroom tiles?",
    a: "Yes. We keep anti-skid bathroom floor tiles along with matching wall tile designs.",
  },
  {
    q: "Do you have floor and wall tiles?",
    a: "Yes, both. You can see floor and wall options together at the showroom and pick a matching combination.",
  },
  {
    q: "Do you sell marble?",
    a: "Yes. Marble is available for flooring, stairs, counters and temple work. Sizes and availability vary, so please ask us.",
  },
  {
    q: "Can I enquire about tile prices on WhatsApp?",
    a: "Yes. Send us the tile name or a photo on WhatsApp and we will share the current price and availability.",
  },
  {
    q: "Where is Maa Janki Tiles & Marbles located?",
    a: "We are at Jhuttham, Barmishiya Main Road, Bharkatta, Jharkhand – 825324. Use the Get Directions button to open the location in Google Maps.",
  },
  {
    q: "Can I visit the showroom to see tile designs?",
    a: "Yes, you are welcome to visit and see the designs and sizes in person before deciding.",
  },
  {
    q: "Do you provide tiles for new construction and renovation?",
    a: "Yes. We supply tiles and marble for new construction as well as renovation of homes, shops and offices.",
  },
];
