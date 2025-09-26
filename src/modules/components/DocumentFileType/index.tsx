import { DocView } from '@/@dront/components';
import DocumentFileType from '@/@dront/components/DocumentFileType';
import DocumentFileTypeBasic from './DocumentFileTypeBasic';
import documentFileTypeBasicCode from './DocumentFileTypeBasic?raw';
import DocumentFileTypeCustomError from './DocumentFileTypeCustomError';
import documentFileTypeCustomErrorCode from './DocumentFileTypeCustomError?raw';
import DocumentFileTypeDisabledState from './DocumentFileTypeDisabledState';
import documentFileTypeDisabledStateCode from './DocumentFileTypeDisabledState?raw';
import DocumentFileTypeHandleFileRejection from './DocumentFileTypeHandleFileRejection';
import documentFileTypeHandleFileRejectionCode from './DocumentFileTypeHandleFileRejection?raw';
import DocumentFileTypeMultipleFiles from './DocumentFileTypeMultipleFiles';
import documentFileTypeMultipleFilesCode from './DocumentFileTypeMultipleFiles?raw';

const DocumentFileTypeModule = () => {
  return (
    <DocView
      contributors={['Nanda Yusuf Nur Pratama']}
      overview={
        'The `DocumentFileType` component provides a Material UI-based document upload interface with drag-and-drop support, file validation, and download functionality. Useful for forms, document uploads, and file management with support for various file types and formats.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'This example demonstrates how to use the `DocumentFileType` component with basic usage. Users can upload documents, see file information, and remove files if needed. The component supports file type validation and size limits.',
          example: <DocumentFileTypeBasic />,
          exampleCode: documentFileTypeBasicCode
        },
        {
          title: 'Multiple Files',
          descriptions:
            'This example showcases the `DocumentFileType` component with multiple file upload support. Users can upload up to 3 files at once, with support for different file types including PDFs and images.',
          example: <DocumentFileTypeMultipleFiles />,
          exampleCode: documentFileTypeMultipleFilesCode
        },
        {
          title: 'Handle File Rejection',
          descriptions:
            'Try to drop a large file (>1KB) to see how the component handles file rejections and displays error messages for size limits and invalid file types.',
          example: <DocumentFileTypeHandleFileRejection />,
          exampleCode: documentFileTypeHandleFileRejectionCode
        },
        {
          title: 'Custom Error Messages',
          descriptions:
            'This example demonstrates how to customize error messages for different validation failures. You can provide custom messages for invalid file types and size limit exceeded errors.',
          example: <DocumentFileTypeCustomError />,
          exampleCode: documentFileTypeCustomErrorCode
        },
        {
          title: 'Disabled State',
          descriptions:
            'The `disabled` prop can be set to `true` to disable the file upload, preventing user interaction with the drag and drop area.',
          example: <DocumentFileTypeDisabledState />,
          exampleCode: documentFileTypeDisabledStateCode
        }
      ]}
      propsDoc={{
        component: DocumentFileType,
        propDefinitions: {
          value: {
            type: 'File | File[]',
            description: 'The current file or array of files selected by the user.'
          },
          onChange: {
            type: '(value: any) => void',
            description:
              'Callback function called when files are successfully selected or changed. Returns the selected file(s) or undefined when cleared.'
          },
          onRemove: {
            type: '() => void',
            description: 'Callback function called when the user removes the selected file(s).'
          },
          accept: {
            type: 'Accept',
            description:
              'Object defining accepted MIME types and file extensions. Uses react-dropzone Accept format. Example: { "application/pdf": [".pdf"], "image/*": [".jpg", ".png"] }'
          },
          maxSize: {
            type: 'number',
            description: 'Maximum allowed file size in kilobytes (KB). Files exceeding this limit will be rejected.'
          },
          maxFiles: {
            type: 'number',
            description:
              'Maximum number of files allowed. Set to 1 for single file mode, higher numbers enable multiple file selection.',
            default: '1'
          },
          disabled: {
            type: 'boolean',
            description: 'If `true`, the component will be disabled and users cannot interact with it.'
          },
          dragIcon: {
            type: 'ReactNode',
            description: 'Custom React node to display as the drag and drop icon in the upload area.'
          },
          customError: {
            type: 'string',
            description: 'Custom error message to display when file validation fails.'
          },
          config: {
            type: 'Config',
            description: 'Configuration object for customizing labels and error messages throughout the component.'
          }
        }
      }}
    />
  );
};

export default DocumentFileTypeModule;
