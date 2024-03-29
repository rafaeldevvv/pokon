import { VT323, Courier_Prime } from "next/font/google";

export const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-title",
});
export const courier = Courier_Prime({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  variable: "--ff-body",
});
