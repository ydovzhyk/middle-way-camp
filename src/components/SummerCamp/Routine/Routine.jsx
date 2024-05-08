import Button from '../../Shared/Button';
import image01 from '../../../images/camp/routine/routine01.webp';
import image02 from '../../../images/camp/routine/routine02.webp';
import image03 from '../../../images/camp/routine/routine03.webp';
import image04 from '../../../images/camp/routine/routine04.webp';
import image05 from '../../../images/camp/routine/routine05.webp';
import image06 from '../../../images/camp/routine/routine06.webp';

import s from './Routine.module.scss';

const Routine = () => {
  return (
    <div className={s.routine}>
      <div className="container">
        <div className={s.routine__content}>
          <div className={s.routine__titleContent}>
            <h2 className={s.routine__title}>Розклад дня</h2>
          </div>
          <div className={s.routine__partContent}>
            <div
              className={s.routine__partBox}
              style={{ backgroundColor: 'var(--main-color)' }}
            >
              <div className={s.routine__partBoxWrapper}>
                <p className={s.routine__textTitle}>8.00 - 9.00</p>
                <p className={s.routine__textTitle}>
                  ПІДЙОМ, ЗАРЯДКА, РАНКОВІ ПРОЦЕДУРИ, СНІДАНОК
                </p>
              </div>
            </div>
            <div
              className={s.routine__partBox}
              style={{
                backgroundImage: `url(${image01})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              className={s.routine__partBox}
              style={{ backgroundColor: 'var(--main-color)' }}
            >
              <div className={s.routine__partBoxWrapper}>
                <p className={s.routine__textTitle}>10.00 - 13.00</p>
                <p className={s.routine__textTitle}>
                  ЕКСКУРСІЇ, МАЙСТЕР-КЛАСИ, КОМАНДНИЙ ЧАС
                </p>
              </div>
            </div>
            <div
              className={s.routine__partBox}
              style={{
                backgroundImage: `url(${image02})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              className={s.routine__partBox}
              style={{
                backgroundImage: `url(${image03})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              className={s.routine__partBox}
              style={{ backgroundColor: 'var(--main-color)' }}
            >
              <div className={s.routine__partBoxWrapper}>
                <p className={s.routine__textTitle}>13.00 - 16.00</p>
                <p className={s.routine__textTitle}>
                  ОБІД, ТИХА ГОДИНА, ПОЛУДЕНОК (ФРУКТОВИЙ ПЕРЕКУС)
                </p>
              </div>
            </div>
            <div
              className={s.chooseUs__partBox}
              style={{
                backgroundImage: `url(${image04})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              className={s.routine__partBox}
              style={{ backgroundColor: 'var(--main-color)' }}
            >
              <div className={s.routine__partBoxWrapper}>
                <p className={s.routine__textTitle}>16.00 - 19.00</p>
                <p className={s.routine__textTitle}>
                  КВЕСТИ, ІГРИ, ВІЛЬНИЙ ЧАС
                </p>
              </div>
            </div>
            <div
              className={s.routine__partBox}
              style={{ backgroundColor: 'var(--main-color)' }}
            >
              <div className={s.routine__partBoxWrapper}>
                <p className={s.routine__textTitle}>19.00 - 20.00</p>
                <p className={s.routine__textTitle}>
                  ВЕЧЕРЯ, ПІДГОТОВКА ДО ВЕЧІРНЬОГО ЗАХОДУ, СПІЛКУВАННЯ З РОДИНОЮ
                </p>
              </div>
            </div>
            <div
              className={s.routine__partBox}
              style={{
                backgroundImage: `url(${image05})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div
              className={s.routine__partBox}
              style={{ backgroundColor: 'var(--main-color)' }}
            >
              <div className={s.routine__partBoxWrapper}>
                <p className={s.routine__textTitle}>20.00 - 23.00</p>
                <p className={s.routine__textTitle}>
                  ВЕЧІРНЯ ПРОГРАМА, ДИСКОТЕКА, БАГАТТЯ, КІНО-КЛУБ, ШОУ-ТАЛАНТІВ,
                  ДРУГА ВЕЧЕРЯ, ВЕЧІРНІ ПРОЦЕДУРИ,ВІДБІЙ
                </p>
              </div>
            </div>
            <div
              className={s.routine__partBox}
              style={{
                backgroundImage: `url(${image06})`,
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className={s.routine__btnPart}>
            <a
              className={s.routine__link}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhlljHMVLaObSh0bHulzmZ_3nXUpbRG-L4iEyivXmSDOsyJw/viewform"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button text="Записатися" btnClass="btnLight" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routine;
