import ChestOpenPNG from "./chest-open.png";
import ChestClosedPNG from "./chest-closed.png";
import styles from "./index.scss?inline";
import { FC, useState } from "react";
import { generateRandomPosition } from "../../services/random";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Position } from "../../types";
import { openTimeout } from "./constants";

export interface ChestProps {
  position?: Position;
  opened?: string;
  closed?: string;
}

export const Chest: FC<ChestProps> = ({
  position,
  opened,
  closed,
}: ChestProps) => {
  const { height, width } = useWindowDimensions();
  const uuid = crypto.randomUUID();
  const [cachedOpened, setCachedOpened] = useState(
    closed === "true" ? false : opened === "true" || false
  );
  const [cachedPosition] = useState<Position>(
    position || generateRandomPosition(height, width)
  );

  const handleClick = () => {
    closed === "true"
      ? setCachedOpened(true)
      : opened === "true"
      ? setCachedOpened(false)
      : setCachedOpened(true);
    setTimeout(() => {
      closed === "true"
        ? setCachedOpened(false)
        : opened === "true"
        ? setCachedOpened(true)
        : setCachedOpened(false);
    }, openTimeout);
  };

  return (
    <div id={`__chest-${uuid}`} className={`__chest`}>
      <style>{styles}</style>
      <style>
        {`
          #__chest-${uuid} {
            left: ${cachedPosition.x}px;
            top: ${cachedPosition.y}px;
          }
        `}
      </style>
      <img
        className="__chest--image"
        src={cachedOpened ? ChestOpenPNG : ChestClosedPNG}
        alt="a chest for a gnome"
        onClick={handleClick}
      />
    </div>
  );
};
