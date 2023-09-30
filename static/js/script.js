"use strict";

// ЭЛЕМЕНТЫ ИНТЕРФЕЙСА
const mainSection = document.querySelector(".main-section");

// ТАБЫ
const tabs = document.querySelectorAll(".tabs-tab");
const tabsContent = document.querySelectorAll(".tab-content");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    tabsContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabsContent[index].classList.add("active");
  });
});
// ФОРМА АНКЕТЫ
let isGenderValid = false;
let isSurnameValid = false;
let isNameValid = false;
let isBirthDateValid = false;
let isInputIndexValid = false;
let isCityValid = false;
let isSalaryValid = false;
let isInputSumValid = false;
let isSumCountValid = false;
let isFirstContributionValid = false;
let isLastContributionValid = false;
let isSumContributionValid = false;
let isContributionAmountValid = false;

const profileForm = document.querySelector(".profile-form");
// Инпут выбора пола
let inputGenderLabel = document.querySelectorAll(
  ".tab-content-input-profile-gender-label"
);
let inputGender = document.querySelectorAll(
  ".tab-content-input-profile-gender"
);
inputGender.forEach((inputGender, index) => {
  inputGender.addEventListener("click", function () {
    inputGenderLabel.forEach((label) => label.classList.remove("active"));
    if (inputGender.checked) {
      inputGenderLabel[index].classList.add("active");
    } else {
      inputGenderLabel[index].classList.remove("active");
    }
  });
});
// Валидация инпута выбора пола
const inputGenderValidation = () => {
  inputGender.forEach((inputGender, index, inputGenders) => {
    inputGender.addEventListener("focus", function () {
      inputGenderLabel.forEach((label) => {
        label.classList.remove("invalid");
      });
    });
    if (inputGenders[0].checked || inputGenders[1].checked) {
      inputGenderLabel[index].classList.remove("invalid");
      isGenderValid = true;
    } else {
      inputGenderLabel[index].classList.add("invalid");
      isGenderValid = false;
    }
  });
};
// Инпут фамилии
let inputSurname = document.querySelector(".tab-content-input-profile-surname");
inputSurname.addEventListener("change", function () {
  inputSurname.classList.add("valid");
  inputSurname.classList.remove("invalid");
});
// Валидация инпута фамилии
const inputSurnameValidation = () => {
  if (inputSurname.value !== "") {
    inputSurname.classList.add("valid");
    isSurnameValid = true;
  } else {
    inputSurname.classList.add("invalid");
    isSurnameValid = false;
  }
};
// Инпут имени
let inputName = document.querySelector(".tab-content-input-profile-name");
inputName.addEventListener("change", function () {
  inputName.classList.add("valid");
  inputName.classList.remove("invalid");
});
// Валидация инпута имени
const inputNameValidation = () => {
  if (inputName.value !== "") {
    inputName.classList.add("valid");
    isNameValid = true;
  } else {
    inputName.classList.add("invalid");
    isNameValid = false;
  }
};
// Инпут отчества
let middleName = document.querySelector(
  ".tab-content-input-profile-middlename"
);
// Инпут даты рождения
let inputBirthdayWrapper = document.querySelector(
  ".tab-content-input-profile-row-birthdate"
);
let inputBirthday = document.querySelector(
  ".tab-content-input-profile-birthdate"
);
inputBirthday.addEventListener("focus", function () {
  inputBirthdayWrapper.classList.remove("active");
});
inputBirthdayWrapper.addEventListener("click", function (e) {
  inputBirthday.focus();
});
inputBirthday.addEventListener("focusout", function () {
  inputBirthday.value
    ? inputBirthdayWrapper.classList.remove("active")
    : inputBirthdayWrapper.classList.add("active");
});
inputBirthday.addEventListener("change", function () {
  inputBirthday.classList.add("valid");
  inputBirthday.classList.remove("invalid");
  inputBirthday.value === ""
    ? inputBirthday.classList.add("invalid")
    : inputBirthday.classList.remove("invalid");
});
// Валидация инпута даты рождения
const inpuBirthDateValidation = () => {
  if (inputBirthday.value !== "") {
    inputBirthday.classList.add("valid");
    isBirthDateValid = true;
  } else {
    inputBirthday.classList.add("invalid");
    isBirthDateValid = false;
  }
  inputBirthday.value !== ""
    ? inputBirthdayWrapper.classList.add("valid")
    : inputBirthdayWrapper.classList.add("invalid");
};
// Инпут даты первого взноса
let inputFirstContributionWrapper = document.querySelector(
  ".tab-content-input-profile-row-first-сontribution"
);
let inputFirstContribution = document.querySelector(
  ".tab-content-input-profile-first-сontribution"
);
inputFirstContribution.addEventListener("focus", function () {
  inputFirstContributionWrapper.classList.remove("active");
});
inputFirstContributionWrapper.addEventListener("click", function (e) {
  inputFirstContribution.focus();
});
inputFirstContribution.addEventListener("focusout", function () {
  inputFirstContribution.value
    ? inputFirstContributionWrapper.classList.remove("active")
    : inputFirstContributionWrapper.classList.add("active");
});
inputFirstContribution.addEventListener("change", function () {
  inputFirstContribution.classList.add("valid");
  inputFirstContribution.classList.remove("invalid");
  inputFirstContribution.value === ""
    ? inputFirstContribution.classList.add("invalid")
    : inputFirstContribution.classList.remove("invalid");
});
// Валидация инпута даты первого взноса
const inputFirstContributionValidation = () => {
  if (inputFirstContribution.value !== "") {
    inputFirstContribution.classList.add("valid");
    isFirstContributionValid = true;
  } else {
    inputFirstContribution.classList.add("invalid");
    isFirstContributionValid = false;
  }
  inputFirstContribution.value !== ""
    ? inputFirstContributionWrapper.classList.add("valid")
    : inputFirstContributionWrapper.classList.add("invalid");
};

