import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCode = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect fill="#FD8460" x={2} y={2} width={24} height={8} rx={4} />
      <rect fill="#FFD57C" x={20} y={26} width={27} height={8} rx={4} />
      <rect fill="#79C9FC" x={9} y={38} width={17} height={8} rx={4} />
      <rect fill="#79C9FC" x={9} y={14} width={27} height={8} rx={4} />
    </g>
  </svg>
);

export default SvgCode;
