function isLessThanDay(date)
{
    return (date / (1000 * 60 * 60 * 24)) < 2;
};

setInterval(() => {

    var text = $("#wrapper > div > div:nth-child(4)").text();
    var resultDate = Date.parse($("#wrapper > div > div:nth-child(4)").find('table').first().find('td').last().text());
    var difference = 0;
    if(resultDate)
    {
        var now = Date.now();
        difference = now - resultDate;
    }
    
    if(resultDate && isLessThanDay(difference))
    { 
        chrome.runtime.sendMessage({action:"notify", value:text.trim()}, function (response) { })
        alert("hello");
    }
    location.reload();
},10000);