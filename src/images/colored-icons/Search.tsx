import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSearch = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect
        width={21.302}
        height={6}
        x={26.247}
        y={34.912}
        fill="#FFD476"
        rx={3}
        transform="rotate(-135 36.898 37.912)"
      />
      <path
        fill="#FFC445"
        d="M20.782 2.127c10.371 0 18.78 8.408 18.78 18.78 0 10.371-8.409 18.78-18.78 18.78-10.372 0-18.78-8.409-18.78-18.78 0-10.372 8.408-18.78 18.78-18.78Zm0 5.938c-7.093 0-12.842 5.75-12.842 12.842 0 7.092 5.75 12.842 12.842 12.842 7.092 0 12.842-5.75 12.842-12.842 0-7.093-5.75-12.842-12.842-12.842Z"
      />
    </g>
  </svg>
);

export default SvgSearch;
