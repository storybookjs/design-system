import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEmail = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        d="M44 7a2.99 2.99 0 0 1 2.121.879A2.99 2.99 0 0 1 47 10v28a2.99 2.99 0 0 1-.879 2.121A2.99 2.99 0 0 1 44 41H4a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 1 38V10c0-.828.336-1.578.879-2.121A2.99 2.99 0 0 1 4 7Z"
        strokeOpacity={0.1}
        stroke="#1EA7FD"
        strokeWidth={2}
        fill="#61C1FD"
      />
      <path
        d="M44 6c.527 0 1.03.102 1.492.287L24 22.966 2.51 6.287C2.969 6.102 3.473 6 4 6h40Z"
        fill="#D7EEFE"
      />
      <path
        d="M2.51 6.287 24 22.966 45.492 6.287A4.001 4.001 0 0 1 48 10v.524L24 29.15 0 10.524V10a4.002 4.002 0 0 1 2.51-3.713Z"
        fill="#C0E6FF"
      />
    </g>
  </svg>
);

export default SvgEmail;
