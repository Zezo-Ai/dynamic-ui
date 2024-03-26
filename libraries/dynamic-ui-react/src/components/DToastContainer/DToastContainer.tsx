/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import type { CSSProperties } from 'react';

import {
  ToastContainer,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from 'react-toastify';
import type { ToastContainerProps } from 'react-toastify';

import classNames from 'classnames';

import { BaseProps } from '../interface';

type Props = BaseProps
& Pick<ToastContainerProps,
| 'autoClose'
| 'closeOnClick'
| 'position'
> & {
  containerId?: string;
  stacked?: boolean;
  style?: CSSProperties & {
    '--toastify-toast-width': any;
    [index: string]: any;
  },
  transition?: 'slide' | 'flip' | 'bounce' | 'zoom';
};

export default function DToastContainer(
  {
    style,
    className,
    closeOnClick,
    position = 'bottom-center',
    autoClose = false,
    stacked = false,
    transition = 'slide',
    containerId,
  }: Props,
) {
  const toastTransitions = useMemo(() => ({
    bounce: Bounce,
    flip: Flip,
    slide: Slide,
    zoom: Zoom,
  }), []);

  const selectedTransition = useMemo(
    () => toastTransitions[transition],
    [toastTransitions, transition],
  );

  return (
    <ToastContainer
      toastClassName={() => classNames('shadow-none p-0 cursor-default', className)}
      position={position}
      autoClose={autoClose}
      closeOnClick={closeOnClick}
      transition={selectedTransition}
      closeButton={false}
      style={style}
      hideProgressBar
      stacked={stacked}
      containerId={containerId}
    />
  );
}
