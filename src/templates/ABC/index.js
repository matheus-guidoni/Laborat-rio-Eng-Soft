
import './styles.css';
import { CabecalhoMenu } from '../../components/CabecalhoMenu'
import { Button } from '../../components/ButtonMenuAlocate';
import { useHistory } from 'react-router-dom';




export const ABC = () => {

  const history = useHistory();

  const handleAlocateLink = () => {
    console.log("Aqui ja era");
    history.push("/Home");
  }

  return (
    <body className="main-bg">
      <CabecalhoMenu />
      <div className="menu-spacing"></div>
      <section className="intro section main-bg">
        <div className="main-content intro-content">
          <div className="intro-text-content">
            <h2>Hello</h2>
            <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae magnam provident eius cum excepturi iure fugit quibusdam quidem ducimus at impedit, eum vel exercitationem delectus reprehenderit assumenda in placeat eos?</span>
          </div>
          <div className="buttons-class">
            <Button
              onClick={handleAlocateLink} />
          </div>
        </div>
      </section>

      <section className="section white-bg">

      </section>
    </body >
  )
}