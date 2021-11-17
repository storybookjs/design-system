import React, { useMemo } from 'react';
import { styled } from '@storybook/theming';
import { typography, color, spacing } from './shared/styles';
import { Avatar } from './Avatar';
import { Link } from './Link';

const AuthorName = styled.div`
  color: ${color.darkest};
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m1}px;
  margin-left: ${spacing.padding.small}px;
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

const MoreAuthors = styled.div`
  color: ${color.darkest};
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m1}px;
  margin-left: ${spacing.padding.small}px;
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
  const more = useMemo(() => authors.length - 5, [authors]);

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
      {more > 0 && <MoreAuthors>{`+ ${more} more`}</MoreAuthors>}
    </AuthorListInner>
  );
};
