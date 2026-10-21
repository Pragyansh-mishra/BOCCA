/* ==========================================================================
   BOCCA ITALIAN COFFEE & PIZZA HOUSE
   Centralized Business Configuration & Verification Data
   Dungarpur, Rajasthan, India
   ========================================================================== */

const BUSINESS_CONFIG = {
  // Official Brand Identity
  brandName: "BOCCA Italian Coffee & Pizza House",
  shortName: "BOCCA",
  tagline: "Good Food. Great Coffee. Better Moments.",
  description: "A contemporary café destination in Dungarpur for artisanal pizzas, comforting pastas, handcrafted coffee, milkshakes, and sweet treats.",
  
  // Reported Location (Provisional - pending owner verification)
  city: "Dungarpur",
  state: "Rajasthan",
  country: "India",
  pincode: "314001",
  address: "Police Line Colony, Shivaji Nagar, opposite Nikunj Plaza, Dungarpur, Rajasthan 314001, India.",
  addressShort: "Opposite Nikunj Plaza, Shivaji Nagar, Dungarpur",
  landmark: "Opposite Nikunj Plaza, Shivaji Nagar",

  // Reported Contact Information (Provisional)
  phoneDisplay: "+91 99769 88888",
  phoneRaw: "+919976988888",
  phoneTelLink: "tel:+919976988888",

  // Verified External Links
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bocca+Italian+Coffee+and+Pizza+House+Dungarpur",
  zomatoUrl: "https://www.zomato.com/dungarpur/bocca-italian-coffee-and-pizza-house-1-dungarpur-locality/order",
  
  // Reported Operating Hours (Provisional)
  hours: "8:00 AM – 11:00 PM Daily",
  hoursNote: "Reported business hours are subject to confirmation.",

  // Local Business Metadata
  businessType: "Café & Pizza Restaurant",
  currency: "INR",
  currencySymbol: "₹",

  // Verification & Compliance Notes
  isProvisional: true,
  verificationNotice: "Contact information, address, and operating hours are compiled from public listings and remain provisional pending independent confirmation by the business owner.",
  
  // Dynamic Year
  currentYear: new Date().getFullYear()
};

// Expose globally for vanilla browser scripts
if (typeof window !== 'undefined') {
  window.BUSINESS_CONFIG = BUSINESS_CONFIG;
}

// Support Node.js/CommonJS export if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BUSINESS_CONFIG;
}
