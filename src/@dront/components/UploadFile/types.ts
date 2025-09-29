export interface FilePreview {
  name: string;
  size: number;
  loadingInfo: string;
  process: number;
  type: string;
  url: string;
}

export type FileType = 'ALL' | 'PDF_ONLY' | 'IMAGE_ONLY' | 'EXCEL_ONLY' | 'WORD_ONLY' | 'DOCUMENT';

export interface FileChangeResponse {
  file?: File;
  error?: Error;
}

export interface UploadFileProps {
  children?: React.ReactNode | ((previewState: FilePreview) => React.ReactNode);
  error?: boolean;
  label?: React.ReactNode;
  id: string;
  helperText?: React.ReactNode;
  onRemove?: () => void;
  customPreview?: FilePreview;
  setCustomPreview?: React.Dispatch<React.SetStateAction<FilePreview>>;
  draggable?: boolean;
  showPreview?: boolean;
  showViewButton?: boolean;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, response?: FileChangeResponse) => void;
  breakChange?: (event: React.ChangeEvent<HTMLInputElement>) => boolean;
  fileTypes?: FileType;
  required?: boolean;
  sx?: any;
}
