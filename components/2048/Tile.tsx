'use client'
import bgStiles from './Tile.module.css';

export default function Tile({value}: TileProps) {

  return <div
    className={["flex items-center justify-center text-xl box-content",
    bgStiles[`bg-${value > 2048 ? 'plus' : value}`]].join(' ')} >
        <span>{value}</span>
    </div>

}
