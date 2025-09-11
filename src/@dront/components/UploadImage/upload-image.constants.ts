import type { IPreview } from './upload-image.type';

const initialPreview: IPreview = { url: '', name: '', size: 0, loadingInfo: '', process: 0, file: undefined };

export default initialPreview;

export const acceptTypes = [
  {
    input: '.jpg',
    mime: 'image/jpg'
  },
  {
    input: '.jpeg',
    mime: 'image/jpeg'
  },
  {
    input: '.png',
    mime: 'image/png'
  }
];
