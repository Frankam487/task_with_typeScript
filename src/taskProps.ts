interface Task {
  id: number;
  name: string;
}

type TaskProps = {
  index: number;
  task: Task;
  data: Task[];
  setData: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default TaskProps