import ButtonComponent from "../../components/Button/ButtonComponent";
import "./FeedbackPage.css";

function FeedbackPage() {
// let formReg = document.getElementById("form");
// let namelInput = document.getElementById("name");
// let emailInput = document.getElementById("email");


// let namelError = document.querySelector(".feedback__title-name");
// let emailError = document.querySelector(".registration__email-error");

// function validateEmail(email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }
// function addRedStylesError(placeholder, span) {
//   placeholder.style.border = "2px solid red";
//   span.style.color = "red";
// }
// function addBaseStyle(placeholder, displayForSpan) {
//   placeholder.style.border = "2px solid #787878";
//   displayForSpan.style.display = "none";
// }

// formReg.addEventListener("submit", (event) => {
//   event.preventDefault();
//   genderInput.forEach((item) => {
//     if (item.checked) {
//       genderInput = item.value;
//     }
//   });
//   nameInput.value?.trim();
//   emailInput.value?.trim();
//   passwordError.value?.trim();

//   if (emailInput.value === "") {
//     emailError.style.display = "inline";
//     emailError.innerHTML = "Поле обязательно для заполнения";
//     addRedStylesError(emailInput, emailError);
//   } else if (!validateEmail(emailInput.value)) {
//     emailError.style.display = "inline";
//     emailError.innerHTML = "Email введён некорректно";
//     addRedStylesError(emailInput, emailError);
//   } else {
//     addBaseStyle(emailInput, emailError);
//   }

//   if (passwordInput.value === "") {
//     passwordError.style.display = "inline";
//     passwordError.innerHTML = "Поле обязательно для заполнения";
//     addRedStylesError(passwordInput, passwordError);
//   }

//   else {
//     addBaseStyle(passwordInput, passwordError);
//   }
//   if (confirmPasswordInput.value === "") {
//     passwordConfirmError.style.display = "inline";
//     passwordConfirmError.innerHTML = "Поле обязательно для заполнения";
//     addRedStylesError(confirmPasswordInput, passwordConfirmError);
//   } else if (
//     passwordInput.value === confirmPasswordInput.value &&
//     passwordInput.value.length >= 7
//   ) {
//     addBaseStyle(passwordInput, passwordError);
//     addBaseStyle(confirmPasswordInput, passwordConfirmError);
//     passwordError.style.color = "#787878";
//     passwordConfirmError.style.color = "#787878";
//   } else {
//     passwordConfirmError.style.display = "inline";
//     passwordConfirmError.innerHTML = "Пароли не совпадают";
//     addRedStylesError(confirmPasswordInput, passwordConfirmError);
//   }

//   if (
//     emailInput.value !== "" &&
//     nameInput.value !== "" &&
//     emailError.style.display === "none" &&
//     passwordError.style.display === "none" &&
//     passwordConfirmError.style.display === "none"
//   ) {
//     console.log("email: " + emailInput.value);
//     console.log("name: " + nameInput.value);
//   }
// });
  return (
    <>
      <div className="feedback">
        <form id="form" action="" className="feedback__form">
          <legend className="feedback__title">Обратная связь</legend>
          <div className="feedback__title-block">
            <label htmlFor="name" className="feedback__title-name">
              Имя
            </label>
            <span className="feedback__email-error"></span>
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

          <label htmlFor="about-myself" className="feedback__title-about">
            Оставьте отзыв
          </label>
          <textarea
            name="about-myself"
            id="about-myself"
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
            name='sumbit'
            id={'111'}
            type="submit"
            className="btn btn-send"
            value="Отправить"
          >Отправить</ButtonComponent>
        </form>
      </div>
    </>
  );
}

export default FeedbackPage;
