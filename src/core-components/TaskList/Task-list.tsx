import { Button } from "../../components/Button/Button";
import { TaskItem } from "../TaskItem/Task-item";

export function TaskList(){
    return(
        <>
            <section>
                <Button className="w-full">Nova tarefa</Button>
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