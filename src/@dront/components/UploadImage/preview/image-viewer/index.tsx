import { createRoot } from 'react-dom/client';
import ImageViewerWrapper, { type ImageViewerOptions } from './ImageViewerWrapper';

let imageViewerInstance: any;

/**
 * Initializes the Image Viewer instance if it hasn't been initialized yet.
 * Creates a container, appends it to the body, and renders ImageViewerWrapper into it.
 *
 * @returns {Promise<object>} A promise that resolves with the ImageViewer instance.
 */
const initImageViewer = () => {
  if (imageViewerInstance) {
    return Promise.resolve(imageViewerInstance);
  }

  return new Promise(resolve => {
    const container = document.createElement('div');

    container.className = 'image-viewer-wrapper';
    document.body.appendChild(container);
    const root = createRoot(container);

    root.render(
      <ImageViewerWrapper
        ref={ref => {
          imageViewerInstance = ref;
          resolve(ref);
        }}
      />
    );
  });
};

/**
 * An object providing methods to control the Image Viewer.
 *
 * @example
 * import imageViewer from '@dront/utils/image-viewer';
 *
 * // Open the image viewer with a specific image URL and title
 * imageViewer.open({
 *   url: 'https://example.com/path/to/image.jpg',
 *   title: 'Example Image'
 * });
 *
 * // Close the image viewer
 * imageViewer.close();
 */
const imageViewer = {
  /**
   * Opens the Image Viewer with the specified options.
   *
   * @param {object} options - Configuration options for the Image Viewer.
   * @param {string} options.url - The URL of the image to be displayed.
   * @param {string} [options.title] - Optional title for the image.
   * @returns {Promise<void>} A promise that resolves when the Image Viewer is opened.
   */
  open: async (options: ImageViewerOptions) => {
    await initImageViewer();

    imageViewerInstance?.open(options);
  },
  /**
   * Closes the Image Viewer if it is currently open.
   */
  close: () => {
    imageViewerInstance?.close();
  }
};

export default imageViewer;
