import Header from './Header';
import Modal from './Modal';
import Navbar from './Navbar';
import TodosLogic from './TodosLogic';

const TodoApp = () => {
  return (
    <>
      <Navbar />
      <Modal />
      <Header />
      <TodosLogic />
    </>
  );
};
export default TodoApp;
