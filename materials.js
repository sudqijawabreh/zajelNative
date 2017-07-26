var finished=1;
var div;
var clicked=0;
var summer=false;
 copymsg=[];
var recPlan="";
 copymsg=[];
  colors=["FEF7CF","DCB8CB","B1D6D8","A7AFFC","A8E8FB","A8E8FB","FBD6FE","FDD09F","C5A6FD","C2C8A4","D8A48D","FBBBA8","9FCCFD","AAA4C8"];
 colorIndex=0;
 color="";
var text =decodeURIComponent('%D9%8A%D9%88%D8%AC%D8%AF%20%D8%AA%D8%B9%D8%A7%D8%B1%D8%B6%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B9%D9%8A%D8%AF');
var sunday=decodeURIComponent("%D8%A7%D8%AD%D8%AF");
var mondayShort=decodeURIComponent("%D8%A7%D8%AB%D9%86");
var tuseday=decodeURIComponent("%D8%AB%D9%84%D8%A7%D8%AB");
var wednsdayShort=decodeURIComponent("%D8%A7%D8%B1%D8%A8%D8%B9")
var thursday=decodeURIComponent("%D8%AE%D9%85%D9%8A%D8%B3");
var saturday=decodeURIComponent("%D8%B3%D8%A8%D8%AA");
var monday=decodeURIComponent("%D8%A7%D8%AB%D9%86%D9%8A%D9%86");
var wednsday=decodeURIComponent("%D8%A7%D8%B1%D8%A8%D8%B9%D8%A7%D8%A1");
var backToPlan=decodeURIComponent("%D8%A7%D9%84%D8%B1%D8%AC%D9%88%D8%B9%20%D8%A7%D9%84%D9%8A%20%D8%A7%D9%84%D8%AE%D8%B7%D8%A9%20");
var hideTableText=decodeURIComponent("%D8%A7%D8%AE%D9%81%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%84%0A");
var showTableText=decodeURIComponent("%D8%A7%D8%B8%D9%87%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%84");
var finaltext=showTableText;
hideShowButton();
var isSummer=function(){
    if($(document).find("center").first().find('div').text().substr(0,37).indexOf('صيفي')==-1)
        return false;
    else return true;
}
summer=isSummer();
chrome.runtime.onMessage.addListener(
        function(msg, sender, sendResponse) {
            console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
            if(msg.action=='refresh'){
                if($('body').find('center').first().find('table').first().find('input:eq(0)').attr('value')!="")
                    $('body').find('center').first().find('table').first().find('form').first().submit();
                else  if($('body').find('center').first().find('table').first().find('select').last().attr('value')!= 0){
                    $('body').find('center').first().find('table').first().find('form').last().submit();}
                else window.location.reload();


            }


            else if(msg.action=='sendTable')


                if(msg.buttonStatus){
                    $('#hideTableButton').attr('value',hideTableText);
                    copymsg=msg.timeTable;

                    recPlan=msg.sendPlan;
                    lastJob();
                    if(copymsg.length){
                        finished=0;
                        drawPastCourses();
                    }


                }
        });

chrome.runtime.sendMessage({action: "getTable"}, function(response) {});
var sendMsgToBackground=function(msg){
    chrome.runtime.sendMessage(msg, function(response) {});
}
function hideShowButton () {

	hideTableButton='<input type="button" id="hideTableButton" value="'+showTableText+'"></input>';
	$('body').find('center').first().find('table').first().find('td').last().append(hideTableButton);

	$('#hideTableButton').on('click',function(){

		sendMsgToBackground({action:'hideTable'});
		$('#hideTableButton').attr('value',hideTableText);

	});
}
function removeCells(numberOfCells){
	
		for(var i=6;i<numberOfCells;i+=6){
		$('body').find('center').first().find('table').first().next().find('td:eq('+i+')').remove();
		i+=1;
		$('body').find('center').first().find('table').first().next().find('td:eq('+i+')').remove();
 		i+=1;
 		$('body').find('center').first().find('table').first().next().find('td:eq('+i+')').remove();
	
	}
	
}
function addRegisterButtons(numberOfCells){
		for(var j=11;j<numberOfCells;j+=11){
	$('body').find('center').first().find('table').first().next().find('td:eq('+j+')').addClass("button");
	$('body').find('center').first().find('table').first().next().find('td:eq('+j+')').css("cursor","pointer");
	var roomAttr=$('body').find('center').first().find('table').first().next().find('td:eq('+(j+6)+')').text();
	$('body').find('center').first().find('table').first().next().find('td:eq('+j+')').attr('room',roomAttr);
		
	}
	}
