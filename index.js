		function $(id){
			return document.getElementById(id)
		}
		function fn(love,num){			
			 var value=num.innerHTML;
				if(value % 2==0){
				value++;
				num.innerHTML=value
				love.style.backgroundColor="red"
			}else{
					value--;
					num.innerHTML=value
					love.style.backgroundColor="white"
			}
		}
		$("love").onclick=function() {fn($("love"),$("num"))}
		$("love1").onclick=function() {fn($("love1"),$("num1"))}
		$("love2").onclick=function() {fn($("love2"),$("num2"))}
		var hidden=document.getElementsByClassName("comment-hidden")
		var show=document.getElementsByClassName("comment-show")
		var zhedie=document.getElementsByClassName("zhedie")
		for(var i=0;i<show.length;i++){
			show[i].setAttribute("index",i)
			show[i].onclick=function(){
				var num=this.getAttribute("index")
				for(var i=0;i<hidden.length;i++){
				hidden[num].style.display="block"
				this.style.display="none";
				zhedie[num].style.display="block"
				}
			}
		}
		for(var i=0;i<zhedie.length;i++){
			zhedie[i].setAttribute("index",i)
			zhedie[i].onclick=function(){
				var num=this.getAttribute("index")	
				show[num].style.display="block"
				this.style.display="none";
				hidden[num].style.display="none"
			}
		}