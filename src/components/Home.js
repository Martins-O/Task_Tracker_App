import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Header from "./Header";
import Task from "./Task";
import Footer from "./Footer";

const Home = () => {
    const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:9000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:9000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const uodateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:9000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uodateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:9000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:9000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) +1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  };
  
  return (
   <div className="container">
      <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          "No tasks to show"
        )}
        {/* <About /> */}
        <Footer />
      </div>
  )
}

export default Home



