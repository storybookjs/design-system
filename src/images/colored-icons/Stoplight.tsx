import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStoplight = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <circle fill="#D7EEFE" cx={24} cy={24} r={24} />
      <path
        d="M31.6 13.7v20.6c0 4-3.3 7.3-7.5 7.3a7.4 7.4 0 0 1-7.5-7.3V13.7c0-4 3.4-7.3 7.5-7.3 4.2 0 7.5 3.3 7.5 7.3z"
        fillOpacity={0.1}
        fill="#000"
      />
      <path d="M31.3 14v20A7.2 7.2 0 1 1 17 34V14a7.2 7.2 0 1 1 14.4 0z" fill="#FFF" />
      <path d="M27.7 14a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0z" fill="#FD8460" />
      <path d="M27.7 24a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0z" fill="#FFC445" />
      <path d="M27.7 34a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0z" fill="#66BF3C" />
    </g>
  </svg>
);

export default SvgStoplight;
