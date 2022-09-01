import React from 'react';
import PropTypes from 'prop-types';
import { openCrisp } from '../crisp/Crisp';

const Field = ({ field, value, linkType, isLink }) => {
  const BaseLink = (props) => {
    const noop = () => {};
    const {
      link = '',
      target = '',
      callBack = noop,
      text = 'Visit link',
    } = props;
    const rel = 'noopener noreferrer';
    return (
      <div className="field-link">
        <a
          name={text}
          href={link}
          className="field-answer"
          target={target}
          rel={rel}
          onClick={callBack}
        >
          {text}
        </a>
      </div>
    );
  };

  const emailClick = (e) => {
    e.preventDefault();
    openCrisp();
  };

  const href = <BaseLink link={value} target="_blank" />;
  const click = <BaseLink link={value} target="_blank" text="Click me" />;
  const email = <BaseLink callBack={emailClick} text="Instant chat" />;

  const LINK_TYPE = { href: href, click: click, email: email };
  const generateLink = (linkType) => LINK_TYPE[linkType];

  return (
    <div className="field-container">
      <div className="field-question">{field}</div>

      {isLink ? (
        <span>{generateLink(linkType)}</span>
      ) : (
        <div className="field-answer">{value}</div>
      )}
    </div>
  );
};

export default Field;

Field.propTypes = {
  field: PropTypes.string,
  value: PropTypes.string,
  linkType: PropTypes.string,
  isLink: PropTypes.bool,
};
