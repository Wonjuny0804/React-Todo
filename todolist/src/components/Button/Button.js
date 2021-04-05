import Icon from '../Icon/Icon';
import { button } from './Button.module.scss';
import classNames from 'classnames';

const Button = ({
  type = 'button',
  content = null,
  onClick,
  className,
  title = '',
  shape,
  iconClassName,
  ...restProps
}) => {
  const composeClasses = classNames(button, className);

  return (
    <button type={type} onClick={onClick} className={composeClasses}>
      {content}
      {shape && <Icon title={title} shape={shape} className={iconClassName} />}
    </button>
  );
};

export default Button;
