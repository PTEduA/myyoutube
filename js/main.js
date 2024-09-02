    function okclick(){

        var url1=document.getElementById("videourl").value;
        var url2="https://www.youtube.com/embed/";

  var url3=url1.replace("https://youtube.com/watch?v=","");
  var url4=url3.replace("https://youtu.be/","")
  var url5=url4.replace("https://www.youtube.com/watch?v=","");
  var url6=url5.replace("https://m.youtube.com/watch?v=","")
  document.getElementById("video").src=url2+url6;

       document.getElementById("videourl").value="";

    }
