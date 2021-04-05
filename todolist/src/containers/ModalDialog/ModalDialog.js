import React from 'react';
import Portal from 'components/Portal/Portal';
import { Dialog } from 'containers';
import './ModalDialog.scss';

const dialogContainer = document.getElementById('dialog-container');
dialogContainer.classList.add('dialogContainer');

export default function ModalDialog({
  portalId = 'dialog-container',
  setIsDialogShow,
}) {
  return (
    <>
      <Portal id={portalId}>
        <div role="dialog">
          <Dialog
            headline="Add a task"
            buttonText="Add"
            setIsDialogShow={setIsDialogShow}
          />
        </div>
      </Portal>
    </>
  );
}
