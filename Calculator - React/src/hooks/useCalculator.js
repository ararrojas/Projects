import { useState } from "react"
import { evaluate } from 'mathjs'


function useCalculator () {

    const [input, setInput] = useState('')

    function handleClear () {
        setInput('')
    }

    function addInput (val){
        setInput(input + val)
    }

    function result(){
        if(input){
        setInput(evaluate(input))
        } else {
          alert('Por favor ingrese valores para realizar los calculos')
        }
    } 

    return input, handleClear, addInput, result
}

export default useCalculator