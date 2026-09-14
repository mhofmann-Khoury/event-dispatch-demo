import { CatImage } from './CatImage';
import { DisableButton, EnableButton } from './DisableButton';
import './GalleryItem.css';

export interface GalleryItemProps {
  src: string;
  label: string;
  petted: boolean;
  disabled: boolean;
  captured: boolean;
  onLog: (entry: string) => void;
  onPet: () => void;
  onDisable: () => void;
  onEnable: () => void;
  onCaptureItemClicked: () => void;
}

export function GalleryItem({
  src,
  label,
  petted,
  disabled,
  captured,
  onLog,
  onPet,
  onDisable,
  onEnable,
  onCaptureItemClicked,
}: GalleryItemProps) {
  const button = disabled ? (
    <EnableButton label={label} onLog={onLog} onEnable={onEnable} />
  ) : (
    <DisableButton label={label} onLog={onLog} onDisable={onDisable} />
  );
  return (
    <div
      className={`gallery-item ${captured ? 'captured' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClickCapture={() => {
        onLog(
          `   Captured by Gallery Item ("${label}") -> Update State with which item was clicked`
        );
        onCaptureItemClicked();
      }}
    >
      <CatImage
        src={src}
        label={label}
        petted={petted}
        disabled={disabled}
        onLog={onLog}
        onPet={onPet}
      />
      {button}
    </div>
  );
}
