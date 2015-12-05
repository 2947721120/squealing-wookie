chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('ajax.googleapis.com', 'ajax.c2cmalls.com');
        url = url.replace('fonts.googleapis.com', 'font.c2cmalls.com');
        url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://fonts.googleapis.com/*",
            "*://themes.googleusercontent.com/*"
        ]
    },
    ["blocking"]
);
