import classNames from 'classnames';
import { box, nonActive } from './Box.module.scss';

const Box = ({ active, className, children }) => {
  const boxClasses = classNames(className, box, active || nonActive);

  return <div className={boxClasses}>{children}</div>;
};

export default Box;
