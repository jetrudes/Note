import { Link } from 'react-router-dom';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';



import { Container } from './styles';

export function New(){
    return(
      <Container>
      <Header />
      <main>
        <Form>
            <header>
                <h1>Criar nota</h1>
                <Link to="/">voltar</Link>
            </header>

            <Input placeholder="Titulo"/>
            <Textarea placeholder="Observações"/>

            <Section title="Links úteis">
              <NoteItem value="https://rocketseat.com.br"/>
              <NoteItem isNew placeholder="Novo Link"/>
              </Section>

              <Section title="Marcadores">
                <div classNames="tags">
                  <NoteItem value="react"/>
                  <NoteItem isNew placeholder="Nova tag"/>
                </div>
              </Section>

              <Button title="Salvar"/>
            
        </Form>
      </main>
      </Container>
    );
}