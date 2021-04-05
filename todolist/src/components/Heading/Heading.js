import React from 'react';
// import {} from './Heading.module.scss';

export default function Heading({
  level,
  children,
  lang,
  className,
  ...restProps
}) {
  return React.createElement(`h${level}`, {
    children,
    lang,
    className,
    ...restProps,
  });
}
