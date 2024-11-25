import s from './app.module.scss';
import { AppHeader } from '../app-header';
import { AppFooter } from '../app-footer';
import { useLocation, Routes, Route } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import { CatalogPage } from '@pages/catalog-page';
import { ProgramPage } from '@pages/program-page';
import { Modal } from '../modal';

const App = () => {
  const location = useLocation();
  const background = location.state?.background;

  const modalClose = () => {
    history.back();
  };
  return (
    <>
      <div className={s.app}>
        <AppHeader />
        <Routes location={background || location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog">
            <Route index element={<CatalogPage />} />
            <Route path=":id" />
          </Route>
          <Route path="/program" element={<ProgramPage />} />
        </Routes>
        {background && (
          <Routes>
            <Route
              path="/catalog/:id"
              element={
                <Modal onClose={modalClose} title="Детали товара"></Modal>
              }
            />
          </Routes>
        )}
        <AppFooter />
      </div>
    </>
  );
};

export default App;
