import GnomeOne from "./assets/gnome1/gnome1.png";
import GnomeTwo from "./assets/gnome2/gnome2.png";
import styles from "./index.scss?inline";
import { FC, useState } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Position } from "../../types";
import { generateRandomPosition } from "../../services/random";

export interface GnomeProps {
  position?: Position;
  gnome?: number;
}

export const Gnome: FC<GnomeProps> = (
  { position, gnome }: GnomeProps = { gnome: 1 }
) => {
  const { height, width } = useWindowDimensions();
  const { x, y } = generateRandomPosition(height, width);
  const uuid = crypto.randomUUID();
  const [cachedPosition] = useState<Position>(position || { x, y }); // [1
  console.log({ facing: position?.facing })
  return (
    <>
      <style>{styles}</style>
      <style>
        {`
          .__gnome-${uuid} {
            left: ${cachedPosition?.x}px;
            top: ${cachedPosition?.y}px;
            ${position?.facing === "left" ? "transform: rotateY(180deg);" : ""}
          }
        `}
      </style>
      <img
        className={`__gnome __gnome-${uuid}`}
        src={gnome === 1 ? GnomeTwo : GnomeOne}
        alt="a gnome"
      />
    </>
  );
};
