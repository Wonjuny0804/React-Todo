import React from 'react';
import Button from 'components/Button/Button';
import Heading from 'components/Heading/Heading';
import {
  addTodoButton,
  plusIcon,
} from 'components/AddTodoButton/AddTodoButton.module.scss';
import ModalDialog from 'containers/ModalDialog/ModalDialog';
import { Dialog } from 'containers';

export default function AddTodoButton() {
  const [isDialogShow, setIsDialogShow] = React.useState(false);
  // const [dialogLabel, setDialogLabel] = React.useStateCallback('');

  const showDialog = () => {
    setIsDialogShow(true);
  };
  const hideDialog = () => {
    setIsDialogShow(false);
  };
  const addTodoDialog = () => {
    showDialog();
    // setDialogLabel('Add Todo');
  };

  return (
    <>
      <button className={addTodoButton} onClick={addTodoDialog}>
        <Heading level={3} children="Add a task" />
        <Button type="button" shape="plus" className={plusIcon} />
      </button>
      <ModalDialog visible={isDialogShow} />
    </>
  );
}
