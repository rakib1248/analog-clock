const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");

setInterval(() => {
  let date = new Date();
  let s_current = date.getSeconds();
  let m_current = date.getMinutes();
  let h_current = date.getHours();
  sec.style.transform = `rotate(${anaLog(60, s_current)}deg)`;
  min.style.transform = `rotate(${anaLog(60, m_current)}deg)`;
  hour.style.transform = `rotate(   ${anaLog(12, h_current)}deg)`;
}, 1000);

const anaLog = (time, currentTime) => {
  return (360 * currentTime) / time;
};
