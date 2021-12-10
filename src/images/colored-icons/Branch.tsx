import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBranch = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect fill="#69BD45" opacity={0.7} x={2} y={5} width={16} height={16} rx={4} />
      <rect fill="#1EA7FD" opacity={0.7} x={2} y={27} width={16} height={16} rx={4} />
      <rect fill="#37D5D3" opacity={0.7} x={32} y={16} width={16} height={16} rx={4} />
      <path
        d="M18 13h1c2.8 0 4 1.5 5.8 5.4l.2.5c1.4 3.1 2.2 4.1 3.9 4.1H32v3h-3.1c-1.7 0-2.5 1-3.9 4.1l-.2.5C23 34.5 21.8 36 19 36h-1v-3h1c1.1 0 1.8-.8 3-3.6l.3-.5c.8-2 1.7-3.4 2.6-4.4-1-1-1.8-2.4-2.6-4.4l-.3-.5c-1.2-2.8-1.9-3.6-3-3.6h-1v-3z"
        fill="#66BF3C"
        fillRule="nonzero"
        opacity={0.2}
      />
    </g>
  </svg>
);

export default SvgBranch;
