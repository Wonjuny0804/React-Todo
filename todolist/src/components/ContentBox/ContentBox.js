import { contentBox } from './ContentBox.module.scss';
import classNames from 'classnames';
import { string, object } from 'prop-types';

const ContentBox = ({ content, className }) => {
  const contentBoxClasses = classNames(className, contentBox);

  return <p className={contentBoxClasses}>{content}</p>;
};
export default ContentBox;

ContentBox.propTypes = {
  content: string,
  className: object
};