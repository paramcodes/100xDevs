import './App.css'
import {CardWrapper} from "./components/CardWrapper.jsx";
import {TextComponent} from "./components/TextComponent.jsx";

function App() {

  return (
    <>
      {/*<CardWrapper innerComponent={<TextComponent/>}/>*/}
      {/*<CardWrapper innerComponent={<LoveComponent/>}/>*/}
      <CardWrapper>
        <LoveComponent/>
      </CardWrapper>
      <CardWrapper>
        Hii There
      </CardWrapper>
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
    </>
  )
}

function LoveComponent(){
  return(
      <h1>
        I Love You
      </h1>
  )
}

export default App
