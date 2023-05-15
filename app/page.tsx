import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-red-600/20" />

      <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">
        Welcome to the Amazon Web Scraper
      </h1>

      <h2 className="text-lg italic text-center text-black/50">
        To begin scraping, search for a product in the search bar above.
      </h2>

      <h3 className="text-lg text-center italic text-black/50">
        My Portfolio:{" "}
        <a
          className="text-black/75"
          target="_blank"
          href="https://www.ryanbakker.nz"
        >
          https://ryanbakker.nz
        </a>
      </h3>
    </div>
  );
}

export default HomePage;
