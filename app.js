
let whichchoose=document.querySelector(".whichchoose");
let userscore=document.querySelector(".user");

let computerscore=document.querySelector(".computer");

let imagesAccess=document.querySelectorAll("img");

const RandomNoGenerator=()=>{
  arr=["rock","paper","scessor"];
  let generate=Math.floor(Math.random()*3);
  return arr[generate];
}



imagesAccess.forEach((access)=>{
  access.addEventListener("click",()=>
    {
      let valueOfImages=access.className;
      let storeRandom=RandomNoGenerator();
      if(valueOfImages==="Rock")
        {
          if(storeRandom==="scessor")
            {
              userscore.innerText=parseInt(userscore.innerText) + 1;
              whichchoose.innerText="You=Rock||Computer=Scessor => You are Winner"
            }

            else if(storeRandom=="paper"){
              computerscore.innerText=parseInt(computerscore.innerText) + 1;
              whichchoose.innerText="You=Rock||Computer=Paper => Computer are Winner"
            }
        }
      
        else if(valueOfImages==="Paper")
          {
            if(storeRandom==="rock")
              {
                userscore.innerText=parseInt(userscore.innerText) + 1;
                    whichchoose.innerText="You=Paper||Computer=rock => You are Winner"
              }

              else if(storeRandom=="scessor"){
                computerscore.innerText=parseInt(computerscore.innerText) + 1;
                whichchoose.innerText="You=Paper||Computer=scessor => Computer are Winner"
              }
          }

          else if(valueOfImages==="Scissors")
            {
              if(storeRandom==="paper")
                {
                  userscore.innerText=parseInt(userscore.innerText) + 1;
                      whichchoose.innerText="You=Scessor||Computer=paper => You are Winner"
                }

              else if(storeRandom=="rock"){
                computerscore.innerText=parseInt(computerscore.innerText) + 1;
                whichchoose.innerText="You=Scessor||Computer=rock => Computer are Winner"
              }
            }

            
  
          
    }
  
  )
}
)



