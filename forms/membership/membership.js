
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


Verify.onclick=function(){
  let InputName = name.value
  let check= members.includes(InputName)
  if (check == true)
    lblMessage.textContent = "You are already a member!"
  if (check == false) {
    members.push(InputName)
    lblMessage.textContent = "You were not a member :(, but you are now!"
    }
}
