import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPlus = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect fill="#87E6E5" transform="rotate(-90 24 24)" y={21} width={48} height={6} rx={3} />
      <rect fill="#61C1FD" y={21} width={48} height={6} rx={3} />
    </g>
  </svg>
);

export default SvgPlus;
