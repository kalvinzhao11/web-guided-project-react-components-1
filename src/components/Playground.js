/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, {useState} from 'react'


export default function Playground(props) {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 10))

  const [isRaining, setIsRaining] = useState(false)

  const getRandom = (event) => {
    setRandomNum(Math.floor(Math.random() * 10))
  }

  const changeraining = (event) => {
    setIsRaining(isRaining ? false: true)
  }

  const style = {
    marginButtom: '4px',
    color: randomNum < 5 ? 'red' : 'green'
  }

  if (randomNum === 1) return <h1>IT IS A ONE </h1>

  return (
    <div className="container">
      <h1>This is the Playground of {props.friend}</h1>
      <h3 style={style}>The random number is {randomNum}</h3>
      <h4>The random number is {randomNum % 2 === 0 ? 'even' : 'odd'}</h4>
      {
        isRaining
          ? <h4>better get an unbrella</h4>
          : <h4>better get sunscreen</h4>
      }

      <button onClick={ evt => changeraining()}>make rain</button>
      <button onClick={() => changeraining()}>make shine</button>

      {/* {
        randomNum < 5 && <h4> It is samller than 5</h4>  // if expression on left is truly, expression on the right will be expression of the whole line
      }
      {
        randomNum >= 5 && <h4> It is bigger than 5</h4>
      } */}

      {
        randomNum < 5
          ? <h4>smaller than 5</h4>
          : <h4>greater than or equals to 5</h4>
      }
      <button onClick={ getRandom }>get a random number</button>
    </div>
  )
}