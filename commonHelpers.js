(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const t={form:document.querySelector(".js-footer-form"),closeBtn:document.querySelector(".js-modal-close-btn"),modal:document.querySelector(".backdrop"),input:document.querySelector(".js-input")};t.input.setAttribute("aria-invalid",!1);t.input.setAttribute("aria-valid",!1);const l=document.createElement("div");l.classList.add("error");const r=document.createElement("div");r.classList.add("succes");function u(n){n.setAttribute("novalidate",""),n.addEventListener("submit",e=>{n.checkValidity()||e.preventDefault()}),t.input.insertAdjacentElement("afterend",l),t.input.insertAdjacentElement("afterend",r),t.input.addEventListener("blur",()=>{t.input.checkValidity()}),t.input.addEventListener("input",()=>{if(t.input.checkValidity()){t.input.setAttribute("aria-invalid",!1),t.input.setAttribute("aria-valid",!0),r.textContent="Succes!",l.textContent="";return}else t.input.setAttribute("aria-valid",!1),r.textContent="",t.input.setAttribute("aria-invalid",!0),l.textContent="Invalid email, try again!"})}u(t.form);t.form.addEventListener("submit",m);function m(n){n.preventDefault(),r.classList.remove("succes"),t.input.setAttribute("aria-valid",!1),r.textContent="";const{email:e,comment:s}=n.currentTarget.elements,c={email:e.value,comment:s.value},i={method:"POST",body:JSON.stringify(c),headers:{"Content-type":"application/json"}};fetch("https://portfolio-js.b.goit.study/api-docs/",i).then(o=>t.modal.classList.remove("is-hidden"),n.currentTarget.reset()).catch()}t.closeBtn.addEventListener("click",f);function f(){t.modal.classList.add("is-hidden")}const a=document.getElementById("covers");window.addEventListener("scroll",()=>{p(a)&&a.querySelectorAll(".cover-line").forEach((n,e)=>{setTimeout(()=>{n.classList.add("show")},e*100)})});function p(n){const e=n.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function y(){const n={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};n.openMenuBtn.addEventListener("click",e),n.closeMenuBtn.addEventListener("click",e);function e(){n.menu.classList.toggle("is-hidden"),n.body.classList.toggle("no-scroll")}}y();
//# sourceMappingURL=commonHelpers.js.map
