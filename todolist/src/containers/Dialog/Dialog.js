import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import {
  dialog,
  closeBtn,
  selectBox,
  textarea,
  addBtn,
} from './Dialog.module.scss';
import { addTodoAction, editTodoAction } from 'redux/storage/Todos/Todos';

const Dialog = ({ headline, buttonText }) => {
  const textareaRef = useRef(null);
  const [dialogName, setDialogName] = useState('');
  const [inputText, setInputText] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);

  useEffect(() => {
    setDialogName(headline);
  }, [headline]);

  const handleTextarea = (e) => {
    setInputText(textareaRef.current.value);
  };
  const handleAddandEditTodo = () => {
    if (headline === 'Add a task') {
      const nextId =
        Math.max(...state[selectedDate].map(({ id }) => id), 0) + 1;

      dispatch(
        addTodoAction(selectedDate, {
          id: nextId,
          content: inputText,
          completed: false,
        })
      );
    }
    console.log(state);
  };
  const handleCloseDialog = () => {};

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
        onClick={handleCloseDialog}
      />
      <SelectBox className={selectBox} setDateState={setSelectedDate} />
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
        type="button"
        content={buttonText}
        className={addBtn}
        onClick={handleAddandEditTodo}
      />
    </form>
  );
};

export default Dialog;
