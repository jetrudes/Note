import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


import { Container, Form, Avatar } from './style';

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https:github.com/jetrudes.png" 
                    alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar"
                        type="file" 
                        />

                    </label>
                </Avatar>
                <Input
                placeholder="nome"
                type="text"
                icon={FiUser}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />

                <Input
                placeholder="senha atual"
                type="password"
                icon={FiLock}
                /> 

                <Input
                placeholder="nova senha"
                type="password"
                icon={FiLock}
                />

                <Button title="Salvar" />

            </Form>
        </Container>
    );
}