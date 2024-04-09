"use client";
import bgStiles from "./Tile.module.css";

export default function Tile({ value }: Readonly<TileProps>) {
  return (
    <div
      className={[
        "flex items-center justify-center box-content",
        bgStiles[`bg-${value > 2048 ? "plus" : value}`],
      ].join(" ")}
    >
      <span>{value}</span>
    </div>
  );
}
