
import './styles.css'


export const TextInput = ({ value, onChange }) => {
  return (
    <div className='input-content'>
      <input className='input'
        value={value}
        onChange={onChange}
        type='search'
        placeholder="Digite uma turma"
      />
    </div>
  )
}