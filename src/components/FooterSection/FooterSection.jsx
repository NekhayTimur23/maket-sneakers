import React from "react";
import styles from "./FooterSection.module.sass";

function FooterSection() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerCall}>
            <div className={styles.footerCallLeftBlock}>
              <img src="header/logo.svg" alt="logo" />
              <div className="">
                <h5>8 800 841-95-95</h5>
                <p>Служба поддержки</p>
              </div>
              <div className="">
                <h5>support@sport.ru</h5>
                <p>Служба поддержки</p>
              </div>
            </div>
            <div className={styles.footerCallRightBlock}>
              <p>Вакансии</p>
              <p>Блог</p>
              <p>Акции</p>
              <div className="">
                <p>Предложить идею</p>
              </div>
            </div>
          </div>
          <div className={styles.footerCatalog}>
            <div className="">
              <h5>Женщинам</h5>
              <p>Одежда</p>
              <p>Обувь</p>
              <p>Аксессуары</p>
              <p>Белье</p>
              <p>Bra fitting</p>
            </div>
            <div className="">
              <h5>Мужчинам</h5>
              <p>Одежда</p>
              <p>Обувь</p>
              <p>Аксессуары</p>
              <p>Белье</p>
            </div>
            <div className="">
              <h5>Детям</h5>
              <p>Одежда</p>
              <p>Обувь</p>
              <p>Аксессуары</p>
              <p>Белье</p>
              <p>Игрушки</p>
              <p>Малыши</p>
            </div>
            <div className="">
              <h5>Виды спорта</h5>
              <p>Велоспорт</p>
              <p>Туризм</p>
              <p>Тренажеры и фитнес</p>
              <p>Командные виды спорта</p>
              <p>Самокаты</p>
            </div>
          </div>
          <div className={styles.footerEnd}>
            <div className={styles.footerEndInfo}>
              <div className="">
                <img src="footer/file.svg" alt="file" />
                <p>PDF презентация</p>
              </div>
              <div className="">
                <img src="footer/video.svg" alt="video" />
                <p>Видео инструкция </p>
              </div>
              <div className="">
                <img src="footer/faq.svg" alt="faq" />
                <p>FAQ</p>
              </div>
              <div className={styles.footerEndInfoYoutube}>
                <img src="footer/youtube.svg" alt="youtube" />
                <p>Мы на YouTube</p>
              </div>
              <span>Политика конфиденциальности </span>
              <span>Лицензионное соглашение</span>
            </div>
            <div className={styles.footerEndText}>
              <p>
                Настоящая Политика обработки персональных данных разработана в
                соответствии с Конституцией Российской Федерации, Трудовым
                кодексом Российской Федерации, Гражданским кодексом Российской
                Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об
                информации, информационных технологиях и о защите информации"
              </p>
            </div>
            <div className={styles.footerEndLogo}>
              <img src="footer/logo2.svg" alt="logo2" />
              <p>Разработка платформы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
