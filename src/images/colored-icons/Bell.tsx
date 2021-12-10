import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBell = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path
        fill="#FFC445"
        d="M29 40.188a5 5 0 0 1-9.995.216L19 40.187h10zm-18.875-9.25v-15l.003-.313c.167-7.588 6.37-13.688 13.997-13.688 7.628 0 13.83 6.1 13.997 13.688l.003.313v15h-28z"
      />
      <rect width={38} height={8.25} x={5} y={30.938} fill="#FFD476" rx={2} />
    </g>
  </svg>
);

export default SvgBell;
