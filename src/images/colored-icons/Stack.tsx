import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStack = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd" opacity={0.7}>
      <path
        fill="#87E6E5"
        d="m4.673 31.534 12.286-7.15a14 14 0 0 1 14.082 0l12.286 7.15a4 4 0 0 1 .056 6.88L31.238 45.75a14 14 0 0 1-14.476 0L4.617 38.415a4 4 0 0 1 .056-6.881Z"
      />
      <path
        fill="#96D07C"
        d="m4.673 20.534 12.286-7.15a14 14 0 0 1 14.082 0l12.286 7.15a4 4 0 0 1 .056 6.88L31.238 34.75a14 14 0 0 1-14.476 0L4.617 27.415a4 4 0 0 1 .056-6.881Z"
      />
      <path
        fill="#1EA7FD"
        d="m4.673 9.534 12.286-7.15a14 14 0 0 1 14.082 0l12.286 7.15a4 4 0 0 1 .056 6.88L31.238 23.75a14 14 0 0 1-14.476 0L4.617 16.415a4 4 0 0 1 .056-6.881Z"
      />
    </g>
  </svg>
);

export default SvgStack;
