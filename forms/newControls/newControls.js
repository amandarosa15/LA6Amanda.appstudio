btnAnswer.onclick=function(){
  HeadWelcome.textContent="GO JAYS!"
  if (status==0)
    alertAnswer.value=`You are a bluejay Student  from ${dropStates.value}`
  else if (status==1)
    alertAnswer.value=`You are a bluejay Professor from ${dropStates.value}`
  else if (status==2)
    alertAnswer.value=`You are a bluejay Staff from ${dropStates.value}`
  else 
    alertAnswer.value=`You are a bluejay from ${dropStates.value}`
}

imgCU.onclick=function(){
  imgCU.src = "CRU-1021-royal_2_a2141a9c-ece0-4046-b2f5-d192d4e7bf19_1800x.jpn"}

dropStates.onclick=function(){
  dropStates.value= dropStates.selection
}

alertAnswer.ontouchstart=function(){
  alertAnswer.value="Select your information"
}

rbWho.onchange=function(){
  Status=rbWho.selection
  NSB.MsgBox("You choose " + rbWho.selection + " This control is working")
}

sltExtra.onchange=function(){
  NSB.MsgBox("Choice is " + sltExtra.value + " This control is working")
}

