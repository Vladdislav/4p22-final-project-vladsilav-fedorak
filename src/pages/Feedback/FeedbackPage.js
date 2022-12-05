import { useState } from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import "./FeedbackPage.css";

function FeedbackPage() {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [ariaInputValue, setAriaInputValue] = useState("");
  const [agreementCheckBoxInputValue, setAgreementCheckBoxInputValue] =
    useState(false);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function addRedStylesError(placeholder, span) {
    placeholder.style.border = "2px solid red";
    span.style.color = "red";
  }
  function addBaseStyle(placeholder, displayForSpan) {
    placeholder.style.border = "2px solid #787878";
    displayForSpan.style.display = "none";
  }

  const submitForm = (event) => {
    event.preventDefault();
    let nameInput = setNameInputValue(document.getElementById("name"));
    let emailInput = setEmailInputValue(document.getElementById("email"));
    let ariaInput = setAriaInputValue(document.getElementById("aria"));
    let agreementCheckBox = setAgreementCheckBoxInputValue(
      document.getElementById("agreement")
    );

    let formInput = {
      nameInputValue: nameInput.value,
      emailInputValue: emailInput.value,
      ariaInputValue: ariaInput.value,
      agreementCheckBoxInputValue: agreementCheckBox.value,
    };
    

    let nameError = document.querySelector(".feedback__title-name");
    let emailError = document.querySelector(".feedback__email-error");
    let ariaError = document.querySelector(".feedback__aria-error");
    let agreementCheckBoxError = document.querySelector(
      ".feedback__title-agreement"
    );

    // nameInput.value?.trim();
    // emailInput.value?.trim();
    // ariaInput.value?.trim();

    if (formInput.nameInputValue === "") {
      nameError.style.display = "inline";
      nameError.innerHTML = "Поле обязательно для заполнения";
      addRedStylesError(nameInputValue, nameError);
    } else {
      addBaseStyle(nameInputValue, nameError);
    }

    // if (emailInputValue === "") {
    //   emailError.style.display = "inline";
    //   emailError.innerHTML = "Поле обязательно для заполнения";
    //   addRedStylesError(emailInputValue, emailError);
    // } else if (!validateEmail(emailInputValue)) {
    //   emailError.style.display = "inline";
    //   emailError.innerHTML = "Email введён некорректно";
    //   addRedStylesError(emailInputValue, emailError);
    // } else {
    //   addBaseStyle(emailInputValue, emailError);
    // }

    // if (ariaInputValue.value === "") {
    //   ariaError.style.display = "inline";
    //   ariaError.innerHTML = "Поле обязательно для заполнения";
    //   addRedStylesError(ariaInputValue, ariaError);
    // } else {
    //   addBaseStyle(ariaInputValue, ariaError);
    // }
    // if (agreementCheckBoxInputValue.value !== true) {
    //   agreementCheckBoxError.style.color = "red";
    // } else {
    //   agreementCheckBoxError.style.color = "#787878";
    // }
    // if (
    //   emailError.style.display === "none" &&
    //   nameError.style.display === "none" &&
    //   ariaError.style.display === "none"
    // ) {
    //   formInput.forEach((item) => {
    //     if (item.value !== "") {
    //       console.log(item.value);
    //     }
    //   });
    // }
  };
  return (
    <>
      <div className="feedback">
        <form
          id="form"
          action=""
          className="feedback__form"
          onSubmit={submitForm}
        >
          <legend className="feedback__title">Обратная связь</legend>
          <div className="feedback__title-block">
            <label htmlFor="name" className="feedback__title-name">
              Имя
            </label>
            <span className="feedback__тфьу-error"></span>
          </div>
          <input
            id="name"
            placeholder="Введите Имя"
            className="feedback__field-name feedback__input"
          />
          <div className="feedback__title-block">
            <label htmlFor="email" className="feedback__title-email">
              Email
            </label>
            <span className="feedback__email-error"></span>
          </div>
          <input
            id="email"
            placeholder="Введите Email"
            className="feedback__field-email feedback__input"
          />
          <div className="feedback__title-block">
            <label htmlFor="about-myself" className="feedback__title-about">
              Оставьте отзыв
            </label>
            <span className="feedback__aria-error"></span>
          </div>
          <textarea
            name="about-myself"
            id="aria"
            placeholder="Опишите, что вас заинтересовало. Нам важно ваше мнение."
            className="feedback__area-about"
          ></textarea>
          <fieldset className="feedback__agreement">
            <label htmlFor="agreement" className="feedback__title-agreement">
              <input
                id="agreement"
                type="checkbox"
                className="feedback__ckeckbox-agreement"
              />
              <span className="fake-checkbox"></span>
              <span className="feedback__text-agreement">
                Я согласен получать обновления на почту
              </span>
            </label>
          </fieldset>

          <ButtonComponent
            name="sumbit"
            id="sen"
            type="submit"
            className="btn btn-send"
            value="Отправить"
          >
            Отправить
          </ButtonComponent>
        </form>
      </div>
    </>
  );
}

export default FeedbackPage;
