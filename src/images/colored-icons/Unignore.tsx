import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUnignore = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      <path
        fill="#1EA7FD"
        fillOpacity={0.1}
        fillRule="nonzero"
        d="M48 20.36v3.21L23.335 48h-3.241L48 20.36Zm0 12.84v3.21L36.298 48h-3.24L48 33.2ZM46 11c.481 0 .923.17 1.268.454L11.31 47.07A1.99 1.99 0 0 1 11 46v-1.833L44.485 11H46Zm-11.238 0L11 34.536v-3.21L31.521 11h3.241ZM21.8 11 11 21.696v-3.21L18.558 11H21.8Z"
      />
      <circle cx={12.75} cy={12} r={12} fill="#79C9FC" fillRule="nonzero" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M15.387 11.989a2.637 2.637 0 1 1-5.274 0 2.637 2.637 0 0 1 5.274 0Zm1.694 1.752c-.674.574-1.356 1.027-2.027 1.347-.79.376-1.565.566-2.304.566-.74 0-1.515-.19-2.304-.566-.671-.32-1.353-.773-2.027-1.347a13.568 13.568 0 0 1-1.708-1.753 13.6 13.6 0 0 1 1.708-1.753c.674-.573 1.356-1.026 2.027-1.346.79-.376 1.564-.567 2.304-.567.74 0 1.515.19 2.304.567.67.32 1.353.773 2.027 1.346a13.71 13.71 0 0 1 1.708 1.753 13.571 13.571 0 0 1-1.708 1.753Zm2.945-2.067c-.132-.185-3.271-4.524-7.276-4.524-4.006 0-7.144 4.34-7.276 4.524l-.224.314.224.315c.132.185 3.27 4.523 7.276 4.523 4.005 0 7.144-4.338 7.276-4.523l.224-.315-.224-.314Z"
      />
    </g>
  </svg>
);

export default SvgUnignore;
