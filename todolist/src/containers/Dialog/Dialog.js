import { useRef, useState } from 'react';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import {
  dialog,
  closeBtn,
  selectBox,
  textarea,
  addBtn,
} from './Dialog.module.scss';

const Dialog = ({ headline, buttonText }) => {
  const textareaRef = useRef(null);
  const [inputText, setInputText] = useState('');

  const handleTextarea = (e) => {
    setInputText(textareaRef.current.value);
  };
  const handleCloseButton = () => {};
  const handleAddandEditButton = () => {
    console.log(textareaRef.current.value);
  };

  return (
    <form className={dialog}>
      <h2
        style={{
          color: '#FFA1B2',
          fontSize: 14,
          marginTop: 0,
          marginBottom: 5,
        }}
      >
        {headline}
      </h2>
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
        value={inputText}
      ></textarea>
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
