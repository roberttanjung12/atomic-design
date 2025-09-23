/**
 * Represents a preview of an uploaded image file.
 *
 * @property url - The URL to access the image preview.
 * @property name - The name of the image file.
 * @property size - The size of the image file in bytes.
 * @property file - (Optional) The original File object associated with the preview.
 */
export interface IPreview {
  url: string;
  name: string;
  size?: number;
  file?: File;
}

/**
 * Represents an error that can occur during the image upload process.
 *
 * @property code - The error code.
 *   - '400': The uploaded file does not meet the required specifications.
 *   - '500': An undefined server error occurred.
 * @property data - Additional data related to the error.
 */
export type ErrorUpload = {
  code: '400' | '500';
  message: string;
  data: any;
};
