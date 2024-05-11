   

    function changeimg(prod){
            

            fetch("https://retoolapi.dev/e4DryP/liked_products",{
                        method:"GET",
                        headers: { "Content-Type": "application/json; charset=UTF-8" },
        
                })

                .then((response) => {
                    return response.json();
                })

                .then((data) =>{
                    // console.log(data)
                    let selectedprod = data.filter( x=>{
                        return x.prod_name == prod
                    })
                    // console.log(selectedprod)
                    if(selectedprod.length >0){

                        let displikedprd = document.getElementById(selectedprod[0].prod_name);
                        displikedprd.src = "./Assets/Images/heart_unlike.jpeg"

                        fetch("https://retoolapi.dev/e4DryP/liked_products/"+selectedprod[0].id,{
                                method:"DELETE",
                                headers: { "Content-Type": "application/json; charset=UTF-8" },
        
                        })

                        .then((response) => {
                            return response.json();
                        })

                        .then((data) =>{
                            
                            displaylikedproduct()

                        })
                            

                    }
                    else{
                        

                        fetch("https://retoolapi.dev/BEZhDp/product_database",{
                        method:"GET",
                        headers: { "Content-Type": "application/json; charset=UTF-8" },
        
                        })

                        .then((response) => {
                                return response.json();
                        })

                        .then((data) =>{
                            let likedprod = data.filter( x=>{
                                return x.prod_name == prod
                            })
                            console.log(likedprod)
                            let displikedprd = document.getElementById(likedprod[0].prod_name);
                            displikedprd.src = "./Assets/Images/heart_like.jpeg"

                            fetch("https://retoolapi.dev/e4DryP/liked_products",{
                                method:"POST",
                                headers: { "Content-Type": "application/json; charset=UTF-8" },
                                body: JSON.stringify({
                                        "prod_name": likedprod[0].prod_name,
                                        "price": likedprod[0].price,
                                        "image": likedprod[0].image
                                })
        
                            })

                            .then((response) => {
                                return response.json();
                            })

                            .then((data) =>{
                                displaylikedproduct()

                            })

                        })
                           
                    }
                
                })



            
            
    }


    function addcart(product){

        fetch("https://retoolapi.dev/BEZhDp/product_database",{
                        method:"GET",
                        headers: { "Content-Type": "application/json; charset=UTF-8" },
                        })

                        .then((response) => {
                                return response.json();
                        })

                        .then((data) =>{
                            let cartprod = data.filter( x =>{
                                return x.prod_name == product
                            })
                            console.log(cartprod)
                            fetch("https://retoolapi.dev/bDZK3R/cart_products",{
                                        method:"POST",
                                        headers: { "Content-Type": "application/json; charset=UTF-8" },
                                        body: JSON.stringify({
                                                "prod_name": cartprod[0].prod_name,
                                                "price": cartprod[0].price,
                                                "image": cartprod[0].image
                                            })
        
                                    })

                                    .then((response) => {
                                        return response.json();
                                    })

                                    .then((data) =>{
                                            
                                            alert(cartprod[0].prod_name+" added to cart")
                                            
                                            



                            })
                    })


    }

    function subscribe(){
        mail = document.getElementById("subsemail").value;
        if(mail == ""){
            alert("Enter Email..!")
        }
        else{
            alert("Subscribed..!")
        }

    }







































    
        
