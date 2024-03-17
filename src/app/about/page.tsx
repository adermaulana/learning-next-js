import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </main>
  );
}
