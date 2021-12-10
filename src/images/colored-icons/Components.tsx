import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponents = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path
        d="m37.6 2.7 8.9 14.6a1.5 1.5 0 0 1-1.3 2.3H27.5a1.5 1.5 0 0 1-1.3-2.3l8.9-14.6a1.5 1.5 0 0 1 2.5 0z"
        fill="#61C1FD"
      />
      <rect fill="#FFC445" x={28} y={28} width={18} height={18} rx={4} />
      <path
        d="M12 47a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        fill="#37D5D3"
      />
      <path d="M3 19C3 9.6 10.2 2 19 2v17H3z" fill="#FC8562" />
    </g>
  </svg>
);

export default SvgComponents;
