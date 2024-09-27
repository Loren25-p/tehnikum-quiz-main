import React from "react";
import { Header } from "../components/Header";
import { AppLable } from "../components/AppLable";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType="h1" headerText="салам"/>
          <form className="welcome__form">
            <AppLable/>
            <AppLable/>
            {/* <label className="input-wrapper" htmlFor="username">
              Ваше имя
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label>
            <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label> */}
            <button disabled type="submit" id="next-btn">
              Далее
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;