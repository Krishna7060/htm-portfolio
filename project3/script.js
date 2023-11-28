const getcolor = ()=>{
    const randomnumber= Math.floor(Math.random()*16777215);
    const randcode="#"+randomnumber.toString(16)
    console.log(randomnumber);
    document.body.style.backgroundColor=randcode;
    document.getElementById("colorbox").innerText=randcode;
}
document.getElementById("btn").addEventListener("click",getcolor)
getcolor;

