var likedproddb =[];


function cilckedliked(){
    window.location.href = "sample1.html"
    // return likedproddb;
    // document.getElementById(samp1).innerHTML = "Hello"
    // console.log("Prakash")
}

function likedprod(name){
    console.log(name)
    
    let proddb = [["Mobile","This prod is good",25000],["Shoe","This prod is good",2500],["Tshirt","This prod is good",2500],["Laptop","This prod is good",80000]];
    let filteredprod = proddb.filter( x =>{ return x[0] == name})
    console.log(filteredprod)
    likedproddb.push(filteredprod)
    console.log(likedproddb)
    displaylikedprod()
}

function displaylikedprod(){
    console.log(likedproddb)
    document.getElementById("samplemsg").innerHTML = "Hello"
}
