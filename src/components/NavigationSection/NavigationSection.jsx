import React from "react";
import styles from "./NavigationSection.module.sass";

function NavigationSection() {
  return (
    <div className={styles.navigationSection}>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationContent}>
          <div className={styles.navigationLeft}>
            <ul>
              <li>
                <p>Мои заказы</p>
              </li>
              <li>
                <p>Сотрудники</p>
              </li>
              <li>
                <p>Шаблоны заказов</p>
              </li>
              <li>
                <p>Обращения</p>
              </li>
            </ul>
          </div>
          <div className={styles.navigationRight}>
            <div className={styles.navigationMessage}>
              <img src="navigation/message.svg" alt="message" />
              <p>Ваш менеджер</p>
            </div>
            <div className={styles.navigationPercent}>
              <img src="navigation/percent.svg" alt="percent" />
              <p>Акции</p>
            </div>
            <p>Блог</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationSection;
