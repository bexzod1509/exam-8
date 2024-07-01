import React from "react";
import "./Single.scss";
import product from "../../assets/product.png";
import { addToCart } from "../../context/cartSlice";
import links from "../../assets/links.png";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/productApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/heartSlice";
function Single() {
  let wishList = useSelector((state) => state.heart.value);
  let dispatch = useDispatch();
  let { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  return (
    <div className="container">
      <div className="route">
        <p>
          Главная <b>/</b>
        </p>
      </div>
      <div className="single">
        <div className={isLoading ? "loading" : "hide"}>
          <div>
            <div className="load1"></div>
          </div>
          <div>
            <div className="load4"></div>
            <div className="load5"></div>
            <div className="load6"></div>
            <div className="load7"></div>
            <div className="load5"></div>
          </div>
        </div>
      </div>
      <div className={isLoading ? "hide" : "single"}>
        <img
          className="single6"
          width={640}
          height={600}
          src={data?.image}
          alt=""
        />
        <div className="single5">
          <h1>{data?.title}</h1>
          <p>Scott</p>
          <div className="single1">
            <p>Артикул : 7655-188</p>
            <img src={links} alt="" />
          </div>
          <h2>В наличии</h2>
          <div className="single2">
            <h3>{data?.price}$</h3>
            <del>{Math.round(+data?.price + 10)}$</del>
          </div>
          <h4>{data?.description}</h4>
          <div className="single3">
            <div className="single4">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <button onClick={() => dispatch(addToCart(data))}>В корзину</button>
            {wishList?.some((item) => item.id === data?.id) ? (
              <FaHeart
                className="d3"
                onClick={() => dispatch(toggleHeart(data))}
                style={{ color: "red" }}
              />
            ) : (
              <FaRegHeart
                className="d3"
                onClick={() => dispatch(toggleHeart(data))}
              />
            )}
          </div>
        </div>
      </div>
      <div className="statistic">
        <h1>Характеристика</h1>
        <div className="statistic1">
          <div className="statistic2">
            <h2>Цвет</h2>
            <p>Жёлтый</p>
          </div>
          <div className="statistic3">
            <h2>Год</h2>
            <p>2016</p>
          </div>
          <div className="statistic2">
            <h2>Диаметр колеса</h2>
            <p>27.5</p>
          </div>
          <div className="statistic3">
            <h2>Материал рамы</h2>
            <p>Карбон</p>
          </div>
          <div className="statistic2">
            <h2>Размер</h2>
            <p>L</p>
          </div>
          <div className="statistic3">
            <h2>Страна</h2>
            <p>Швейцария</p>
          </div>
          <div className="statistic2">
            <h2>Производитель</h2>
            <p>Scott</p>
          </div>
          <div className="statistic3">
            <h2>Покрышки</h2>
            <p>
              Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
              PaceStar compound
            </p>
          </div>
          <div className="statistic2">
            <h2>Рама</h2>
            <p>
              Scale Carbon / HMX-технология / технология IMP / Коническая
              рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
            </p>
          </div>
          <div className="statistic3">
            <h2>Подседельный Штырь</h2>
            <p>
              Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
              Carbon 2B SDS / 34.9mm
            </p>
          </div>
          <div className="statistic2">
            <h2>Седло</h2>
            <p>Ritchey WCS Streem V3 Titanium rails</p>
          </div>
          <div className="statistic3">
            <h2>Вилка</h2>
            <p>
              Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
              коническая рулевая труба / Удалённая блокировка, регулировка
              отскока / ход 100mm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
