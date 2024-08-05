import{RiShutDownLine} from 'react-icons/ri';

import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="Profile">
              <img 
                src="https:github.com/jetrudes.png"
                alt="Foto do usuário"
              />

              <div>
                <span>Bem vindo</span>
                <strong>Carlos Araújo</strong>
              </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
} 