import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRuntest = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        d="M30.6 23.4 21 17a.8.8 0 0 0-.5-.1c-.3 0-.5.3-.5.8v12.4c0 .5.2.8.5.8l.5-.1 9.6-6.3c.5-.3.5-.9 0-1.2"
        fill="#66BF3C"
      />
      <path d="M2 24h5.8A16.2 16.2 0 1 0 24 7.8V2A22 22 0 1 1 2 24z" fill="#A0DB77" />
      <path d="M2 24A22 22 0 0 1 24 2v5.8C15 7.8 7.8 15.1 7.8 24H2z" />
    </g>
  </svg>
);

export default SvgRuntest;
