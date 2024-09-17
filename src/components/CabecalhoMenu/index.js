import './styles.css'

export const CabecalhoMenu = () => {
  return (
    <aside className="menu">
      <div className="main-content menu-content white-bg">
        <h1>
          <a href="#">LOGO</a>
        </h1>
        <nav>
          <ul>
            <li> <a href='#'>Acesso</a></li>
            <li> <a href='#'>Sobre</a></li>
            <li> <a href='#'>Quem somos</a></li>
            <li> <a href='#'>Trabalho</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}