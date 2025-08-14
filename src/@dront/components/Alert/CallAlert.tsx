import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import Alert, { type AlertProps } from '.';

export interface CallAlertOptions extends AlertProps {
  duration?: number;
}

const CallAlert = forwardRef(({ handleClose }: { handleClose: (callback: () => any) => void }, ref) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<CallAlertOptions>({
    duration: 3000,
    severity: 'info',
    title: '',
    message: '',
    muiAlertProps: {}
  });

  useImperativeHandle(ref, () => ({
    open: (newOptions: CallAlertOptions) => {
      setOptions(newOptions);
      setOpen(true);
    }
  }));

  useEffect(() => {
    if (!open) return;
    if (!options.duration) return;

    const timer = setTimeout(() => handleClose(() => setOpen(false)), options.duration);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, options.duration]);

  return open && <Alert {...options} muiAlertProps={{ onClose: () => handleClose(() => setOpen(false)) }} />;
});

export default CallAlert;
