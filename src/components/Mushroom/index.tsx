import MushroomPNG from "./mushroom.png";
import styles from "./index.scss?inline";
import { FC, useState } from "react";
import { generateRandomPosition } from "../../services/random";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Grow from "@mui/material/Grow";
import { Position } from "../../types";

export interface MushroomProps {
  position?: Position;
}

export const Mushroom: FC<MushroomProps> = ({ position }: MushroomProps) => {
  const uuid = crypto.randomUUID();
  const { height, width } = useWindowDimensions();
  const { x, y } = generateRandomPosition(height, width);

  const [cachedPosition] = useState<Position>(position || { x, y }); // [1

  return (
    <div id={`__mushroom-${uuid}`} className={`__mushroom`}>
      <style>{styles}</style>
      <style>
        {`
          .__mushroom-${uuid} {
            left: ${cachedPosition?.x}px;
            top: ${cachedPosition?.y}px;
          }
        `}
      </style>
      <Grow in={true} {...{ timeout: Math.random() * 3000 }}>
        <img className={`__mushroom--image`} src={MushroomPNG} alt="mushroom" />
      </Grow>
    </div>
  );
};
