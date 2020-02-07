$("#seek").click(function(){
    var content = $("#content").val
    $.get("http://kd.it-xd.cn/index/search/getsearchindex",function(data,status){
      // alert("Data: " + data + "\nStatus: " + status);
      console.log(data)
    });
  });
  $(function(){
    $('#seek').click(function(){
      var cont=$("#content").val();
      if(!cont){
        $.ajax({
            type: "POST",
            url: "http://kd.it-xd.cn/index/search/getsearchindex",
            data: {order_sn:$("#content").val()},
            dataType: "json",
            success: function(data){
               console.log(data.data.Trajectory.Traces[0].AcceptStation);
               $('#restext').empty();   //清空restext里面的所有内容
               var html = ''; 
               for(let i=0;i<data.data.Trajectory.Traces.length;i++){
                 html += '<p class="time">' + data.data.Trajectory.Traces[i].AcceptTime
                                 + '<p class="text">' + data.data.Trajectory.Traces[i].AcceptStation
                                 + '</p></p>';
               }
               $('#restext').html(html);
               console.log(data.data)
           }
        });
      }
    });
});