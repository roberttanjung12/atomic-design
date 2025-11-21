import type { ReactNode } from 'react';

type CallbackChildrenProps = ((props: any) => ReactNode) | ReactNode;

const callbackChildren = (children: CallbackChildrenProps, props: any): ReactNode =>
  typeof children === 'function' ? children(props) : children;

export default callbackChildren;
