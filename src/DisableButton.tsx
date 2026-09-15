import './DisableButton.css';

export interface DisableButtonProps {
  label: string;
  onLog: (entry: string) => void;
  onDisable: () => void;
}

export interface EnableButtonProps {
  label: string;
  onLog: (entry: string) => void;
  onEnable: () => void;
}

export function DisableButton({ label, onLog, onDisable }: DisableButtonProps) {
  return (
    <button
      className="disable-button"
      onClick={(event: React.MouseEvent) => {
        onLog( `       TARGET is "${label}"'s Button-> Disable "${label}" and stop bubbling`);
        onDisable();
        event.stopPropagation()
      }}
    > Disable </button>
  );
}

export function EnableButton({ label, onLog, onEnable }: EnableButtonProps) {
  return (
    <button
      className="disable-button"
      onClick={() => {
        onLog(
          `       TARGET is "${label}"'s Button-> Enable the Element`
        );
        onEnable();
      }}
    > Enable </button>
  );
}
