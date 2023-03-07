import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlow = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 48 48"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#79C9FC"
      d="M21 7.26a17 17 0 1 0 0 33.47A19 19 0 0 1 11 24a7 7 0 1 1 14 0 5 5 0 0 0 10 0A17 17 0 0 0 21 7.26Z"
    />
    <path
      fill="#FFC445"
      d="M27 40.74a17 17 0 1 0 0-33.47A19 19 0 0 1 37 24a7 7 0 1 1-14 0 5 5 0 0 0-10 0 17 17 0 0 0 14 16.74Z"
    />
  </svg>
);

export default SvgFlow;
