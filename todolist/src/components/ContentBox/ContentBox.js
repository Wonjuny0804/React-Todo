import { contentBox } from './ContentBox.module.scss';
import classNames from 'classnames';

const ContentBox = ({ content, className }) => {
  const contentBoxClasses = classNames(className, contentBox);

  return <p className={contentBoxClasses}>{content}</p>;
};
export default ContentBox;
