import React from 'react';
import Button from 'components/Button/Button';
import Heading from 'components/Heading/Heading';
import {
  addTodoButton,
  plusIcon,
} from 'components/AddTodoButton/AddTodoButton.module.scss';

export default function AddTodoButton() {
  return (
    <>
      <button className={addTodoButton}>
        <Heading level={3} children="Add a task" />
        <Button type="button" shape="plus" className={plusIcon} />
      </button>
    </>
  );
}
