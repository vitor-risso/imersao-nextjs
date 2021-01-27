import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infoDosEventos) => {
              infoDosEventos.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input placeholder="Insira nome de usuário" onChange={(event) => setName(event.target.value)} />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {' '}
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>The legend of zelda </h1>
            <p>Lorem ipsum dolor sit amet</p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/vitor-risso/imersao-nextjs" />
      </QuizContainer>
    </QuizBackground>
  );
}
