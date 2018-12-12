/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it    

exports.onRouteUpdate = ({ location }) => {
    console.log('new pathname', location.pathname);

    // IF we are on regsitry pop zola, else KILL ZOLA!
    const zolaBuilder = function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}; //eslint-disable-line    
    if( location.pathname === '/registry') {
        setTimeout( function(){
            zolaBuilder(document,"script","zola-wjs");
            console.log('you!', document, zolaBuilder);
        }, 1000);
    }else{
        let el = document.getElementById('zola-wjs');
        if(el){
            el.parentNode.removeChild(el);
        }
    }
}