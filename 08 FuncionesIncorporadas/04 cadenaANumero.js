let a= "10", b= "20";
a = Number(a);
b = Number(b);
console.log(a+b); // 30
console.log(typeof(a+b)); // number


a= "10", b= "20";
a = parseInt(a);
b = parseInt(b);
console.log(a+b); // 30
console.log(typeof(a+b)); // number

//TODO ahora de numero a cadena
a = 10;
b = 20;
a = String(a);
b = String(b);
console.log(a+b); // "1020"
console.log(typeof(a+b)); // string

a = 10, b = 20; 
a = a.toString();
b = b.toString();
console.log(a+b); // "1020"
console.log(typeof(a+b)); // string

