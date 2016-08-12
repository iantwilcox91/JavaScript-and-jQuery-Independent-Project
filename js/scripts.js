$(document).ready(function(){
 $(".start").click(function(){
   $(".question1").show();
   $(".start").hide();
   $(".next1").show();
 });
 $(".next1").click(function(){
   $(".question1").hide();
   $(".question2").show();

      $(".next1").hide();
      $(".next2").show();
 });
 $(".next2").click(function(){
   $(".question2").hide();
   $(".question3").show();

      $(".next2").hide();
      $(".next3").show();
 });
 $(".next3").click(function(){
   $(".question3").hide();
   $(".question4").show();

      $(".next3").hide();
      $(".next4").show();
 });
 $(".next4").click(function(){
   $(".question4").hide();
   $(".question5").show();

      $(".next4").hide();
      $(".next5").show();
 });
 $(".next5").click(function(){
   $(".question5").hide();
   $(".resultText").show();
   $(".EndNote").show();

// BIG ol if statement deciding what result to show

      $(".next5").hide();
      $(".REstart").show();
 });












});
