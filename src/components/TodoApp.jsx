import Form from './Form';
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
      <Form />
      <TodosLogic />
    </>
  );
};
export default TodoApp;
