import PropTypes from 'prop-types';
import { ReactComponent as EditIcon } from './images/edit.svg';
import { ReactComponent as DeleteIcon } from './images/delete.svg';
import { ReactComponent as PlusIcon } from './images/plus.svg';
import { ReactComponent as CloseIcon } from './images/close.svg';
import { ReactComponent as ArrowUpIcon } from './images/arrowUp.svg';
import { ReactComponent as ArrowDownIcon } from './images/arrowDown.svg';
import {
  editIcon,
  deleteIcon,
  plusIcon,
  closeIcon,
  arrowUpIcon,
  arrowDownIcon,
} from './Icon.module.scss';

const Icon = ({ title, shape, completed, ...restProps }) => {
  switch (shape) {
    case 'edit':
      return (
        <EditIcon
          title={title}
          shape={shape}
          className={editIcon}
          completed={completed && false}
          {...restProps}
        />
      );
    case 'delete':
      return (
        <DeleteIcon
          title={title}
          shape={shape}
          className={deleteIcon}
          completed={completed && false}
          {...restProps}
        />
      );
    case 'plus':
      return (
        <PlusIcon
          title={title}
          shape={shape}
          className={plusIcon}
          {...restProps}
        />
      );
    case 'close':
      return (
        <CloseIcon
          title={title}
          shape={shape}
          className={closeIcon}
          {...restProps}
        />
      );
    case 'arrowUp':
      return (
        <ArrowUpIcon
          title={title}
          shape={shape}
          className={arrowUpIcon}
          {...restProps}
        />
      );
    case 'arrowDown':
      return (
        <ArrowDownIcon
          title={title}
          shape={shape}
          className={arrowDownIcon}
          {...restProps}
        />
      );
    default:
      return null;
  }
};

Icon.propTypes = {
  title: PropTypes.string,
  shape: PropTypes.oneOf([
    'edit',
    'delete',
    'plus',
    'close',
    'arrowUp',
    'arrowDown',
  ]).isRequired,
};

export default Icon;
