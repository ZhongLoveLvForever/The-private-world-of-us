//登录验证
function panduan(){
    var zhanghao = document.getElementById("1").value;
    var mima = document.getElementById("2").value;
    if(zhanghao=="860811712" && mima=="zhw20010731"){
      location='page2.html'
    }
    else{
      alert('宝宝，输错啦！');
    }
}


//背景音乐播放
function bofang(){
    var audio = document.getElementById('music'); 
    if(audio.paused){                 
        audio.play();  
    }
    else{
        audio.pause();
    } 
}

