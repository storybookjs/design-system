import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgReview = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      <circle cx={12} cy={12} r={12} fill="#A0DB77" />
      <path
        fill="#37D5D3"
        d="M38.026 26.833V39.5a1 1 0 0 1-1 1H31.5a1 1 0 0 1-1-1v-5.333a1 1 0 0 0-1-1h-5.526a1 1 0 0 1-1-1V19.5a1 1 0 0 1 1-1H29.5a1 1 0 0 1 1 1v5.333a1 1 0 0 0 1 1h5.526a1 1 0 0 1 1 1Z"
      />
      <path
        fill="#FFF"
        d="m17.76 7.147-7.66 8.091-3.86-4.262a.644.644 0 0 0-.976 0 .818.818 0 0 0 0 1.076L9.6 16.838a.665.665 0 0 0 .5.238.656.656 0 0 0 .489-.223l8.147-8.63a.818.818 0 0 0 0-1.076.645.645 0 0 0-.975 0Z"
      />
    </g>
  </svg>
);

export default SvgReview;
