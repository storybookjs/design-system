import React, { useEffect, useState } from 'react';
import { styled } from '@storybook/theming';

const Svg = styled.svg`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  cursor: pointer;
  user-select: none;
  color: #24292f;
  width: 14;
  height: 14;
  display: inline-block;
  vertical-align: text-top;
  fill: currentColor;
  overflow: visible;
  margin-right: 4px;
`;

const Star = styled.a`
  box-sizing: content-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  white-space: nowrap;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  height: 14px;
  padding: 2px 5px;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  vertical-align: bottom;
  cursor: pointer;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 36, 0.15);
  color: #24292f;
  background-color: #ebf0f4;
  background-image: linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);
  border-radius: 0.25em 0 0 0.25em;

  &:focus,
  &:hover {
    background-color: #e9ebef;
    background-position: 0 -0.5em;
    background-image: url(
      data:image/svg + xml,
      %3csvgxmlns='http://www.w3.org/2000/svg'%3e%3clinearGradientid='o'x2='0'y2='1'%3e%3cstopstop-color='%23f3f4f6'/%3e%3cstopoffset='90%25'stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crectwidth='100%25'height='100%25'fill='url(%23o)'/%3e%3c/svg%3e
    );
    background-image: linear-gradient(180deg, #f3f4f6, #e9ebef 90%);
  }

  &:active {
    background-color: #e5e9ed;
    box-shadow: inset 0 0.15em 0.3em rgb(27 31 36 / 15%);
    background-image: none;
  }
`;

const Count = styled.a`
  box-sizing: content-box;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  white-space: nowrap;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  height: 14px;
  padding: 2px 5px;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  vertical-align: bottom;
  cursor: pointer;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 36, 0.15);
  border-left: 0;
  border-radius: 0 0.25em 0.25em 0;
  color: #24292f;
  background-color: #fff;

  &:focus,
  &:hover {
    color: #0969da;
  }
`;

export const GithubButton = () => {
  const [starCount, setStarCount] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/storybookjs/storybook', {
      referrerPolicy: 'strict-origin-when-cross-origin',
    })
      .then((res) => res.json())
      .then((data) => {
        setStarCount(data.stargazers_count);
      })
      .catch((error) => console.error(error));
  });

  return (
    <div className="widget">
      <Star
        href="https://github.com/storybookjs/storybook"
        rel="noopener"
        target="_blank"
        aria-label="Star Storybook on GitHub"
      >
        <Svg
          viewBox="0 0 16 16"
          width="14"
          height="14"
          className="octicon octicon-mark-github"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </Svg>
        <span>Star</span>
      </Star>
      <Count
        href="https://github.com/storybookjs/storybook/stargazers"
        rel="noopener"
        target="_blank"
        aria-label={`${starCount} stargazers on GitHub`}
      >
        {starCount.toLocaleString()}
      </Count>
    </div>
  );
};
