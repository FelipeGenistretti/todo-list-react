import { Badge } from "../components/Badge/Badge";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { Container } from "../components/Container/Container";
import { InputCheckbox } from "../components/InputCheckbox/InputCheckbox";
import { InputText } from "../components/InputText/InputText";
import { Skeleton } from "../components/Skeleton/Skeleton";

export function PageComponents(){
    return (
    <Container>

      <div className='container-custom'>

          <Button>Nova Tarefa</Button>
          
          <InputText isDisabled={true} />
          <InputText />

          <div className='gap-3'>
            <InputCheckbox/>
            <InputCheckbox loading/>
          </div>


          <Card size={"md"}>Teste teste</Card>

            <div className='space-y-5'>
              <Skeleton className='h-6'/>
            <Skeleton className='h-6'/>
            <Skeleton className='w-96 h-6'/>
            </div>

            <div className='space-x-2'>
              <Badge variant="secondary">5</Badge>
              <Badge variant="primary">2 de 5</Badge>
              <Badge loading>5</Badge>
            </div>
          
          
      </div>
    </Container>
  )
}