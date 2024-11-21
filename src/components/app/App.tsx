import s from './app.module.scss';
import { AppHeader } from '../app-header';
import { AppFooter } from '../app-footer';

const App = () => {
  return (
    <>
      <div className={s.app}>
        <AppHeader />
        <AppFooter />
      </div>
    </>
  );
};

export default App;