function setTableUp(){
	
	table=document.createElement('table');
	table.border=1;

	//table.align="left";
	table.innerHTML='<table border="1" cellpadding="0" cellspacing="0">\
	<tbody><tr>\
<th class="headfont" bgcolor="white"  width="60"> &#1575;&#1604;&#1610;&#1608;&#1605;/&#1575;&#1604;&#1608;&#1602;&#1578;  </th>\
<th class="headfont" align="right"  bgcolor="white" width="15">7</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">8</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">9</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">10</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">11</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">12</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">1</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">2</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">3</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">4</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">5</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">6</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
<th class="headfont" align="right"  bgcolor="white"   bgcolor="white" width="15">7</th>\
<th class="headfont"   bgcolor="white" width="15">  &nbsp; </th>\
</tr>\
<tr>\
<td class="datafont" bgcolor="white">&#1575;&#1581;&#1583;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
</tr>\
<tr>\
<td class="datafont" bgcolor="white">&#1575;&#1579;&#1606;&#1610;&#1606;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
</tr>\
<tr>\
<td class="datafont" bgcolor="white">&#1579;&#1604;&#1575;&#1579;&#1575;&#1569;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
</tr>\
<tr>\
<td class="datafont" bgcolor="white">&#1575;&#1585;&#1576;&#1593;&#1575;&#1569;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
</tr>\
<tr>\
<td class="datafont" bgcolor="white">&#1582;&#1605;&#1610;&#1587;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
</tr>\
<tr>\
<td class="datafont" bgcolor="white">&#1587;&#1576;&#1578;\
</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
<td class="datafont" bgcolor="white">&nbsp;</td>\
</tr>\
</tbody></table>';
$(table).attr('cellpadding','0');
$(table).attr('cellspacing','0');
$(table).find('td').width('15');
$(table).css("cursor","pointer");
$('body').children('div').first().children('table').first().css('width','1015');
$('body').children('div').first().children('table').first().css('margin','-20 -15 0 0');
}
function setRecordTable(){
	record=document.createElement('table');
	record.border=1;
	$(record).attr('cellpadding','0');
	$(record).attr('cellspacing','0');
	$(record).append('<tr><td><input type="button" id="delete_all" value="&#1581;&#1584;&#1601; &#1575;&#1604;&#1603;&#1604;"></td><td> &#1575;&#1587;&#1605; &#1575;&#1604;&#1605;&#1587;&#1575;&#1602;</td><td> &#1575;&#1604;&#1587;&#1575;&#1593;&#1577; </td><td>&#1575;&#1587;&#1605; &#1575;&#1604;&#1605;&#1583;&#1585;&#1587;</td><<td style="display:none">Days</td>/tr>');
	$(record).css('font-size','13')
	$(record).css('position','fixed');
	$(record).css('margin-right','665');

}
function getNUmberOfCells(){
	return ($('body').find('center').first().find('table').first().next().find('td')).length;

}
function attachTable(){
	$('body').children('center').find('table').first().after(table);
}
function attachRecordTable(){
	$('body').children('center').find('table').first().after(record);
}
function returnPlan(){
	returnToPlan='<a href="'+recPlan+'">'+backToPlan+'</a>';

if(recPlan)
	$('body').find('center').first().find('table').first().find('td').last().append(returnToPlan);
}
function layout(){



 var length=getNUmberOfCells();
	addRegisterButtons(length);
	removeCells(length);
	

	returnPlan();
	setTableUp();
	setRecordTable();
	div=document.createElement("div")
	div.bgColor="white";
	div.id="picture";
	$(div).width(925);
	$(div).append(record);
	$(div).append(table);
	// $(div).style("width","400px")
	$('body').children('center').find('table').first().after(div);
	// $(div).append(record);
	// $(div).append(table);
	//attachTable();
	//attachRecordTable();
	







 }


