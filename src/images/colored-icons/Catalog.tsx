import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCatalog = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect fill="#61C1FD" x={4} width={16} height={16} rx={2} />
      <rect fill="#73E1E0" opacity={0.7} x={4} y={27} width={16} height={16} rx={2} />
      <rect fill="#9DEAE9" opacity={0.7} x={28} y={27} width={16} height={16} rx={2} />
      <rect fill="#73E1E0" opacity={0.7} x={28} width={16} height={16} rx={2} />
      <rect fill="#61C1FD" opacity={0.4} x={6} y={18} width={6} height={3} rx={1} />
      <rect fill="#61C1FD" opacity={0.4} x={13} y={18} width={6} height={3} rx={1} />
      <rect fill="#61C1FD" opacity={0.4} x={6} y={45} width={12} height={3} rx={1} />
      <rect fill="#61C1FD" opacity={0.4} x={30} y={18} width={12} height={3} rx={1} />
      <rect fill="#61C1FD" opacity={0.4} x={31} y={45} width={7} height={3} rx={1} />
      <rect fill="#61C1FD" opacity={0.4} x={39} y={45} width={3} height={3} rx={1} />
    </g>
  </svg>
);

export default SvgCatalog;
