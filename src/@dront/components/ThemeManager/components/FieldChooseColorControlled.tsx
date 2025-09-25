import type { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldChooseColor from './FieldChooseColor';

interface FieldChooseColorControlledProps {
  name: string;
  label: string;
}

const FieldChooseColorControlled: React.FC<FieldChooseColorControlledProps> = ({
  name,
  label
}): Readonly<ReactNode> => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const handleApply = (hex: string) => {
          field.onChange(hex);
        };

        return <FieldChooseColor defaultValue={field.value} id={`${name}-field`} label={label} onApply={handleApply} />;
      }}
    />
  );
};

export default FieldChooseColorControlled;
