import React, { useEffect, useState } from 'react';
import { allTodos, deleteTodo, updateTodoStatus } from '../apis/todoApi';
import TodoCard from './../components/todoCard';
import Profile from '../components/profile';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const updatedTodo = await updateTodoStatus(id, newStatus);
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo._id === id ? { ...todo, status: updatedTodo.data.status } : todo
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await allTodos();
      if (data.data && Array.isArray(data.data)) {
        setTodos(data.data);
      } else {
        console.error('Unexpected data format:', data);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const onAddnewTodo =(newtodo:[])=>{
      setTodos((prev)=>[...prev , newtodo])
  }

  return (
    <div>
      <Profile fetchData={fetchData} onAddnewTodo={onAddnewTodo} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        todos.length > 0 ? (
          todos.map(todo => (
            <TodoCard
              key={todo._id}
              id={todo._id}
              title={todo.title}
              description={todo.description}
              status={todo.status}
              handleUpdateStatus={handleUpdateStatus}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))
        ) : (
          <h1>No todos found.</h1>
        )
      )}
    </div>
  );
};

export default Todo;
