import React from 'react';
import Tippy from '@tippyjs/react';
import { TooltipProps } from './tooltip.types';

const Tooltip = ({ children, content, className, hideOnClick, interactive, placement, delay }: TooltipProps) => {
  return (
    <Tippy content={content} className={`${className} rounded-lg bg-white p-4 shadow-md`} hideOnClick={hideOnClick} interactive={interactive} placement={placement} delay={delay}>
      {children}
    </Tippy>
  );
};

export default Tooltip;
