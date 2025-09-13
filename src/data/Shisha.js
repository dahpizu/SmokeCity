const shishaItems = [
  {
    id: 1,
    name: "Stündenglass Gravity Infuser",
    priceCents: 16500000,
    priceDisplay: "₦165,000",
    description: `A 360° rotating glass infuser that uses kinetic motion.
    What's Included:
    - 1 Glass + Aluminum Hookah Pipe, 1 Glass Bowl, 1 Coal Tray, 13ft Hose, 1 14mm Male to Male Adapter`,
    colors: [
      {
        name: "Gold",
        code: "#FFD700",
        images: ["/images/Shisha/001.jpeg"],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: ["/images/Shisha/003.jpeg", "/images/Shisha/002.jpeg"],
      },
    ],
  },
  {
    id: 2,
    name: "Mini Hookah 1 Hose Complete Set With Led Light ",
    priceCents: 5500000,
    priceDisplay: "₦55,000",
    description: `It features an Inegrated LED light`,
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: ["/images/Shisha/006.jpeg"],
      },
      {
        name: "Red",
        code: "#FF0000",
        images: ["/images/Shisha/007.jpeg"],
      },
      {
        name: "Orange",
        code: "#FFA500",
        images: ["/images/Shisha/008.jpeg"],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: ["/images/Shisha/009.jpeg"],
      },
    ],
  },
  {
    id: 3,
    name: "Amotion Flash Bang Premium",
    priceCents: 18000000,
    priceDisplay: "₦180,000",
    description: `Packing includes: one single color hookah pot + 1 stainless steel handle`,
    colors: [
      {
        name: "Yellow",
        code: "#FFFF00",
        images: ["/images/Shisha/011.jpeg", "/images/Shisha/012.jpeg"],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: ["/images/Shisha/013.jpeg", "/images/Shisha/014.jpeg"],
      },
    ],
  },
  {
    id: 4,
    name: "Fashionable Paris Eiffel Tower(Dual Hose)",
    priceCents: 7500000,
    priceDisplay: "₦75,000",
    description: `Package including: 2Pcs Double Shisha Hose, 1PC Acrylic Hookah Base, 1PC Metal Acrylic Tongs, 1PC Ceramics Bowl, 1Pc Shisha Plate, 1PC Metal Paris Tower (As the pic show)`,
    colors: [
      {
        name: "Gold",
        code: "#FFD700",
        images: ["/images/Shisha/016.jpeg", "/images/Shisha/020.jpeg"],
      },
      {
        name: "Aeneous",
        code: "#7CB9A3",
        images: [
          "/images/Shisha/017.jpeg",
          "/images/Shisha/021.jpeg",
          "/images/Shisha/018.jpeg",
        ],
      },
    ],
  },
  {
    id: 5, // ✅ Changed from 4 to 5
    name: "Lovely Bear Shape (Single Pipe)",
    priceCents: 7500000,
    priceDisplay: "₦75,000",
    description: `Packaging: hookah body, hookah bottle, hookha bowl, silicone tube, aluminum handle, carbon clip`,
    colors: [
      {
        name: "Gold",
        code: "#FFD700",
        images: ["/images/Shisha/022.jpeg", "/images/Shisha/024.jpeg"],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: ["/images/Shisha/023.jpeg"],
      },
    ],
  },
  {
    id: 6, // ✅ Changed from 4 to 5
    name: "Crystal LED Acrylic Hookah Set",
    priceCents: 7500000,
    priceDisplay: "₦75,000",
    description: `Acrylic Base with a Multi-color LED Lights & Remote Control.`,
    colors: [
      {
        name: "Pink",
        code: "#FFC0CB",
        images: ["/images/Shisha/025.jpeg"],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: ["/images/Shisha/026.jpeg"],
      },
      {
        name: "Purple",
        code: "#800080",
        images: ["/images/Shisha/027.jpeg"],
      },
      {
        name: "Green",
        code: "#008000",
        images: ["/images/Shisha/029.jpeg"],
      },
      {
        name: "White",
        code: "#FFFFFF",
        images: ["/images/Shisha/028.jpeg"],
      },
    ],
  },
  {
    id: 7, // ✅ Changed from 4 to 5
    name: "LED Hookah Set with Accessories – Portable Travel Hookah Kit with Dual Hoses",
    priceCents: 9000000,
    priceDisplay: "₦90,000",
    description: `This Hookah Set is a portable, easy-to-assemble hookah kit featuring durable materials and a vibrant LED light system.`,
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: [
          "/images/Shisha/031.jpeg",
          "/images/Shisha/030.jpeg",
          "/images/Shisha/032.jpeg",
          "/images/Shisha/033.jpeg",
        ],
      },
    ],
  },
  {
    id: 8, // ✅ Changed from 4 to 5
    name: "H-one  Tsar Premium",
    priceCents: 17500000,
    priceDisplay: "₦175,000",
    description: `45cm, aluminum, butterfly tray, diffuser, silicone hose, concealed purge. The TSAR H-ONE hookah stands 45cm tal...
    TSAR H-ONE Hookah, 45cm, aluminum, butterfly tray, diffuser, silicone hose, concealed purge.
    `,
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: ["/images/Shisha/034.jpeg"],
      },
      {
        name: "Snow",
        code: "#FFFAFA",
        images: ["/images/Shisha/035.jpeg", "/images/Shisha/036.jpeg"],
      },
    ],
  },
  {
    id: 9, // ✅ Changed from 4 to 5
    name: "Classic Double Hose Glass Hookah",
    priceCents: 3250000,
    priceDisplay: "₦32,500",
    description: `This elegant shisha pot is crafted for both style and durability, making it a perfect choice for everyday use or special occasions.`,
    colors: [
      {
        name: "Blue",
        code: "#0000FF",
        images: ["/images/Shisha/037.jpeg"],
      },
      {
        name: "Black",
        code: "#000000",
        images: ["/images/Shisha/038.jpeg"],
      },
      {
        name: "Red",
        code: "#FF0000",
        images: ["/images/Shisha/039.jpeg"],
      },
      {
        name: "Yellow",
        code: "#FFFF00",
        images: ["/images/Shisha/040.jpeg"],
      },
      {
        name: "Green",
        code: "#008000",
        images: ["/images/Shisha/041.jpeg"],
      },
    ],
  },
  {
    id: 10,
    name: "Colorful Glass Hookah Pot – Single & Double Hose",
    description: `Premium Hookah Shisha Glass Pot – 27cm
  Elevate your hookah experience with this elegant glass shisha pot, designed for both style and performance.`,
    variants: [
      {
        type: "Single Hose",
        priceCents: 3250000,
        priceDisplay: "₦32,500",
        colors: [
          {
            name: "Green",
            code: "#008000",
            images: ["/images/Shisha/045.jpeg"],
          },
          {
            name: "Black",
            code: "#000000",
            images: ["/images/Shisha/048.jpeg"],
          },
        ],
      },
      {
        type: "Double Hose",
        priceCents: 3750000,
        priceDisplay: "₦37,500",
        colors: [
          {
            name: "White",
            code: "#FFFFFF",
            images: ["/images/Shisha/042.jpeg"], // example path for double hose images
          },
          {
            name: "Black",
            code: "#000000",
            images: ["/images/Shisha/044.jpeg"],
          },
          {
            name: "Pink",
            code: "#FFC0CB",
            images: ["/images/Shisha/049.jpeg"],
          },
        ],
      },
    ],
  },
  {
    id: 11, // ✅ Changed from 4 to 5
    name: "2-Hose Portable Acrylic Cube Hookah with LED Light",
    priceCents: 80000000,
    priceDisplay: "₦80,000",
    description: `2-Hose Portable Acrylic Cube Hookah with LED Light`,
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: ["/images/Shisha/052.jpeg", "/images/Shisha/051.jpeg"],
      },

      {
        name: "Green",
        code: "#008000",
        images: ["/images/Shisha/050.jpeg"],
      },
    ],
  },
  {
    id: 12, // ✅ Changed from 4 to 5
    name: "SC Hookah Shisha Set model (SH-S003)",
    priceCents: 40000000,
    priceDisplay: "₦40,000",
    description: `SC Hookah Shisha Set model (SH-S003)`,
    colors: [
      {
        name: "Black",
        code: "#000000",
        images: ["/images/Shisha/056.jpeg"],
      },

      {
        name: "Green",
        code: "#008000",
        images: ["/images/Shisha/058.jpeg"],
      },
      {
        name: "Red",
        code: "#FF0000",
        images: ["/images/Shisha/059.jpeg"],
      },
      {
        name: "Yellow",
        code: "#FFFF00",
        images: ["/images/Shisha/054.jpeg"],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: [
          "/images/Shisha/060.jpeg",
          "/images/Shisha/055.jpeg",
          "/images/Shisha/053.jpeg",
          "/images/Shisha/061.jpeg",
        ],
      },
    ],
  },
  {
    id: 13, // ✅ Changed from 4 to 5
    name: "Portable single hose Glass Hookah",
    priceCents: 18000000,
    priceDisplay: "₦18,000",
    description: `The hookah comes with a sturdy glass base, a detachable stem for easy cleaning, and a secure hose connection to prevent leakage.`,
    colors: [
      {
        name: "Blue",
        code: "#0000FF",
        images: ["/images/Shisha/065.jpeg"],
      },

      {
        name: "Yellow",
        code: "#FFFF00",
        images: ["/images/Shisha/064.jpeg"],
      },
      {
        name: "Pink",
        code: "#FFC0CB",
        images: ["/images/Shisha/063.jpeg"],
      },
      {
        name: "Purple",
        code: "#800080",
        images: ["/images/Shisha/066.jpeg", "/images/Shisha/062.jpeg"],
      },
    ],
  },
  {
    id: 14, // ✅ Changed from 4 to 5
    name: " Al Fakher Hookah Foil – Ready to Use",
    priceCents: 17500000,
    priceDisplay: "₦175,000",
    description: `Enjoy a smoother shisha session with Al Fakher Hookah Foil, made from premium, heat-resistant aluminum.
    `,
    colors: [
      {
        images: [
          "/images/Accessories/042.jpeg",
          "/images/Accessories/041.jpeg",
          "/images/Accessories/040.jpeg",
          "/images/Accessories/043.jpeg",
        ],
      },
    ],
  },
  {
    id: 15,
    name: " Long Shisha Mouth Tips",
    priceCents: 17500000,
    priceDisplay: "₦175,000",
    description: `Enjoy every puff with these long plastic hookah tips, designed for hygiene and comfort.
    `,
    colors: [
      {
        images: [
          "/images/Accessories/044.jpeg",
          "/images/Accessories/045.jpeg",
          "/images/Accessories/046.jpeg",
        ],
      },
    ],
  },
  {
    id: 16,
    name: " Quality 1.8m Long Hookah Shisha Hose",
    priceCents: 17500000,
    priceDisplay: "₦175,000",
    description: `Enhance your hookah sessions with this 1.8m Long Shisha Hose, designed for comfort, durability, and a smooth smoking experience.
    `,
    colors: [
      {
        name: "Red",
        code: "#FF0000",
        images: ["/images/Accessories/048.jpeg"],
      },
      {
        name: "Yellow",
        code: "#FFD700",
        images: ["/images/Accessories/049.jpeg"],
      },

      {
        name: "Blue",
        code: "#0000FF",
        images: ["/images/Accessories/052.jpeg"],
      },
      {
        name: "Green",
        code: "#00FF00",
        images: ["/images/Accessories/051.jpeg"],
      },
      {
        name: "Purple",
        code: "#800080",
        images: ["/images/Accessories/050.jpeg"],
      },
    ],
  },
];

export default shishaItems;
