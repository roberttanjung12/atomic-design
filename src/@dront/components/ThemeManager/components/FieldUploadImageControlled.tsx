import type { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ModalUploadImage from './ModalUploadImage';
import type { IPreview } from './ModalUploadImage/ModalUploadImage.type';

interface FieldUploadImageControlledProps {
  id: string;
  name: string;
  label: ReactNode;
  [key: string]: any;
}

/**
 * A controlled component for uploading and previewing images within a form context.
 * Utilizes React Hook Form's `Controller` to manage the image upload field state.
 *
 * @param id - The unique identifier for the upload field.
 * @param name - The name of the field in the form.
 * @param label - The label to display for the upload field.
 * @param rest - Additional props to pass to the underlying `ModalUploadImage` component.
 *
 * @remarks
 * - Integrates with React Hook Form via `useFormContext`.
 * - Uses a modal dialog for image upload and preview.
 * - Calls `onApply` when an image is selected or cleared.
 */
const FieldUploadImageControlled = ({ id, name, label, ...rest }: FieldUploadImageControlledProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        const handleApply = (data: IPreview | null) => {
          if (!data) {
            onChange(value);

            return;
          }

          onChange(data);
        };

        return (
          <ModalUploadImage
            id={id}
            defaultPreview={{ url: value?.url, file: null }}
            label={label}
            name={name}
            onApply={handleApply}
            {...rest}
          />
        );
      }}
    />
  );
};

export default FieldUploadImageControlled;
