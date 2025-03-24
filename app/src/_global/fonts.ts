import { IBM_Plex_Sans } from "next/font/google";

export const ibmPlex = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "fallback",
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
  variable: "--ibm-sans",
});
