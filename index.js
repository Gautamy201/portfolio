const clints = [
  {
    imgUrl: "../assets/images/—Pngtree—web page ui default avatar_3801746.png",
    name: "Gautam kamlesh yadav",
    dignation: "fonder",
    feedBack:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum distinctio totam saepe, esse, nisi fuga tempore magni facere dolore est dolorem vitae odio aspernatur tempora! Accusamus eveniet consequuntur",
  },
  {
    imgUrl: "../assets/images/—Pngtree—web page ui default avatar_3801746.png",
    name: "demo2",
    dignation: "fonder",
    feedBack:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum distinctio totam saepe, esse, nisi fuga tempore magni facere dolore est dolorem vitae odio aspernatur tempora! Accusamus eveniet consequuntur quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum distinctio totam ",
  },
  {
    imgUrl: "../assets/images/—Pngtree—web page ui default avatar_3801746.png",
    name: "demo3",
    dignation: "fonder",
    feedBack:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum distinctio totam saepe, esse, nisi fuga tempore magni facere dolore est dolorem vitae odio aspernatur tempora! Accusamus eveniet consequuntur quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum distinctio totam ",
  },
];

const popWindow = document.getElementById("pop-window");
const header = document.getElementById("header");
const socialIcons = document.getElementById("side-social-icon");
const tost = document.getElementById("toast");

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function popWindowTogalBtn() {
  if (popWindow.style.display === "none") {
    popWindow.style.display = "block";
    header.style.opacity = "0";
    socialIcons.style.opacity = "0";
  } else {
    popWindow.style.display = "none";
    header.style.opacity = "1";
    socialIcons.style.opacity = "1";
  }
}
// -------------------------------

clints.forEach((clint) => {
  const clinte = clinteTemp(clint);
  document.getElementById("clint-cards").append(clinte);
});

// -------------------------------

const form = document.querySelector("form button");

const loder = document.getElementById("loading");
form.addEventListener("click", (event) => {
  event.preventDefault();
  loder.style.display = "flex";
  sendMail();
});

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_o1ppws9";
  const templateId = "template_qzcug1r";
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      tost.innerHTML = susessTost();
      tost.style.top = "20px";
      loder.style.display = "none";
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch((err) => {
      tost.style.top = "20px";
      loder.style.display = "none";
    });
}
// --------------------------------

function clinteTemp(clint) {
  const swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide px-[100px] py-[50px]";
  const card = document.createElement("div");
  card.className =
    "card px-[2rem] py-[2.25rem] flex items-center justify-between relative overflow-hidden rounded-[10px] w-full h-full";
  const cardImg = document.createElement("img");
  cardImg.className = "bg-slate-500 w-[160px] h-[160px] rounded-full cardImg";
  cardImg.src = clint.imgUrl;
  const cardDetail = document.createElement("p");
  cardDetail.className = "w-[70%] clintDetailContainer";
  cardDetail.textContent = clint.feedBack;
  const clinteDetail = document.createElement("div");
  clinteDetail.className =
    "absolute bottom-[2.5rem] right-[2.5rem] text-right clintDetail";
  const clinteName = document.createElement("p");
  clinteName.className = "text-[1.5rem] capitalize";
  clinteName.textContent = clint.name;
  const clinteDignation = document.createElement("p");
  clinteDignation.className = "text-[1.3rem] capitalize";
  clinteDignation.textContent = clint.dignation;
  //
  clinteDetail.append(clinteName, clinteDignation);

  card.append(cardImg, cardDetail, clinteDetail);
  swiperSlide.append(card);
  return swiperSlide;
}

function susessTost() {
  let tostTem = `<div class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Form summited successfully.</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" onclick="closeTost()">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>`;
  return tostTem;
}

function dangerTost() {
  let tostTem = `<div id="toast-danger" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        <span class="sr-only">Error icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Something wrong try again </div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close" onclick="closeTost()"  >
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>

    </button>
</div>`;
  return tostTem;
}

function closeTost() {
  tost.style.top = "-65px";
}

function isEmail(email) {
  var atsymbol = email.indexOf("@");
  if (atsymbol < 1) return false;
  var dot = email.indexOf(".");
  if (dot <= atsymbol + 2) return false;
  if (dot === email.length - 1) return false;
  return true;
}
console.log(isEmail());
function validate() {
  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const messageVal = message.value.trim();

  if (nameVal === "") {
    setErrorMesg(name, "Name cannot be blank");
  } else if (nameVal.length <= 2) {
    setErrorMesg(name, "name min char 3");
  } else {
    setSuccessMsg(name);
  }

  if (emailVal === "") {
    setErrorMesg(email, "Email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMesg(email, "Not a valid email");
  } else {
    setSuccessMsg(email);
  }

  if (messageVal === "") {
    setErrorMesg(message, "Message cannot be blank");
  } else if (messageVal.length <= 20) {
    setErrorMesg(message, "Message at least 20 char");
  } else {
    setSuccessMsg(message);
  }
}

function setErrorMesg(input, errorMsg) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");
  small.innerText = errorMsg;
}

function setSuccessMsg(input, setSuccessMsg) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");
  small.innerText = "";
  const check = inputControl.querySelector(".check");
  check.style.display = "block";
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("submitBtn").style.opacity = "1";
}
