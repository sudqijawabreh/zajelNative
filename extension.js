  /************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/
 // appAPI.message.addListener(function(msg){
	// });





	
var finished=1;
var clicked=0;

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
appAPI.ready(function($) {


appAPI.resources.includeJS('html2canvas.js');


if(appAPI.isMatchPages("zajellb.najah.edu/servlet/materials****")){
	hideShowButton();

	appAPI.message.addListener(function(msg){
	if(msg.action=='refresh'){
		if($('body').find('center').first().find('table').first().find('input:eq(0)').attr('value')!="")
			 $('body').find('center').first().find('table').first().find('form').first().submit();
		 else  if($('body').find('center').first().find('table').first().find('select').last().attr('value')!= 0){
		 	$('body').find('center').first().find('table').first().find('form').last().submit();}
		  else window.location.reload();


	}

		
		if(msg.action=='sendTable')

			
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



appAPI.message.toBackground(msg={action:'getTable'});
	
}
if(appAPI.isMatchPages("http://zajellb.najah.edu/servlet/UniCurricula")){planIt();}
else return;
function hideShowButton () {

	hideTableButton='<input type="button" id="hideTableButton" value="'+showTableText+'"></input>';
	$('body').find('center').first().find('table').first().find('td').last().append(hideTableButton);

	$('#hideTableButton').on('click',function(){

		appAPI.message.toBackground({action:'hideTable'});
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
	attachTable();
	attachRecordTable();
	







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
					if(timeFromTo=="11-12")colorIndex--;
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
	if(time=="11-12")
	$(record).find("tr").last().hide();
	
	if(finished==1)appAPI.message.toBackground(msg={courseName:course,timeCourse:time,teacherName:teacher,day:days,room:roomNumber,action:'copy'});
	

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
		days=["اثنين","ثلاث","اربعاء","احد","خميس"];
	
		added=[string];
		}
		if(!isContradict(days,startTime,sizeDuration)){
			if(colorIndex>12)colorIndex=0;
			color=colors[colorIndex];
			colorIndex++;
			addCourse(days,startTime,duration,sizeDuration,nameOfCourse,roomNumber);
			recordthis(nameOfTeacher,timeFromTo,nameOfCourse,days,roomNumber);
			if(parseFloat(hours)==3&&!isContradict(added,9,2)){
				addCourse(added,9,1,2,nameOfCourse,roomNumber);
				recordthis(nameOfTeacher,"11-12",nameOfCourse,added,roomNumber);
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
		
		
		appAPI.message.toBackground(msg={action:"remove",sTime:timeFromTo,sDay:days.join()});
		if(days.length==5)extra.click();
		
	});
	$('#delete_all').on('click',function(){
		
		while($(record).find("tr").length>1){
		
			$(record).find("tr").find(".delete").click();
		}
		appAPI.message.toBackground({action:'removeAll'});






	});
	$(table).on('click',function(){
	html2canvas(table, {
  	onrendered: function(canvas) {
  
   		 appAPI.openURL(canvas.toDataURL(),"tab");
 	 }
});

	});



}
function planIt(){
if(appAPI.isMatchPages("http://zajellb.najah.edu/servlet/UniCurricula****")){

	plan=$('body').first().find('center').find('table').first().next().next().next();
	var planId=$('input[type="hidden"]').attr('value');
	var year=$('select[name=curVal]').find('option').attr('value');
	planTrNum=$(plan).find('tr').length;
	for(var i=2;i<planTrNum;i++){
		var tr=$(plan).find('tr:eq('+i+')');
		var numPlan=$(tr).find('td').first().text();
		var innerText=$(tr).find('td').first().next().next().text();
		$(tr).find('td').first().next().next().text("");
		$(tr).find('td').first().next().next().append('<a class="courseLink" href=http://zajellb.najah.edu/servlet/materials?b=num&var='+numPlan+'>'+innerText+'</a>')
	}
	$(plan).on('click','.courseLink',function(){
		var url=document.URL;
		//var index=url.indexOf('&dispOpt=');
		//url=url.slice(0,index);
		url+="?majVal="+planId+"&curVal="+year;
	
	appAPI.message.toBackground(msg={action:'savePlan',planUrl:url});
	});






		var selectString='<select size="1" name="b">\
<option selected="" value="0"> ------------------------</option>\
<option value="10601">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1583;&#1606;&#1610;&#1577;</option>\
<option value="10606">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1593;&#1605;&#1575;&#1585;&#1610;&#1577;</option>\
<option value="10611">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1576;&#1606;&#1575;&#1569;</option>\
<option value="10616">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1578;&#1582;&#1591;&#1610;&#1591; &#1575;&#1604;&#1593;&#1605;&#1585;&#1575;&#1606;&#1610;</option>\
<option value="10621">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1610;&#1603;&#1575;&#1606;&#1610;&#1603;&#1610;&#1577;</option>\
<option value="10626">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1603;&#1610;&#1605;&#1610;&#1575;&#1574;&#1610;&#1577;</option>\
<option value="10631">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1589;&#1606;&#1575;&#1593;&#1610;&#1577;</option>\
<option value="10636">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1581;&#1575;&#1587;&#1608;&#1576;</option>\
<option value="10641">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1603;&#1607;&#1585;&#1576;&#1575;&#1574;&#1610;&#1577;</option>\
<option value="10646">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1575;&#1578;&#1589;&#1575;&#1604;&#1575;&#1578;</option>\
<option value="10651">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1610;&#1603;&#1575;&#1578;&#1585;&#1608;&#1606;&#1603;&#1587;</option>\
<option value="10656">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1591;&#1575;&#1602;&#1577; &#1608;&#1575;&#1604;&#1576;&#1610;&#1574;&#1577;</option>\
<option value="10661">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1608;&#1575;&#1583;</option>\
<option value="10671">&#1593;&#1604;&#1605; &#1575;&#1604;&#1581;&#1575;&#1587;&#1608;&#1576;</option>\
<option value="18">&#1583;&#1603;&#1578;&#1608;&#1585; &#1589;&#1610;&#1583;&#1604;&#1610;</option>\
<option value="21">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1591;&#1576;&#1610;&#1577; &#1575;&#1604;&#1605;&#1582;&#1576;&#1585;&#1610;&#1577;</option>\
<option value="10201">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1581;&#1610;&#1575;&#1578;&#1610;&#1577;</option>\
<option value="10206">&#1575;&#1604;&#1571;&#1581;&#1610;&#1575;&#1569; &#1576;&#1610;&#1608;&#1578;&#1603;&#1606;&#1608;&#1604;&#1608;&#1580;&#1610;&#1575;</option>\
<option value="10211">&#1575;&#1604;&#1585;&#1610;&#1575;&#1590;&#1610;&#1575;&#1578;</option>\
<option value="10216">&#1575;&#1604;&#1575;&#1581;&#1589;&#1575;&#1569;</option>\
<option value="10221">&#1575;&#1604;&#1601;&#1610;&#1586;&#1610;&#1575;&#1569;</option>\
<option value="10226">&#1575;&#1604;&#1601;&#1610;&#1586;&#1610;&#1575;&#1569; /&#1601;&#1585;&#1593;&#1610; &#1575;&#1604;&#1603;&#1578;&#1585;&#1608;&#1606;&#1610;&#1575;&#1578;</option>\
<option value="10231">&#1575;&#1604;&#1603;&#1610;&#1605;&#1610;&#1575;&#1569;</option>\
<option value="10236">&#1603;&#1610;&#1605;&#1610;&#1575;&#1569; &#1578;&#1591;&#1576;&#1610;&#1602;&#1610;&#1577;</option>\
<option value="10301">&#1575;&#1604;&#1604;&#1594;&#1577; &#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577; &#1608;&#1570;&#1583;&#1575;&#1576;&#1607;&#1575;</option>\
<option value="10306">&#1575;&#1604;&#1604;&#1594;&#1577; &#1575;&#1604;&#1573;&#1606;&#1580;&#1604;&#1610;&#1586;&#1610;&#1577; &#1608;&#1570;&#1583;&#1575;&#1576;&#1607;&#1575;</option>\
<option value="10311">&#1575;&#1604;&#1604;&#1594;&#1577; &#1575;&#1604;&#1601;&#1585;&#1606;&#1587;&#1610;&#1577;</option>\
<option value="10316">&#1575;&#1604;&#1587;&#1610;&#1575;&#1581;&#1577; &#1608;&#1575;&#1604;&#1570;&#1579;&#1575;&#1585;</option>\
<option value="10321">&#1575;&#1604;&#1578;&#1575;&#1585;&#1610;&#1582; </option>\
<option value="10401">&#1575;&#1604;&#1601;&#1602;&#1607; &#1608;&#1575;&#1604;&#1578;&#1588;&#1585;&#1610;&#1593;</option>\
<option value="10406">&#1571;&#1589;&#1608;&#1604; &#1575;&#1604;&#1583;&#1610;&#1606;</option>\
<option value="10411">&#1588;&#1585;&#1610;&#1593;&#1577; &#1608;&#1605;&#1589;&#1575;&#1585;&#1601; &#1573;&#1587;&#1604;&#1575;&#1605;&#1610;&#1577;</option>\
<option value="10506">&#1585;&#1610;&#1575;&#1590; &#1575;&#1604;&#1571;&#1591;&#1601;&#1575;&#1604;</option>\
<option value="10516">&#1603;&#1604;&#1610;&#1577; &#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1578;&#1585;&#1576;&#1608;&#1610;&#1577; &#1608;&#1573;&#1593;&#1583;&#1575;&#1583; &#1575;&#1604;&#1605;&#1593;&#1604;&#1605;&#1610;</option>\
<option value="10531">&#1575;&#1604;&#1578;&#1585;&#1576;&#1610;&#1577; &#1575;&#1604;&#1585;&#1610;&#1575;&#1590;&#1610;&#1577;</option>\
<option value="10535">&#1575;&#1604;&#1578;&#1583;&#1585;&#1610;&#1576; &#1575;&#1604;&#1585;&#1610;&#1575;&#1590;&#1610;</option>\
<option value="10676">&#1571;&#1606;&#1592;&#1605;&#1577; &#1575;&#1604;&#1605;&#1593;&#1604;&#1608;&#1605;&#1575;&#1578; &#1575;&#1604;&#1573;&#1583;&#1575;&#1585;&#1610;&#1577;</option>\
<option value="10681">&#1571;&#1606;&#1592;&#1605;&#1577; &#1575;&#1604;&#1605;&#1593;&#1604;&#1608;&#1605;&#1575;&#1578; &#1575;&#1604;&#1581;&#1575;&#1587;&#1608;&#1576;&#1610;&#1577;</option>\
<option value="10686">&#1575;&#1604;&#1588;&#1576;&#1603;&#1575;&#1578; &#1608;&#1571;&#1605;&#1606; &#1575;&#1604;&#1605;&#1593;&#1604;&#1608;&#1605;&#1575;&#1578;</option>\
<option value="10701"> &#1605;&#1587;&#1575;&#1585;&#1593;&#1604;&#1608;&#1605; &#1591;&#1576;&#1610;&#1577; &#1581;&#1610;&#1608;&#1610;&#1577;</option>\
<option value="10706">&#1575;&#1604;&#1589;&#1610;&#1583;&#1604;&#1577;</option>\
<option value="10707">&#1583;&#1603;&#1578;&#1608;&#1585; &#1589;&#1610;&#1583;&#1604;&#1610;</option>\
<option value="10711">&#1575;&#1604;&#1576;&#1589;&#1585;&#1610;&#1575;&#1578;</option>\
<option value="10716">&#1575;&#1604;&#1578;&#1605;&#1585;&#1610;&#1590;</option>\
<option value="10717">&#1575;&#1604;&#1602;&#1576;&#1575;&#1604;&#1577;</option>\
<option value="10721">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1591;&#1576;&#1610;&#1577; &#1575;&#1604;&#1605;&#1582;&#1576;&#1585;&#1610;&#1577;</option>\
<option value="10726">&#1575;&#1604;&#1578;&#1589;&#1608;&#1610;&#1585; &#1575;&#1604;&#1591;&#1576;&#1610;</option>\
<option value="10801">&#1575;&#1604;&#1575;&#1602;&#1578;&#1589;&#1575;&#1583;</option>\
<option value="10806">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1587;&#1610;&#1575;&#1587;&#1610;&#1577; </option>\
<option value="10811">&#1575;&#1604;&#1580;&#1594;&#1585;&#1575;&#1601;&#1610;&#1575;</option>\
<option value="10816">&#1593;&#1604;&#1605; &#1575;&#1604;&#1575;&#1580;&#1578;&#1605;&#1575;&#1593; &#1608;&#1575;&#1604;&#1582;&#1583;&#1605;&#1577; &#1575;&#1604;&#1575;&#1580;&#1578;&#1605;&#1575;&#1593;&#1610;&#1577;</option>\
<option value="10821">&#1593;&#1604;&#1605; &#1575;&#1604;&#1606;&#1601;&#1587; _ &#1601;&#1585;&#1593;&#1610; &#1573;&#1585;&#1588;&#1575;&#1583; &#1606;&#1601;&#1587;&#1610;</option>\
<option value="10841">&#1575;&#1604;&#1589;&#1581;&#1575;&#1601;&#1577; &#1575;&#1604;&#1605;&#1603;&#1578;&#1608;&#1576;&#1577; &#1608;&#1575;&#1604;&#1575;&#1604;&#1603;&#1578;&#1585;&#1608;&#1606;&#1610;&#1577;</option>\
<option value="10846">&#1575;&#1604;&#1573;&#1584;&#1575;&#1593;&#1577; &#1608;&#1575;&#1604;&#1578;&#1604;&#1601;&#1586;&#1610;&#1608;&#1606;</option>\
<option value="10851">&#1575;&#1604;&#1593;&#1604;&#1575;&#1602;&#1575;&#1578; &#1575;&#1604;&#1593;&#1575;&#1605;&#1577; &#1608;&#1575;&#1604;&#1575;&#1578;&#1589;&#1575;&#1604;</option>\
<option value="10861">&#1575;&#1604;&#1605;&#1581;&#1575;&#1587;&#1576;&#1577;</option>\
<option value="10866">&#1573;&#1583;&#1575;&#1585;&#1577; &#1575;&#1604;&#1571;&#1593;&#1605;&#1575;&#1604;</option>\
<option value="10871">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1605;&#1575;&#1604;&#1610;&#1577; &#1608;&#1575;&#1604;&#1605;&#1589;&#1585;&#1601;&#1610;&#1577;</option>\
<option value="10876">&#1575;&#1604;&#1578;&#1587;&#1608;&#1610;&#1602;</option>\
<option value="10901">&#1575;&#1604;&#1591;&#1576; &#1575;&#1604;&#1576;&#1610;&#1591;&#1585;&#1610;</option>\
<option value="10911">&#1575;&#1604;&#1573;&#1606;&#1578;&#1575;&#1580; &#1575;&#1604;&#1606;&#1576;&#1575;&#1578;&#1610; &#1608;&#1575;&#1604;&#1608;&#1602;&#1575;&#1610;&#1577; </option>\
<option value="10916">&#1575;&#1604;&#1573;&#1606;&#1578;&#1575;&#1580; &#1575;&#1604;&#1581;&#1610;&#1608;&#1575;&#1606;&#1610; &#1608;&#1589;&#1581;&#1577; &#1575;&#1604;&#1581;&#1610;&#1608;&#1575;&#1606; </option>\
<option value="10921">&#1575;&#1604;&#1578;&#1594;&#1584;&#1610;&#1577; &#1608;&#1575;&#1604;&#1578;&#1589;&#1606;&#1610;&#1593; &#1575;&#1604;&#1594;&#1584;&#1575;&#1574;&#1610;</option>\
<option value="11101">&#1575;&#1604;&#1602;&#1575;&#1606;&#1608;&#1606;</option>\
<option value="11201">&#1575;&#1604;&#1605;&#1608;&#1587;&#1610;&#1602;&#1609;</option>\
<option value="11206">&#1575;&#1604;&#1578;&#1589;&#1605;&#1610;&#1605; &#1575;&#1604;&#1583;&#1575;&#1582;&#1604;&#1610; (&#1583;&#1610;&#1603;&#1608;&#1585;)</option>\
<option value="11211">&#1575;&#1604;&#1585;&#1587;&#1605; &#1608;&#1575;&#1604;&#1578;&#1589;&#1608;&#1610;&#1585;</option>\
<option value="11216">&#1575;&#1604;&#1578;&#1589;&#1605;&#1610;&#1605; &#1575;&#1604;&#1580;&#1585;&#1575;&#1601;&#1610;&#1603;&#1610;</option>\
<option value="11221">&#1601;&#1606; &#1575;&#1604;&#1582;&#1586;&#1601;</option>\
</select>'
	select=document.createElement('select');
	$(select).html(selectString);
	$('body').find('center').first().find('tr').first().append(select);
	searchButton=document.createElement('button');
	$(searchButton).html('&#1576;&#1581;&#1579;');

	$('body').find('center').first().find('tr').first().append(searchButton);
	$(searchButton).on('click',function(){
		var textbox=document.getElementsByName('majVal')
		var selectText=select.options[select.selectedIndex].innerHTML;

		if(selectText==decodeURIComponent("%D8%B4%D8%B1%D9%8A%D8%B9%D8%A9%20%D9%88%D9%85%D8%B5%D8%A7%D8%B1%D9%81%20%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9")){
			selectText=decodeURIComponent("%D8%B4%D8%B1%D9%8A%D8%B9%D8%A9");}
		if(selectText==decodeURIComponent("%D9%83%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%88%D9%8A%D8%A9%20%D9%88%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%D9%8A")){
			selectText=decodeURIComponent("%D9%85%D8%B9%D9%84%D9%85");}	
		 $(textbox).attr('value',selectText);
		 var radio=document.getElementsByName("majOpt")[1];
		 $(radio).prop('checked',true);
		 $(radio).closest('tr').find('form').submit();
	});
	}
}
			
	
	
});
