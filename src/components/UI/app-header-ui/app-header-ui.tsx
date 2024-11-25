import { FC } from 'react';
import s from './app-header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import LogoD from '@assets/logo-desktop.svg?react';
import LogoT from '@assets/logo-tablet.svg?react';
import LogoM from '@assets/logo-mobile.svg?react';
import LogoMCe from '@assets/logo-mobile-ce.svg?react';
import Burger from '@assets/burger_mobile.svg?react';

export const AppHeaderUI: FC = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.menu}>
          <Link to={'/'} className={s.logo}>
            <LogoD width={202} className={s.logoDesktop} />
            <LogoT width={174} className={s.logoTablet} />
            <div className={s.logoMobile}>
              <LogoM width={33} className={s.logoMobileIcon} />
              <LogoMCe width={101} className={s.logoMobileText} />
            </div>
          </Link>
          <Burger width={24} className={s.burgerIcon} />
          <div className={s.links}>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                clsx(s.link, isActive && s.link_active)
              }
            >
              Главная
            </NavLink>
            <NavLink
              to={'/catalog'}
              className={({ isActive }) =>
                clsx(s.link, isActive && s.link_active)
              }
            >
              Каталог продукции
            </NavLink>
            <NavLink
              to={'/program'}
              className={({ isActive }) =>
                clsx(s.link, isActive && s.link_active)
              }
            >
              Подбор программы
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
