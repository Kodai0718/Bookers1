var name;
var username;
var userresult;
var usercomments;

username = prompt("お名前を教えて下さい。");
if (username == "") {
    username="名無し";
}
document.getElementById("name").innerHTML = username;

var rand = Math.floor( Math.random() * 10);
if (rand <= 1) {
  userresult = "大吉";
  usercomments = "おめでとうございます！！";
} 
else if (rand <= 3) {
  userresult = "中吉";
  usercomments = "中だけど上から2番目ですよ！";
} 
else if (rand <= 5) {
  userresult = "小吉";
  usercomments = "心は大きくいきましょう！";
} 
else if (rand <= 8) {
  userresult = "吉";
  usercomments = "普通が一番！";
}
else {
  userresult = "凶";
  usercomments = "残念、、でも逆にラッキー！！";
}
document.getElementById("result").innerHTML = userresult;
document.getElementById("comments").innerHTML = usercomments;
