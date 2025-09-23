import { useState, forwardRef, useImperativeHandle, type ForwardRefRenderFunction } from 'react';
import ImageViewer from './ImageViewer';

export interface ImageViewerOptions {
  url: string;
  title: string;
}

export interface ImageViewerWrapperHandle {
  open: (options: ImageViewerOptions) => void;
  close: () => void;
}

/**
 * A wrapper component for the Image Viewer, providing imperative methods to open and close the viewer.
 *
 * @example
 * // Usage example in a parent component
 * const ref = useRef<ImageViewerWrapperHandle>(null);
 *
 * // Open the viewer
 * ref.current?.open({ url: 'https://example.com/image.jpg', title: 'Example Image' });
 *
 * // Close the viewer
 * ref.current?.close();
 *
 * @param {object} props - The component props.
 * @param {object} ref - A ref object to control the ImageViewer.
 *
 * @returns {JSX.Element} Returns the ImageViewer component if open, otherwise null.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const ImageViewerWrapper: ForwardRefRenderFunction<ImageViewerWrapperHandle, {}> = (_, ref) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ImageViewerOptions>({ url: '', title: '' });

  useImperativeHandle(ref, () => ({
    open: ({ url, title }: ImageViewerOptions) => {
      setOptions({ url, title });
      setOpen(true);
    },
    close: () => setOpen(false)
  }));

  return open ? (
    <ImageViewer open={open} setOpen={() => setOpen(false)} title={options.title} url={options.url} />
  ) : null;
};

export default forwardRef(ImageViewerWrapper);
