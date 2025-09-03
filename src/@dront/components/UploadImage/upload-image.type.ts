export interface IPreview {
  url: string;
  name: string;
  size: number;
  process: number;
  file?: File;
  loadingInfo?: string;
}
