import React from 'react';

import { IconType } from '../types/commonTypes';

const DropDownIcon = (props: IconType) => {
  const { width, height, className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 16"
      fill="none"
      width={width}
      height={height}
      className={className}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M1.66846 1.12512L8.17482 7.43281C8.22543 7.47886 8.26576 7.53446 8.29333 7.5962C8.3209 7.65795 8.33512 7.72451 8.33512 7.79179C8.33512 7.85907 8.3209 7.92563 8.29333 7.98737C8.26576 8.04911 8.22543 8.10472 8.17482 8.15076L1.66846 14.4585" stroke="#2F3032" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>    </svg>
  );
};

export default DropDownIcon;