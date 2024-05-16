import { rek } from "./main";

export function registation() {
  let body = document.querySelector("body");
  let clickBtn = document.querySelector("#btn2");
  const regis = document.querySelector(".reg2");
  const reg = document.querySelector(".reg");
//   const btnBox = document.querySelector("#btnBox");
  let reklama = document.querySelector(".reklama");
  clickBtn.addEventListener("click", () => {
    regis.style.display = "none";
    regis.style.display = "none";
    thankyou.style.display = "block";
  });

  let registation = document.querySelector(".registation");

  let clear = document.querySelector(".close2");
  let clear2 = document.querySelector(".close3");

  let thankyou = document.querySelector(".thank");

//   btnBox.addEventListener("click", () => {
//     thankyou.style.display = "none";
//     regis.style.display = "none";
//     reg.style.display = "block";
//   });

  clear.addEventListener("click", () => {
    thankyou.style.display = "none";
    regis.style.display = "none";
    reg.style.display = "none";
    reklama.style.display = "block";
    body.style.overflow = ""
  });

  clear2.addEventListener("click", () => {
    regis.style.display = "none";
    reklama.style.display = "block";
    body.style.overflow = ""
  });

  registation.addEventListener("click", () => {
    reg.style.display = "none";
    regis.style.display = "block";
  });

  let voytiBtn = document.querySelector(".voytiBtn");

  voytiBtn.addEventListener("click", () => {
    reg.style.display = "block";
    regis.style.display = "none";
  });
}

registation();

export let patterns = {
  name: /^[a-z ,.'-]+$/i,
  surname: /^[a-z ,.'-]+$/i,
  password: /^[a-z ,.'-]+$/i,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
};

export const inps = document.querySelectorAll("input");
export const btn = document.querySelector("#btnBox");
export const form = document.forms.login;

export let txt = "";

export function myModule() {
  for (let i = 0; i < inps.length; i++) {
    inps[i].addEventListener("keyup", (e) => {
      txt = e.target.value;
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = {};

    let fm = new FormData(form);

    fm.forEach((value, key) => {
      user[key] = value;
      console.log(user);
    });


    // location.href = "/html/login.html";
    
    const regis = document.querySelector(".reg2");
    const reg = document.querySelector(".reg");
    const btnBox = document.querySelector("#btnBox");
    let thankyou = document.querySelector(".thank");
    
    btnBox.addEventListener("click", () => {
      thankyou.style.display = "none";
        regis.style.display = "none";
        reg.style.display = "block";
      });
      
      // localStorage.setItem("user", JSON.stringify(user));
  });

  inps.forEach((inp) => {
    inp.onkeyup = () => {
      console.log(patterns[inp.name].test(inp.value));
      if (patterns[inp.name].test(inp.value)) {
        inp.parentElement.classList.remove("errorField");
      } else {
        inp.parentElement.classList.add("errorField");
      }
    };
  });
}

myModule()