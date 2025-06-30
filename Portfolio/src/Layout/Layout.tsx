import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import './Layout.scss';

export const Layout = () => {
    return<>
      <header>
       <Header />
    </header>
    <main>
       <Main />
    </main>
    <footer></footer>
    </>
}
