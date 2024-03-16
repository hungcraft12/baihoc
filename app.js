localStorage.setItem("username" , ["Midori","Momoi","Arisu","Yuzu"] );
localStorage.setItem("password" , ["Die69","fun69"]);


var name = localStorage.getItem("username","password");

console.log(name);

// localStorage.removeItem("username");
// console.log(name);

// localStorage.clear();

var len = localStorage.length;

for (var i = 0; i < len ;i++) {
    var key = localStorage.key(i)
    console.log("Key: " + key + ", Value: " + localStorage.getItem(key));
}