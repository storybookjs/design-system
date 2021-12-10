import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPixel = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="#37D5D3" fillRule="evenodd" fillOpacity={0.9}>
      <path d="M8 4h16v20H4V8a4 4 0 0 1 4-4z" opacity={0.2} />
      <path d="M40 4H24v20h20V8a4 4 0 0 0-4-4z" opacity={0.4} />
      <path d="M4 40V24h20v20H8a4 4 0 0 1-4-4z" opacity={0.6} />
      <path d="M44 40V24H24v20h16a4 4 0 0 0 4-4z" opacity={0.3} />
    </g>
  </svg>
);

export default SvgPixel;
