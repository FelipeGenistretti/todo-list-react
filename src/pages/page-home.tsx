import { Container } from "../components/Container/Container";
import { TaskItem } from "../core-components/TaskItem/Task-item";
import { TaskList } from "../core-components/TaskList/Task-list";
import { TasksSummary } from "../core-components/TasksSummary/Tasks-summary";

export function PageHome(){
    return <Container as="article" className="space-y-3">
        <header className="flex items-center justify-between">
            <TasksSummary/>
        </header>
        <section>
                <TaskList/>        
        </section>
    </Container>
}