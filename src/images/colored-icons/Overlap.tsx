import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOverlap = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect fill="#FC521F" y={6} width={24} height={24} rx={4} opacity={0.7} />
      <rect fill="#FFC445" x={12} y={12} width={24} height={24} rx={4} opacity={0.7} />
      <rect fill="#1EA7FD" x={24} y={18} width={24} height={24} rx={4} opacity={0.7} />
    </g>
  </svg>
);

export default SvgOverlap;
