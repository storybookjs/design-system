import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUpdate = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <circle fill="#96D07C" cx={24} cy={24} r={24} />
      <path
        d="M26.2 25.7V34a2 2 0 0 1-2 2h-.6a2 2 0 0 1-2-2V25.7h-5c-.6 0-.9-.3-.9-.7 0-.2 0-.3.2-.5l7.4-12c.4-.7 1-.7 1.4 0l7.4 12 .2.5c0 .4-.3.7-1 .7h-5.1z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgUpdate;
