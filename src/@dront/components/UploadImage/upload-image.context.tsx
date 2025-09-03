import { createContext, type Dispatch, type ReactNode, type SetStateAction, useContext, useState } from 'react';
import initialPreview from './upload-image.constants';
import type { IPreview } from './upload-image.type';

interface UploadImagePreviewContextType {
  preview: IPreview;
  setPreview: Dispatch<SetStateAction<IPreview>>;
}

const UploadImagePreviewContext = createContext<UploadImagePreviewContextType | undefined>(undefined);

export const UploadImagePreviewProvider = ({ children }: { children: ReactNode }) => {
  const [preview, setPreview] = useState<IPreview>(initialPreview);

  return (
    <UploadImagePreviewContext.Provider value={{ preview, setPreview }}>{children}</UploadImagePreviewContext.Provider>
  );
};

export const useUploadImagePreview = () => {
  const context = useContext(UploadImagePreviewContext);

  if (!context) {
    throw new Error('useUploadImagePreview must be used within a UploadImagePreviewProvider');
  }

  return context;
};
