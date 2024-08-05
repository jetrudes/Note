import { Container, LinKs, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Button } from '../../components/Button';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { ButtonText } from "../../components/buttonText";


export function Details() {
    
    return (
      <Container>
      <Header />

      <main>
        <Content>

         <ButtonText title="Excluir nota"/>

         <h1>
           Introdução ao React
         </h1>

         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Sapiente deleniti nihil cumque, sint sequi est unde voluptate! 
           Harum expedita sunt architecto praesentium, 
           officiis ullam perferendis aperiam quibusdam doloribus blanditiis rem.
         </p>
    
         <Section title="Links úteis">
         <LinKs>
           <li><a href="https://www.rocketseat.com.br/"></a></li>
           <li><a href="https://www.rocketseat.com.br/"></a> </li>
         </LinKs>
         </Section>

         <Section title="Marcadores">
           <Tag title="express"/>
           <Tag title="nodejs"/>
         </Section>

         <Button title="Voltar" />
      </Content>
      </main>
      </Container>
    )
};