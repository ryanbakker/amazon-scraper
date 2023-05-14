import "./globals.css";

export const metadata = {
  title: "Amazon Scraper",
  description: "Scrape Amazon products and prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
