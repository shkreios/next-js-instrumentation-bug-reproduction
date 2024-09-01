"use client";

import { useState } from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [state, setState] = useState(null);

  return (
    <div>
      <button
        onClick={async () => {
          const res = await fetch("/api/update-store", {
            method: "POST",
          });

          const data = await res.json();

          setState(data);
        }}
      >
        Request api
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
