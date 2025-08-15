import { useState } from 'react';
import Header from '../components/header';
import type { DateValue } from '../types/date-value';
import type { UseDate, UseDateProps } from '../types/use-date';

const useDate = ({ date, locale, onApply }: UseDateProps): UseDate => {
  const [open, setOpen] = useState(false);
  const [temporaryDate, setTemporaryDate] = useState<DateValue>(date);

  const handleOpen = () => setOpen(true);
  const handleTemporary = (date: DateValue) => setTemporaryDate(date);
  const handleClose = () => {
    setOpen(false);
  };
  const handleApply = () => {
    onApply(temporaryDate);
    handleClose();
  };

  const renderTitle = (props: any) => <Header {...props} locale={locale} />;

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
