import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgScale = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect fill="#AAD895" x={4} y={4} width={40} height={40} rx={4} />
      <rect fill="#FFF" opacity={0.3} x={4} y={14} width={30} height={30} rx={4} />
      <rect fill="#FFF" opacity={0.3} x={4} y={24} width={20} height={20} rx={4} />
    </g>
  </svg>
);

export default SvgScale;
