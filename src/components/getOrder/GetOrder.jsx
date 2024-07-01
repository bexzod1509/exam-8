import React from "react";
import "./GetOrder.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteAllCart } from "../../context/cartSlice";
const Bot_Token = "6877779800:AAHAPesR6iXzhC75G5VTwM1F0FhIVYTvYJw";
const Chat_Id = "-1002070275549";
const initial = {
  fname: "",
  phone: "",
  comment: "",
  address: "",
  email: "",
};
function GetOrder({ total }) {
  const { formData, handleChange, setFormData } = useGetInputValue(initial);
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Order %0A%0A";
    text += `Name: ${formData.fname} %0A`;
    text += `Address: ${formData.address} %0A`;
    text += `Email: ${formData.email} %0A`;
    text += `Phone: ${formData.phone} %0A`;
    text += `Comment: ${formData.comment} %0A`;
    let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_Id}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setFormData(initial);
    dispatch(deleteAllCart());
    toast.success("Thank you for your purchase");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div className="getorder">
          <h1>Оформление</h1>
          <div className="getorder1">
            <input
              value={formData.fname}
              onChange={handleChange}
              name="fname"
              required
              type="text"
              placeholder="ФИО"
            />
            <input
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              required
              type="tel"
              placeholder="телефон"
            />
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
              type="email"
              placeholder="Электронная почта"
            />
          </div>
          <h2>Доставка</h2>
          <input
            value={formData.address}
            onChange={handleChange}
            name="address"
            className="addressinput"
            type="text"
            placeholder="Адрес доставки"
          />
          <textarea
            value={formData.comment}
            onChange={handleChange}
            name="comment"
            id=""
            placeholder="Комментарий"
          ></textarea>
        </div>
        <div className="getorder2">
          <h1>Оплата</h1>
          <div className="getorder3">
            <p>Товары..................................{Math.round(total)}$</p>
            <p>Доставка................................ 20$</p>
          </div>
          <h2>{Math.round(total + 20)}$</h2>
          <div className="getorder4">
            <button type="submit">Купить</button>
            <p>Я согласен наобработку моих персональных данных</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GetOrder;
