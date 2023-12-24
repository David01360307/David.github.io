alert("歡迎參觀本網站");
var myname = prompt("請輸入你的名字");
var myage = prompt("請輸入你的年齡");
var num1 = prompt("請輸入你的住址"); //解析成it
var num2 = prompt("請輸入你的信用卡號");
alert("你好阿" + myname);

var times = 0;
var original;
var current_position = 0;

function processFormData(){
    var account_content = document.getElementById("name");
    var ac = account_content.value;
    var password_content = document.getElementById("password");
    var pass = password_content.value;
    
    if (times < 1){
        original = password_content.value;
        alert("歐，你的帳號是" + ac +"，你覺得我不會外流?");
        alert("恩，還有密碼，那就麻煩你再輸入一次吧");
        
    }
    else if (times == 1){
        alert("歐，你的帳號是" + ac +" ; 密碼是" + pass + "，你還是覺得我不會外流?");
        if (pass !== original){
            alert("阿怎麼跟你第一次輸的不一樣");
        }
        alert("真感謝你");
    }
    else if (times > 1){
        alert("不用再輸入了，我會替你保管好的");
    }
    times += 1;
    document.getElementById("form").reset(); 
}

function textbox(){
    var textbox_content = document.getElementById("textarea");
    var box = textbox_content.value;
    alert("收到您的");
    alert(box);
    alert("意見");
}

function movebutton(){
    var me = document.getElementById("test")
    current_position += Math.random() * (50 + 50) - 50;
    me.style.left = current_position + "px";
    me.style.top = current_position + "px";
}


document.write("你看不到我");
