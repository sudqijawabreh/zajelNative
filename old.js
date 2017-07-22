/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/scopes_background
*************************************************************************************/
table=[];
 row=[];
 isNotClicked=1;
plan=""

appAPI.browserAction.setResourceIcon('zajelLogo.png');


appAPI.ready(function($) {
	
appAPI.message.addListener(function(msg){
	if(msg.action=='remove'){
	  	for(var i=0;i<table.length;i++){
	  		

	  		if(msg.sTime.trim()==table[i][1].trim()&&msg.sDay==table[i][3])table.splice(i,1);


	 	 }
		}
	if(msg.action=='removeAll')table=[];
	});

	
  // Place your code here (ideal for handling browser button, global timers, etc.)
appAPI.message.addListener(function(msg){
	if(msg.action=="copy"){
		row=[msg.courseName,msg.timeCourse,msg.teacherName,msg.day,msg.room];

		table.push(row);
	}



	if(msg.action=='getTable'){
			
		if(table.length){appAPI.message.toActiveTab(msg={action:'sendTable',timeTable:table,buttonStatus:!isNotClicked,sendPlan:plan});}
		else appAPI.message.toActiveTab(msg={action:'sendTable',timeTable:[],buttonStatus:!isNotClicked,sendPlan:plan});
	}

	if(msg.action=="hideTable"){
		isNotClicked=!isNotClicked;
			
		if(isNotClicked)appAPI.message.toActiveTab(msg={action:'refresh'});
		if(table.length){appAPI.message.toActiveTab(msg={action:'sendTable',timeTable:table,buttonStatus:!isNotClicked,sendPlan:plan})}
		else appAPI.message.toActiveTab(msg={action:'sendTable',timeTable:[],buttonStatus:!isNotClicked,sendPlan:plan});

	}
	if(msg.action=='savePlan'){
		plan=msg.planUrl;
		isNotClicked=0;

		
	

		
	}

	});
appAPI.browserAction.onClick(function(){
	appAPI.openURL("http://zajellb.najah.edu/servlet/UniCurricula","tab");


	});
});
