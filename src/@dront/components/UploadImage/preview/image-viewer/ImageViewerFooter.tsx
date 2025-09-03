import React from 'react';
import styles from './viewer.module.css';

type ImageViewerFooterProps = {
  imageName: string;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  setFlipHorizontal: React.Dispatch<React.SetStateAction<boolean>>;
  setFlipVertical: React.Dispatch<React.SetStateAction<boolean>>;
  resetTransforms: () => void;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
};

const ImageViewerFooter: React.FC<ImageViewerFooterProps> = ({
  imageName,
  setRotation,
  setFlipHorizontal,
  setFlipVertical,
  resetTransforms,
  handleZoomIn,
  handleZoomOut
}) => {
  const handleRotateLeft = () => {
    setRotation(prevRotation => prevRotation - 90);
  };

  const handleRotateRight = () => {
    setRotation(prevRotation => prevRotation + 90);
  };

  const toggleFlipHorizontal = () => {
    setFlipHorizontal(prevFlip => !prevFlip);
  };

  const toggleFlipVertical = () => {
    setFlipVertical(prevFlip => !prevFlip);
  };

  return (
    <div className={styles.viewerFooter}>
      <span className="viewer__title">{imageName}</span>

      <div className={styles.viewerControls}>
        <button title="Zoom in" type="button" onClick={handleZoomIn}>
          <span className="material-symbols-outlined">zoom_in</span>
        </button>
        <button title="Zoom out" type="button" onClick={handleZoomOut}>
          <span className="material-symbols-outlined">zoom_out</span>
        </button>
        <button title="Reset" type="button" onClick={resetTransforms}>
          <span className="material-symbols-outlined">refresh</span>
        </button>
        <button title="Rotate left" type="button" onClick={handleRotateLeft}>
          <span className="material-symbols-outlined">rotate_left</span>
        </button>
        <button title="Rotate right" type="button" onClick={handleRotateRight}>
          <span className="material-symbols-outlined">rotate_right</span>
        </button>
        <button title="Flip horizontal" type="button" onClick={toggleFlipHorizontal}>
          <span className="material-symbols-outlined">flip</span>
        </button>
        <button style={{ rotate: '90deg' }} title="Flip vertical" type="button" onClick={toggleFlipVertical}>
          <span className="material-symbols-outlined">flip</span>
        </button>
      </div>
    </div>
  );
};

export default ImageViewerFooter;