// Инпут даты последнего взноса
let inputLastContributionWrapper = document.querySelector(
  ".tab-content-input-profile-row-last-сontribution"
);
let inputLastContribution = document.querySelector(
  ".tab-content-input-profile-last-сontribution"
);
inputLastContribution.addEventListener("focus", function () {
  inputLastContributionWrapper.classList.remove("active");
});
inputLastContributionWrapper.addEventListener("click", function (e) {
  inputLastContribution.focus();
});
inputLastContribution.addEventListener("focusout", function () {
  inputLastContribution.value
    ? inputLastContributionWrapper.classList.remove("active")
    : inputLastContributionWrapper.classList.add("active");
});
inputLastContribution.addEventListener("change", function () {
  inputLastContribution.classList.add("valid");
  inputLastContribution.classList.remove("invalid");
  inputLastContribution.value === ""
    ? inputLastContribution.classList.add("invalid")
    : inputLastContribution.classList.remove("invalid");
});
// Валидация инпута даты последнего взноса
const inputLastContributionValidation = () => {
  if (inputLastContribution.value !== "") {
    inputLastContribution.classList.add("valid");
    isLastContributionValid = true;
  } else {
    inputLastContribution.classList.add("invalid");
    isLastContributionValid = false;
  }
  inputLastContribution.value !== ""
    ? inputLastContributionWrapper.classList.add("valid")
    : inputLastContributionWrapper.classList.add("invalid");
};

