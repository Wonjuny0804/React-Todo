import Portal from 'components/Portal/Portal';
import { Dialog } from 'containers';
import { AnimatePresence } from 'framer-motion';
// import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';

export default function ModalDialog({
  hasModal = true,
  visible = false,
  className = '',
  onOpen = null,
  onClose = null,
  onDimClickClose = null,
  portalId = 'dialog-container',
  children,
  ...restProps
}) {
  const dialogRef = React.useRef(null);
  const [modalMode] = React.useState(hasModal);

  useEffect(() => {
    if (visible) {
      const reactRootNode = document.getElementById('root');
      reactRootNode.setAttribute('aria-hidden', true);
    }
    // return () => {};
  }, [visible]);

  const dialog = {
    hidden: {
      opacity: 0,
      x: '-50%',
      y: '-150%',
    },
    visible: {
      opacity: 1,
      y: '-50%',
    },
  };

  return (
    <>
      <Portal id={portalId} />
      <AnimatePresence>
        {visible && (
          <div
            role="dialog"
            ref={dialogRef}
            aria-modal={modalMode}
            // className={classNames(styles.modal, className)}
            tabIndex={-1}
            key={dialog}
            variants={dialog}
            initial="hidden"
            // animate="visible"
            {...restProps}>
            <Dialog headline="Add a task" buttonText="Add" />
          </div>
        )}
        {/* {modalMode && visible && <Dialog.Modal onClose={handleClose} />} */}
      </AnimatePresence>
    </>
  );
}
