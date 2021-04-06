import { useState } from 'react';
import Button from '../Button/Button';
import getThisWeek from '../../utils/getThisWeek';
import {
  selectBoxContainer,
  openedSelectBoxContainer,
  selectButton,
  selectBox,
  openedSelectBox,
  selectItem,
} from './SelectBox.module.scss';
import classNames from 'classnames';

const SelectBox = ({ className, setDateState }) => {
  
  const thisWeek = getThisWeek();
  const [isOpened, setIsOpened] = useState(false);
  const [selectDate, setSelectDate] = useState('Date');
  const selectBoxClasses = classNames(selectBox, isOpened && openedSelectBox);

  const selectBoxContainerClasses = classNames(
    className,
    selectBoxContainer,
    isOpened && openedSelectBoxContainer
  );

  const handleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleItemClick = (e) => {
    setDateState(e.target.textContent);
    setSelectDate(e.target.textContent);
    setIsOpened(false);
  };


  return (
    <div className={selectBoxContainerClasses}>
      <Button
        type="button"
        content={selectDate}
        className={selectButton}
        onClick={handleButtonClick}
        title={isOpened ? 'arrow up icon' : 'arrow down icon'}
        shape={isOpened ? 'arrowUp' : 'arrowDown'}
      />
      <ul className={selectBoxClasses}>
        {thisWeek.map((day) => {
          const key = day.split('day')[0];

          return (
            <li key={key} className={selectItem}>
              <button type="button" onClick={handleItemClick}>
                {day}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectBox;
