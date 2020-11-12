document.querySelector(".one").addEventListener("click", function(){
    document.getElementById("text").value +=  1;
    
})

document.querySelector(".two").addEventListener("click", function(){
    document.getElementById("text").value += 2;
})

document.querySelector(".tree").addEventListener("click", function(){
    document.getElementById("text").value +=  3;
})

document.querySelector(".four").addEventListener("click", function(){
    document.getElementById("text").value +=  4;
})

document.querySelector(".five").addEventListener("click", function(){
    document.getElementById("text").value +=  5;
})

document.querySelector(".six").addEventListener("click", function(){
    document.getElementById("text").value += 6;
})

document.querySelector(".seven").addEventListener("click", function(){
    document.getElementById("text").value +=  7;
})

document.querySelector(".eight").addEventListener("click", function(){
    document.getElementById("text").value += 8;
})

document.querySelector(".nine").addEventListener("click", function(){
    document.getElementById("text").value += 9;
})

document.querySelector(".plus").addEventListener("click", function(){
    document.getElementById("text").value += " " + "+" + " " ;
    
})
   
document.querySelector(".minus").addEventListener("click", function(){
    document.getElementById("text").value += " " + "-" + " " ;
})

document.querySelector(".multiplay").addEventListener("click", function(){
    document.getElementById("text").value += " " + "*" + " " ;
})
  
document.querySelector(".zero").addEventListener("click", function(){
    document.getElementById("text").value +=  "0";
})

document.querySelector(".divide").addEventListener("click", function(){
    document.getElementById("text").value += " " +  "/" + " " ;
})


document.querySelector(".dot").addEventListener("click", function(){
    document.getElementById("text").value +=  ".";
})

document.querySelector(".Percentage").addEventListener("click", function(){
    document.getElementById("text").value += " " + "%" + " " ;
    
})

document.querySelector(".exponentiation").addEventListener("click", function(){
    document.getElementById("text").value += " " + "**" + " ";
    
    
})

document.querySelector(".pi").addEventListener("click", function(){
    document.getElementById("text").value += " " + "pi" + " " ;
    
    
})

document.querySelector(".delate").addEventListener("click", function(){
    document.getElementById("text").value =  "";
})

 document.querySelector(".sum").addEventListener("click", function(){
  const d = document.getElementById("text").value;

var arr =[];
arr.push(d)


  const r = arr.toString();
  const r1 = r.includes("+");
  const r2 = r.includes("-");
  const r3 = r.includes("%");
  const r4 = r.includes("*");
  const r5 = r.includes("/");
  const r6 = r.includes("pi");
  const r7 = r.includes("**");
  const r8 = r.includes("-", "+", "*", "/");
  const t1 = r.split(" ");

  const nums = t1.filter(function(elem){
      return !isNaN(elem);
  })
  
const final = nums.map(function(val){
   return parseFloat(val)
    
})

  if(r1===true){
      const tt = final.reduce(add);
      function add(a,b){
          return a+b;
      }
      
    document.getElementById("text").value = tt
    
      
  }
  
  if(r2===true){
      const tt = final.reduce(add);
      function add(a,b){
          return a-b;
      }
    document.getElementById("text").value = tt
    
      
  }
  
   if(r3===true){
      const tt = final.reduce(add);
      function add(a, b){
          return  ((a/100)*b);
      }
    document.getElementById("text").value = tt
    
      
  }
  

  if(r4===true){
    const tt = final.reduce(add);
    function add(a, b){
        return  (a*b);
    }
  document.getElementById("text").value = tt
  
    
}

if(r5===true){
    const tt = final.reduce(add);
    function add(a, b){
        return  (a/b).toFixed(2);
    }
  document.getElementById("text").value = tt

    
}

if(r6===true){
    const tt = final.reduce(add);
    function add(a){
        return (Math.PI)*a;
    }
  document.getElementById("text").value = tt
 
    
}

if(r7===true){
    const tt = final.reduce(add);
    function add(a, b){
        return Math.pow(a, b);
    }
  document.getElementById("text").value = tt
  
    
}

if(r8===true){
    document.getElementById("text").value = "Upps... Mój błąd.";
    console.log(aa.small())
}

});


