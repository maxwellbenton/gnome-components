import GnomeOne from "./assets/gnome1/gnome1.png";
import GnomeTwo from "./assets/gnome2/gnome2.png";
import styles from "./index.scss?inline";
import { FC, useState } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Position } from "../../types";
import { generateRandomPosition } from "../../services/random";

export interface GnomeProps {
  x?: number;
  y?: number;
  facing?: "left" | "right";
  gnome?: number;
}

export const Gnome: FC<GnomeProps> = (
  { x, y, facing, gnome }: GnomeProps = { gnome: 1 }
) => {
  const { height, width } = useWindowDimensions();
  const { x: randomX, y: randomY } = generateRandomPosition(height, width);
  const uuid = crypto.randomUUID();
  const [cachedPosition] = useState<Position>({
    x: x || randomX,
    y: y || randomY,
    facing: facing || "right",
  });

  return (
    <div id={`__gnome-${uuid}`} className={`__gnome`}>
      <style>{styles}</style>
      <style>
        {`
          .__gnome-${uuid} {
            left: ${cachedPosition?.x}px;
            top: ${cachedPosition?.y}px;
          }

          .__gnome--image {
            ${
              cachedPosition?.facing === "left" && "transform: rotateY(180deg);"
            }
          }
        `}
      </style>
      <img
        className="__gnome--image"
        src={gnome == 1 ? GnomeTwo : GnomeOne}
        alt="a gnome"
      />
    </div>
  );
};
