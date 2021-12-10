import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgViewports = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect stroke="#1EA7FD" fillOpacity={0.3} fill="#1EA7FD" width={140} height={140} rx={4} />
      <path
        d="M4 35h97a4 4 0 0 1 4 4v97a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V39a4 4 0 0 1 4-4Z"
        stroke="#1EA7FD"
        fillOpacity={0.3}
        fill="#1EA7FD"
        strokeDasharray="4,2"
      />
      <path
        d="M4 70h37.37a4 4 0 0 1 4 4v62a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V74a4 4 0 0 1 4-4Z"
        stroke="#1EA7FD"
        fillOpacity={0.3}
        fill="#1EA7FD"
        strokeDasharray="4,2"
      />
      <rect fill="#FC521F" x={9.074} y={7.778} width={10.37} height={10.37} rx={5.185} />
      <rect fill="#FFAE00" x={23.333} y={7.778} width={10.37} height={10.37} rx={5.185} />
      <rect fill="#66BF3C" x={37.593} y={7.778} width={10.37} height={10.37} rx={5.185} />
    </g>
  </svg>
);

export default SvgViewports;
