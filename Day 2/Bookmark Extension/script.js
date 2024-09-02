const saveBtn=document.getElementById("save-btn")
const inputBox=document.getElementById("input-box")
const tabBtn=document.getElementById("tab-btn")
const deleteBtn=document.getElementById('delete-btn')
const ulEl=document.getElementById("ul")

let myLeads=[]
if (myLeads=="")
{
    myLeads=JSON.parse(localStorage.getItem("myleads")) || []
    console.log(myLeads);
    render(myLeads)
}


// TAB URL 
tabBtn.addEventListener('click',function(){
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myLeads))
    render(myLeads)
});
})

//SAVE URL
saveBtn.addEventListener('click',function(){
    myLeads.push(inputBox.value)
    inputBox.value=""
    localStorage.setItem("myleads",JSON.stringify(myLeads))
    render(myLeads)
})

//DELETE ALL
deleteBtn.addEventListener("dblclick",function(){
  console.log('button clicked');
  myLeads=[]
  localStorage.clear()
  render(myLeads)

})


//render function 
function render(leads)
{
    ulEl.innerHTML=""
    for (let i=0;i<leads.length;i++)
    {
             ulEl.innerHTML += `
               <li>
                 <a href="${leads[i]}" target="_blank">
                   ${leads[i]}
                 </a>
               </li>
             `
    }       
}


