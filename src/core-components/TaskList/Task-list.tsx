import { Button } from "../../components/Button/Button";
import { useTask } from "../../hooks/use-task";
import useTasks from "../../hooks/use-tasks";
import { TaskItem } from "../TaskItem/Task-item";

export function TaskList(){
    const {tasks} = useTasks();
    const { prepareTask } = useTask()

    function handleNewTask() {
        prepareTask()
    }

    return(
        <>
            <section>
                <Button onClick={handleNewTask} className="w-full">Nova tarefa</Button>
            </section>
                <section className="space-y-2 mt-2">
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                </section>
        </>
        
    )
}