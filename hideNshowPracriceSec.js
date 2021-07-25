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

    // script for when click any area from index page it will show
  
    $(document).ready(function(){
        if(window.location.hash){
            var current_area = document.querySelectorAll(window.location.hash)[0].id
            console.log(current_area);
            document.getElementById(current_area).style.display="block"; 
        }else{
            document.getElementById('Litigation').style.display="block";
        }
    });