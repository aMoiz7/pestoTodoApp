import React, { useEffect, useState } from 'react';
import { allTodos } from '../apis/todoApi';
import TodoCard from './../components/todoCard';
import Profile from '../components/profile';
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await allTodos();
        console.log('Fetched data:', data);

        // Ensure data is an array
        if (data.data && Array.isArray(data.data)) {
            setTodos(data.data); // Directly set todos to the array of data
          } else {
            console.error('Unexpected data format:', data);
          }
        
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or failure
      }
    };
    fetchData();
  }, []);

  console.log(todos)
  return (
    
    <div>
         <Profile/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        todos.length > 0 ? (
          todos.map((todo) => {
            console.log('Rendering TodoCard for:', todo); // Log todo being rendered
            return (
               
              <TodoCard
              key={todo._id}
              id={todo._id} 
                title={todo.title}
                description={todo.description}
                status={todo.status}
              />
            );
          })
        ) : (
          <h1>No todos found.</h1>
        )
      )}
    </div>
  );
};

export default Todo;
