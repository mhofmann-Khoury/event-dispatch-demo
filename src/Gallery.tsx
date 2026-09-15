import { use, useRef, useState } from 'react';
import { GalleryItem } from './GalleryItem';
import kizzy from './assets/kizzy.jpg';
import sparrow from './assets/sparrow.jpg';
import kaliope from './assets/kaliope.jpg';
import bruce from './assets/bruce.jpg';
import polymnia from './assets/polymnia.jpg';
import sarah from './assets/sarah.jpg';
import './Gallery.css';

const CATS = [
  { id: 'kizzy', label: 'Kizzy', src: kizzy },
  { id: 'sparrow', label: 'Sparrow', src: sparrow },
  { id: 'kaliope', label: 'Kaliope', src: kaliope },
  { id: 'bruce', label: 'Bruce', src: bruce },
  { id: 'polymnia', label: 'Polymnia', src: polymnia },
  { id: 'sarah', label: 'Sarah', src: sarah}
];

export interface GalleryProps {
  onLog: (entry: string) => void;
  clearLog: () => void;
}

export function Gallery({ onLog, clearLog }: GalleryProps) {
  const [currentCat, setCurrentCat] = useState<string | null>(null);
  const pendingCatRef = useRef<string | null>(null);

  return (
    <div
      className="gallery-panel"
      onClickCapture={() => {
        pendingCatRef.current = null;
        clearLog();
        onLog('Captured by Gallery -> Clears Log');
      }}
      onClick={() => {
        if (pendingCatRef.current) {
          onLog(`Bubble back to Gallery -> Updates Header with ${pendingCatRef.current}`);
          setCurrentCat(pendingCatRef.current);
        } else {onLog('Target the Gallery -> Nothing to Update header with');}
      }}
    >
      <h3>{currentCat ? `Last clicked: ${currentCat}` : 'Gallery panel'}</h3>

      <div className="gallery-items">
        {CATS.map((cat) => ( <GalleryItem  src={cat.src} label={cat.label} onLog={onLog} onCatClicked={() => {pendingCatRef.current = cat.label;}} /> ))}
      </div>
    </div>
  );
}
