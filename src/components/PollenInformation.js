import React from "react";

export default function PollenInformation({ risk }) {
  return (
    <>
      {risk.map((r) => (
        <div key={r.updatedAt}>
          <ul>
            <h4>Risk:</h4>
            <li>grass pollen: {r.Risk.grass_pollen}</li>
            <li>tree pollen: {r.Risk.tree_pollen}</li>
            <li>weed pollen: {r.Risk.weed_pollen}</li>
            <h4>Count:</h4>
            <li>grass pollen count: {r.Count.grass_pollen}</li>
            <li>tree pollen count: {r.Count.tree_pollen}</li>
            <li>weed pollen count: {r.Count.weed_pollen}</li>
          </ul>
        </div>
      ))}
    </>
  );
}
