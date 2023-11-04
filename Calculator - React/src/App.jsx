import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import './App.css'
import useCalculator from './hooks/useCalculator'

function App() {

  const [input, handleClear, addInput, result] = useCalculator()

  return (
    <div className='App'>
      <div className="container">
        <Input 
          input={input}
        />
        <div className='row'>
          <Button handleClick= {addInput}>1</Button>
          <Button handleClick= {addInput}>2</Button>
          <Button handleClick= {addInput}>3</Button>
          <Button handleClick= {addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick= {addInput}>4</Button>
          <Button handleClick= {addInput}>5</Button>
          <Button handleClick= {addInput}>6</Button>
          <Button handleClick= {addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick= {addInput}>7</Button>
          <Button handleClick= {addInput}>8</Button>
          <Button handleClick= {addInput}>9</Button>
          <Button handleClick= {addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick= {result}>=</Button>
          <Button handleClick= {addInput}>0</Button>
          <Button handleClick= {addInput}>.</Button>
          <Button handleClick= {addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton
            handleClear={handleClear}
          >
          Clear
          </ClearButton>
        </div>
      </div>
    </div>
  )
}

export default App
