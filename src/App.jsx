import React, { useState } from "react";
import data from "../data.json";
import { List } from "./components/List";

export function App() {
  const [jobListing, setJobListing] = useState(data);

  return (
    <>
      <header>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by role, level, languages..."
          />
          <button onClick={() => setJobListing([])}>Clear</button>
        </div>
      </header>
      <main>
        <section>
          <h1>{jobListing.length} Job listings available</h1>
          <List jobListing={jobListing} />
        </section>
      </main>
    </>
  );
}
