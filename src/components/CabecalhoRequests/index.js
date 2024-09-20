import './styles.css'
import { Avatar } from '@mui/material';

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
            <li class="Avatar"><Avatar /></li>
            <li> <a href='#'>Perfil</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}