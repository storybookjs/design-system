import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgGroup = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 44"
    xmlSpace="preserve"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <ellipse fill="#37D5D3" cx={36.98} cy={33.346} rx={11.02} ry={10.48} />
    <ellipse fill="#FD8460" cx={23.788} cy={10.48} rx={10.808} ry={10.48} />
    <ellipse fill="#79C9FC" cx={10.808} cy={33.346} rx={10.808} ry={10.48} />
    <g opacity={0.7} fill="#FFF">
      <path d="M10.808 35.189c-3.601 0-6.651 2.309-7.707 5.498 1.961 1.936 4.688 3.139 7.707 3.139s5.746-1.203 7.707-3.139c-1.056-3.189-4.105-5.498-7.707-5.498z" />
      <ellipse cx={23.788} cy={7.682} rx={3.378} ry={3.315} />
      <path d="M36.98 35.189c-3.672 0-6.78 2.309-7.856 5.498 1.999 1.936 4.779 3.139 7.856 3.139 3.078 0 5.859-1.203 7.858-3.14-1.076-3.188-4.185-5.497-7.858-5.497z" />
      <ellipse cx={10.808} cy={30.548} rx={3.378} ry={3.315} />
      <ellipse cx={36.981} cy={30.548} rx={3.443} ry={3.315} />
      <path d="M23.788 20.96c3.02 0 5.746-1.203 7.707-3.139-1.056-3.189-4.104-5.497-7.707-5.497-3.601 0-6.65 2.308-7.707 5.498a10.94 10.94 0 0 0 7.707 3.138z" />
    </g>
  </svg>
);

export default SvgGroup;
