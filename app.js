
//DOM Elements
let display_time=document.getElementById('time');
let greeting=document.getElementById('greeting');
let name=document.getElementById('name');
let focus=document.getElementById('focus');
let date=document.getElementById('date');
let weekday=document.getElementById('day');
function showTime()
{
  //Get today's Date;
let today=new Date();
//Get Hours
let hours=today.getHours();
//Get minutes
let minutes=today.getMinutes();
//Get seconds
let seconds=today.getSeconds();
//Get Day
let day=today.getDay();
//Check for Am or PM
let AmPm=hours>=12?'PM':'AM';
if(hours<12)
{
  greeting.textContent="Good Morning"
  document.body.style.background='url(./img/morning.jpg) no-repeat';
  document.body.style.backgroundPosition="center";
}
else if(hours>=12 && hours<18)
{
  greeting.textContent="Good Afternoon"
  document.body.style.background='url(./img/evening.jpg) no-repeat';
  document.body.style.backgroundPosition="center";
}
else
{
  greeting.textContent="Good Evening"
  document.body.style.background='url(./img/night.jpg) no-repeat';
  document.body.style.backgroundPosition="center";
}
if(hours>12)
{
  hours=hours%12;
}
display_time.innerHTML=`${addZero(hours)}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${AmPm}`;
setTimeout(showTime,1000);
weekday.textContent=`(${getDay(day)})`;
}
function addZero(n)
{
  let num=n<10?'0':'';
  num=num+n;
  return(num);
}
function getDay(input)
{
  switch(input)
  {
    case 0: return 'Sunday';
              break;
    case 1: return 'Monday';
              break;
    case 2: return 'Tuesday';
              break;
    case 3: return 'Wednesday';
              break;
    case 4: return 'Thursday';
              break;  
    case 5: return 'Friday';
              break;
    case 6: return 'Saturday';
              break;
    case 7: return 'Sunday';
              break;
  }
}
function getName()
{
  if(localStorage.getItem('name')===null)
  {
    name.textContent='[Enter your name]'
  }
  else{
    name.textContent=localStorage.getItem('name');
  }
}
function getFocus()
{
  if(localStorage.getItem('focus')===null)
  {
    focus.textContent='[Enter Focus]'
  }
  else{
    focus.textContent=localStorage.getItem('name');
  }
}
function setName(e)
{
  if(e.type==='keypress')
  {
    if(e.keyCode==13)
    {
      localStorage.setItem('name',e.target.innerText);
      name.blur();  
    }
  }
  else{
    localStorage.setItem('name',e.target.innerText);
  }
}
function setFocus(e)
{
  if(e.type==='keypress')
  {
    if(e.keyCode==13)
    {
      localStorage.setItem('focus',e.target.innerText);
      name.blur();  
    }
  }
  else{
    localStorage.setItem('focus',e.target.innerText);
  }
}
name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);
//name.addEventListener('keypress',setName)
//function displayContent()
showTime();
getName();
getFocus();