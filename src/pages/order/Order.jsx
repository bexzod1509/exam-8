import React from "react";
import "./Order.scss";
function Order() {
  return (
    <>
      <div className="container">
        <div className="route">
          <p>
            Главная <b>/Доставка и оплата</b>
          </p>
        </div>
        <div className="order">
          <h1>Доставка и оплата</h1>
          <div>
            <h2>Доставка</h2>
            <p>
              Мы осуществляем доставку со склада по Москве и Московской области
              собственной курьерской службой. Транспортными компаниями нашу
              продукцию мы доставляем по всей территории РФ, а так же по всем
              странам СНГ. <b>Сроки доставки: 4—6 недель</b>
            </p>
            <h2>Курьерская доставка</h2>
            <p>
              БЕСПЛАТНО доставим в приделах МКАД любой заказ <b>от 5 000 ₽</b>
              .Заказы свыше <b>30 000 ₽</b> имеют бесплатную доставку,
              включительно 15 км от МКАД
            </p>
            <h2>Самовывоз</h2>
            <p>
              Любой заказ можно забрать самостоятельно по адресу: г.
              Москва, Дмитровское шоссе д.100с2
            </p>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043801!2d69.20123767565784!3d41.285518202308346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719758530602!5m2!1sru!2s"
        style={{
          border: "0",
          width: "100%",
          height: "672px",
          marginTop: "116px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Order;
