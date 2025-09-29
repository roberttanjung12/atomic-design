import type { FilePreview, FileType } from './types';

const initialPreview: FilePreview = {
  name: '',
  size: 0,
  loadingInfo: '',
  process: 0,
  type: '',
  url: ''
};

export const FILE_TYPES: Record<FileType, string> = {
  PDF_ONLY: 'application/pdf',
  IMAGE_ONLY: '.jpg, .jpeg, .png, .gif, .webp',
  EXCEL_ONLY: '.xls, .xlsx',
  WORD_ONLY: '.doc, .docx',
  DOCUMENT: '.pdf, .xls, .xlsx, .doc, .docx',
  ALL: '.pdf, .jpg, .jpeg, .png, .gif, .webp, .xls, .xlsx, .doc, .docx, .txt, .csv'
};

export default initialPreview;
