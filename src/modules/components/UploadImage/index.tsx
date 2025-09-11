import { DocView } from '@/@dront/components';
import UploadImage from '@/@dront/components/UploadImage';
import UploadImageBasic from './UploadImageBasic';
import uploadImageBasicCode from './UploadImageBasic?raw';
import UploadImageHandleFileRejection from './UploadImageHandleFileRejection';
import uploadImageHandleFileRejectionCode from './UploadImageHandleFileRejection?raw';
import UploadImageHidePreview from './UploadImageHidePreview';
import uploadImageHidePreviewCode from './UploadImageHidePreview?raw';
import UploadImageProgressVariant from './UploadImageProgressVariant';
import uploadImageProgressVariantCode from './UploadImageProgressVariant?raw';
import UploadImageWithCropper from './UploadImageWithCropper';
import uploadImageWithCropperCode from './UploadImageWithCropper?raw';

const UploadImageModule = () => {
  return (
    <DocView
      contributors={['Agmar Putra']}
      overview={
        'The `UploadImage` component provides a Material UI-based image upload interface with drag-and-drop support, preview, and cropping functionality. Useful for forms, media uploads, and image management.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'This example demonstrates how to use the `UploadImage` component with basic usage. Users can upload an image, see a preview, and remove it if needed. If the file size exceeds 1MB, the image will be compressed automatically.',
          example: <UploadImageBasic />,
          exampleCode: uploadImageBasicCode
        },
        {
          title: 'Progress Variant',
          descriptions:
            'This example showcases the `UploadImage` component using the `progress` variant. It provides a visual representation of the upload and compression process, displaying a progress bar to indicate the current status. This variant is particularly useful for enhancing user experience during image uploads.',
          example: <UploadImageProgressVariant />,
          exampleCode: uploadImageProgressVariantCode
        },
        {
          title: 'With Cropper',
          descriptions:
            'This is Exemple of `UploadImage` component integrated with an image cropper. After uploading an image, users can crop it to their desired dimensions before finalizing the upload. This feature is particularly useful for profile pictures or any scenario where specific image dimensions are required.',
          example: <UploadImageWithCropper />,
          exampleCode: uploadImageWithCropperCode
        },
        {
          title: 'Handle File Rejection',
          descriptions:
            'Try to drop a non-image file to see how the component handles file rejections and displays error messages.',
          example: <UploadImageHandleFileRejection />,
          exampleCode: uploadImageHandleFileRejectionCode
        },
        {
          title: 'Hide Preview',
          descriptions:
            'The `showPreview` prop can be set to `false` to hide the image preview after selection, useful for scenarios where a preview is not necessary.',
          example: <UploadImageHidePreview />,
          exampleCode: uploadImageHidePreviewCode
        }
      ]}
      propsDoc={{
        component: UploadImage,
        propDefinitions: {
          preview: {
            type: `IPreview`,
            description: 'Configuration for image preview.'
          },
          onChange: {
            type: '(file?: File, errors?: FileRejection[]) => void',
            description:
              'Callback function called when a file is successfully selected or changed. Returns a File object and potential errors'
          },
          onCompress: {
            type: '(progress: number) => void',
            description: 'Callback function that will be called during the compression process.'
          },
          onRemove: {
            type: '() => void',
            description: 'Callback function called when the image preview is removed by the user.'
          },

          aspectRatio: {
            type: 'number',
            description: 'Specifies the aspect ratio for the crop tool. Example: 4/4 for square, 16/9 for widescreen.'
          },
          disabled: {
            type: 'boolean',
            description: 'If `true`, the component will be disabled and users cannot interact with it.'
          },
          error: {
            type: 'boolean',
            description:
              'If `true`, the component will be displayed in an error state (e.g., label and helper text turn red).'
          },
          helperText: {
            type: 'ReactNode',
            description: 'Helper text displayed below the component. Useful for instructions or error messages.'
          },
          id: {
            type: 'string',
            description: 'Unique ID for the input element, used for accessibility.',
            default: 'image-upload'
          },
          label: {
            type: 'string | React.ReactNode',
            description: 'Content to be displayed as the label for the input field.'
          },
          maxInBytes: {
            type: 'number',
            description:
              'Maximum allowed file size in bytes. If the uploaded file exceeds this size, it will be compressed automatically.',
            default: '1_000_000'
          },
          required: {
            type: 'boolean',
            description: 'If `true`, adds an asterisk (*) to the label, indicating this input is required.'
          },
          showPreview: {
            type: 'boolean',
            description: 'if true, shows the image preview after selection',
            default: 'true'
          },
          variant: {
            type: `'standard' | 'progress'`,
            description: 'Determines the style variant of the component.',
            default: 'standard'
          }
        }
      }}
    />
  );
};

export default UploadImageModule;
