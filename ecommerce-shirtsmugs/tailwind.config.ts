import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          logo: "#5D5D6D",
          inputSearch: "#F3F5F6",
          textDark: "#737380",
          textDarkIntense: "#41414D",
          redIcons: "#DE3838",
          borderFilterByType: "#FFA585",
          optionFilterByType: "#41414D",
          shapesDark: "#09090A",
          shapesDivisor: "#DCE2E6",
          bgMain: "#F0F0F5",
          btnAddCart: "#115D8C",
          btnTextAddCart: "#F5F5FA",
          bgCartItems: "#FFFFFF",
          bgSelectQuantity: "#F3F5F6",
          textSelectQuantity: "#A8A8B3",
          textBtnBuy: "#51B853",
          bgBtnPaginator: "#E9E9F0",
          borderBtnPaginator: "#FFA585"
        },
      },
      height: {
        'custom-cart-result': '500px',
      },
      width: {
        'custom-cart-result': '352px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        customGridRows: "repeat(auto-fill, 256px)",
      },
      zIndex: {
        '999': '999'
      }
    },
  },
  plugins: [],
};
export default config;
