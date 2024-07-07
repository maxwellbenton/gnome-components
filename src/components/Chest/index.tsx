import ChestOpenPNG from "./chest-open.png";
import ChestClosedPNG from "./chest-closed.png";
import styles from "./index.scss?inline";
import { FC, useState } from "react";
import { generateRandomPosition } from "../../services/random";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Grow from "@mui/material/Grow";
import { Position } from "../../types";
import { openTimeout } from "./constants";

export interface ChestProps {
  position?: Position;
}

export const Chest: FC<ChestProps> = ({ position }: ChestProps) => {
  const { height, width } = useWindowDimensions();
  const { x, y } = generateRandomPosition(height, width);
  const uuid = crypto.randomUUID();

  const [cachedPosition] = useState<Position>(position || { x, y }); // [1
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
    setTimeout(() => {
      setOpened(false);
    }, openTimeout);
  };

  return (
    <>
      <style>{styles}</style>
      <style>
        {`
          .__chest-${uuid} {
            left: ${cachedPosition.x}px;
            top: ${cachedPosition.y}px;
          }
        `}
      </style>
      <Grow in={true} {...{ timeout: Math.random() * 3000 }}>
        <img
          className={`__chest __chest-${uuid}`}
          src={opened ? ChestOpenPNG : ChestClosedPNG}
          alt="chest"
          onClick={handleClick}
        />
      </Grow>
    </>
  );
};
