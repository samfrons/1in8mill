<!DOCTYPE html>
<!--[if IEMobile 7 ]>    <html class="no-js iem7"> <![endif]-->
<!--[if (gt IEMobile 7)|!(IEMobile)]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="description" content="">
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="1024">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta http-equiv="cleartype" content="on">
        
        <meta property="fb:app_id" content="" /> 
        <meta property="og:type" content="" /> 
        <meta property="og:title" content="" /> 
        <meta property="og:image" content="" /> 
        <meta property="og:description" content="" /> 
        <meta property="og:url" content="" />

        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/touch/apple-touch-icon-144x144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/touch/apple-touch-icon-114x114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/touch/apple-touch-icon-72x72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="img/touch/apple-touch-icon-57x57-precomposed.png">
        <link rel="shortcut icon" href="img/touch/apple-touch-icon.png">
      
        <!-- Tile icon for Win8 (144x144 + tile color) -->
        <meta name="msapplication-TileImage" content="img/touch/apple-touch-icon-144x144-precomposed.png">
        <meta name="msapplication-TileColor" content="#222222">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="">

        <!--preloading animation-->
        <style type="text/css">
            html { background: #000;}
            .spinner{position:relative;width:54px;height:54px;display:inline-block;}
            .spinner div{width:12%;height:26%;background:#555;position:absolute;left:44.5%;top:37%;opacity:0;-webkit-animation:fade 1s linear infinite;-webkit-border-radius:50px;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.2);}
            div.spinner div.bar1{-webkit-transform:rotate(0deg) translate(0,-142%);-webkit-animation-delay:0s;}
            div.spinner div.bar2{-webkit-transform:rotate(30deg) translate(0,-142%);-webkit-animation-delay:-0.9167s;}
            div.spinner div.bar3{-webkit-transform:rotate(60deg) translate(0,-142%);-webkit-animation-delay:-0.833s;}
            div.spinner div.bar4{-webkit-transform:rotate(90deg) translate(0,-142%);-webkit-animation-delay:-0.75s;}
            div.spinner div.bar5{-webkit-transform:rotate(120deg) translate(0,-142%);-webkit-animation-delay:-0.667s;}
            div.spinner div.bar6{-webkit-transform:rotate(150deg) translate(0,-142%);-webkit-animation-delay:-0.5833s;}
            div.spinner div.bar7{-webkit-transform:rotate(180deg) translate(0,-142%);-webkit-animation-delay:-0.5s;}
            div.spinner div.bar8{-webkit-transform:rotate(210deg) translate(0,-142%);-webkit-animation-delay:-0.41667s;}
            div.spinner div.bar9{-webkit-transform:rotate(240deg) translate(0,-142%);-webkit-animation-delay:-0.333s;}
            div.spinner div.bar10{-webkit-transform:rotate(270deg) translate(0,-142%);-webkit-animation-delay:-0.25s;}
            div.spinner div.bar11{-webkit-transform:rotate(300deg) translate(0,-142%);-webkit-animation-delay:-0.1667s;}
            div.spinner div.bar12{-webkit-transform:rotate(330deg) translate(0,-142%);-webkit-animation-delay:-0.0833s;}
            @-webkit-keyframes fade{from{opacity:1;}
            to{opacity:0.25;}
            }
            .loading_container{display:inline-block;padding:1.5em 1.5em 1.25em;background:rgba(255,255,255,.10);-webkit-border-radius:1em;margin:5%;}
            .loading{display:block;margin-left:auto;margin-right:auto;margin-top:5%;width:105px;}
        </style>
        
        
    </head>
    <body>
      <div id="content" class="content">
        <div class="loading">
          <div class="loading_container">
            <div class="spinner">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="bar4"></div>
                <div class="bar5"></div>
                <div class="bar6"></div>
                <div class="bar7"></div>
                <div class="bar8"></div>
                <div class="bar9"></div>
                <div class="bar10"></div>
                <div class="bar11"></div>
                <div class="bar12"></div>
            </div>
          </div>
        </div>
      </div>
    
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            // var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]];
            //            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
            //            g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
            //            s.parentNode.insertBefore(g,s)}(document,"script"));
        </script>
        <!-- loading our js async style, a quick trick to enable client-side cache-busting -->
        <script>
          var r = Math.floor(Math.random()*11000000000000000);
          (function(d,t){var j=d.createElement(t),s=d.getElementsByTagName(t)[0];j.async=1;
          j.src="js/application.js?"+r;
          s.parentNode.insertBefore(j,s)}(document,"script")); 
        </script>
        <script>
          var r = Math.floor(Math.random()*11000000000000000);
          (function(d,t){var c=d.createElement(t),s=d.getElementsByTagName(t)[0];
          c.href="css/application.css?"+r;
          c.rel="stylesheet"
          s.parentNode.insertBefore(c,s)}(document,"link")); 
        </script>
        
    </body>
</html>
