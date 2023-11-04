import '../styles/Button.css'

function Button ({ children, handleClick }){

    const isOperator = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    }

    return(
        <div
            className={`btn-container ${isOperator(children) ? 'operator' : null}`.trimEnd()}
            onClick={() => handleClick(children)}
        >
            { children }
        </div>
    )
}

export default Button