import { useMemo, useState } from 'react';
import { endOfDay } from 'date-fns';
import Header from '../components/header';
import type { DateValue } from '../types/date-value';
import type { UseDate, UseDateProps } from '../types/use-date';

const useDate = ({ date, onApply, locale }: UseDateProps): UseDate => {
  const [open, setOpen] = useState(false);
  const [temporaryDate, setTemporaryDate] = useState<DateValue>(date);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTemporary = (values: DateValue) => {
    const endDate = values[1] ? endOfDay(values[1] as Date) : null;

    setTemporaryDate([values[0], endDate]);
  };
  const handleApply = () => {
    handleClose();
    onApply(temporaryDate);
  };

  const renderTitle = useMemo(
    () => (props: any) => <Header {...props} temporaryDate={temporaryDate} locale={locale} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [temporaryDate]
  );

  return {
    open,
    temporaryDate,
    setTemporaryDate,
    renderTitle,
    handleClose,
    handleOpen,
    handleTemporary,
    handleApply
  };
};

export default useDate;
