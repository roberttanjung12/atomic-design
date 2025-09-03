import type { Dispatch, SetStateAction } from 'react';

import getBaseFileName from './utils/getBaseFileName';
import styles from './viewer.module.css';

interface ImageViewerHeaderProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  url: string;
}

const ImageViewerHeader: React.FC<ImageViewerHeaderProps> = ({ setOpen, url }) => {
  /**
   * Closes the image viewer.
   */
  const handleCloseViewer = () => {
    setOpen(false);
  };

  /**
   * Initiates download of the displayed image.
   */
  const isExternalImage = url.startsWith('http');

  const handleDownload = () => {
    const fileName = getBaseFileName(url);
    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.viewerHeader}>
      {!isExternalImage && (
        <button title="Download" type="button" onClick={handleDownload}>
          <span className="material-symbols-outlined">download</span>
        </button>
      )}
      <hr />
      <button title="Close" type="button" onClick={handleCloseViewer}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default ImageViewerHeader;
