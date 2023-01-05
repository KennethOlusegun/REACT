import React from 'react';
import Logo from './assets/imgs/logo.png'

import { Button, Container, List } from './styles'


function App() {

  const [coment, setComents] = React.useState()
  const [allComents, setAllComents] = React.useState([])

  function cliqueiNoBotao() {
    const allOldComents = [...allComents, coment];

    setAllComents(allOldComents);
  }

  function handleTextArea(e) {
    setComents(e.target.value)
  }

  return (
    <Container>
      <img src={Logo} alt='imagem' />
      <textarea onChange={handleTextArea}></textarea>
      <Button isOn={coment} onClick={cliqueiNoBotao}>Comentar</Button>

      <List>
        {allComents.map(coment => (
          <li key={coment}>{coment}</li>
        ))}
      </List>
    </Container>
  );
}

export default App;