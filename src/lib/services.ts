export const CITIES = ["Casablanca", "Rabat", "Agadir"] as const;

export type Package = {
  id: string;
  name: string;
  price: number;
  duration: string;
  includes: string[];
  excludes: string[];
};

export const INSPECTION = {
  basePrice: 250,
  agadirPrice: 200,
  travelNote: "Travel outside the city ring is quoted after the listing address is confirmed (estimate 50–150 DH).",
  radiusKm: 25,
  turnaround: "Same day in Casablanca & Rabat if booked before 14:00. Next day in Agadir.",
  checklist: [
    "CPU identity, temperatures, stability",
    "GPU identity, artifacts, 3D stress",
    "RAM size/speed and memtest pass",
    "SSD/HDD health (SMART, reallocated sectors)",
    "Motherboard visual + POST + BIOS",
    "PSU rails / coil whine / smell",
    "Cooling, fans, dust, noise",
    "USB, display outputs, Wi-Fi, Bluetooth",
    "Physical condition, screws, missing parts",
    "Fair-value estimate vs catalogue",
  ],
  verdicts: [
    { id: "BUY", label: "BUY", hint: "Hardware matches the listing. Fair price." },
    { id: "NEGOTIATE", label: "NEGOTIATE / CHECK FURTHER", hint: "Issues or overpricing. We suggest a number." },
    { id: "DONT", label: "DON'T BUY", hint: "Hidden faults, fake parts, or unsafe PSU." },
  ],
  packages: [
    {
      id: "inspect-standard",
      name: "Standard inspection",
      price: 250,
      duration: "45–70 min on site",
      includes: [
        "On-site visit to the seller",
        "Hardware verification + photos/videos",
        "Temps, stress, SMART, RAM test",
        "Written report + BUY / NEGOTIATE / DON'T BUY",
        "Fair-value estimate",
      ],
      excludes: ["Purchase of the PC", "Repair", "Guarantee of future failures"],
    },
    {
      id: "inspect-plus",
      name: "Inspection + gaming bench",
      price: 350,
      duration: "70–90 min",
      includes: [
        "Everything in Standard",
        "Game / synthetic FPS snapshot",
        "Thermal paste condition note",
        "WhatsApp walkthrough of the report",
      ],
      excludes: ["Overnight soak test unless agreed"],
    },
  ] satisfies Package[],
};

export const ASSEMBLY = {
  packages: [
    {
      id: "asm-basic",
      name: "Basic",
      price: 250,
      duration: "1–2 working days",
      includes: [
        "Compatibility check",
        "Assembly + cable routing",
        "BIOS defaults, RAM XMP/EXPO if stable",
        "POST confirmation",
      ],
      excludes: ["OS licence", "RGB software setup", "Water-cooling custom loops"],
    },
    {
      id: "asm-standard",
      name: "Standard",
      price: 400,
      duration: "1–2 working days",
      includes: [
        "Everything in Basic",
        "Driver pack + Windows install with customer-supplied licence",
        "30 min CPU+GPU stress + temps",
        "Photo report of the finished build",
      ],
      excludes: ["OS licence purchase", "Data migration"],
    },
    {
      id: "asm-premium",
      name: "Premium",
      price: 650,
      duration: "2–3 working days",
      includes: [
        "Everything in Standard",
        "Custom cable management",
        "Undervolt / fan curve if requested",
        "2-hour combined stress",
        "30-day assembly workmanship cover",
      ],
      excludes: ["Component warranty (stays with retailer)", "Liquid-metal applications"],
    },
  ] satisfies Package[],
  note: "Customer-supplied parts are inspected on arrival. Damaged-on-arrival photos are taken before assembly starts.",
};

export const CLEANING = {
  packages: [
    {
      id: "cln-basic",
      name: "Basic cleaning",
      price: 150,
      duration: "45 min",
      includes: ["Exterior wipe", "Compressed-air dust-out of fans and filters", "Cable tidy"],
      excludes: ["Thermal paste", "Pad replacement", "Disassembly of GPU cooler"],
    },
    {
      id: "cln-deep",
      name: "Deep cleaning",
      price: 250,
      duration: "90 min",
      includes: [
        "Full interior dust removal",
        "Fan and radiator pass (air-only, no liquids on PCBs)",
        "Case and glass",
        "Before/after photos + idle temps",
      ],
      excludes: ["Paste unless added as Thermal service"],
    },
    {
      id: "cln-thermal",
      name: "Thermal service",
      price: 350,
      duration: "2 h",
      includes: [
        "Deep cleaning",
        "CPU paste replacement (quality paste)",
        "GPU paste only if the cooler is a standard air cooler we can reseat safely",
        "Load temperature comparison",
      ],
      excludes: ["Laptop vapour-chamber work", "Custom loop drain"],
    },
    {
      id: "cln-full",
      name: "Full maintenance",
      price: 450,
      duration: "half day",
      includes: [
        "Thermal service",
        "Pad replacement when original pads are compressed",
        "Fan check / replace if customer supplies fans",
        "Cable management",
        "Written maintenance card",
      ],
      excludes: ["New fans unless quoted", "Data backup"],
    },
  ] satisfies Package[],
  safety: "No household liquids, no vacuum-on-fan, no high-PSI compressors on bearings. ESD strap on every open chassis.",
};

export const CONTACT = {
  email: "hello@checkmypc.ma",
  hours: "Mon–Sat 10:00–19:00",
  cities: CITIES,
  instagram: "https://instagram.com/checkmypc.ma",
  tiktok: "https://www.tiktok.com/@checkmypc.ma",
  facebook: "https://facebook.com/checkmypc.ma",
};

export const STEPS = [
  { id: "check", label: "CHECK", hint: "Specs vs listing" },
  { id: "compare", label: "COMPARE", hint: "Lowest listed DH" },
  { id: "build", label: "BUILD", hint: "Compatible parts" },
  { id: "clean", label: "CLEAN", hint: "Temps back to spec" },
  { id: "inspect", label: "INSPECT", hint: "Used, verified" },
  { id: "buy", label: "BUY", hint: "Decide with a report" },
];
