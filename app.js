const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 9999,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 8999,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 7999,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 7999,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
function validateName() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(nameInput.value)) {
        nameError.textContent = "Please enter a valid name.";
    } else {
        nameError.textContent = "";
    }
}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phone-error");
    const phonePattern = /^\+?\d{1,15}$/;

    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Please enter a valid phone number.";
    } else {
        phoneError.textContent = "";
    }
}

function validateAddress() {
    const addressInput = document.getElementById("address");
    const addressError = document.getElementById("address-error");

    // You can add custom address validation if needed

    if (addressInput.value.trim() === "") {
        addressError.textContent = "Please enter your address.";
    } else {
        addressError.textContent = "";
    }
}

function validateCardNumber() {
    const cardNumberInput = document.getElementById("cardNumber");
    const cardNumberError = document.getElementById("cardNumber-error");
    const cardNumberPattern = /^\d{12}$/;

    if (!cardNumberPattern.test(cardNumberInput.value)) {
        cardNumberError.textContent = "Card number must be 12 digits.";
    } else {
        cardNumberError.textContent = "";
    }
}

function validateExpMonth() {
    // Add validation for expiration month if needed
}

function validateExpYear() {
    // Add validation for expiration year if needed
}

function validateCvv() {
    // Add validation for CVV if needed
}

function validateForm() {
    // Implement form-level validation logic if needed
    // Example: Check if all fields are valid before submitting the form
}
