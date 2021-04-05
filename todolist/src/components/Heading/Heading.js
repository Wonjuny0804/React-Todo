import React from 'react';

export default function Heading({
  level,
  children,
  lang = 'en',
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
