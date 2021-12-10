import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComments = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        fill="#96D07C"
        d="M2.527 17.92a.436.436 0 0 1-.234.08C2.12 18 2 17.844 2 17.575V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4.04 4.04 0 0 1-.487-.03l-4.986 3.95Z"
      />
      <path
        fill="#73E1E0"
        d="M7.51 44.97 2.528 47.92a.436.436 0 0 1-.234.08C2.12 48 2 47.844 2 47.575V35a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4.04 4.04 0 0 1-.49-.03Z"
      />
      <path
        fill="#FFD476"
        d="M46 19.5v13.575c0 .269-.12.425-.293.425a.436.436 0 0 1-.234-.08l-4.984-3.95c-.16.02-.324.03-.489.03H18a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Z"
      />
    </g>
  </svg>
);

export default SvgComments;
