import './styles.css';



export const Button = ({ onClick }) => {
  return (
    <div className='button-container'>
      <button
        className="button"
        onClick={onClick}>
        Alocar salas
      </button>
    </div >
  )
}