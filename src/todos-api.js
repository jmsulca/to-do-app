export const fetchTodos = async () => {
  const response = await fetch('http://localhost:3000/todos', {method: 'GET'});
  return await response.json()
}

export const postTodo = async (payload) => {
  console.log(payload);
  const response = await fetch(`http://localhost:3000/todos/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  return await response.json()
}

export const updateTodo = async (id, payload) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  return await response.json()
}

export const deleteTodo = async (id) => {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {method: 'DELETE'});
  return await response.json()
}
