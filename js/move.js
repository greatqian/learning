function startMove(obj,json,fn){
			clearInterval(obj.timmer);
			
			obj.timmer=setInterval(function(){
				var flag=true;
				for(var attr in json){
					if(attr=="opacity"){
					var cw=parseFloat(getStyle(obj,attr))*100;
				}else{
					var cw=parseInt(getStyle(obj,attr));
				}
				
				var speed=(json[attr]-cw)/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(cw!=json[attr]){
					flag=false;
				}
				if(attr=="opacity"){
					obj.style[attr]=(cw+speed)/100;
				}else{
					obj.style[attr]=parseInt(getStyle(obj,attr))+speed+"px";
					}	
				}
				if(flag){
					clearInterval(obj.timmer);
					if(fn){
							fn();
						}
				}
			},30)
		}


function getStyle(obj,attr){
		return getComputedStyle(obj,false)[attr];
	}