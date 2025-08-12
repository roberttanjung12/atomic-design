import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import type { Root } from 'react-dom/client';
import Alert, { type AlertProps } from '.';

export interface CallAlertOptions extends AlertProps {
  duration?: number;
}

const CallAlert = forwardRef(({ root, container }: { root: Root; container: HTMLDivElement }, ref) => {
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

  const handleClose = () => {
    if (container.parentNode) {
      container.style.transform = 'translateX(110%)';
      setTimeout(() => {
        root.unmount();
        container.parentNode?.removeChild(container);
        setOpen(false);
      }, 400);
    }
  };

  useEffect(() => {
    if (!open) return;
    if (!options.duration) return;

    const timer = setTimeout(handleClose, options.duration);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, options.duration]);

  return (
    open && (
      <Alert
        {...options}
        muiAlertProps={{
          onClose: handleClose
        }}
      />
    )
  );
});

export default CallAlert;
