import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SingnIn() {
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input
                placeholder="Senha"
                type="Password"
                icon={FiLock}
                />

                
<Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />

                <Button title="Entrar" />

                <Link to = "/register">
                    Criar Conta
                </Link>
            </Form>
            <Background/>
        </Container>
    );
}