function drawPastCourses(){

	

for(var i=0;i<copymsg.length;i++){
		
		var nameOfCourse=copymsg[i][0];
		var timeOfCourse=copymsg[i][1];
		var nameOfTeacher=copymsg[i][2];
		var days=copymsg[i][3];
		var timeFromTo=timeOfCourse;
		var room=copymsg[i][4];

		timeOfCourse=timeOfCourse.split('-');
		for(var j=0;j<2;j++){
		timeOfCourse[j]=parseFloat(timeOfCourse[j]);
		if(timeOfCourse[j]<7)timeOfCourse[j]+=12
		if(i==1&&timeOfCourse[j]==7)timeOfCourse[j]+=12;

	
		} 
		
		
		duration=(timeOfCourse[1]-timeOfCourse[0]);
		sizeDuration=duration*2;
		
		startTime=(timeOfCourse[0]-7)*2+1;	
		


				
					
					if(colorIndex>12)colorIndex=0;
                    if(summer){
					if(timeFromTo=="11-12")colorIndex--;
                    }
					color=colors[colorIndex];
					colorIndex++;
					
					
					addCourse(days,startTime,duration,sizeDuration,nameOfCourse,room);
	
					recordthis(nameOfTeacher,timeFromTo,nameOfCourse,days,room);
						
			
				
				



 
	}
	 finished=1;

	 


	 
}

 function dayIndex(day){
		
		
		switch(day){
			case sunday :return 1;
			case mondayShort:return 2;
			case tuseday:return 3;
			case wednsdayShort:return 4;
			case thursday:return 5;
			case saturday:return 6;	
			case wednsday:return 4;
			case monday:return 2;
		}
	
 
 }

	


function isContradict(courseInDays,startHour,columNumber){
	for(var i=0;i<courseInDays.length;i++){
		var index=dayIndex(courseInDays[i]);

		for(var j=startHour;j<startHour+columNumber;j++)
			if (sechdule[index][j]==1)return 1;

	return 0;


	}




}

function howManyHours(index,startHour){
	var sum=0;
	var addHour=0;
	var colspanMeter=0;
	$row=$(table).find('tr:eq('+index+')');
	var finishPoint=startHour;
	for(var i=1;i<finishPoint;i++){
		
		colspanMeter=parseInt($row.find('td:eq('+(i)+')').attr('colspan'))
		if(colspanMeter>1){
			addHour=(colspanMeter-1);
			finishPoint-=addHour;
			sum+=addHour;
			}
		}
	return sum;

}

function addCourse(courseInDays,startHour,interval,columNumber,courseName,roomNumber){
	

	var index;

		for(var i=0;i<courseInDays.length;i++){
		
		index=dayIndex(courseInDays[i]);
			if(interval%1!=0)interval=1;
			var decreament=howManyHours(index,startHour);
			for(var j=1;j<columNumber;j++){
				
				
				 $(table).find('tr:eq('+index+')').find('td:eq('+(startHour-decreament+1)+')').remove();
			}

			$cell=$(table).find('tr:eq('+index+')').find('td:eq('+(startHour-decreament)+')');
				


				$cell.attr("colspan",String(columNumber));

				$cell.css("background-color",color);
				 
				
				$cell.attr("align","center");
				$cell.text(courseName);
				$cell.append('<br>'+roomNumber+'')
				// $cell.append();

			
				for(var k=startHour;k<startHour+columNumber;k++)
					sechdule[index][k]=1;
				
				

				
		}



}
function recordthis( teacher,time, course,days,roomNumber){
	$(record).append('<tr><td><input type="button" class="delete" value="&#x62D;&#x630;&#x641;"></td><td>'+course+'</td><td>'+time+'</td><td>'+teacher+'</td><td style="display:none">'+days+'</td><td style="display:none">'+roomNumber+'</td></tr>');
    if(summer){
	if(time=="11-12")
	$(record).find("tr").last().hide();
    }
	
	if(finished==1)sendMsgToBackground(msg={courseName:course,timeCourse:time,teacherName:teacher,day:days,room:roomNumber,action:'copy'});
	

}



