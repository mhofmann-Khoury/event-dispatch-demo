import { CatImage } from './CatImage';
import { DisableButton, EnableButton } from './DisableButton';
import './GalleryItem.css';
import { use, useRef, useState } from 'react';

export interface GalleryItemProps {
  src: string;
  label: string;
  onLog: (entry: string) => void;
  onCatClicked: () => void;
}

export function GalleryItem({ src, label, onLog, onCatClicked}: GalleryItemProps) {

  const [isDisabled, setIsDisabled] = useState<bool>(false);

  const disableButton = <DisableButton label={label} onLog={onLog} onDisable={() => { setIsDisabled(true); }} /> ;
  const enableButton = <EnableButton label={label} onLog={onLog} onEnable={() => { setIsDisabled(false); }} /> ;

  return (
    <div
      className="gallery-item"
      onClick={() => {
        if(!isDisabled){
          onLog( `   Bubbled back to Gallery Item ("${label}") -> Update Gallery State`);
          onCatClicked();
      }
      }}
    >
      <CatImage src={src} label={label} disabled={isDisabled} onLog={onLog} />
      {isDisabled ? enableButton : disableButton}
    </div>
  );
}
