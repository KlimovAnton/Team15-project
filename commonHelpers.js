import{A as y,S as u}from"./assets/vendor-bbb3eb8c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const a={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),closeBtn:document.querySelectorAll(".header-close-btn"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};a.openMenuBtn.addEventListener("click",q);a.closeMenuBtn.addEventListener("click",v);a.closeBtn.forEach(t=>t.addEventListener("click",v));function q(){a.menu.classList.remove("is-hidden"),a.body.classList.add("no-scroll")}function v(){a.menu.classList.add("is-hidden"),a.body.classList.remove("no-scroll")}const x=document.querySelector(".about-me-list"),E={duration:400,showMultiple:!0,beforeOpen:t=>{const e=t.querySelector(".about-svg-arrow");e.style.transition="transform 0.5s",e.style.transform="rotate(180deg)"},beforeClose:t=>{const e=t.querySelector(".about-svg-arrow");e.style.transition="transform 0.5s",e.style.transform="rotate(0deg)"}},B=new y(x,E);B.open(0);const M=document.querySelector(".about-swiper"),A=document.querySelector(".about-swiper-list"),V=document.querySelector(".about-swiper-btn");function P(){const t=document.querySelectorAll(".about-swiper-item"),e=[];for(const i of t)e.push(i.textContent.trim());e[6]=e[0];const r=A.lastElementChild;r.textContent=e[6]}const k={watchOverflow:!1,oneWayMovement:!0,rewind:!0,speed:900,allowTouchMove:!1,loop:!0,slidesPerView:2,navigation:{nextEl:".about-swiper-btn"},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}};new u(M,k);V.addEventListener("click",P);document.addEventListener("DOMContentLoaded",function(){new y(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e),e.parentNode.classList.toggle("open")},onClose:function(e){console.log(e),e.parentNode.classList.toggle("open")}}),document.querySelectorAll(".arrow").forEach(function(e){e.addEventListener("click",function(){const r=this.closest(".faq-item"),i=r.querySelector(".faq-item-text");if(i.classList.toggle("show"),this.classList.toggle("rotate"),window.innerWidth>=1440){const n=document.querySelector(".faq-list").children,c=Array.from(n).indexOf(r);let l,d;c%2===0?(l=c,d=c+1):(l=c-1,d=c);const m=n[l],f=n[d];if(i.classList.contains("show")){const w=r.offsetHeight;m.style.height=w+"px",f.style.height=w+"px"}else m.style.height="",f.style.height=""}})})});const g=document.querySelector(".section-cover");let h=Array.from(g.querySelectorAll(".cover-picture"));window.addEventListener("scroll",I);function I(){const t=g.getBoundingClientRect();t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)?h.forEach(e=>{e.classList.add("show")}):h.forEach(e=>{e.classList.remove("show")})}const C=document.querySelector(".project-container"),O={speed:1e3,allowTouchMove:!1,navigation:{nextEl:".slide-next",prevEl:".slide-prev"},keyboard:{enabled:!0,onlyInViewport:!1}};new u(C,O);async function j(){try{const e=await(await fetch("https://portfolio-js.b.goit.study/api/reviews")).json();if(e.length===0){alert("Not found");return}N(e);const r=document.querySelector(".reviews-wrapper-check"),i={speed:1e3,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},touch:!0,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},allowSlideNext:!0},s=new u(r,i);document.querySelector(".swiper-btn-wrap").classList.remove("hidden")}catch(t){console.error("Error fetching reviews:",t),alert("An error occurred while fetching reviews")}}function N(t){const e=document.querySelector(".reviews-wrapper");e.innerHTML="";let r="";for(const{author:i,avatar_url:s,review:n}of t)r+=`
        <li class="swiper-slide swiper-style">
          <img class="review-avatar" src="${s}" alt="${i}" width="48" height="48" />
          <h3 class="review-autor">${i}</h3>
          <p class="review-text">${n}</p>
        </li>
      `;e.insertAdjacentHTML("beforeend",r)}j();const o={form:document.querySelector(".js-footer-form"),closeBtn:document.querySelector(".js-modal-close-btn"),submitBtn:document.querySelector(".footer-form-btn"),modal:document.querySelector(".backdrop"),input:document.querySelector(".js-input"),messageBox:document.querySelector(".message-box"),backdrop:document.querySelector(".backdrop")},b=()=>{o.messageBox.classList.contains("error")&&o.messageBox.classList.remove("error"),o.messageBox.classList.contains("success")&&o.messageBox.classList.remove("success"),o.messageBox.textContent="",o.input.setAttribute("aria-invalid",!1),o.input.setAttribute("aria-valid",!1)},L=()=>{o.messageBox.classList.add("success"),o.messageBox.textContent="Success!",o.input.setAttribute("aria-valid",!0)};function S(t){const e=t.checkValidity();if(e)b();else{o.messageBox.classList.add("error");const r=T(o.input);o.messageBox.textContent=r||o.input.validationMessage,o.input.setAttribute("aria-invalid",!0)}return e}o.input.addEventListener("blur",()=>{S(o.form)&&L()});o.input.addEventListener("input",()=>{if(o.input.value.length>2){b();let t=25;o.input.value.length>t&&(o.input.value=o.input.value.substring(0,t)+"..."),o.input.checkValidity()&&L()}});function T(t){const e=t.validity;if(e.valueMissing)return"Please enter your email";if(e.typeMismatch)return"Invalid email, try again!"}o.form.addEventListener("submit",H);function H(t){if(t.preventDefault(),S(o.form)){const{email:r,comment:i,button:s}=t.currentTarget.elements;s.disabled=!1;const n={email:r.value,comment:i.value},c={method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}};fetch("https://portfolio-js.b.goit.study/api-docs/",c).then(l=>o.modal.classList.remove("is-hidden"),t.currentTarget.reset()).catch(l=>console.error("Error:",l))}}o.closeBtn.addEventListener("click",p);o.backdrop.addEventListener("click",p);document.addEventListener("keydown",W);function p(){o.modal.classList.add("is-hidden")}function W(t){t.key==="Escape"&&p()}
//# sourceMappingURL=commonHelpers.js.map
