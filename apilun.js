//var shu=0;
//var dian=document.getElementsByClassName("dian");
//
////=====================
//
//setInterval(shijian,2000);
//
//function shijian(){
//	var k = document.getElementsByClassName('tu').length;
//	for(i=0;i<k;i++){
//		if(i==shu){
//			document.getElementsByClassName('tu')[i].style.display='block';
//			dian[i].style.backgroundColor="blue";
//		}
//	  else{
//		  document.getElementsByClassName('tu')[i].style.display='none';
//		  dian[i].style.backgroundColor="white";
//	  }
//	}//====for结束====//
//	shu++;
//if(shu==document.getElementsByClassName('tu').length){
//	shu=0;
//}
//
//}//====结束shijian()=====//
//
//function dian(i){
//	var k = document.getElementsByClassName('tu').length;
//	for(j=0;j<=k;j++){
//		if(i==j){
//			document.getElementsByClassName('tu')[j].style.display='block';
//			dian[j].style.backgroundColor="blue";
//		}
//	  else{
//		  document.getElementsByClassName('tu')[j].style.display='none';
//		  dian[j].style.backgroundColor="white";
//	  }
//	}
//}
//
//
//

//var shu=0;
//var list=document.getElementsByClassName("dian");
//
//setInterval(chang1,2000);
//function chang1()
//{
//	var k=document.getElementsByClassName('tu').length;
//
//for(i=0;i<k;i++)
//	{
//		if(i==shu)
//			{
//				document.getElementsByClassName('tu')[i].style.display='block';
//				list[i].style.backgroundColor="blue";
//			}
//		else
//			{
//				document.getElementsByClassName('tu')[i].style.display='none';
//				list[i].style.backgroundColor="lavender";
//			}
//	
//}
////    结束
//	shu++;
//	if(shu==document.getElementsByClassName('tu').length)
//		{
//			shu=0;
//		}
//}
//	
//	function dian(i){
//		var k=document.getElementsByClassName('tu').length;
//		for(j=0;j<=k;j++)
//			{
//			if(i==j)
//				{
//					document.getElementsByClassName('tu')[j].style.display='block';	
//					dian[j].style.backgroundColor="blue";
//				}
//				else
//					{
//							document.getElementsByClassName('tu')[j].style.display='none';
//							dian[j].style.backgroundColor="lavender";
//					}
//			}
//	}
//

var shu=0;
var dian=document.getElementsByClassName("dian");

setInterval(shijian,2000);

function shijian(){
	var k=document.getElementsByClassName('tu').length;
	for(i=0;i<k;i++){
		if(i==shu){
			document.getElementsByClassName('tu')[i].style.display='block';
			dian[i].style.backgroundColor="blue";
		}
		else{
			document.getElementsByClassName('tu')[i].style.display='none';
			dian[i].style.backgroundColor="white";
		}
	}//====if
	shu++;
	if(shu==document.getElementsByClassName('tu').length){
		shu=0;
	}
}//=======shijian










