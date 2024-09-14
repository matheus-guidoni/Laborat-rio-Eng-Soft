import './styles.css';


export const Button = ({ text, onClick, disabled }) => {
  return (
    <div className='button-container'>
      <button
        disabled={disabled}
        className="button"
        onClick={onClick}>
        {text}
      </button>
    </div>
  )
}