import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";
import ClientProvider from "@/components/ClientProvider";

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
      <body className="flex bg-[#fff7f7] h-screen">
        <ClientProvider>
          <Sidebar />

          <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto">
            <Header />
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
