import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCheck = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#1EA7FD"
      d="M48 24c0 5.2-1.6 10-4.4 14l-8-5.7a14 14 0 1 0-23-.2l-8.2 5.8A24 24 0 1 1 48 24Z"
      opacity={0.2}
    />
    <g fillRule="evenodd" clipRule="evenodd" opacity={0.7}>
      <path
        fill="url(#turbo-gradient-a)"
        d="M24 0a24 24 0 0 1 17 7l-7.1 7.1a14 14 0 0 0-9.9-3.8V0Z"
      />
      <path
        fill="url(#turbo-gradient-b)"
        d="M24 0a24 24 0 0 1 17 7l-7.1 7.1a14 14 0 0 0-9.9-3.8V0Z"
      />
      <path
        fill="url(#turbo-gradient-c)"
        fillOpacity={0.2}
        d="M24 0a24 24 0 0 1 17 7l-7.1 7.1a14 14 0 0 0-9.9-3.8V0Z"
      />
    </g>
    <path fill="#FA7240" d="M41 7 22 22a3 3 0 0 0 0 4.1 3 3 0 0 0 4.3 0L41 7Z" />
    <path fill="#FA7240" d="M20 24a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    <defs>
      <linearGradient
        id="turbo-gradient-a"
        x1={33.8}
        x2={25.9}
        y1={19.2}
        y2={15.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC521F" stopOpacity={0.5} />
        <stop offset={1} stopColor="#FC521F" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="turbo-gradient-b"
        x1={32.2}
        x2={24}
        y1={8.5}
        y2={8.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC521F" stopOpacity={0.3} />
        <stop offset={1} stopColor="#FC521F" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="turbo-gradient-c"
        x1={33.6}
        x2={24}
        y1={14}
        y2={10.9}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC521F" />
        <stop offset={1} stopColor="#FC521F" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgCheck;
