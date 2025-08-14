import { createRoot } from 'react-dom/client';
import DrontApplication from '@/@dront/app';
import CallAlert, { type CallAlertOptions } from './CallAlert';
import { getPositionStyles } from './callAlert.position-helper';

let alertInstance: any;

type AlertPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

interface InitAlertParams {
  position?: AlertPosition;
  offset?: { left?: string; top?: string; right?: string; bottom?: string };
}

const initAlert = ({ position = 'top-right', offset = { top: '8px', right: '8px' } }: InitAlertParams) => {
  return new Promise(resolve => {
    const styles = getPositionStyles(position, offset);

    const wrapper = document.createElement('div');

    const wrapperClassName = `dront-alert-wrapper--${position}--${offset.left}--${offset.top}--${offset.right}--${offset.bottom}`;

    wrapper.className = wrapperClassName;
    Object.assign(wrapper.style, {
      position: 'fixed',
      zIndex: '9999',
      ...styles.wrapper
    });

    const container = document.createElement('div');

    container.className = 'alert-container';
    Object.assign(container.style, {
      marginBottom: '8px',
      ...styles.container
    });

    const existingWrapper = document.body.querySelector(`.${wrapperClassName}`);

    if (existingWrapper) {
      existingWrapper.appendChild(container);
    } else {
      wrapper.appendChild(container);
      document.body.appendChild(wrapper);
    }

    requestAnimationFrame(() => {
      container.style.transform = 'translate(0, 0)';
    });

    const root = createRoot(container);

    const handleClose = (callback: () => any) => {
      if (container.parentNode) {
        container.style.transform = styles.close.transform ?? '';

        setTimeout(() => {
          root.unmount();
          container.parentNode?.removeChild(container);
          if (wrapper.childElementCount === 0) {
            wrapper.parentNode?.removeChild(wrapper);
          }
          callback();
        }, 400);
      }
    };

    root.render(
      <DrontApplication>
        <CallAlert
          ref={ref => {
            alertInstance = ref;
            resolve(ref);
          }}
          handleClose={handleClose}
        />
      </DrontApplication>
    );
  });
};

const callAlert = {
  open: async (options: CallAlertOptions & InitAlertParams) => {
    await initAlert({ position: options.position, offset: options.offset });
    alertInstance?.open(options);
  }
};

export default callAlert;
