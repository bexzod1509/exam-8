import React, { useState } from "react";
import "./Contact.scss";
import Call from "../../components/call/Call";
function Contact() {
  const [call, setCall] = useState(false);
  return (
    <>
      <div className="container">
        <div className="route">
          <p>
            Главная <b>/ Контакты</b>
          </p>
        </div>
        <div className="contact">
          <h1>Контакты</h1>
          <div>
            <h2>8 (800) 890-46-56</h2>
            <p>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны: </p>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043801!2d69.20123767565784!3d41.285518202308346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719758530602!5m2!1sru!2s"
        style={{
          border: "0",
          width: "100%",
          height: "672px",
          marginTop: "53px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact1">
          <div>
            <h1>Адрес магазина</h1>
            <p>г. Москва, Дмитровское шоссе д.100с2</p>
          </div>
          <div>
            <h1>Почта</h1>
            <p>NORNLIGHT@mail.ru</p>
          </div>
          <div>
            <h1>Телефон</h1>
            <p>8 (800) 890-46-56</p>
          </div>
          <button onClick={() => setCall(true)}>Оставить заявку</button>
        </div>
      </div>
      {call ? <Call setCall={setCall} /> : <></>}
    </>
  );
}

export default Contact;
