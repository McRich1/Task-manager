function Task({task, onToggle, onDelete}){
    return(<div style={{textDecoration: task.completed ? 'line-through' : 'none',
      padding: '8px',
      margin: '4px 0',
      background: task.completed ? '#d4edda' : '#f8f9fa',
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'}} ><span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
        {task.text}</span>
         <button 
        onClick={() => onDelete(task.id)}
        style={{ background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px' }}
      >
        Delete
      </button>
      </div>);

};

export default Task;