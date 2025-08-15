import { useState } from 'react';
import { addMonths, subDays } from 'date-fns';
import Header from '../components/header';
import type { DateValue } from '../types/date-value';
import type { UseDate, UseDateProps } from '../types/use-date';

const useDate = ({ date, onApply }: UseDateProps): UseDate => {
  const [open, setOpen] = useState(false);
  const [temporaryDate, setTemporaryDate] = useState<DateValue>(date[0]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTemporary = (date: DateValue) => setTemporaryDate(date);
  const handleApply = () => {
    handleClose();
    onApply([temporaryDate, subDays(addMonths(temporaryDate || '', 3), 1)]);
  };

  const renderTitle = (props: any) => <Header {...props} />;

  return {
    open,
    temporaryDate,
    renderTitle,
    handleClose,
    handleOpen,
    handleTemporary,
    handleApply,
    setTemporaryDate
  };
};

export default useDate;
