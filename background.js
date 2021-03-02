table=[];
row=[];
isNotClicked=1;
plan=""
 
var sendMsgToTab=function(tab,msg) {
                chrome.tabs.sendMessage(tab.id, msg, function(response){});
}
chrome.browserAction.onClicked.addListener(function(){
    //chrome.tabs.create({ url: "http://zajellb.najah.edu/servlet/UniCurricula" });
    chrome.notifications.create(
        "name-for-notification",
        {
          type: "basic",
          iconUrl: "zajelLogo.png",
          title: "This is a notification",
          message: "hello there!",
        },
        function () {}
      );
});
chrome.runtime.onMessage.addListener(
        function(msg, sender, sendResponse) {
            console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
            if(msg.action=='savePlan'){
                plan=msg.planUrl;
                isNotClicked=0;
            }
            else if(msg.action=='remove'){
                for(var i=0;i<table.length;i++){


                    if(msg.sTime.trim()==table[i][1].trim()&&msg.sDay==table[i][3])table.splice(i,1);


                }
            }
            else if(msg.action=='removeAll')table=[];
            if(msg.action=="copy"){
                row=[msg.courseName,msg.timeCourse,msg.teacherName,msg.day,msg.room];

                table.push(row);
            }
            else if(msg.action=='getTable'){
                if(table.length){sendMsgToTab(sender.tab,{action:'sendTable',timeTable:table,buttonStatus:!isNotClicked,sendPlan:plan});}
                else sendMsgToTab(sender.tab,{action:'sendTable',timeTable:[],buttonStatus:!isNotClicked,sendPlan:plan});
            }

            else if(msg.action=="hideTable"){
                isNotClicked=!isNotClicked;

                if(isNotClicked)sendMsgToTab(sender.tab,{action:'refresh'});
                if(table.length){sendMsgToTab(sender.tab,{action:'sendTable',timeTable:table,buttonStatus:!isNotClicked,sendPlan:plan})}
                else sendMsgToTab(sender.tab,{action:'sendTable',timeTable:[],buttonStatus:!isNotClicked,sendPlan:plan});

            }
            else if(msg.action=='savePlan'){
                plan=msg.planUrl;
                isNotClicked=0;
            }
            else if(msg.action == "notify"){
                var status = ""
                if(msg.value.includes("مصاب"))
                    noMessage = 'مصاب'
                else if (msg.value.includes('سليم'))
                    noMessage = 'سليم'
                else 
                    return;

                chrome.notifications.create(
                    "name-for-notification" + (""+Math.random())[0],
                    {
                      type: "basic",
                      iconUrl: "zajelLogo.png",
                      title: "This is a notification" + (Math.random + "")[0],
                      message: noMessage,
                    },
                    function () {}
                  );
            }
        });
