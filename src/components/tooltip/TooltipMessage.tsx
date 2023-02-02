import React, { ComponentProps, ReactNode } from 'react';
import { styled } from '@storybook/theming';

import { color, typography } from '../shared/styles';
import { Link } from '../Link';

const Title = styled.div`
  font-weight: ${typography.weight.bold};
`;

const Desc = styled.span``;

const Links = styled.div`
  margin-top: 8px;
  text-align: center;

  > * {
    margin: 0 8px;
    font-weight: ${typography.weight.bold};
  }
`;

const Message = styled.div`
  color: ${color.darker};
  line-height: 18px;
`;

const MessageWrapper = styled.div`
  padding: 15px;
  width: 280px;
  box-sizing: border-box;
`;

export function TooltipMessage({
  title,
  desc,
  links,
  ...rest
}: Props & ComponentProps<typeof MessageWrapper> & { children?: never }) {
  return (
    <MessageWrapper {...rest}>
      <Message>
        {title && <Title>{title}</Title>}
        {desc && <Desc>{desc}</Desc>}
      </Message>
      {links && links.length > 0 && (
        <Links>
          {links.map(({ title: linkTitle, ...other }) => (
            <Link {...other} key={linkTitle}>
              {linkTitle}
            </Link>
          ))}
        </Links>
      )}
    </MessageWrapper>
  );
}

interface Props {
  title?: ReactNode;
  desc?: ReactNode;
  links?: Omit<ComponentProps<typeof Link>, 'children'>[];
}
