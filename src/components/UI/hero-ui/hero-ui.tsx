import { FC } from 'react';
import s from './hero.module.scss';
import { Button } from '@ui/shared/button';
import { Link } from 'react-router-dom';
import hero from '@assets/hero.png';
import heroBgD from '@assets/hero-bg-desktop.png';
import heroBgM from '@assets/hero-bg-mobile.png';

export const HeroUI: FC = () => {
  return (
    <>
      <div className={s.hero}>
        <div className={s.heroBlock}>
          <div className={s.content}>
            <h1 className={s.heading}>Функциональное питание для котов</h1>
            <p className={s.subheading}>Занялся собой? Займись котом!</p>
          </div>
          <Link to={'/program'} className={s.link}>
            <Button
              className={s.heroButton}
              onClick={() => console.log('click button')}
            >
              подобрать программу
            </Button>
          </Link>
        </div>
        <img className={s.heroImg} src={hero} alt="Изображение коробки корма" />
        <img
          className={s.heroBgD}
          src={heroBgD}
          alt="Изображение кота за зеленым фоном"
        />
        <img
          className={s.heroBgM}
          src={heroBgM}
          alt="Изображение кота за зеленым фоном"
        />
      </div>
    </>
  );
};
