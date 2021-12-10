import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTestpyramid = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M32.8 16h-17l6.8-11.1a2 2 0 0 1 3.5 0L32.8 16z" fill="#FBD178" />
      <path
        d="m40.8 30 5.5 9a2 2 0 0 1-.7 2.7 2 2 0 0 1-1 .3H3a2 2 0 0 1-2-2c0-.4.1-.7.3-1l5.4-9h34.1z"
        fill="#61C1FD"
      />
      <path d="m32.6 16 8.6 14H7l8.5-14z" fill="#AAD895" />
    </g>
  </svg>
);

export default SvgTestpyramid;
