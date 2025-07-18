// let hour = document.querySelector("#hour");
// let minute = document.querySelector("#minute");
// let second = document.querySelector("#second");

setInterval(() => {
    d = new Date();
     htime = d.getHours();
     mtime = d.getMinutes();
     stime = d.getSeconds();
      hrotation = 30*htime + mtime/2;
      mrotation = 6*mtime;
      srotation = 6*stime;

      hour.style.transform = `rotate(${hrotation}deg)`;
      minute.style.transform = `rotate(${mrotation}deg)`;
      second.style.transform = `rotate(${srotation}deg)`;
   
},1000);

//  d = new Date(() => {
//     setInterval(()=>{
//          hrotation = 30*hour + mtime/2
//          mrotation = 6*minute;
//         srotation = 6*second;
//         hour.style.transform = `rotate(${hrotation}deg)`
//         minute.style.transform = `rotate(${mrotation}}deg)`
//         second.style.transform = `rotate(${srotation}deg)`;
// });

//  },1000);