import "./CatImage.css";
import { use, useRef, useState } from 'react';

export interface CatImageProps {
  src: string;
  label: string;
  disabled: boolean;
  onLog: (entry: string) => void;
}

export function CatImage({ src, label, disabled, onLog }: CatImageProps) {
  const [isPet, setIsPet] = useState<bool>(false);
  return (
    <img
      src={src}
      alt={label}
      className={`cat-image ${isPet ? "petted" : ""} ${disabled ? "disabled" : ""}`}
      onClick={() => {
        onLog(`       TARGET Image "${label}" clicked -> petted`);
        setIsPet(true);
      }}
    />
  );
}
