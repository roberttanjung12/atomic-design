import { useState } from 'react';
import moment from 'moment';
import type { DateValue } from '../types/date-value';
import type { UseDate, UseDateProps } from '../types/use-date';

const useDate = ({ date, onApply }: UseDateProps): UseDate => {
  const [open, setOpen] = useState(false);
  const [temporaryDate, setTemporaryDate] = useState<DateValue>(date);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTemporary = (values: DateValue) => {
    const endDate = values[1] ? moment(values[1]).endOf('days').toDate() : null;

    setTemporaryDate([values[0], endDate]);
  };
  const handleApply = () => {
    handleClose();
    onApply(temporaryDate);
  };

  return {
    open,
    temporaryDate,
    setTemporaryDate,
    handleClose,
    handleOpen,
    handleTemporary,
    handleApply
  };
};

export default useDate;
