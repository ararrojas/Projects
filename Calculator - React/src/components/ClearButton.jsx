import '../styles/ClearButton.css'

const ClearButton = ({ children, handleClear }) => (
    <div 
        className="clear-btn"
        onClick={() => handleClear()}
    >
        { children }
    </div>
) 

export default ClearButton