import { useParams } from 'react-router-dom';
import { CabecalhoRequests } from '../../components/CabecalhoRequests';

export const AlocarPage = () => {
  const { postid } = useParams();
  return (
    <>
      {< CabecalhoRequests />}
      <div style={{ height: '107px' }}></div>
      <h1>Código da Turma: {postid} </h1>
      {/* <section className="white-bg section"></section> */}
      {/* <section className="white-bg section"></section> */}
    </>
  );
}