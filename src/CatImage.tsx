import "./CatImage.css";

export interface CatImageProps {
  src: string;
  label: string;
  petted: boolean;
  disabled: boolean;
  onLog: (entry: string) => void;
  onPet: () => void;
}

export function CatImage({ src, label, petted, disabled, onLog, onPet }: CatImageProps) {
  return (
    <img
      src={src}
      alt={label}
      className={`cat-image ${petted ? "petted" : ""} ${disabled ? "disabled" : ""}`}
      onClick={() => {
        onLog(`       TARGET Image "${label}" clicked -> petted`);
        onPet();
      }}
    />
  );
}
