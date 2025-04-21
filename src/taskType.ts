interface Task {
    id: number;
    name: string;
}

type TaskType = {
  data: Task[];
  change: string;
  setChange: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<Task[]>>;
};
export default TaskType;