import './styles.css'

export const CabecalhoRequests = () => {
  return (
    <aside className="menu">
      <div className="main-content menu-content white-bg">
        <h1>
          <a href="#">LOGO</a>
        </h1>
        <nav>
          <ul>
            <li> <a href='#'>Conta</a></li>
            <li> <a href='#'>Perfil</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}