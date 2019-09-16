		var love=document.getElementById("love")
		var num=document.getElementById("num")
		var love1=document.getElementById("love1")
		var num1=document.getElementById("num1")
		var text=parseInt(num.innerHTML)
		var text1=parseInt(num1.innerHTML)
		var love2=document.getElementById("love2")
		var num2=document.getElementById("num2")
		var text2=parseInt(num2.innerHTML)
		function fn(){
			var value=0;
			return function info(){
				if(value % 2==0){
				value++;
				num.innerHTML=text+value
				love.style.backgroundColor="red"
			}else{
					value--;
					num.innerHTML=text-value
					love.style.backgroundColor="white"
			}
			}
		}
		function fn1(){
			var value=0;
			return function info(){
				if(value % 2==0){
				value++;
				num1.innerHTML=text1+value
				love1.style.backgroundColor="red"
			}else{
					value--;
					num1.innerHTML=text1-value
					love1.style.backgroundColor="white"
			}
			}
		}
		function fn2(){
			var value=0;
			return function info(){
				if(value % 2==0){
				value++;
				num2.innerHTML=text2+value
				love2.style.backgroundColor="red"
			}else{
					value--;
					num2.innerHTML=text2-value
					love2.style.backgroundColor="white"
			}
			}
		}
		love.onclick=fn()
		love1.onclick=fn1()
		love2.onclick=fn2()
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