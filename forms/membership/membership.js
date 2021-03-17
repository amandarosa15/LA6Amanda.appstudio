
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
let i = 0

btnEnter.onclick = function() {
        let newMember = iptName.value
        if (members.includes(newMember))
            lblResult.value = "You are a member." 
        else {
            members.push(newMember)
            lblResult.value = "You have been added as a member."
            }
}


