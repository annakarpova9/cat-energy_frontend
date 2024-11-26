import { FC, useEffect, useState } from 'react';
import s from './app-footer.module.scss';
import LogoMCe from '@assets/logo-mobile-ce.svg?react';
import IconVK from '@assets/icon_vkontakte.svg?react';
import IconFB from '@assets/icon_facebook.svg?react';
import IconIns from '@assets/icon_instagram.svg?react';
import LogoSchool from '@assets/html-logo.svg?react';
import MapPin from '@assets/map-pin.svg';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FullBg } from '@ui/shared/fullBg';

export const AppFooterUI: FC = () => {
  const placemarkCoordinates = [59.938631, 30.323037];

  const [mapCenter, setMapCenter] = useState([59.937738, 30.309158]);

  const updateMapCenter = () => {
    const width = window.innerWidth;

    if (width > 769) {
      setMapCenter([59.937738, 30.309158]);
    } else if (width < 769) {
      setMapCenter([59.938631, 30.323037]);
    }
  };

  useEffect(() => {
    updateMapCenter();

    window.addEventListener('resize', updateMapCenter);

    return () => {
      window.removeEventListener('resize', updateMapCenter);
    };
  }, []);

  return (
    <>
      <YMaps>
        <footer className={s.footer}>
          <div className={s.addressContainer}>
            <p className={s.addressContainerText}>
              приглашаем к сотрудничеству дилеров!
            </p>
            <div className={s.address}>
              <p>ул. Большая Конюшенная, д. 19/8</p>
              <p>Санкт-Петербург</p>
            </div>
          </div>
          <FullBg className={s.mapContainer}>
            <Map state={{ center: mapCenter, zoom: 15 }} className={s.map}>
              <Placemark
                geometry={placemarkCoordinates}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: MapPin,
                  iconImageSize: [113, 106],
                  iconImageOffset: [-20, -40],
                }}
              />
            </Map>
          </FullBg>
          <FullBg className={s.infoContainer}>
            <div className={s.info}>
              <LogoMCe width={128} height={24} />
              <div className={s.socialList}>
                <a href="#" className={s.social}>
                  <IconVK width={30} />
                </a>
                <a href="#" className={s.social}>
                  <IconIns width={23} />
                </a>
                <a href="#" className={s.social}>
                  <IconFB width={28} />
                </a>
              </div>
              <div className={s.linkSchool}>
                <p>HTML Academy</p>
                <LogoSchool width={27} />
              </div>
            </div>
          </FullBg>
        </footer>
      </YMaps>
    </>
  );
};
