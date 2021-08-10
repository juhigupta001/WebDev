let a =[1,2];
console.log("Hello JS");
console.log(a);


function func()
{
    let a=10;
    if(a==10)
    {
        console.log("side ", a);  
    }
    console.log("outside ", a);
}
func();

// let s ="juhi";
// console.log(s.substring(-3,-1) + "hh");
// console.log(s.slice(-4,-1)) 
console.log("--------")
function add (a,b,c)
{
    console.log(c+" 10");
}
add(1,2);

function math()
{
    return {
        up:function()
        {
console.log("up");
        },
        down:function()
        {
            console.log("down");
        }
    }
}
var ans= math();

(function(x)
{
    delete x;
    console.log(x);
    return x;

})(1);

var foo=
{
    
    bar:function()
    {
        console.log(this);
        return this.baz;
    },
    baz:1
   
};
foo.bar();
typeof (f = foo.bar)();

// (function(){
//     console.log (typeof arguments[0]());
// })(foo.bar);



 

