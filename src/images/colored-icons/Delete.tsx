import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDelete = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <circle fill="#FA7240" cx={24} cy={24} r={24} />
      <path
        d="M35.7 34.4 25.3 24l10.4-10.4a1 1 0 1 0-1.3-1.3L24 22.7 13.6 12.3a1 1 0 1 0-1.3 1.3L22.7 24 12.3 34.4a1 1 0 1 0 1.3 1.3L24 25.3l10.4 10.4a1 1 0 1 0 1.3-1.3"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgDelete;
