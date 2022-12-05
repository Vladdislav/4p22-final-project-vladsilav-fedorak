import { useEffect, useState } from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import "./FeedbackPage.css";

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

function FeedbackPage() {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [ariaInputValue, setAriaInputValue] = useState("");
  const [agreementCheckBoxInputValue, setAgreementCheckBoxInputValue] =
    useState('off');

  const [nameInputError, setNameInputError] = useState("");
  const [emailInputError, setEmailInputError] = useState("");
  const [ariaInputError, setAriaInputError] = useState("");
  const [agreementCheckBoxError, setAgreementCheckBoxInputError] =
    useState('');
let checkBoxChecked = () => {
  if (agreementCheckBoxInputValue){
    return setAgreementCheckBoxInputValue('on');
  }
  else {
    return setAgreementCheckBoxInputValue('off');
  }
}
  // let formInput = {
  //   nameInputValue: nameInputValue,
  //   emailInputValue: emailInputValue,
  //   ariaInputValue: ariaInputValue,
  //   agreementCheckBoxInputValue: agreementCheckBoxInputValue,
  // };
  useEffect(() => {
    setNameInputError(document.querySelector(".feedback__name-error"));
    setEmailInputError(document.querySelector(".feedback__email-error"));
    setAriaInputError(document.querySelector(".feedback__aria-error"));
    setAgreementCheckBoxInputError(
      document.querySelector(".feedback__title-agreement")
    );

    if (nameInputValue === "") {
      // nameInputError.style.display = "inline";
      // nameInputError.innerHTML = "Поле обязательно для заполнения";
      // addRedStylesError(nameInputValue, nameInputError);
    } else {
      // addBaseStyle(nameInputValue, nameInputError);
    }

    if (emailInputValue === "") {
      // emailInputError.style.display = "inline";
      // emailInputError.innerHTML = "Поле обязательно для заполнения";
      // addRedStylesError(emailInputValue, emailInputError);
    } else if (!validateEmail(emailInputValue)) {
      // emailInputError.style.display = "inline";
      // emailInputError.innerHTML = "Email введён некорректно";
      // addRedStylesError(emailInputValue, emailInputError);
    } else {
      // addBaseStyle(emailInputValue, emailInputError);
    }

    if (ariaInputValue === "") {
      // ariaInputError.style.display = "inline";
      // ariaInputError.innerHTML = "Поле обязательно для заполнения";
      // addRedStylesError(ariaInputValue, ariaInputError);
    } else {
      // addBaseStyle(ariaInputValue, ariaInputError);
    }
    if (agreementCheckBoxInputValue !== true) {
      // agreementCheckBoxError.style.color = "red";
    } else {
      // agreementCheckBoxError.style.color = "#787878";
    }

    // if (
    //   nameInputError.style.display === "none" &&
    //   emailInputError.style.display === "none" &&
    //   ariaInputError.style.display === "none"
    // ) {
    // formInput.forEach((item) => {
    //   if (item.value !== "") {
    //     console.log(item.value);
    //   }
    // });
    // }
  }, [
    nameInputValue,
    emailInputValue,
    ariaInputValue,
    agreementCheckBoxInputValue,
    nameInputError,
    emailInputError,
    ariaInputError,
    agreementCheckBoxError,
  ]);
  function submitForm(e) {
    console.log(nameInputValue);

    console.log(emailInputValue);
    console.log(ariaInputValue);
    console.log(agreementCheckBoxInputValue);
    // if (nameError.style.display === "none"){
    //   console.log(nameInputValue)

    // }
  }
  return (
    <>
      <div className="feedback">
        <form
          id="form"
          action=""
          className="feedback__form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <legend className="feedback__title">Обратная связь</legend>
          <div className="feedback__title-block">
            <label htmlFor="name" className="feedback__title-name">
              Имя
            </label>
            <span className="feedback__name-error"></span>
          </div>
          <input
            id="name"
            placeholder="Введите Имя"
            className="feedback__field-name feedback__input"
            onChange={(e) => {
              setNameInputValue(e.target.value);
            }}
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
            onChange={(e) => {
              setEmailInputValue(e.target.value);
            }}
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
            onChange={(e) => {
              setAriaInputValue(e.target.value);
            }}
          ></textarea>
          <fieldset className="feedback__agreement">
            <label htmlFor="agreement" className="feedback__title-agreement">
              <input
                id="agreement"
                type="checkbox"
                className="feedback__ckeckbox-agreement"
                onChange={(e) => {
                  setAgreementCheckBoxInputValue(e.target.value);
                }}
                onClick={checkBoxChecked}
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
            onClick={submitForm}
          >
            Отправить
          </ButtonComponent>
        </form>
      </div>
    </>
  );
}

export default FeedbackPage;
