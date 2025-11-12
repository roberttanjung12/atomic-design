import ImageViewer from '@dront/ui/ImageViewer';
import { DocView } from '@/@dront/components';
import ImageViewerBasic from './ImageViewerBasic';
import imageViewerBasicRaw from './ImageViewerBasic?raw';
import ImageViewerCustomToolbar from './ImageViewerCustomToolbar';
import imageViewerCustomToolbarRaw from './ImageViewerCustomToolbar?raw';
import ImageViewerWithCustomImage from './ImageViewerWithCustomImage';
import imageViewerWithCustomImageRaw from './ImageViewerWithCustomImage?raw';

const ImageViewerModule = () => {
  return (
    <DocView
      contributors={['Erghi Imannur Ichsan']}
      overview={
        'The `ImageViewer` component provides an interactive modal for viewing images with advanced controls. ' +
        'Users can `zoom`, `rotate`, and `flip` and `download` image, as well as reset transformations. ' +
        'It is suitable for previewing images in detail and supports both mouse and touch interactions.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions: [
            'This example demonstrates a basic usage of the `ImageViewer` component. ' +
              'Click the "View Image" button to open the viewer modal and interact with the image using the available controls. ',
            'You can `zoom in/out`, `rotate left/right`, `flip horizontally/vertically`, `reset` the image to its original state and `download` the image.'
          ],
          example: <ImageViewerBasic />,
          exampleCode: imageViewerBasicRaw
        },
        {
          title: 'Custom Toolbar',
          descriptions: [
            'This example demonstrates how to hide specific toolbar buttons in the `ImageViewer` component.'
          ],
          example: <ImageViewerCustomToolbar />,
          exampleCode: imageViewerCustomToolbarRaw
        },
        {
          title: 'Custom Image Component',
          descriptions: [
            'This example demonstrates how to use a custom image component using `imageComponent` prop for rendering the image in the viewer.'
          ],
          example: <ImageViewerWithCustomImage />,
          exampleCode: imageViewerWithCustomImageRaw
        }
      ]}
      propsDoc={{
        component: ImageViewer,
        propDefinitions: {
          url: {
            type: 'string',
            description: 'The URL of the image to display in the viewer',
            required: true
          },
          title: {
            type: 'string',
            description: 'Optional title to display below the image, default to parsed url image name.'
          },
          open: {
            type: 'boolean',
            description: 'Whether the viewer modal is open.'
          },
          className: {
            type: 'string',
            description: 'Custom CSS class for the root element.'
          },
          id: {
            type: 'string',
            description: 'ID for the root element.'
          },
          disableDrag: {
            type: 'boolean',
            description: 'Whether to disable image drag.'
          },
          hideDownload: {
            type: 'boolean',
            description: 'Hide the download button.'
          },
          hideFlipHorizontal: {
            type: 'boolean',
            description: 'Hide the flip horizontal button.'
          },
          hideFlipVertical: {
            type: 'boolean',
            description: 'Hide the flip vertical button.'
          },
          hideReset: {
            type: 'boolean',
            description: 'Hide the reset button.'
          },
          hideRotateLeft: {
            type: 'boolean',
            description: 'Hide the rotate left button.'
          },
          hideRotateRight: {
            type: 'boolean',
            description: 'Hide the rotate right button.'
          },
          hideToolbar: {
            type: 'boolean',
            description: 'Hide the toolbar with controls.'
          },
          hideZoomIn: {
            type: 'boolean',
            description: 'Hide the zoom in button.'
          },
          hideZoomOut: {
            type: 'boolean',
            description: 'Hide the zoom out button.'
          },
          imageComponent: {
            type: 'React.ComponentType<ImageViewerImageComponentProps>',
            description:
              'A custom React component to replace the default <img /> element. Useful when integrating with Next.js <Image>, MUI components, or other image renderers.'
          },
          sx: {
            type: 'SxProps<Theme>',
            description: 'Custom styles for the root element, based on MUI theme.'
          },
          onClose: {
            type: '() => void',
            description: 'Callback fired when the viewer is closed.'
          },
          onDownload: {
            type: '(url: string) => void | Promise<void>',
            description:
              'Callback triggered when the download button is clicked. Can be asynchronous for custom file handling.'
          }
        }
      }}
    />
  );
};

export default ImageViewerModule;
