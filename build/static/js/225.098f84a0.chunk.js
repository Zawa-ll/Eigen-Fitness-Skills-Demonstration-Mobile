/*! For license information please see 225.098f84a0.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkskills_demonstration=globalThis.webpackChunkskills_demonstration||[]).push([[225],{225:(e,t,s)=>{s.r(t),s.d(t,{startFocusVisible:()=>r});const o="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],s=!0;const r=e?e.shadowRoot:document,i=e||document.body,c=e=>{t.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),t=e},a=()=>{s=!1,c([])},d=e=>{s=n.includes(e.key),s||c([])},u=e=>{if(s&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains("ion-focusable")));c(t)}},l=()=>{r.activeElement===i&&c([])};r.addEventListener("keydown",d),r.addEventListener("focusin",u),r.addEventListener("focusout",l),r.addEventListener("touchstart",a),r.addEventListener("mousedown",a);return{destroy:()=>{r.removeEventListener("keydown",d),r.removeEventListener("focusin",u),r.removeEventListener("focusout",l),r.removeEventListener("touchstart",a),r.removeEventListener("mousedown",a)},setFocus:c}}}}]);
//# sourceMappingURL=225.098f84a0.chunk.js.map