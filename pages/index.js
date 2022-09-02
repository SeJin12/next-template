import Movies from "@components/Movies";
import { useState } from "react";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          if (pageIndex > 1) setPageIndex(pageIndex - 1);
        }}
      >
        Previous
      </button>
      <span>{pageIndex}</span>
      <button onClick={() => setPageIndex(pageIndex + 1)}>
        Next (max:500)
      </button>
      <Movies page={pageIndex} />
    </div>
  );
}
