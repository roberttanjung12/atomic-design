import { DocView } from '@/@dront/components';
import { FileUploader } from '@/@dront/components/UploadFile';
import UploadFileBasic from './UploadFileBasic';
import uploadFileBasicCode from './UploadFileBasic?raw';
import UploadFileDocumentOnly from './UploadFileDocumentOnly';
import uploadFileDocumentOnlyCode from './UploadFileDocumentOnly?raw';
import UploadFileImageOnly from './UploadFileImageOnly';
import uploadFileImageOnlyCode from './UploadFileImageOnly?raw';
import UploadFileReadOnly from './UploadFileReadOnly';
import uploadFileReadOnlyCode from './UploadFileReadOnly?raw';

const UploadFileModule = () => {
  return (
    <DocView
      contributors={['Bagus Nur Solayman']}
      overview={
        'The `FileUploader` component provides a flexible file upload interface with drag-and-drop support, file type restrictions, preview functionality, and comprehensive TypeScript support. Perfect for forms, document uploads, and file management systems.'
      }
      sections={[
        {
          title: 'Basic Usage',
          descriptions:
            'This example demonstrates the basic usage of the `UploadFile` component. Users can upload any file type, see a preview with file information, and remove the file if needed. The component automatically handles different file types and displays appropriate icons.',
          example: <UploadFileBasic />,
          exampleCode: uploadFileBasicCode
        },
        {
          title: 'Image Files Only',
          descriptions:
            'This example shows how to restrict uploads to image files only. The component will only accept image files (jpg, jpeg, png, gif, webp) and provides image compression functionality automatically.',
          example: <UploadFileImageOnly />,
          exampleCode: uploadFileImageOnlyCode
        },
        {
          title: 'Document Files Only',
          descriptions:
            'This example demonstrates restricting uploads to document files including PDF, Word documents, and Excel files. Perfect for document management systems and form uploads that require specific file types.',
          example: <UploadFileDocumentOnly />,
          exampleCode: uploadFileDocumentOnlyCode
        },
        {
          title: 'Detail Read only',
          descriptions:
            'This example shows the component in detail read-only mode with a preview of an existing file. Users can view the uploaded file information but cannot modify or remove the file. Useful for displaying existing files or in confirmation screens.',
          example: <UploadFileReadOnly />,
          exampleCode: uploadFileReadOnlyCode
        }
      ]}
      propsDoc={{
        component: FileUploader,
        propDefinitions: {
          id: {
            type: 'string',
            description: 'Unique identifier for the file input element. Used for form association and accessibility.'
          },
          children: {
            type: 'ReactNode | ((previewState: FilePreview) => ReactNode)',
            description:
              'Custom content or render prop function. When using render prop, receives current preview state as parameter.'
          },
          label: {
            type: 'ReactNode',
            description: 'Label text displayed above the upload area. Can be string or JSX element.'
          },
          helperText: {
            type: 'ReactNode',
            description: 'Helper text displayed below the upload area. Useful for instructions or validation messages.'
          },
          error: {
            type: 'boolean',
            default: 'false',
            description: 'If true, the component displays error styling with red borders and error colors.'
          },
          draggable: {
            type: 'boolean',
            default: 'true',
            description: 'If true, enables drag-and-drop functionality for file uploads.'
          },
          fileTypes: {
            type: "'ALL' | 'PDF_ONLY' | 'IMAGE_ONLY' | 'EXCEL_ONLY' | 'WORD_ONLY' | 'DOCUMENT'",
            default: "'ALL'",
            description: 'Restricts accepted file types. DOCUMENT includes PDF, Word, and Excel files.'
          },
          readOnly: {
            type: 'boolean',
            default: 'false',
            description: 'If true, displays file information in read-only mode without upload or remove functionality.'
          },
          showPreview: {
            type: 'boolean',
            default: 'true',
            description: 'If true, shows file preview with thumbnail, name, size, and progress information.'
          },
          showViewButton: {
            type: 'boolean',
            default: 'true',
            description: 'If true, displays a view button in the preview for opening/downloading the file.'
          },
          required: {
            type: 'boolean',
            default: 'false',
            description: 'If true, marks the field as required for form validation.'
          },
          customPreview: {
            type: 'FilePreview',
            description: 'Pre-populated file preview data for displaying existing files in read-only or edit modes.'
          },
          setCustomPreview: {
            type: 'Dispatch<SetStateAction<FilePreview>>',
            description: 'Setter function for updating custom preview data programmatically.'
          },
          onChange: {
            type: '(event: ChangeEvent<HTMLInputElement>, response?: FileChangeResponse) => void',
            description:
              'Callback fired when file selection changes. Receives the input event and processed file data or error.'
          },
          onRemove: {
            type: '() => void',
            description: 'Callback fired when user removes the uploaded file. Use to clear parent state.'
          },
          breakChange: {
            type: '(event: ChangeEvent<HTMLInputElement>) => boolean',
            description: 'Custom validation function that runs before file processing. Return true to prevent upload.'
          },
          sx: {
            type: 'SxProps<Theme>',
            description: 'System prop for applying custom styles using MUI sx prop pattern.'
          }
        }
      }}
    />
  );
};

export default UploadFileModule;
