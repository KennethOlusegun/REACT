import { createContext } from "react"
// 4-importação de componentes
import FirstComponent from "./Components/FIrstComponent"

// 5- desestructuring props
import SecondComponent from "./Components/SecondComponent"
import Destructuring, { Category } from "./Components/Destructuring"

// 6-useState
import State from "./Components/State"

// 10-utilizando contexto
import Context from "./Components/Context"

// 8-type
type textOrNull = string | null

//9-context
interface IAppContext {
  language:string,
  framework:string,
  projects:number
}

export const AppContext = createContext<IAppContext | null>(null)

export default function App() {


  // 1-variáveis
  const name: string = 'Kenneth'
  const age: number = 24
  const isWorking: boolean = true

  // 2-funçoes
  const userGreeting = (name: string): string => {
    return `Hello, ${name}`
  }

  // 8-type
  const myText: textOrNull = 'There is some text here'

  // 9-context
  const contextValue:IAppContext = {
    language:'JavaScript',
    framework:'Express',
    projects:5,
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Name:{name}
        <p>Age:{age}</p>
        {isWorking && (
          <>
            <p>Is working</p>
          </>
        )}
      </h2>
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name='Second' />
      <Destructuring
        title="First post"
        content="Very good post, about TS"
        commentsQty={50}
        tags={['Javascript', 'Typescript']}
        category={Category.TS}
      />
      <State />
      {myText &&
        <p>Has text in variable</p>
      }
      <Context/>
    </div>
    </AppContext.Provider>
  );
}