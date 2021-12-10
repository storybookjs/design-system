import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgProjects = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        fill="#79C9FC"
        d="M16 3h23a3 3 0 0 1 0 6H16a3 3 0 0 1 0-6Zm0 24h27a3 3 0 0 1 0 6H16a3 3 0 0 1 0-6Zm0 12h14a3 3 0 0 1 0 6H16a3 3 0 0 1 0-6Zm0-24h20a3 3 0 0 1 0 6H16a3 3 0 0 1 0-6Z"
      />
      <path
        fill="#A0DB77"
        d="M6.782 5.513c.29.19.29.5 0 .689L1.527 9.633a.436.436 0 0 1-.234.081C1.12 9.714 1 9.558 1 9.29V2.425C1 2.156 1.12 2 1.293 2c.07 0 .15.026.234.08l5.255 3.433Zm0 12c.29.19.29.5 0 .689l-5.255 3.431a.436.436 0 0 1-.234.081c-.173 0-.293-.156-.293-.425v-6.864c0-.269.12-.425.293-.425.07 0 .15.026.234.08l5.255 3.433Zm0 24c.29.19.29.5 0 .689l-5.255 3.431a.436.436 0 0 1-.234.081c-.173 0-.293-.156-.293-.425v-6.864c0-.269.12-.425.293-.425.07 0 .15.026.234.08l5.255 3.433Z"
      />
      <rect width={7} height={7} y={26.5} fill="#FD8460" rx={3.5} />
    </g>
  </svg>
);

export default SvgProjects;
