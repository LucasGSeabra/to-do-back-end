import Todo from './todo.js'


Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true})

export default Todo