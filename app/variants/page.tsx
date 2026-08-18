import type { Metadata } from "next";
import VariantStudio from "../components/VariantStudio";
import "./variants.css";

export const metadata: Metadata = {
  title: "3D Object Lab — Иван Петров",
  description: "Десять вариантов 3D-объекта для главного экрана портфолио.",
  robots: { index: false, follow: false },
};

export default function VariantsPage(){return <VariantStudio/>}
