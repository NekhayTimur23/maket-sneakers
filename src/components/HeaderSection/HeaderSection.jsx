import React from "react";
import styles from "./HeaderSection.module.sass";
import NavigationSection from "../NavigationSection/NavigationSection";

function HeaderSection() {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <img className={styles.logo} src="header/logo.svg" alt="logo" />
            <div className={styles.headerMenu}>
              <img src="header/menu.svg" alt="menu" />
              <p>Меню</p>
            </div>
          </div>
          <div className={styles.headerSearch}>
            <input type="text" />
            <img src="header/cross.svg" alt="cross" />
            <img src="header/search.svg" alt="search" />
          </div>
          <div className={styles.userInterface}>
            <div className={styles.headerNotificationEndFavourites}>
              <div className={styles.headerNotification}>
                <img src="header/notification.svg" alt="notification" />
              </div>
              <div className={styles.headerFavourites}>
                <img src="header/favourites.svg" alt="favourites" />
              </div>
            </div>
            <div className={styles.headerBasket}>
              <img src="header/basket.svg" alt="basket" />
              <p><nobr>144 235₽</nobr></p>
            </div>
            <div className={styles.headerUser}>
              <img src="header/Avatar.png" alt="Avatar" />
              <p><nobr>Ермаков Е.</nobr></p>
              <img src="header/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <NavigationSection />
    </div>
  );
}

export default HeaderSection;
