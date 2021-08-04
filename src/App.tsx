import styled from 'styled-components'
import { WelcomeScreen } from '../src/components/WelcomeScreen'
import { GlobalStyle } from "./styles/global"

export function App() {
  return (
    <>
      <WelcomeScreen />
        <GlobalStyle/>
    </>
  );
}

