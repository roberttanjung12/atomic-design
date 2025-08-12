import { createRoot } from 'react-dom/client';
import DrontApplication from '@/@dront/app';
import CallAlert, { type CallAlertOptions } from './CallAlert';

let alertInstance: any;

const initAlert = () => {
  return new Promise(resolve => {
    const wrapper = document.createElement('div');

    wrapper.className = 'alert-wrapper';
    wrapper.style.position = 'fixed';
    wrapper.style.top = '8px';
    wrapper.style.right = '8px';
    wrapper.style.zIndex = '9999';

    const container = document.createElement('div');

    container.className = 'alert-container';
    container.style.marginBottom = '8px';
    container.style.transition = 'transform 0.4s cubic-bezier(1,0,0,1)';
    container.style.transform = 'translateX(100%)';

    const existingWrapper = document.body.querySelector('.alert-wrapper');

    if (existingWrapper) {
      existingWrapper.appendChild(container);
    } else {
      wrapper.appendChild(container);
      document.body.appendChild(wrapper);
    }

    requestAnimationFrame(() => {
      container.style.transform = 'translateX(0)';
    });

    const root = createRoot(container);

    root.render(
      <DrontApplication>
        <CallAlert
          ref={ref => {
            alertInstance = ref;
            resolve(ref);
          }}
          root={root}
          container={container}
        />
      </DrontApplication>
    );
  });
};

const callAlert = {
  open: async (options: CallAlertOptions) => {
    await initAlert();

    alertInstance?.open(options);
  }
};

export default callAlert;
