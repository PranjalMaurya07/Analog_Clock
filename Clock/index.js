setInterval(()=>{
    d=new Date();
    hrs=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    hrs_rotation=(30*hrs+min/2);
    min_rotation=6*min;
    sec_rotation=6*sec;

    hour.style.transform=`rotate(${hrs_rotation}deg)`;
    minute.style.transform=`rotate(${min_rotation}deg)`;
    second.style.transform=`rotate(${sec_rotation}deg)`;
},1000);