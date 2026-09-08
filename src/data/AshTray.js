const basepath = import.meta.env.BASE_URL;
const ashTrayItems = [
  {
    id: "ash1",
    name: "Dogy Ash Tray",
    description:
      "This unique ashtray is crafted in the shape of a stylish dog, combining practicality with artistic design.",
    priceDisplay: "#30,000",
    colors: [
      {
        name: "Yellow",
        code: "#FFFF00",
        images: [`${basepath}images/AshTray/062.jpeg`],
      },
      {
        name: "Black",
        code: "#000000",
        images: [`${basepath}images/AshTray/063.jpeg`],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: [`${basepath}images/AshTray/064.jpeg`],
      },
      {
        name: "Brown",
        code: "#A52A2A",
        images: [`${basepath}images/AshTray/065.jpeg`],
      },
    ],
  },
  {
    id: "ash2",
    name: " Panda Glass Ashtray",
    description:
      "Add a touch of fun and uniqueness to your space with this creative panda-shaped glass ashtray, designed in the style of a mug cup. ",
    priceDisplay: "#15,000",
    colors: [
      {
        name: "White",
        code: "#FFFFFF",
        images: [
          `${basepath}images/AshTray/066.jpeg`,
          `${basepath}images/AshTray/068.jpeg`,
        ],
      },
      {
        name: "Black",
        code: "#000000",
        images: [`${basepath}images/AshTray/067.jpeg`],
      },
    ],
  },
  {
    id: "ash3",
    name: " Cookies LED light Ash Tray",
    description:
      "Designed with a sleek modern finish, this ashtray not only serves its purpose but also enhances your setup with its glowing LED light feature. ",
    priceDisplay: "#12,500",
    colors: [
      {
        name: "Red",
        code: "#FF0000",
        images: [`${basepath}images/AshTray/076.jpeg`],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: [`${basepath}images/AshTray/070.jpeg`],
      },
      {
        name: "Yellow",
        code: "#FFFF00",
        images: [`${basepath}images/AshTray/071.jpeg`],
      },
      {
        name: "Green",
        code: "#008000",
        images: [`${basepath}images/AshTray/074.jpeg`],
      },
      {
        name: "Purple",
        code: "#800080",
        images: [`${basepath}images/AshTray/073.jpeg`],
      },
      {
        name: "Orange",
        code: "#FFA500",
        images: [`${basepath}images/AshTray/069.jpeg`],
      },
    ],
  },
  {
    id: "ash4",
    name: " Bulldog and Cattie Ash Tray",
    description:
      "A stylish and fun piece designed to stand out. Crafted in the shape of a bulldog wearing glasses",
    priceDisplay: "#30,000",
    colors: [
      {
        name: "Brown",
        code: "#A52A2A",
        images: [
          `${basepath}images/AshTray/077.jpeg`,
          `${basepath}images/AshTray/078.jpeg`,
          `${basepath}images/AshTray/079.jpeg`,
        ],
      },
    ],
  },
  {
    id: "ash5",
    name: " MW Ashtrays",
    description:
      "durable. The standout feature is its engraved motivational words, inspiring you with uplifting reminders every time you use it.",
    priceDisplay: "#12,500",
    colors: [
      {
        name: "Brown",
        code: "#A52A2A",
        images: [
          `${basepath}images/AshTray/080.jpeg`,
          `${basepath}images/AshTray/081.jpeg`,

          `${basepath}images/AshTray/083.jpeg`,
          `${basepath}images/AshTray/084.jpeg`,
          `${basepath}images/AshTray/085.jpeg`,
        ],
      },
    ],
  },
  {
    id: "ash6",
    name: " Luminos Butt Bucket Ash tray",
    description: "Bucket shape with removable top for easy cleaning ",
    priceDisplay: "#12,500",
    colors: [
      {
        name: "Purple",
        code: "#800080",
        images: [
          `${basepath}images/AshTray/089.jpeg`,
          `${basepath}images/AshTray/094.jpeg`,
          `${basepath}images/AshTray/095.jpeg`,
        ],
      },
      {
        name: "Black",
        code: "#000000",
        images: [`${basepath}images/AshTray/087.jpeg`],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: [`${basepath}images/AshTray/088.jpeg`],
      },
      {
        name: "Red",
        code: "#FF0000",
        images: [`${basepath}images/AshTray/092.jpeg`],
      },
      {
        name: "Yellow",
        code: "#FFFF00",
        images: [`${basepath}images/AshTray/091.jpeg`],
      },

      {
        name: "Green",
        code: "#008000",
        images: [`${basepath}images/AshTray/090.jpeg`],
      },
    ],
  },
  {
    id: "ash7",
    name: " Bulldog and Cattie Ash Tray",
    description: "Bob Marley, Backwoods & More Designs ",
    priceDisplay: "#9,500",
    colors: [
      {
        name: "Glass",
        code: "#E0E0E0",
        images: [
          `${basepath}images/AshTray/100.jpeg`,
          `${basepath}images/AshTray/098.jpeg`,
          `${basepath}images/AshTray/101.jpeg`,
        ],
      },
    ],
  },
  {
    id: "ash8",
    name: " 71mm Classic Thick Glass Gorilla Ashtray",
    description: "Striking Gorilla Design. Crafted from thick, durable glass, ",
    priceDisplay: "#9,500",
    colors: [
      {
        name: "Glass",
        code: "#E0E0E0",
        images: [
          `${basepath}images/AshTray/104.jpeg`,
          `${basepath}images/AshTray/103.jpeg`,
          `${basepath}images/AshTray/105.jpeg`,
          `${basepath}images/AshTray/106.jpeg`,
        ],
      },
    ],
  },
  {
    id: "ash9",
    name: " Gorilla Rolling star Ash Tray",
    description:
      "Gorilla Rolling Stars Glass Ashtray – Indica, Sativa & Hybrid Design",
    priceDisplay: "#9,500",
    colors: [
      {
        name: "Glass",
        code: "#E0E0E0",
        images: [
          `${basepath}images/AshTray/107.jpeg`,
          `${basepath}images/AshTray/108.jpeg`,
          `${basepath}images/AshTray/109.jpeg`,
        ],
      },
    ],
  },
  {
    id: "ash10",
    name: " Classic Money Shaped Ashtray",
    description: "Unique monkey-shaped design with realistic detailing ",
    priceDisplay: "#30,000",
    colors: [
      {
        name: "Glass",
        code: "#E0E0E0",
        images: [
          `${basepath}images/AshTray/110.jpeg`,
          `${basepath}images/AshTray/111.jpeg`,
        ],
      },
    ],
  },
  {
    id: "ash11",
    name: " Elegant Well Crafted Decorative Doggy Ash Tray",
    description:
      "Unique dog-shaped ashtray design with stylish gold chain accent",
    priceDisplay: "#30,000",
    colors: [
      {
        name: "Red",
        code: "#FF0000",
        images: [`${basepath}images/AshTray/114.jpeg`],
      },
      {
        name: "Blue",
        code: "#0000FF",
        images: [`${basepath}images/AshTray/115.jpeg`],
      },
      {
        name: "Grey",
        code: "#808080",
        images: [`${basepath}images/AshTray/117.jpeg`],
      },
      {
        name: "Green",
        code: "#008000",
        images: [`${basepath}images/AshTray/118.jpeg`],
      },
      {
        name: "Black",
        code: "#000000",
        images: [`${basepath}images/AshTray/116.jpeg`],
      },
    ],
  },
  {
    id: "ash12",
    name: "Rasta Man Ash Tray",
    description:
      "Rasta Man Ashtrays not only serve a practical purpose but also add a fun, cultural, and artistic vibe to any setting.",
    priceDisplay: "#9,500",
    colors: [
      {
        name: "Glass",
        code: "#E0E0E0",
        images: [
          `${basepath}images/AshTray/120.jpeg`,
          `${basepath}images/AshTray/121.jpeg`,
          `${basepath}images/AshTray/122.jpeg`,
          `${basepath}images/AshTray/123.jpeg`,
          `${basepath}images/AshTray/124.jpeg`,
        ],
      },
    ],
  },
  {
    id: "ash13",
    name: "Mini Skull Ashtray",
    description:
      "Designed in a striking skull shape that blends function with unique style.",
    priceDisplay: "#9,500",
    colors: [
      {
        name: "Glass",
        code: "#E0E0E0",
        images: [
          `${basepath}images/AshTray/126.jpeg`,
          `${basepath}images/AshTray/128.jpeg`,
        ],
      },
    ],
  },
];

export default ashTrayItems;
