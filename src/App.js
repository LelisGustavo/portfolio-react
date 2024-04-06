import './css/style.css';
import BtnTopo from './components/btn_topo';
import MenuMobile from './components/menu_mobile';
import BannerPage from './components/banner_page';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {

  return (

    <div className="App">
      
      {/* Botão para retornar ao topo da página */}
      <BtnTopo/>

      {/* Conteúdo logo, menu do site e menu mobile */}
      <MenuMobile/>

      {/* Conteúdo */}
        <main className="page">

        {/* Conteúdo banner */}
        <BannerPage/>

        {/* Conteúdo "sobre mim" */}
        <About/>

        {/* Conteúdo projetos/portifolio */}
        <Projects/>

        {/* Conteúdo contato/fale comigo */}
        <Contact/>

        </main>

      {/* Rodapé do site */}
      <Footer/>

    </div>

  );

}

export default App;
