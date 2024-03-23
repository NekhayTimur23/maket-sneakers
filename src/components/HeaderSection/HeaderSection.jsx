import React, { useState } from "react";
import styles from "./HeaderSection.module.sass";
import NavigationSection from "../NavigationSection/NavigationSection";

function HeaderSection() {
  const [isFocused, setIsFocused] = useState(false);

console.log(isFocused);

  return (
    <div className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <img
              className={styles.logo}
              src={`${process.env.PUBLIC_URL}/header/logo.svg`}
              alt="logo"
            />
            <div className={styles.headerMenu}>
              <img
                src={`${process.env.PUBLIC_URL}/header/menu.svg`}
                alt="menu"
              />
              <p>Меню</p>
            </div>
          </div>
          <div
            // className={styles.headerSearch }
            className={isFocused ? styles.headerSearchFocused : styles.headerSearch}
          >
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Название запроса..."
              className={styles.headerInput}
              type="text"
            />
            <img
              src={`${process.env.PUBLIC_URL}/header/cross.svg`}
              alt="cross"
            />
            <img
              src={`${process.env.PUBLIC_URL}/header/search.svg`}
              alt="search"
            />
          </div>
          <div className={styles.userInterface}>
            <div className={styles.headerNotificationEndFavourites}>
              <div className={styles.headerNotification}>
                <img
                  src={`${process.env.PUBLIC_URL}/header/notification.svg`}
                  alt="notification"
                />
              </div>
              <div className={styles.headerFavourites}>
                <img
                  src={`${process.env.PUBLIC_URL}/header/favourites.svg`}
                  alt="favourites"
                />
              </div>
            </div>
            <div className={styles.headerBasket}>
              <img
                src={`${process.env.PUBLIC_URL}/header/basket.svg`}
                alt="basket"
              />
              <p>
                <nobr>144 235₽</nobr>
              </p>
            </div>
            <div className={styles.headerUser}>
              <img
                src={`${process.env.PUBLIC_URL}/header/Avatar.png`}
                alt="Avatar"
              />
              <p>
                <nobr>Ермаков Е.</nobr>
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/header/arrow.svg`}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <NavigationSection />
    </div>
  );
}

export default HeaderSection;
