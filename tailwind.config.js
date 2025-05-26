/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        eudoxus: ["EudoxusSans-Regular"],
        "eudoxus-light": ["EudoxusSans-Light"],
        "eudoxus-extralight": ["EudoxusSans-ExtraLight"],
        "eudoxus-medium": ["EudoxusSans-Medium"],
        "eudoxus-bold": ["EudoxusSans-Bold"],
        "eudoxus-extrabold": ["EudoxusSans-ExtraBold"],
      },
      colors: {
        primary: "#0D0F00",
        secondary: "#D3FF08",
        tertiary: "#6F10D5",
        variant: "#B9E007",
        alimentation: "#E16567",
        assurance: "#7865E1",
        finance: "#659FE1",
        vacation: "#C465E1",
        gray: "#757575",
        grayLight: "#E5E4E4",
      },
    },
  },
  plugins: [],
};
