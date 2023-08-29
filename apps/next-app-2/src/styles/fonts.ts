import { Inter, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const inter = Inter({ subsets: ["latin"] });
