
function ToDo( {todo, toggleTask, removeTask} ) {
	return (
		<div key={todo.id} className='item-todo'>
			<div className={todo.complete ? 'item-text strike' : 'item-text'}
			onClick={() => toggleTask(todo.id)}>
				{todo.task}
			</div>
			<div className='item-delete' onClick={() => removeTask(todo.id)}>
				
				<img src='https://img.icons8.com/?size=100&id=104401&format=png&color=000000' className='img-delete'/>
			</div>
		</div>
	)
}

export default ToDo