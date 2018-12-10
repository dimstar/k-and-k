/* eslint-disable */
export default (function(){
    function r(){
        for(var t,i=arguments[0],n=1;n<arguments.length;n++)
        for(t in arguments[n])arguments[n].hasOwnProperty(t)&&(i[t]=arguments[n][t]);
        return i}
    var e,o,t,n,s,i,u,f;
    window.console=window.console||{log:function(){}};
    e=null;o=null;
    window.Cognito=window.Cognito||{};
    window.Cognito.deferredLoad=undefined;
    Cognito.sessionInit=function(){Cognito.deferredLoad&&Cognito.deferredLoad()};
    Cognito.config=r({},Cognito.config,{instanceId:636800783261622980,organizationCode:"Dimstario",sessionToken:"A734qk5pI3/YJBAVQdncb03CNFWQXiKW3Cx0qyZq/7/Eu0RwR6eXAUEP391oWDZC0TpCGCHxW5DZUVzy22+lX5eawOM=",baseUrl:"https://services.cognitoforms.com/",mode:"public",maxClientErrors:0,cacheHash:"2004114766",key:"fdcb2ac9-84a9-4400-b58f-1c2eb16624a7",version:"0.01"});
    Cognito.resources=r({},Cognito.resources);
    t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];
    document.querySelectorAll("script[src*='include/req/']").length===0&&(window.Cognito.load=function(){var n=arguments;window.Cognito.deferredLoad=function(){Cognito.load.apply(Cognito,n)}},n=document.createElement("script"),n.type="text/javascript",n.async=!1,n.crossOrigin="anonymous",s=!1,t.insertBefore(n,t.firstChild),n.src="https://services.cognitoforms.com/include/req/8013326");
    document.querySelectorAll("link[href*=requiredcss]").length===0&&(i=document.createElement("link"),i.type="text/css",i.rel="stylesheet",i.href="https://services.cognitoforms.com/include/requiredcss/8013326",t.insertBefore(i,t.firstChild));
    u=window.addEventListener?"addEventListener":"attachEvent";
    f=window.addEventListener?"load":"onload";
    window[u](f,function(){if(window.ExoJQuery===undefined){
        var n=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");
        n.open("POST","https://services.cognitoforms.com/error",!0);
        n.setRequestHeader("Content-type","application/json");
        n.send(JSON.stringify({message:"Requred scripts not loaded ("+Cognito.config.organizationCode+")",type:"Error",url:document.location.href,refererUrl:document.referrer}))
    }})
})()