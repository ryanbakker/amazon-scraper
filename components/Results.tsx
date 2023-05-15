/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  results: Product[];
};

function Results({ results }: Props) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
      {results.map((result) => (
        <div className="relative" key={result.title}>
          <Link
            href={result.url}
            key={result.title}
            className="flex flex-col space-x-4 h-full w-full bg-white rounded-lg shadow-md p-5"
          >
            <img
              srcSet={result.imageset}
              alt={result.title}
              className="object-contain w-full h-40 py-5"
            />

            <div className="flex flex-col py-5 flex-1">
              <p className="font-bold">{result.title}</p>
              <p className="text-sm text-gray-500">
                {result.rating} ({result.reviews} reviews)
              </p>

              {/* parseFloat to show price decimals */}
              <div className="flex space-x-2 justify-end flex-1">
                <p className="font-bold text-red-500 pt-2 text-xl mt-auto">
                  {parseFloat(result.price) > 0
                    ? `$${parseFloat(result.price).toFixed(2)}`
                    : "Unavailable"}
                </p>

                {/* Show previous price if available */}
                {parseFloat(result.previous_price) > 0 && (
                  <p className="font-bold text-red-500/50 line-through pt-2 text-xl mt-auto">
                    ${parseFloat(result.previous_price).toFixed(2)}
                  </p>
                )}
              </div>

              {/* Product features */}
              <div className="flex flex-wrap gap-2 justify-end mt-5">
                {result.features.map((feature) => (
                  <p
                    key={feature}
                    className="text-xs bg-red-500 px-2 py-1 text-white rounded-md"
                  >
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </Link>

          {/* Amazon Link */}
          <div className="amazon-link absolute bottom-2 left-2 p-1 opacity-0 transition-opacity duration-200 cursor-pointer text-xs text-black/60 flex gap-1 items-center">
            Go to Amazon <ArrowTopRightOnSquareIcon className="h-3 w-3" />
          </div>

          <style jsx>{`
            .relative:hover .amazon-link {
              opacity: 1;
            }
          `}</style>
        </div>
      ))}
    </div>
  );
}

export default Results;