function lastJob(){
	sechdule =new Array(7);
	for(var i=0;i<7;i++)
		sechdule[i]=new Array(26);
	layout();

	$('.button').on('click',function(){
		var hours=($(this).parent().find('td:eq(3)').text());
		var string=($(this).parent().find('td:eq(4)').text());
		var roomNumber=$(this).attr("room");
		var nameOfCourse=$(this).parent().find('td:eq(2)').text();
		var nameOfTeacher=$(this).parent().find('td:eq(7)').text();
		var timeOfCourse=($(this).parent().find('td:eq(5)').text());
		var timeFromTo=timeOfCourse;
		timeOfCourse=timeOfCourse.split('-');
		for(var i=0;i<2;i++){
		timeOfCourse[i]=parseFloat(timeOfCourse[i]);
		if(timeOfCourse[i]<7)timeOfCourse[i]+=12
		if(i==1&&timeOfCourse[i]==7)timeOfCourse[i]+=12;
	
	
	
		}
		
		
		duration=(timeOfCourse[1]-timeOfCourse[0]);
		sizeDuration=duration*2;
		startTime=(timeOfCourse[0]-7)*2+1;
		
		var days=string.split('/');
		if(parseFloat(hours)==3){
		
		//days=[sunday,monday,tuseday,thursda,wednsday];
        if(summer){
		days=["اثنين","ثلاث","اربعاء","احد","خميس"];
        }
	
		added=[string];
		}
		if(!isContradict(days,startTime,sizeDuration)){
			if(colorIndex>12)colorIndex=0;
			color=colors[colorIndex];
			colorIndex++;
			addCourse(days,startTime,duration,sizeDuration,nameOfCourse,roomNumber);
			recordthis(nameOfTeacher,timeFromTo,nameOfCourse,days,roomNumber);
            if(summer){
			if(parseFloat(hours)==3&&!isContradict(added,9,2)){
				addCourse(added,9,1,2,nameOfCourse,roomNumber);
				recordthis(nameOfTeacher,"11-12",nameOfCourse,added,roomNumber);
			}
            }
			
				
		}
		else alert(text);

	
		});
$(record).on('click','.delete',function(){
		
	 	row=$(this).closest('tr');
	 	var nameOfCourse=$(row).find('td').first().text();
		var days=($(row).find('td').last().prev().text());
	 	days=days.split(',');
	 	if(days.length==5){
	 		var extra=$(this).closest("tr").next().find('.delete');
	 		colorIndex--;
	 	}
		var timeOfCourse=$(row).find('td').first().next().next().text();
		var timeFromTo=timeOfCourse;
		timeOfCourse=timeOfCourse.split('-');
		for(var i=0;i<2;i++){
		timeOfCourse[i]=parseFloat(timeOfCourse[i]);
		if(timeOfCourse[i]<7)timeOfCourse[i]+=12
		if(i==1&&timeOfCourse[i]==7)timeOfCourse[i]+=12;
	
		}

		duration=(timeOfCourse[1]-timeOfCourse[0]);
		sizeDuration=duration*2;
		startTime=(timeOfCourse[0]-7)*2+1
		for(var i=0;i<days.length;i++){
			
			var index=dayIndex(days[i]);
			for(var j=startTime;j<startTime+sizeDuration;j++)
				sechdule[index][j]=0;
			var decreament=howManyHours(index,startTime)
			var newCell=$(table).find('tr:eq('+index+')').find('td:eq('+(startTime-decreament)+')');
		
			$(newCell).text("");
			$(newCell).html('&nbsp;');
			$(newCell).attr("colspan","0");
			$(newCell).css("background-color","white");
			for(var k=1;k<sizeDuration;k++){
	    	
				newCell.after('<td class="datafont" bgcolor="white">&nbsp;</td>');
			}
			$(row).remove();
		

	
	
		}
		
		
		sendMsgToBackground(msg={action:"remove",sTime:timeFromTo,sDay:days.join()});
		if(days.length==5)extra.click();
		
	});
	$('#delete_all').on('click',function(){
		
		while($(record).find("tr").length>1){
		
			$(record).find("tr").find(".delete").click();
		}
		sendMsgToBackground({action:'removeAll'});






	});
	$(table).on('click',function(){
	$(div).width($(record).width()+670);
	$(div).css("background-color","white");
	var selected = 0;
		$('#id').dialog({
			buttons: {
				"First": function () {
					selected = 1;
				},
				"Second": function () {
					selected = 2;
				},
				"Third": function () {
					selected = 3;
				},
				"Fourth": function () {
					selected = 4;
				}
			}
		});
	html2canvas(picture, {
		onrendered: function (canvas) {
			var image = canvas.toDataURL();
			window.open(image);
			return;
			var imageURI = (image.substr(22, image.length));
			$.post("http://data-uri-to-img-url.herokuapp.com/images.json",
				{
					"image[data_uri]": imageURI,
				},
				function (data, status) {
					console.log(status);
					const APP_ID = 154620008433771;
					var chrome = window.chrome;
					currentURL = data.url;
					quote = "";
					var shareDialogURL = 'https://www.facebook.com/sharer/sharer.php?';
					shareDialogURL = shareDialogURL.concat('app_id=', APP_ID);
					shareDialogURL = shareDialogURL.concat('&u=', currentURL);
					if (quote) {
						shareDialogURL = shareDialogURL.concat('&quote=', quote);
					}

					var windowSpecs = 'toolbar=no, location=no, status=no, menubar=no,' +
						'scrollbars=yes, resizable=yes, width=600, height=400';
					window.open(shareDialogURL, 'fbShareWindow', windowSpecs);

				});
	// 	    authToken="EAACMoEatiGsBAAdNGaFmUnrsgZCwDAO7VXNSx9zEcWjjRKls4L9WupUUmJFlcC2bR7OAYLIenHkF7ah3RSpUd1q14lGRxfmoogWUECv89okna4M7e4QV5swsACUvMGS2QcvUpdkZBxRi7TF9ADanUAObZAdAXJS0AtrPgNNMhT7W9S0dnWbiXYec7dTsdkZD"
	// 		var imageData = canvas.toDataURL("image/png");
	// 		try {
	// 			blob = dataURItoBlob(imageData);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 		var fd = new FormData();
	// 		fd.append("access_token", authToken);
	// 		fd.append("source", blob);
	// 		fd.append("message", "Photo Text");
	// 		try {
	// 			$.ajax({
	// 				url: "https://graph.facebook.com/me/photos?access_token=" + authToken,
	// 				type: "POST",
	// 				data: fd,
	// 				processData: false,
	// 				contentType: false,
	// 				cache: false,
	// 				success: function (data) {
	// 					console.log("success " + data);
	// 					$("#poster").html("Posted Canvas Successfully");
	// 				},
	// 				error: function (shr, status, data) {
	// 					console.log("error " + data + " Status " + shr.status);
	// 				},
	// 				complete: function () {
	// 					console.log("Posted to facebook");
	// 				}
	// 			});

	// 		} catch (e) {
	// 			console.log(e);
	// 		}
 	  }
});

	});
function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
        type: 'image/png'
    });
}



}
