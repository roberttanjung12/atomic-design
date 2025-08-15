import { useEffect, useState } from 'react';
import Header from '../components/header';
import type { DateValue } from '../types/date-value';
import type { Modes } from '../types/modes';
import type { UseDate, UseDateProps } from '../types/use-date';
import handleTemporaryByMode from './handleTemporayByMode';

const useDate = ({ date, locale, onApply }: UseDateProps): UseDate => {
  const [open, setOpen] = useState(false);
  const [temporaryDate, setTemporaryDate] = useState<DateValue>(date.value);
  const [mode, setMode] = useState<Modes>(date.mode);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTemporary = (values: DateValue) => handleTemporaryByMode({ mode, values, setTemporaryDate });

  const handleApply = () => {
    handleClose();
    onApply({ mode, value: temporaryDate });
  };

  const renderTitle = (props: any) => (mode === 'yearly' ? null : <Header {...props} locale={locale} />);

  useEffect(() => {
    if (date.value[0] || date.value[1]) {
      setTemporaryDate(date.value);
      setMode(date.mode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return {
    open,
    temporaryDate,
    mode,
    setTemporaryDate,
    setMode,
    renderTitle,
    handleClose,
    handleOpen,
    handleTemporary,
    handleApply
  };
};

export default useDate;
