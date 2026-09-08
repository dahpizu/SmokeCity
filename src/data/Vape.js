const basepath = import.meta.env.BASE_URL;
const vapeItems = [
  {
    id: "vape1",
    name: "Rechargeable VP FIT Postbar 10,000",
    description:
      "Enjoy a smooth, long-lasting vaping experience with the VP Fit Postbar, designed to deliver up to 10,000 satisfying puffs.",
    priceDisplay: "#8,000",
    colors: [
      {
        name: "Srawberry Banana",
        code: "#FC5A8D",
        images: [
          `${basepath}images/Vape/032.jpeg`,
          `${basepath}images/Vape/031.jpeg`,
        ],
      },
      {
        name: "Mint Ice",
        code: "#AAF0D1",
        images: [
          `${basepath}images/Vape/033.jpeg`,
          `${basepath}images/Vape/030.jpeg`,
        ],
      },
    ],
  },
];

export default vapeItems;
