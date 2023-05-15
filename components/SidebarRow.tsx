"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { DocumentData } from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "react-spinkit";

type Props = {
  doc: DocumentData;
};

function SidebarRow({ doc }: Props) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(doc.id));
  }, [pathname, doc]);

  return (
    <li
      onClick={() => router.push(`/search/${doc.id}`)}
      className={`flex justify-between p-4 cursor-pointer hover:bg-white hover:shadow-md rounded-lg ${
        active && "bg-white shadow-md"
      }`}
    >
      <div className="flex flex-col justify-center">
        <p className="text-xs md:text-base font-bold">
          {doc.data().search.length > 20
            ? `${doc.data().search.slice(0, 17)}...`
            : doc.data().search}
        </p>
        {doc.data().status === "pending" && (
          <p className="text-xs text-black/60">Loading....</p>
        )}
      </div>

      <span className="ml-2">
        {doc.data().status === "pending" ? (
          <Spinner
            name="ball-grid-pulse"
            fadeIn="none"
            color="coral"
            style={{
              scale: "0.5",
            }}
          />
        ) : (
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        )}
      </span>
    </li>
  );
}

export default SidebarRow;
