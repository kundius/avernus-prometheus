import "whatwg-fetch";
import intlTelInput from "intl-tel-input";

const inputClasses = document.querySelectorAll(".js-input-classes") || [];
inputClasses.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (!!e.target.value) {
      input.classList.add('_filled')
    } else {
      input.classList.remove('_filled')
    }
  })
  input.addEventListener("change", (e) => {
    if (!!e.target.value) {
      input.classList.add('_filled')
    } else {
      input.classList.remove('_filled')
    }
  })
  input.addEventListener("focus", (e) => {
    input.classList.add('_focused')
  })
  input.addEventListener("blur", (e) => {
    input.classList.remove('_focused')
  })
})

const phoneInputs = document.querySelectorAll(".js-input-phone") || [];
phoneInputs.forEach((el) => {
  const iti = intlTelInput(el, {
    initialCountry: "ru",
    preferredCountries: [
      "ru",
      "kz",
      "ua",
      "by",
    ],
    localizedCountries: {
      ru: "Россия",
      kz: "Казахстан",
      ua: "Украина",
      by: "Беларусь",
    },
  });
  el.addEventListener("countrychange", function (e) {
    const country = iti.getSelectedCountryData();
    if (country.dialCode) {
      $(el).inputmasks("remove");
      $(el).inputmask("+#{*}", maskOpts.inputmask);
      $(el).inputmasks($.extend(true, {}, maskOpts, {
        list: listCountries
      }));
    }
  });

  const listCountries = $.masksSort($.masksLoad(inputmaskParams.phoneCodes), ['#'], /[0-9]|#/, "mask");
  const maskOpts = {
    inputmask: {
      definitions: {
        '#': {
          validator: "[0-9]",
          cardinality: 1
        }
      },
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: false,
      onUnMask: function (maskedValue, unmaskedValue) {
        return '+' + unmaskedValue;
      }
    },
    match: /[0-9]/,
    replace: '#',
    listKey: "mask"
  };

  let maskIsInit = false
  el.addEventListener('focus', () => {
    if (!maskIsInit) {
      maskIsInit = true;
      el.value = '7';
      el.dispatchEvent(new Event('change'));
      $(el).inputmasks($.extend(true, {}, maskOpts, {
        list: listCountries,
      }));
    }
  });
});

jQuery.validator.addMethod(
  "laxEmail",
  function (value, element) {
    return (
      this.optional(element) ||
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    );
  },
  "Некорректный e-mail."
);

jQuery.validator.addMethod(
  "maskedPhone",
  function (value, element) {
    return element.imask.masked.isComplete
  },
  "Некорректный телефон."
);

function submitForm(form, validator) {
  const emailInputs = form.querySelectorAll(".js-input-email") || [];
  emailInputs.forEach((el) => {
    el.value = el.value.trim().replace(/[\u0000-\u0008,\u000A-\u001F,\u007F-\u00A0]+/g, '');
  });

  fetch(form.getAttribute("action"), {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        form.reset();
        validator.showErrors({
          action: response.message,
        });
        $("#action-error", form).addClass("error_success");
        setTimeout(() => {
          validator.resetForm();
        }, 4000);
        if (response.redirect) {
          window.location = response.redirect;
        }
      } else {
        validator.showErrors({
          action: response.message,
        });
      }
    });
}

var individualFormValidator = $("#individual-form").validate({
  rules: {
    name: {
      required: true,
    },
    phone: {
      required: true,
    },
    approve: {
      required: true,
    },
    telegram: {
      required: {
        depends: function (element) {
          return $("#contact-field").val() === 'Telegram';
        }
      }
    }
  },
  messages: {
    name: {
      required: "Введите имя",
    },
    phone: {
      required: "Введите телефон (WhatsApp, Viber)",
    },
    approve: {
      required: "Вы должны согласиться с условиями",
    },
    telegram: {
      required: "Введите аккаунт Telegram",
    },
  },
  errorPlacement: function (error, element) {
    if (element.hasClass('js-input-phone')) {
      error.insertAfter(element.parent().parent());
    } else if (element.hasClass('js-input-classes')) {
      error.insertAfter(element.parent());
    } else if (element.parent().prop("tagName") === 'LABEL') {
      error.insertAfter(element.parent());
    } else {
      element.after(error);
    }
  },
  submitHandler: function (form) {
    submitForm(form, individualFormValidator);
  },
});

var faqFormValidator = $("#faq-form").validate({
  rules: {
    email: {
      required: true,
      email: true,
      laxEmail: true,
    },
  },
  messages: {
    email: {
      required: "Введите e-mail",
      email: "Некорректный e-mail",
    },
  },
  errorPlacement: function (error, element) {
    const approveEl = element.closest('.modal-form__approve')
    if (approveEl.length) {
      approveEl.after(error);
    } else {
      element.after(error);
    }
  },
  submitHandler: function (form) {
    submitForm(form, faqFormValidator);
  },
});
