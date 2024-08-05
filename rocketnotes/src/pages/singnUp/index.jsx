import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SingnUp() {
    return(
        <Container>
            <Form>
            <Background/>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                
                <Input
                placeholder="Senha"
                type="Password"
                icon={FiUser}
                />

                <Input
                placeholder="Nome"
                type="text"
                icon={FiLock}
                />

                
               <Input
                placeholder="Senha"
                type="Password"
                icon={FiMail}
                /> 

                <Button title="Cadastrar" />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    );
}
