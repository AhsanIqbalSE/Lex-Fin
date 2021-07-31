$(function(){
    $('.section').hide();
    
    $('.secList').on('click',function(){   
      $('.section').not($($(this).attr('href'))).hide();
      // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行
      $($(this).attr('href')).fadeIn(800);
      
      // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
      // $($(this).attr('href')).show();
    });
  });

    // script for when click any link of practice from index page it will show
  
    $(document).ready(function(){
        if(window.location.hash){
            var current_area = document.querySelectorAll(window.location.hash)[0].id
            console.log(current_area);
            document.getElementById(current_area).style.display="block"; 
            
            // pracice area link active when land this page
            var current = document.getElementsByClassName("active-li");
            current[0].className = current[0].className.replace(" active-li", "");

            let act=document.querySelectorAll(`a[href="#${current_area}"]`)[1];
            act.parentNode.classList.add("active-li");
        }else{
            document.getElementById('Litigation').style.display="block";
        }
    });

// Add active-li class to the current button (highlight it)
var btns =document.getElementsByClassName("show-active");
console.log(btns);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-li");
  // console.log(document.getElementsByClassName("active-li"));
  current[0].className = current[0].className.replace(" active-li", "");
  this.className += " active-li";
  });
}

// rotate down icon

var icon=document.getElementById("rotatebtn")
icon.addEventListener("click",function(){
      var rotate=document.getElementById("rotate")
      rotate.classList.toggle("icon-rotate")
    })
