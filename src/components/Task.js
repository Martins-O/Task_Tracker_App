import Tasks from "./Tasks"

const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Tasks key={index} task={task} 
        onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Task 