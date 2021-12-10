import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInterface = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect fill="#D7EEFE" x={4} y={4} width={40} height={40} rx={4} />
      <rect fill="#FD8460" x={7} y={8} width={8} height={8} rx={4} />
      <rect fill="#FFC445" x={18} y={8} width={8} height={8} rx={4} />
      <rect fill="#66BF3C" x={29} y={8} width={8} height={8} rx={4} />
    </g>
  </svg>
);

export default SvgInterface;
