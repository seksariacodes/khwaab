/*function iconchange()
{
	var s=document.getElementById("arrow");
	if(s!=null && typeof(s)!=undefined &&s.src.search("icon.png")!=-1)
	{
		document.getElementById("arrow").src="icon2.png";
		// document.getElementById("logo").style.marginLeft="10%";
		// document.getElementById("arrow").style.marginLeft="12%";
		// document.getElementById("aboutme").style.display="block";
		document.getElementById("leftpanel").id="leftpanel2";
		document.getElementById("rightpanel").id="rightpanel2";
		document.getElementById("arrow").id="arrow2";
		document.getElementById("logo").id="logo2";
	}
	else
		{
			document.getElementById("arrow2").src="icon.png";
			document.getElementById("leftpanel2").id="leftpanel";
			document.getElementById("rightpanel2").id="rightpanel";
			document.getElementById("logo2").id="logo";
			document.getElementById("arrow2").id="arrow";
			// document.getElementById("logo").style.marginLeft="37%";
			// document.getElementById("arrow").style.marginLeft="30%";
	}
}*/
function openRightPanel(){
	setTimeout(function(){iconchange()},2000);
}
function iconchange()
{
	var s=document.getElementById("arrow");
	if(s.src.search("icon1.png")!=-1)
	{

		document.getElementById("arrow").src="icon21.png";
		//document.getElementById("arrow").style.display="block";
		document.getElementById("leftpanel").style.width="50vw";
		document.getElementById("rightpanel").style.width="50vw";
		document.getElementById("logo").style.marginLeft="14vw";
		document.getElementById("rightpanel").style.background="#4cb4e5";
		//document.getElementById("rightpanel").style.backgroundImage=url("F:\\site\\checklist.jpg");
		setTimeout(function(){document.getElementById("details").style.display="block"},1100);
		setTimeout(function(){document.getElementById("enter").style.display="block"},1100);
		setTimeout(function(){document.getElementById("profile").style.display="block"},1100);
	}
	else
		{
		setTimeout(function(){document.getElementById("arrow").src="icon1.png";},1329);
		document.getElementById("leftpanel").style.width="100vw";
		document.getElementById("rightpanel").style.width="0vw";
		//document.getElementById("rightpanel").style.display="none";
		document.getElementById("logo").style.marginLeft="40vw";
		setTimeout(function(){document.getElementById("rightpanel").style.background="white";},1329);
		setTimeout(function(){document.getElementById("arrow").style.display="none";},1335);
		setTimeout(function(){document.getElementById("profile").style.display="none"},100);
		setTimeout(function(){document.getElementById("enter").style.display="none"},100);
		setTimeout(function(){document.getElementById("details").style.display="none"},100);
		//document.getElementById("arrow").style.display="none";
	}
}

function open_wishlist(){
	document.getElementById("details").style.display="none";
	document.getElementById("enter").style.display='none';
	document.getElementById("profile").style.display='none';
	document.getElementById("arrow").style.marginTop='2vh';
	document.getElementById("arrow").style.marginLeft='1vw';
	document.getElementById("arrow").style.width='4vh';
	document.getElementById("arrow").style.transition='margin 1s';
	// document.getElementById("arrow").style.display='none';
	// document.getElementById("arrowhead").innerHTML='&#xf0a8';
	// document.getElementById("rightpanel").style.backgroud='white';
	//document.getElementById("rightpanel").style.backgroundImage=("F:\\site\\checklist.jpg");
}