import React from 'react';

import { IconType } from '../types/commonTypes';

const LogoIcon = (props: IconType) => {
  const { width, height, fill, className } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 574.83 484.81"
      width={width}
      height={height}
      fill={fill}
      className={className}
    >
      <path d="M99.61 0v126.12H74.29v-10.54c-6.63 8-16.32 11.9-28.56 11.9C19.89 127.48 0 109.13 0 80.4s19.89-47.08 45.76-47.08c11.22 0 20.74 3.57 27.37 11v-17.8A26.51 26.51 0 0 1 99.64 0Zm-26 80.4c0-15.81-10.2-25.33-23.29-25.33-13.26 0-23.46 9.52-23.46 25.33s10.2 25.32 23.46 25.32c13.09 0 23.29-9.51 23.29-25.32Zm107.24-47.08v24.47c-2.21-.17-3.9-.34-5.94-.34-14.62 0-24.32 8-24.32 25.5v43.17h-26.51V34.67h25.32v12.07c6.46-8.83 17.36-13.42 31.45-13.42Zm83.97 64.08 14.1 15.29c-8.5 9.69-21.25 14.79-37.73 14.79-31.62 0-52.19-19.89-52.19-47.08 0-27.37 20.74-47.08 49-47.08 25.84 0 47.08 17 47.26 46.23l-67.7 13.09c3.91 9 12.41 13.59 24.31 13.59 9.69 0 16.66-2.89 22.95-8.83ZM215 77.68 259.55 69C257 59.66 249 53.37 238 53.37c-13.3 0-22.48 8.84-23 24.31Zm180.86-43.01v91.45h-25.33v-10.54c-6.63 8-16.31 11.9-28.55 11.9-25.84 0-45.73-18.35-45.73-47.08S316.14 33.32 342 33.32c11.21 0 20.74 3.57 27.37 11v-9.69Zm-26 45.73c0-15.81-10.2-25.33-23.28-25.33-13.26 0-23.46 9.52-23.46 25.33s10.2 25.32 23.46 25.32c13.07 0 23.27-9.51 23.27-25.32Zm204.97-6.63v52.35h-26.51V77.85c0-14.79-6.63-21.59-17.34-21.59-11.9 0-20.22 7.65-20.22 24v45.86h-26.52V77.85c0-14.79-6.29-21.59-17.34-21.59-11.73 0-20.06 7.65-20.06 24v45.86h-26.51V34.67h25.32v10.54c6.8-7.82 17-11.89 28.73-11.89 12.74 0 23.63 4.93 30.08 15 7.31-9.34 19.21-15 33-15 21.74 0 37.37 12.57 37.37 40.45ZM99.9 241.33c0 28.73-19.89 47.08-45.55 47.08-11.39 0-20.74-3.56-27.54-11.05v16.16A26.51 26.51 0 0 1 .3 320V195.61h25.32v10.54c6.63-8 16.49-11.9 28.73-11.9 25.65 0 45.55 18.36 45.55 47.08Zm-26.86 0C73 225.52 63 216 49.76 216s-23.29 9.51-23.29 25.32 10 25.33 23.29 25.33S73 257.14 73 241.33Zm44.53 15.47v-69.35a26.53 26.53 0 0 1 26.51-26.52v94.34c0 7.82 4.08 12.07 11.39 12.07a17.31 17.31 0 0 0 7.48-1.7l1.19 20.57a43.51 43.51 0 0 1-13.77 2.2c-20.56 0-32.8-11.21-32.8-31.61Zm150.76-61.19v91.44H243v-10.53c-6.63 8-16.31 11.89-28.55 11.89-25.84 0-45.72-18.35-45.72-47.08s19.88-47.08 45.72-47.08c11.22 0 20.74 3.57 27.36 11v-9.69Zm-26 45.72c0-15.81-10.19-25.32-23.28-25.32-13.26 0-23.46 9.51-23.46 25.32s10.2 25.33 23.46 25.33c13.08 0 23.27-9.52 23.27-25.33Zm143.95-6.63v52.35h-26.52v-48.27c0-14.79-6.8-21.59-18.53-21.59-12.75 0-21.93 7.82-21.93 24.65v45.21h-26.54v-91.44h25.33v10.71c7.13-7.82 17.84-12.07 30.25-12.07 21.66 0 37.94 12.58 37.94 40.45Zm188.55 77.73L0 404.31v26.86l574.83-91.89v-26.85zM0 458.44h574.83v26.37H0zm411.26-184.39c0-8.65 6.39-14.35 14.17-14.35a13.84 13.84 0 0 1 14.18 13.51v.84a14.18 14.18 0 0 1-28.35.75q-.01-.37 0-.75Z" />
    </svg>
  );
};

export default LogoIcon;
