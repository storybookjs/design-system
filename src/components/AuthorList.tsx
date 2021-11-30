import React, { useMemo } from 'react';
import { styled, css } from '@storybook/theming';
import { typography, color, spacing } from './shared/styles';
import { Avatar } from './Avatar';
import { Link } from './Link';
import { Icon } from './Icon';

const authorStyles = css`
  color: ${color.darkest};
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m1}px;
  margin-left: ${spacing.padding.small}px;
`;

const AuthorName = styled.div`
  ${authorStyles}
`;

const Author = styled(Link)`
  display: block;
  margin-bottom: 16px;

  span {
    display: flex;
    align-items: center;
  }
`;

const AuthorListInner = styled.div`
  margin-bottom: 40px;
`;

const HiddenAuthorsWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const IconWrapper = styled.div`
  align-items: center;
  background: ${color.border};
  border-radius: 50%;
  color: ${color.dark};
  display: flex;
  height: 28px;
  justify-content: center;
  width: 28px;

  svg {
    height: 14px;
    width: 14px;
  }
`;

const HiddenAuthors = styled.div`
  ${authorStyles}
`;

export interface AuthorListProps {
  authors: {
    id: string;
    name: string;
    avatarUrl?: string;
  }[];
}

export const AuthorList = ({ authors }: AuthorListProps) => {
  const authorsSubset = useMemo(() => authors.slice(0, 5), [authors]);
  const hiddenAuthorsCount = useMemo(() => authors.length - 5, [authors]);

  return (
    <AuthorListInner>
      {authorsSubset.map((author) => (
        <Author
          key={author.id}
          href={`https://www.npmjs.com/~${author.name}`}
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <Avatar size="medium" username={author.name} src={author.avatarUrl} />
          <AuthorName>{author.name}</AuthorName>
        </Author>
      ))}
      {hiddenAuthorsCount > 0 && (
        <HiddenAuthorsWrapper>
          <IconWrapper>
            <Icon icon={hiddenAuthorsCount > 1 ? 'users' : 'useralt'} />
          </IconWrapper>
          <HiddenAuthors>{`+${hiddenAuthorsCount} more`}</HiddenAuthors>
        </HiddenAuthorsWrapper>
      )}
    </AuthorListInner>
  );
};
