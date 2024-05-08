import Travel from './Travel';
import Progrem from './Program';
import Accommodation from './Accommodation';
import Routine from './Routine';
import MustHave from './MustHave';
import Prices from './Prices';
import logoSlide from '../../images/camp/logo.webp';

import s from './SummerCamp.module.scss';

const SummerCamp = () => {
  return (
    <div className={s.camp}>
      <div className={s.camp__slide}>
        <div className={s.camp__slideBackground}>
          <div className="container">
            <div className={s.camp__slideContent}>
              <div className={s.camp__slideLogo}>
                <img
                  src={logoSlide}
                  alt="Логотип табору"
                  className={s.camp__imageLogo}
                />
              </div>
              <div className={s.camp__titleContent}>
                <div className={s.camp__titleContentWrapper}>
                  <h2 className={s.camp__titleText}>
                    ДИТЯЧИЙ ТАБІР{' '}
                    <span className={s.camp__titleTextSecond}>В КАРПАТАХ</span>
                    <div className={s.camp__titleDivider}></div>
                    <p className={s.camp__titleTextSecond}>
                      ПЕРША ЗМІНА 2-15 ЧЕРВНЯ
                    </p>
                  </h2>
                </div>
              </div>
              <div className={s.camp__contacts}>
                <div className={s.camp__contactsWrapper}>
                  <div className={s.camp__contactsPart}>
                    <p className={s.camp__title}>
                      Приватна гімназія "Middle Way"
                    </p>
                    <p className={s.camp__title}>с. Путрівка, вул. Газова 8</p>
                  </div>
                  <div className={s.camp__contactsPart}>
                    <p className={s.camp__title}>(068)-220-10-09</p>
                    <p className={s.camp__title}>(067)-447-42-95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Travel />
      <Progrem />
      <Accommodation />
      <Routine />
      <MustHave />
      <Prices />
    </div>
  );
};

export default SummerCamp;
