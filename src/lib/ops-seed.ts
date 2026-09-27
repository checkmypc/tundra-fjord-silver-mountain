import type { Booking, Technician } from "./types";
import { SAMPLE_REPORT, USED_LISTINGS, type InspectionReport } from "./used";

function isoDaysAgo(n: number, hour = 11) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(hour, 20, 0, 0);
  return d.toISOString();
}

export const DEFAULT_PIN = "2468";

export const SEED_TEAM: Technician[] = [
  {
    id: "tech-youssef",
    name: "Youssef B.",
    city: "Casablanca",
    phone: "0661001100",
    skills: ["inspection", "assembly"],
    active: true,
  },
  {
    id: "tech-amina",
    name: "Amina K.",
    city: "Rabat",
    phone: "0661002200",
    skills: ["inspection", "cleaning"],
    active: true,
  },
  {
    id: "tech-hamza",
    name: "Hamza T.",
    city: "Agadir",
    phone: "0661003300",
    skills: ["inspection", "assembly", "cleaning"],
    active: true,
  },
];

export const SEED_BOOKINGS: Booking[] = [
  {
    id: "bk-seed-1",
    kind: "inspection",
    createdAt: isoDaysAgo(0, 9),
    name: "Karim El Fassi",
    phone: "0661122334",
    city: "Casablanca",
    packageId: "inspect-plus",
    notes: "Avito listing, seller in Maarif. Wants check today if possible.",
    listingUrl: "https://www.avito.ma/listing-demo-4060",
    status: "new",
    quotedPrice: 350,
  },
  {
    id: "bk-seed-2",
    kind: "assembly",
    createdAt: isoDaysAgo(1, 14),
    name: "Sara Benali",
    phone: "0671456789",
    city: "Rabat",
    packageId: "asm-standard",
    notes: "Parts bought from PC Gamer Maroc. 1080p build.",
    status: "in_progress",
    assignedTo: "tech-amina",
    quotedPrice: 400,
    scheduledAt: isoDaysAgo(0, 10).slice(0, 10),
  },
  {
    id: "bk-seed-3",
    kind: "cleaning",
    createdAt: isoDaysAgo(2, 16),
    name: "Mehdi Ouazzani",
    phone: "0612233445",
    city: "Casablanca",
    packageId: "cln-thermal",
    notes: "PC loud after 8 months. Coastal dust.",
    machineType: "desktop",
    status: "confirmed",
    assignedTo: "tech-youssef",
    quotedPrice: 350,
    scheduledAt: isoDaysAgo(-1, 11).slice(0, 10),
  },
  {
    id: "bk-seed-4",
    kind: "inspection",
    createdAt: isoDaysAgo(4, 11),
    name: "Imane Chraibi",
    phone: "0655566677",
    city: "Rabat",
    packageId: "inspect-standard",
    notes: "Office PC for studies. Seller is a colleague.",
    listingUrl: "https://www.facebook.com/marketplace/demo",
    status: "done",
    assignedTo: "tech-amina",
    quotedPrice: 250,
    paidAmount: 250,
    scheduledAt: isoDaysAgo(3, 15).slice(0, 10),
  },
  {
    id: "bk-seed-5",
    kind: "assembly",
    createdAt: isoDaysAgo(6, 12),
    name: "Yassine Kadiri",
    phone: "0699887766",
    city: "Casablanca",
    packageId: "asm-premium",
    notes: "1440p parts arriving Friday.",
    status: "scheduled",
    assignedTo: "tech-youssef",
    quotedPrice: 650,
    scheduledAt: isoDaysAgo(-2, 9).slice(0, 10),
  },
  {
    id: "bk-seed-6",
    kind: "cleaning",
    createdAt: isoDaysAgo(8, 18),
    name: "Nada Berrada",
    phone: "0623344556",
    city: "Agadir",
    packageId: "cln-deep",
    notes: "Laptop + desktop — quoted desktop only.",
    machineType: "desktop",
    status: "done",
    assignedTo: "tech-hamza",
    quotedPrice: 250,
    paidAmount: 250,
  },
  {
    id: "bk-seed-7",
    kind: "inspection",
    createdAt: isoDaysAgo(10, 13),
    name: "Anas Tazi",
    phone: "0667788990",
    city: "Agadir",
    packageId: "inspect-standard",
    notes: "Seller cancelled after we quoted travel.",
    status: "cancelled",
    quotedPrice: 200,
  },
  {
    id: "bk-seed-8",
    kind: "inspection",
    createdAt: isoDaysAgo(12, 10),
    name: "Hajar Mansouri",
    phone: "0634455667",
    city: "Casablanca",
    packageId: "inspect-plus",
    notes: "Fake 3070 shroud — DON'T BUY report sent.",
    listingUrl: "used-agadir-fake",
    status: "done",
    assignedTo: "tech-hamza",
    quotedPrice: 350,
    paidAmount: 350,
  },
];

export const SEED_REPORTS: InspectionReport[] = [
  SAMPLE_REPORT,
  {
    id: "rep-office-rabat",
    listingId: "used-rabat-office",
    bookingId: "bk-seed-4",
    title: "Office PC · i5-12400F",
    date: isoDaysAgo(3, 16).slice(0, 10),
    city: "Rabat",
    technician: "Amina K.",
    verdict: "BUY",
    risk: "low",
    asking: 2800,
    fairValue: 3000,
    suggestOffer: 2800,
    hardware: [
      ["CPU", "Intel Core i5-12400F", "Matches listing"],
      ["GPU", "UHD 730 (no dGPU)", "Expected"],
      ["RAM", "2×8 GB DDR4-3200", "Stable"],
      ["Storage", "512 GB NVMe", "SMART 98%"],
      ["PSU", "Bronze 550W branded", "OK"],
    ],
    temps: { cpuIdle: 34, cpuLoad: 64, gpuIdle: 0, gpuLoad: 0 },
    issues: ["Missing Wi-Fi antenna screw (cosmetic)"],
    published: true,
  },
];

export function seedListings() {
  return USED_LISTINGS.map((l) => ({ ...l }));
}

export function seedActivity() {
  return [
    { id: "act-1", at: isoDaysAgo(0, 9), text: "New inspection request — Karim El Fassi, Casablanca" },
    { id: "act-2", at: isoDaysAgo(1, 14), text: "Assembly marked in progress — Sara Benali" },
    { id: "act-3", at: isoDaysAgo(3, 16), text: "Report published — Office PC i5-12400F (BUY)" },
    { id: "act-4", at: isoDaysAgo(8, 18), text: "Cleaning completed — Nada Berrada, Agadir" },
  ];
}
