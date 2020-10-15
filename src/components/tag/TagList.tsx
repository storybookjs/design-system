import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import { typography } from '../shared/styles';
// @ts-ignore
import { Link } from '../Link';
import { TagItem } from './TagItem';

const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  margin-bottom: -10px;
`;

const MoreTagsButton = styled(Link)`
  font-size: ${typography.size.s2}px;
  padding-left: 5px;
  padding-right: 5px;

  &:focus {
    outline: auto;
  }
`;

type TagListTypes = {
  tags: typeof TagItem[];
  limit: number;
};

export const TagList = forwardRef<HTMLDivElement, TagListTypes>(
  ({ tags, limit, ...props }: TagListTypes, ref) => {
    const primaryTags = tags.slice(0, limit);
    const moreTags = tags.slice(limit);
    const [moreTagsVisible, setMoreTagsVisible] = useState(false);

    return (
      <TagListWrapper {...props} ref={ref}>
        {primaryTags}
        {moreTagsVisible && moreTags}
        {moreTags.length > 0 && !moreTagsVisible && (
          <MoreTagsButton isButton appearance="primary" onClick={() => setMoreTagsVisible(true)}>
            {`+ ${moreTags.length} more`}
          </MoreTagsButton>
        )}
      </TagListWrapper>
    );
  }
);

TagList.defaultProps = {
  limit: 4,
};
