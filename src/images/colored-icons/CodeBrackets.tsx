import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCodeBrackets = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        d="m12 17.5-5.6 5.9c-.5.6-.5 1.6 0 2.2l5.6 5.9v4.1c0 .9-.2 1.4-.6 1.4-.1 0-.3 0-.5-.3L.4 25.7C0 25 0 24 .4 23.3l10.6-11 .5-.3c.4 0 .6.5.6 1.4v4.1zm24 14 5.6-5.9c.5-.6.5-1.6 0-2.2L36 17.5v-4.1c0-.9.2-1.4.6-1.4.1 0 .3 0 .5.3l10.5 11c.5.7.5 1.7 0 2.3L37 36.7l-.5.3c-.4 0-.6-.5-.6-1.4v-4.1z"
        fill="#87E6E5"
      />
      <rect
        fill="#A0DB77"
        transform="rotate(-75 22.8 24.7)"
        x={5}
        y={22.7}
        width={35.6}
        height={4}
        rx={2}
      />
    </g>
  </svg>
);

export default SvgCodeBrackets;
