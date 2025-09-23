import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
  type MouseEvent,
  type TouchEvent,
  type WheelEvent
} from 'react';

import ImageViewerFooter from './ImageViewerFooter';
import ImageViewerHeader from './ImageViewerHeader';
import getBaseFileName from './utils/getBaseFileName';
import styles from './viewer.module.css';

interface ImageViewerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  url: string;
  title?: string;
}

interface Position {
  x: number;
  y: number;
}

/**
 * ImageViewer Component
 * @param {object} props - Component properties.
 * @param {boolean} props.open - Whether the viewer is open.
 * @param {function} props.setOpen - Function to set viewer open state.
 * @param {string} props.url - URL of the image to view.
 * @param {string} [props.title] - Optional title of the image.
 * @returns {JSX.Element|null} The rendered component.
 */
const ImageViewer = ({ open, setOpen, url, title }: ImageViewerProps) => {
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [flipHorizontal, setFlipHorizontal] = useState<boolean>(false);
  const [flipVertical, setFlipVertical] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const imageName = title || getBaseFileName(url);
  const zoomScale = 0.2;

  /**
   * Resets transformations (zoom, rotation, flips) to default.
   */
  const resetTransforms = () => {
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
    setFlipHorizontal(false);
    setFlipVertical(false);
  };

  const handleZoomIn = () => {
    setScale(prevScale => prevScale + zoomScale);
  };

  const handleZoomOut = () => {
    setScale(prevScale => (prevScale > zoomScale * 2 ? prevScale - zoomScale : prevScale));
  };

  /**
   * Handles mouse down or touch start for dragging.
   */
  const handleDragStart = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);

    let clientX: number, clientY: number;

    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      clientX = 0;
      clientY = 0;
    }

    setDragStart({ x: clientX - position.x, y: clientY - position.y });
  };

  /**
   * Ends dragging on mouse up or touch end.
   */
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  /**
   * Handles dragging motion for mouse move or touch move.
   */
  const handleDragMove = (e: MouseEvent<Document> | TouchEvent<Document>) => {
    if (!isDragging) return;

    let clientX: number, clientY: number;

    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      clientX = 0;
      clientY = 0;
    }

    setPosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  /**
   * Handles pinch-to-zoom on mobile devices.
   */
  const handleWheel = (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();

      if (e.deltaY < 0) {
        handleZoomIn();
      } else if (e.deltaY > 0) {
        handleZoomOut();
      }
    }
  };

  const addDragEvents = () => {
    document.addEventListener('mousemove', handleDragMove as unknown as EventListener, false);
    document.addEventListener('mouseup', handleDragEnd as unknown as EventListener, false);
    document.addEventListener('touchmove', handleDragMove as unknown as EventListener, false);
    document.addEventListener('touchend', handleDragEnd as unknown as EventListener, false);
  };

  const removeDragEvents = () => {
    document.removeEventListener('mousemove', handleDragMove as unknown as EventListener, false);
    document.removeEventListener('mouseup', handleDragEnd as unknown as EventListener, false);
    document.removeEventListener('touchmove', handleDragMove as unknown as EventListener, false);
    document.removeEventListener('touchend', handleDragEnd as unknown as EventListener, false);
  };

  useEffect(() => {
    if (isDragging) {
      addDragEvents();
    } else {
      removeDragEvents();
    }

    return () => {
      removeDragEvents();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  useEffect(() => {
    if (open) {
      window.addEventListener('wheel', handleWheel as unknown as EventListener, { passive: false });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return open ? (
    <div
      className={styles.viewerOverlay}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
      role="button"
      tabIndex={1}
    >
      <ImageViewerHeader setOpen={setOpen} url={url} />

      <div
        className={styles.imageContainer}
        style={{
          transform: `
              scale(${scale})
              rotate(${rotation}deg)
              scaleX(${flipHorizontal ? -1 : 1}) 
              scaleY(${flipVertical ? -1 : 1})
            `,
          cursor: isDragging ? 'grabbing' : 'grab',
          left: position.x,
          top: position.y
        }}
        onClick={e => e.stopPropagation()}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove as any}
        onTouchMove={handleDragMove as any}
        onTouchStart={handleDragStart}
        role="button"
        tabIndex={0}
      >
        <img alt={imageName} className={styles.viewerImage} src={url} />
      </div>

      <ImageViewerFooter
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        imageName={imageName}
        resetTransforms={resetTransforms}
        setFlipHorizontal={setFlipHorizontal}
        setFlipVertical={setFlipVertical}
        setRotation={setRotation}
      />
    </div>
  ) : null;
};

export default ImageViewer;
