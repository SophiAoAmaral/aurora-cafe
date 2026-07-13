import React from "react";

const items = [
  { item: "Espresso", caractere: "✦" },
  { item: "Cold Brew", caractere: "✦" },
  { item: "Grãos frescos", caractere: "✦" },
  { item: "Pães na casa", caractere: "✦" },
  { item: "Wi-Fi & sossego", caractere: "✦" },
];

const carouselItems = [...items, ...items, ...items];
export const Carrosel = () => {
  return (
    <main className="carrousel">
      <div className="group">
        {carouselItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="card">{item.item}</div>
            <div style={{color:'var(--color-cream)'}}>{item.caractere}</div>
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};
