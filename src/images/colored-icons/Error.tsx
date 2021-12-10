import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgError = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect width={8} height={8} x={11} y={11} fill="#79C9FC" rx={4} />
      <rect width={8} height={8} x={29} y={11} fill="#79C9FC" rx={4} />
      <circle cx={24} cy={31} r={7} fill="#FC8562" />
    </g>
  </svg>
);

export default SvgError;
