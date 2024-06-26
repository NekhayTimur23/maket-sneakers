import React, { useState } from "react";
import styles from "./MainSection.module.sass";

function MainSection() {
  const [addCounter, setAddCounter] = useState(0);
  const [addFovor, setAddFovor] = useState(false);
  const [addPackaging, setAddPackaging] = useState(false);

  const usePlusCounter = () => {
    setAddCounter(addCounter + 1);
  };

  const useMinusCounter = () => {
    setAddCounter(addCounter - 1);
  };

  const onFavor = () => {
    setAddFovor(!addFovor);
  };

  const onPackaging = () => {
    setAddPackaging(!addPackaging)
  };

  return (
    <div className={styles.mainSection}>
      <div className={styles.mainContainet}>
        <div className={styles.mainContent}>
          <div className={styles.mainNavigation}>
            <p>Каталог</p>/<p>Обувь</p>/<p>Кроссовки</p>/<p>Беговые</p>
          </div>
          <div className={styles.mainTitle}>
            <h1>Кроссовки мужские Skechers Sunny Dale</h1>
          </div>
          <div className={styles.mainCard}>
            <div className={styles.mainCardPhoto}>
              <div className={styles.mainPhotoImg}>
                <img
                  src={`${process.env.PUBLIC_URL}/main/photoShikers.png`}
                  alt="photoShikers"
                />
              </div>
              <div className={styles.mainPhotoSlide}>
                <div className={styles.arrowLeft}>
                  <img
                    src={`${process.env.PUBLIC_URL}/main/arrowLeft.svg`}
                    alt="аrrowLeft"
                  />
                </div>
                <div className={styles.imgSlide}>
                  <img
                    src={`${process.env.PUBLIC_URL}/main/img1.png`}
                    alt="img1"
                  />
                </div>
                <div className={styles.imgSlide}>
                  <img
                    src={`${process.env.PUBLIC_URL}/main/img2.png`}
                    alt="img2"
                  />
                </div>
                <div className={styles.imgSlide}>
                  <img
                    src={`${process.env.PUBLIC_URL}/main/img3.png`}
                    alt="img3"
                  />
                </div>
                <div className={styles.imgSlide}>
                  <img
                    src={`${process.env.PUBLIC_URL}/main/img4.png`}
                    alt="img4"
                  />
                </div>
                <div className={styles.аrrowRight}>
                  <img
                    src={`${process.env.PUBLIC_URL}/main/аrrowRight.svg`}
                    alt="аrrowRight"
                  />
                </div>
              </div>
            </div>
            <div className={styles.mainCardText}>
              <div className={styles.mainCardPriceList}>
                <div className={styles.mainCardFirstBlock}>
                  <p className={styles.cardText1}>{!addPackaging ? '11 745' : '140 951'} ₽ цена без скидки</p>
                  <div className={styles.cardText2}>
                    <span>{!addPackaging ? '10 213' : '122 566'} ₽</span>
                    <div className={styles.cardTextPercent}>
                      <p>-15%</p>
                    </div>
                  </div>
                  <div className={styles.cardText3}>
                    <div className={styles.pieces}>
                      <p>12 штук в уп.</p>
                    </div>
                    <div
                      onClick={onPackaging}
                      className={
                        addPackaging
                          ? styles.blokSliderOn
                          : styles.blokSliderOff
                      }
                    >
                      <div
                        className={
                          addPackaging ? styles.sliderOn : styles.sliderOff
                        }
                      ></div>
                    </div>
                    <span>Заказ упаковкой</span>
                  </div>
                  <div className={styles.cardText4}>
                    <div className="">
                      <span>Завтра</span>
                      <p>Доставка</p>
                    </div>
                    <div className="">
                      <span>7 шт.</span>
                      <p>Тарасовка</p>
                    </div>
                    <div className="">
                      <span>7 шт.</span>
                      <p>Тарасовка</p>
                    </div>
                  </div>
                  <div className={styles.cardTextBasket}>
                    <div className={styles.cardTextBasketButton}>
                      <div
                        className={[
                          styles.basketCounter,
                          addCounter > 0 ? styles.show : styles.hide,
                        ].join(" ")}
                      >
                        <span onClick={useMinusCounter}>-</span>
                        <p>{addCounter} шт.</p>
                        <span onClick={usePlusCounter}>+</span>
                      </div>
                      <div
                        onClick={usePlusCounter}
                        className={[
                          styles.basket,
                          addCounter > 0 ? styles.hide : styles.show,
                        ].join(" ")}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/main/basket2.svg`}
                          alt="basket2"
                        />
                        <p>В корзину</p>
                      </div>
                    </div>
                    <div onClick={onFavor} className={styles.favourites}>
                      <div className={styles.favouritesImg}>
                        <img
                          src={
                            addFovor
                              ? `${process.env.PUBLIC_URL}/main/favor.svg`
                              : `${process.env.PUBLIC_URL}/main/favourites2.svg`
                          }
                          alt="favourites2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mainCardDescription}>
                  <div className={styles.descriptionTitle}>
                    <h4>Характеристики</h4>
                  </div>
                  <div className={styles.descriptionBlock}>
                    <div className={styles.descriptionBlock1}>
                      <h6>ELC00696</h6>
                      <p>Код поставщика</p>
                      <h6>ELC00696</h6>
                      <p>Код РАЭК</p>
                      <h6>Electric used</h6>
                      <p>Бренд</p>
                      <h6>ELC0200000696</h6>
                      <p>Бренд</p>
                    </div>
                    <div className={styles.descriptionBlock2}>
                      <h6>ELC0200000696</h6>
                      <p>Артикул</p>
                      <h6>ELC00696</h6>
                      <p>Код ЕТМ</p>
                      <h6>ELC00696</h6>
                      <p>Серия</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainCardProductDescription}>
                <h4>Описание товара</h4>
                <p>
                  Создание приверженного покупателя специфицирует неопровержимый
                  комплексный анализ ситуации. CTR существенно индуцирует из
                  ряда вон выходящий SWOT-анализ. Воздействие на потребителя
                  определяет возрастающий интеграл по поверхности, что известно
                  даже школьникам. Отсюда естественно следует, что коммуникация
                  уравновешивает косвенный фактор коммуникации. Поле направлений
                  естественно допускает экспериментальный скачок функции, таким
                  образом сбылась мечта идиота - утверждение полностью доказано.
                  Арифметическая прогрессия притягивает линейно зависимый пул
                  лояльных изданий.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
