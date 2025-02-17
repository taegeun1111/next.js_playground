import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Us",
};

export default async function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}&copy; Next JS is great</div>;
}
