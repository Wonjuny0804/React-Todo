import { useRef, useState } from 'react';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import {
  dialog,
  closeBtn,
  selectBox,
  textarea,
  addBtn,
  dialogHeading,
} from './Dialog.module.scss';
import Heading from 'components/Heading/Heading';

const Dialog = ({ headline, buttonText, setIsDialogShow }) => {
  const textareaRef = useRef(null);
  const [inputText, setInputText] = useState('');

  const handleTextarea = (e) => {
    setInputText(textareaRef.current.value);
  };
  const handleCloseButton = () => {
    setIsDialogShow(false);
  };
  const handleAddandEditButton = () => {
    console.log(textareaRef.current.value);
  };

  return (
    <form className={dialog}>
      <Heading level={2} children={headline} className={dialogHeading} />
      <Button
        title="close icon"
        shape="close"
        className={closeBtn}
        onClick={handleCloseButton}
      />
      <SelectBox className={selectBox} />
      <textarea
        ref={textareaRef}
        name="textarea"
        rows="3"
        className={textarea}
        placeholder="Write your task..."
        onChange={handleTextarea}
        value={inputText}></textarea>
      <Button
        type="submit"
        content={buttonText}
        className={addBtn}
        onClick={handleAddandEditButton}
      />
    </form>
  );
};

export default Dialog;
