
let rejectTitles = document.getElementById('rejectTitles');
function getRejectTitleList(){
  var defaults = ["hoge", "fuga"];

  chrome.storage.local.get(function(items) {
    for(let title of defaults){
      let title_text = document.createElement('input');
  		title_text.setAttribute("type","text"); 
      title_text.value = title;
      rejectTitles.appendChild(title_text);
    }
  });
}

let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);
getRejectTitleList();