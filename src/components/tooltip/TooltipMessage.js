import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, typography } from '../shared/styles';
import { Link } from '../Link';

const Title = styled.div`
  font-weight: ${typography.weight.black};
`;

const Desc = styled.span``;

const Links = styled.div`
  margin-top: 8px;
  text-align: center;

  > * {
    margin: 0 8px;
    font-weight: ${typography.weight.black};
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

export function TooltipMessage({ title, desc, links, ...rest }) {
  return (
    <MessageWrapper {...rest}>
      <Message>
        {title && <Title>{title}</Title>}
        {desc && <Desc>{desc}</Desc>}
      </Message>
      {links && (
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

TooltipMessage.propTypes = {
  title: PropTypes.node,
  desc: PropTypes.node,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};

TooltipMessage.defaultProps = {
  title: null,
  desc: null,
  links: null,
};
