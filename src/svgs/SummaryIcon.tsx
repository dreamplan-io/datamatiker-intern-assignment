import React from 'react';

import { IconType } from '../types/commonTypes';

const SummaryIcon = (props: IconType) => {
  const { width, height, className } = props;
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 16 16" fill="none" stroke="#2F3032" stroke-width="2" xmlns="http://www.w3.org/2000/svg ">
<path d="M4.66846 1.12512L11.1748 7.43281C11.2254 7.47886 11.2658 7.53446 11.2933 7.5962C11.3209 7.65795 11.3351 7.72451 11.3351 7.79179C11.3351 7.85907 11.3209 7.92563 11.2933 7.98737C11.2658 8.04911 11.2254 8.10472 11.1748 8.15076L4.66846 14.4585"/>
</svg>

  );
};
export default SummaryIcon;



