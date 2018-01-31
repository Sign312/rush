import "./style.css";

const gameCanvasEl = document.querySelector("#gameCanvas");

gameCanvasEl.width = window.innerWidth;
gameCanvasEl.height = window.innerHeight;

const ctx = gameCanvasEl.getContext("2d");
