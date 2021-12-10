import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDetect = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        fill="#ABEDEC"
        d="M13 11h33a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2Z"
        opacity={0.2}
      />
      <path
        fill="#1EA7FD"
        fillOpacity={0.1}
        fillRule="nonzero"
        d="M13 13v33h33V13H13Zm0-2h33a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2Z"
      />
      <circle cx={12} cy={12} r={12} fill="#78CAFE" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M16.113 11.238h-3.351V7.887a.762.762 0 0 0-1.524 0v3.351H7.887a.762.762 0 0 0 0 1.524h3.351v3.351a.762.762 0 0 0 1.524 0v-3.351h3.351a.762.762 0 0 0 0-1.524Z"
      />
      <path
        fill="#37D5D3"
        d="M38.026 26.833V39.5a1 1 0 0 1-1 1H31.5a1 1 0 0 1-1-1v-5.333a1 1 0 0 0-1-1h-5.526a1 1 0 0 1-1-1V19.5a1 1 0 0 1 1-1H29.5a1 1 0 0 1 1 1v5.333a1 1 0 0 0 1 1h5.526a1 1 0 0 1 1 1Z"
      />
    </g>
  </svg>
);

export default SvgDetect;
