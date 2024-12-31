import { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren<any>;

export const Text = ({children}: TextProps) => {
  return <div>{children}</div>
}