// Инпут суммы
let inputSalary = document.querySelector(".tab-content-input-profile-salary");
inputSalary.addEventListener("change", function () {
  inputSalary.classList.add("valid");
  inputSalary.classList.remove("invalid");
});
// Валидация инпута суммы
const inputSalaryValidation = () => {
  if (inputSalary.value !== "") {
    inputSalary.classList.add("valid");
    isSalaryValid = true;
  } else {
    inputSalary.classList.add("invalid");
    isSalaryValid = false;
  }
};
// Инпут взносов
let inputSum = document.querySelector(".tab-content-input-profile-sum");
inputSum.addEventListener("change", function () {
  inputSum.classList.add("valid");
  inputSum.classList.remove("invalid");
});
// Валидация инпута взносов
const inputSumValidation = () => {
  if (inputSum.value !== "") {
    inputSum.classList.add("valid");
    isInputSumValid = true;
  } else {
    inputSum.classList.add("invalid");
    isInputSumValid = false;
  }
};
// Инпут кол-ва взносов
let inputSumCount = document.querySelector(
  ".tab-content-input-profile-sum-count"
);
inputSumCount.addEventListener("change", function () {
  inputSumCount.classList.add("valid");
  inputSumCount.classList.remove("invalid");
});
// Валидация инпута кол-ва взносов
const inputSumCountValidation = () => {
  if (inputSumCount.value !== "") {
    inputSumCount.classList.add("valid");
    isSumCountValid = true;
  } else {
    inputSumCount.classList.add("invalid");
    isSumCountValid = false;
  }
};
// Инпут начисленного дохода
let inputSumContribution = document.querySelector(
  ".tab-content-input-profile-sum-contribution"
);
inputSumContribution.addEventListener("change", function () {
  inputSumContribution.classList.add("valid");
  inputSumContribution.classList.remove("invalid");
});
// Валидация инпута начисленного дохода
const inputSumContributionValidation = () => {
  if (inputSumContribution.value !== "") {
    inputSumContribution.classList.add("valid");
    isSumContributionValid = true;
  } else {
    inputSumContribution.classList.add("invalid");
    isSumContributionValid = false;
  }
};
// Инпут размера операций
let inputContributionAmount = document.querySelector(
  ".tab-content-input-profile-contribution-amount"
);
inputContributionAmount.addEventListener("change", function () {
  inputContributionAmount.classList.add("valid");
  inputContributionAmount.classList.remove("invalid");
});
// Валидация инпута размера операций
const inputContributionAmountValidation = () => {
  if (inputContributionAmount.value !== "") {
    inputContributionAmount.classList.add("valid");
    isContributionAmountValid = true;
  } else {
    inputContributionAmount.classList.add("invalid");
    isContributionAmountValid = false;
  }
};
// Инпут индекса
let inputIndex = document.querySelector(
  ".tab-content-input-profile-post-index"
);
inputIndex.addEventListener("change", function () {
  inputIndex.classList.add("valid");
  inputIndex.classList.remove("invalid");
});
// Валидация инпута индекса
const inputIndexValidation = () => {
  if (inputIndex.value !== "") {
    inputIndex.classList.add("valid");
    isInputIndexValid = true;
  } else {
    inputIndex.classList.add("invalid");
    isInputIndexValid = false;
  }
};
// Инпут города
let inputCityLabel = document.querySelectorAll(
  ".tab-content-input-profile-city-label"
);
let inputCity = document.querySelectorAll(".tab-content-input-profile-city");
inputCity.forEach((inputCity, index) => {
  inputCity.addEventListener("click", function () {
    inputCityLabel.forEach((label) => label.classList.remove("active"));
    if (inputCity.checked) {
      inputCityLabel[index].classList.add("active");
    } else {
      inputCityLabel[index].classList.remove("active");
    }
  });
});
// Валидация инпута города
const inputCityValidation = () => {
  inputCity.forEach((inputCity, index, inputCitys) => {
    inputCity.addEventListener("focus", function () {
      inputCityLabel.forEach((label) => {
        label.classList.remove("invalid");
      });
    });
    if (inputCitys[0].checked || inputCitys[1].checked) {
      inputCityLabel[index].classList.remove("invalid");
      isCityValid = true;
    } else {
      inputCityLabel[index].classList.add("invalid");
      isCityValid = false;
    }
  });
};
// Кнопка отправки
const pf = document.querySelector(".profile-form")
// const profileFormSubmitButton = document.querySelector(".profile-form-submit");
// profileFormSubmitButton.addEventListener("click", function (e) 
pf.addEventListener("submit", (e) => {
  e.preventDefault();
  inputGenderValidation();
  inputSurnameValidation();
  inputNameValidation();
  inpuBirthDateValidation();
  inputSalaryValidation();
  inputIndexValidation();
  inputCityValidation();
  inputSumValidation();
  inputSumCountValidation();
  inputFirstContributionValidation();
  inputLastContributionValidation();
  inputSumContributionValidation();
  inputContributionAmountValidation();
  if (
    isGenderValid &&
    isSurnameValid &&
    isNameValid &&
    isBirthDateValid &&
    isInputIndexValid &&
    isCityValid &&
    isSalaryValid &&
    isInputSumValid &&
    isSumCountValid &&
    isFirstContributionValid &&
    isLastContributionValid &&
    isSumContributionValid &&
    isContributionAmountValid
  ) {
    inputGender.forEach((gender) => (gender.checked = false));
    inputGenderLabel.forEach((label) => label.classList.remove("active"));
    inputSurname.value = "";
    inputName.value = "";
    middleName.value = "";
    inputBirthday.value = "";
    inputBirthdayWrapper.classList.add("active");
    inputBirthdayWrapper.classList.remove("invalid");
    inputIndex.value = "";
    inputCity.forEach((city) => (city.checked = false));
    inputCityLabel.forEach((label) => label.classList.remove("active"));
    inputSalary.value = "";
    inputSum.value = "";
    inputSumCount.value = "";
    inputFirstContribution.value = "";
    inputFirstContributionWrapper.classList.add("active");
    inputFirstContributionWrapper.classList.remove("invalid");
    inputLastContribution.value = "";
    inputLastContributionWrapper.classList.add("active");
    inputLastContributionWrapper.classList.remove("invalid");
    inputSumContribution.value = "";
    inputContributionAmount.value = "";
    // profileForm.submit();
  } else {
    alert("Заполните обязательные поля");
  }
});
