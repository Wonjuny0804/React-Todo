import Heading from 'components/Heading/Heading';
import { TodoListHead, ThisWeekHead } from './Header.module.scss';

export default function Header({
  level,
  children,
  lang,
  className,
  ...restProps
}) {
  return (
    <>
      <Heading
        level={1}
        className={TodoListHead}
        lang={lang}
        children="To Do List"
        {...restProps}
      />
      <Heading
        level={2}
        className={ThisWeekHead}
        lang={lang}
        children="This week"
        {...restProps}
      />
    </>
  );
}
