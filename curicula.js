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
function planIt(){
	plan=$('body').first().find('center').find('table').next();
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
    chrome.runtime.sendMessage({action:'savePlan',planUrl:url}, function(response) {
          console.log(response.farewell);
    });
    });






	selectValueNameList =
	[
		{value : "0" , name :" ------------------------"},
		{value : "39", name: "كلية الشرف" },
		{value : "40", name: "كلية الدراسات العليا" },
		{value : "10201", name: "علوم حياتية" },
		{value : "10206", name: "الأحياء بيوتكنولوجيا" },
		{value : "10211", name: "الرياضيات" },
		{value : "10216", name: "الاحصاء" },
		{value : "10221", name: "الفيزياء" },
		{value : "10226", name: "فيزياء وفرعي الكترونيات" },
		{value : "10231", name: "الكيمياء" },
		{value : "10236", name: "كيمياء تطبيقية" },
		{value : "10301", name: "اللغة العربية وآدابها" },
		{value : "10304", name: "رئيسي اللغة العربية وآدابها / فرعي إعداد معلمي اللغة العربية للناطقين بغيرها" },
		{value : "10306", name: "اللغة الإنجليزية وآدابها" },
		{value : "10307", name: "الدراسات الامريكية" },
		{value : "10311", name: "اللغة الفرنسية" },
		{value : "10313", name: "رئيسي اللغة الفرنسية / فرعي اللغة العبرية" },
		{value : "10314", name: "رئيسي اللغة الفرنسية / فرعي إعداد معلمي اللغة العربية للناطقين بغيرها" },
		{value : "10316", name: "السياحة والآثار" },
		{value : "10321", name: "التاريخ"  },
		{value : "10360", name: "رئيسي اللغة الإنجليزية وآدابها / فرعي تربية" },
		{value : "10361", name: "رئيسي اللغة الإنجليزية وآدابها / فرعي ترجمة" },
		{value : "10362", name: "رئيسي اللغة الإنجليزية وآدابها / فرعي إعداد معلمي اللغة العربية للناطقين بغيرها" },
		{value : "10401", name: "فقه وتشريع" },
		{value : "10406", name: "أصول الدين (عام)" },
		{value : "10408", name: "رئيسي أصول الدين - فرعي اللغة العربية" },
		{value : "10411", name: "شريعة ومصارف إسلامية" },
		{value : "10501", name: "معلم المرحلة الأساسية الدنيا" },
		{value : "10502", name: "التعليم الجامع والتربية الخاصة" },
		{value : "10506", name: "رياض الأطفال" },
		{value : "10511", name: "معلم المرحلة الأساسية العليا _ تعليم الرياضيات" },
		{value : "10512", name: "معلم المرحلة الأساسية العليا _ تعليم العلوم" },
		{value : "10513", name: "معلم المرحلة الأساسية العليا _ تعليم اللغة العربية" },
		{value : "10514", name: "معلم المرحلة الأساسية العليا _تعليم اللغة الانجليزية" },
		{value : "10515", name: "معلم المرحلة الأساسية العليا _ تعليم الاجتماعيات" },
		{value : "10516", name: "معلم المرحلة الأساسية العليا _ تعليم التكنولوجيا" },
		{value : "10531", name: "التربية الرياضية" },
		{value : "10535", name: "التدريب الرياضي" },
		{value : "10536", name: "التربية الرياضية- التدريب الرياضي" },
		{value : "10544", name: "دبلوم التأهيل التربوي" },
		{value : "10601", name: "الهندسة المدنية" },
		{value : "10602", name: "هندسة الجيوماتيكس" },
		{value : "10606", name: "الهندسة المعمارية" },
		{value : "10611", name: "هندسة البناء" },
		{value : "10616", name: "هندسة التخطيط العمراني" },
		{value : "10621", name: "الهندسة الميكانيكية" },
		{value : "10626", name: "الهندسة الكيميائية" },
		{value : "10631", name: "الهندسة الصناعية" },
		{value : "10636", name: "هندسة الحاسوب" },
		{value : "10641", name: "الهندسة الكهربائية" },
		{value : "10646", name: "هندسة الاتصالات" },
		{value : "10651", name: "هندسة الميكاترونكس" },
		{value : "10656", name: "هندسة الطاقة والبيئة" },
		{value : "10661", name: "هندسة المواد" },
		{value : "10671", name: "علم الحاسوب" },
		{value : "10672", name: "علم الحاسوب في سوق العمل" },
		{value : "10676", name: "أنظمة المعلومات الإدارية" },
		{value : "10681", name: "أنظمة المعلومات الحاسوبية" },
		{value : "10686", name: "الشبكات وأمن المعلومات" },
		{value : "10701", name: " مسارعلوم طبية حيوية" },
		{value : "10702", name: "الطب البشري" },
		{value : "10703", name: "استدراكي علوم طبية حيوية" },
		{value : "10706", name: "الصيدلة" },
		{value : "10707", name: "دكتور صيدلي" },
		{value : "10711", name: "البصريات" },
		{value : "10716", name: "التمريض" },
		{value : "10717", name: "القبالة" },
		{value : "10721", name: "العلوم الطبية المخبرية" },
		{value : "10726", name: "التصوير الطبي" },
		{value : "10731", name: "علوم السمع والنطق" },
		{value : "10736", name: "العلاج الطبيعي" },
		{value : "10741", name: "التروية القلبية" },
		{value : "10742", name: "التخدير والإنعاش التقني" },
		{value : "10801", name: "الاقتصاد" },
		{value : "10803", name: "رئيسي اقتصاد/ فرعي علاقات عامة" },
		{value : "10806", name: "العلوم السياسية"  },
		{value : "10811", name: "الجغرافيا" },
		{value : "10816", name: "علم الاجتماع والخدمة الاجتماعية" },
		{value : "10817", name: "الخدمة الاجتماعية" },
		{value : "10821", name: "علم النفس _ فرعي إرشاد نفسي" },
		{value : "10841", name: "الصحافة المكتوبة والالكترونية" },
		{value : "10842", name: "الاتصال والاعلام الرقمي" },
		{value : "10843", name: "الاتصال والاعلام الرقمي / فرعي اقتصاد" },
		{value : "10846", name: "الإذاعة والتلفزيون" },
		{value : "10851", name: "العلاقات العامة والاتصال" },
		{value : "10861", name: "المحاسبة" },
		{value : "10866", name: "إدارة الأعمال" },
		{value : "10871", name: "العلوم المالية والمصرفية" },
		{value : "10876", name: "التسويق" },
		{value : "10901", name: "الطب البيطري" },
		{value : "10911", name: "الإنتاج النباتي والوقاية"  },
		{value : "10916", name: "الإنتاج الحيواني وصحة الحيوان"  },
		{value : "10921", name: "التغذية والتصنيع الغذائي." },
		{value : "11101", name: "القانون" },
		{value : "11201", name: "الموسيقى" },
		{value : "11206", name: "التصميم الداخلي (ديكور)" },
		{value : "11211", name: "الرسم والتصوير" },
		{value : "11216", name: "التصميم الجرافيكي" },
		{value : "11221", name: "فن الخزف" }
	];
	var sortedValueNameList = selectValueNameList.sort((a, b) => { if (a.name < b.name) return -1; if (a.name > b.name) return 1; return 0 });
	selectOptions = sortedValueNameList.map(a => '<option value = "' + a.value + '">' + a.name + '</option>');
	select=document.createElement('select');
	$(select).html(selectOptions.join(''));
	$('body').find('center').first().find('tr').first().append(select);
	searchButton=document.createElement('button');
	$(searchButton).html('بحث');

	$('body').find('center').first().find('tr').first().append(searchButton);
	$(searchButton).on('click',function(){
		var textbox=document.getElementsByName('majVal')
		var selectText=select.value;
		$(textbox).attr('value',selectText);
		var radio=document.getElementsByName("majOpt")[0];
		$(radio).prop('checked',true);
		$(radio).closest('tr').find('form').submit();
	});
}
planIt();
