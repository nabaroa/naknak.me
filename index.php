<!DOCTYPE html> 
<html>
<head>
<title>NAK. Front-end Developer. HTML 5 & CSS3</title>
<meta name="description" content="This is my personal website, have a look and enjoy!"> 
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, inicial-scale=1.0" /> 
<link href="all.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="/css/circle/common.css">
<link rel="stylesheet" href="/css/circle/style6.css">
<link href="/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link rel="author" href="https://plus.google.com/106783201431526527457/posts">
<script src="../js/modernizr-transitions.js"></script> 

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<link href='http://fonts.googleapis.com/css?family=Abel|Wire+One|Mr+Dafoe' rel='stylesheet' type='text/css'>
<link rel="shortcut icon" href="assets/favicon.ico">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script><style type="text/css"></style>
  <script>
  $(function() { 
   
    function filterPath(string) {
      return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
    }
  
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');
  
    // Any links with hash tags in them (can't do ^= because of fully qualified URL potential)
    $('a[href*=#]').each(function() {
  
      // Ensure it's a same-page link
      var thisPath = filterPath(this.pathname) || locationPath;
      if (  locationPath == thisPath
        && (location.hostname == this.hostname || !this.hostname)
        && this.hash.replace(/#/,'') ) {
  
          // Ensure target exists
          var $target = $(this.hash), target = this.hash;
          if (target) {
  
            // Find location of target
            var targetOffset = $target.offset().top;
            $(this).click(function(event) {
  
              // Prevent jump-down
              event.preventDefault();
  
              // Animate to target
              $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
  
                // Set hash in URL after animation successful
                location.hash = target;
  
              });
            });
          }
      }
  
    });
  
    // Use the first element that is "scrollable"  (cross-browser fix?)
    function scrollableElement(els) {
      for (var i = 0, argLength = arguments.length; i <argLength; i++) {
        var el = arguments[i],
        $scrollElement = $(el);
        if ($scrollElement.scrollTop()> 0) {
          return el;
        } else {
          $scrollElement.scrollTop(1);
          var isScrollable = $scrollElement.scrollTop()> 0;
          $scrollElement.scrollTop(0);
          if (isScrollable) {
            return el;
          }
        }
      }
      return [];
    }
  
  });
  </script> 
</head>
<body>
<div class="csswinner"><a href="http://www.csswinner.com/details/nak-front-end-developer/4569/" target="_blank">Nominee CSS Winner</a> </div>
<div class="page liquid"> 
<a name="subir"></a>
 <nav class="mainmenu contrast">   
	  
<!--<p> <a href="onClick" class="icon_menu"> <em>&nbsp;</em><span>Menú</span></a> 
</p>-->
      <ul class="horiz ">
	  <li class=" mam bgopaque pas"><a href="#subir" class="smoothScroll">home</a></li>
          <li class=" mam bgopaque pas"><a href="#bio" class="smoothScroll">bio</a></li>
          <li class=" mam bgopaque pas"><a href="#cv" class="smoothScroll">CV</a></li>
          <li class=" mam bgopaque pas"><a href="#projects" class="smoothScroll">works</a></li> 
          <li class=" mam bgopaque pas"><a href="#find" class="smoothScroll">find me at...</a>
          <!--<span class="new bgfirm opaque"><i class="icon-star opaque"></i>New</span>--></li> 
		  <li class=" mam bgopaque pas"><a href="#about"  class="smoothScroll">about</a></li> 
        </ul>
</nav> 
<div class="mainbox index<?= mt_rand(1,8); ?> boxshadowl">
<div class="mainbox pattern2">
      <div class="size1of4 height100pc contrast txtac mara">
	  <div class="size1of4 height1000 poa top0 bgopaque contrast txtac mara opacity70">
</div>
	   <header class="size1of4 bgopaque ptl poa">     
        <h1 class="logo"><a href="index.php"><em>&nbsp;</em><span>NAK</span></a></h1>
        <h2 class="wire bare pbl ptm "> 
    		<span class="up size1of1 disblin size70  tshadow ">html5 </span>  
    		<span  class="up size1of1 disblin  size90 tshadow ">css3</span>
    		<span class="size50">Front-end developer</span> </h2>
    		<p class="abel size120">I <span class="icon_heart_firm disblin">&nbsp;</span> urban chaos</p>
        <p class="abel size120 prm plm ptl pbl">but I live in a <span class="firm">quiet</span> place</p>
        </header> 
</div>
</div>
</div>

<div class="body">
<div class="main">
<div class="mainbox boxshadowl bio_bg">
<a name="bio"></a>
<div class="top_n">&nbsp;</div>
<div class="gs960 mara">
<article class="">
<h1 class="abel hole txtac text size100">bio</h1>

<div class="line">
<div class="unit size1of1 mara size300 ">
<code class="abel">

<span class="firm">&lt;dl&gt;</span><br>

  &nbsp;&nbsp;&nbsp; <span class="firm">&lt;dt&gt;</span>Egun 1<span class="firm">&lt;/dt&gt;</span><br>
  &nbsp;&nbsp;&nbsp; <span class="firm">&lt;dd&gt;</span>8 lan ordu <span class="firm">&lt;/dd&gt;</span><br>
  <!-- &nbsp;&nbsp;&nbsp; <span class="firm">&lt;dd&gt;</span>124 kilometro <span class="firm">&lt;/dd&gt;</span><br> -->
  &nbsp;&nbsp;&nbsp; <span class="firm">&lt;dd&gt;</span>Familia kontziliazioa gozatzen <span class="firm">&lt;/dd&gt;</span><br>
  &nbsp;&nbsp;&nbsp; <span class="firm">&lt;dd&gt;</span>Amatxu 2.0 <span class="firm">&lt;/dd&gt; </span><br>
<span class="firm">&lt;/dl&gt;</span><br>
</code></div>
<div class="unit size1of2 mara">
<h2  class="abel hole">busy with...</h2>
<ul class=" size300 abel">
  <!--<li class="mbl"><span class="firm">today</span> <span class="undeline">writing down some posts for <a href="http://naknakblog.wordpress.com">my blog</a></span> </li>-->
  
  <li>#CssArchitectures</li>  
  <li>#cssPreprocessors</li>  
  <li>#ResponsiveWebDesign</li></ul>
  <p class="mtl text size200 abel"><span class="firm text size3"> Today working on...</span> <br> <br>
  
  <!--slides about <a href="http://www.naknak.me/emmet" target="_blank">Emmet.io</a> for <span class="underline"><a href="https://twitter.com/deswebcom" target="_blank">@deswebcom</a> </span> on 13th of November <span class="firm">#devIO</span>
  One date in mind: <span class="firm">January 26th </span><br><span class="underline firm tar">bilbostack</span>--> 
  <!--PlaceColor <span class="firm">#hackmité</span>
<span>...my talk about <span class="firm bold">Cross Browser</span> for 
  <a href="http://www.html5-spain.com/html5-spain/fridaywebforward/landing.html" target="_blank"><span class="firm">#fridaywebforward</span></a> 2013/3/22 Madrid 
  organized by  <a href="http://html5spain.wordpress.com/" target="_blank"><span class="firm">HTML5Spain</span> </a></span>
  </p>
  <a href="http://escuela.it/cursos/sass/" target="_blank"><span class="firm">Taller de preprocesadores CSS: Sass </span></a>en Escuela IT. Workshop online.06/04/2013
  some interesting CSS layout
  Organizing <a href="http://anticamp.org" target="_blank"><span class="text bold firm">#theAntiCamp</span></a>  -->
  <!--<li>#windows8AppsDesign </li>
  Preparando las <span class="firm bold">clases de CSS3</span> para el <a href="http://www.postgrado.deusto.es/cs/Satellite/estudiantes/es/buscador-de-postgrados/diploma-de-especializacion-en-soluciones-software-para-internet-/programa" target="_blank">Diploma de Especialización de Soluciones Software para Internet</a> <br> de la Universidad de Deusto.-->
 <!--  Diseñando y documentando la app Djigbée para la prevención de riesgos en el embarazo y ayuda en la supervivencia infantil de Ghana para <a href="http://www.mobileforgoodeuropeawards.com/" target="_blank">#mobile4good</a>
 -->
 <!-- Working on <a href="https://github.com/tapquo/atoms/" target="_blank">#atoms </a>interface patterns -->
 Improving <a target="_blank" href="https://developer.wimi5.com/ide">wimi5</a> interface
  

<!--<p class="mll"><a href="http://www.naknak.me/w8">Ver la guía de la charla en #hackw8</a></li></p>--></div>  
</div><!--cerrar line-->


</article>
</div>
</div>
<div class="mainbox bgfirm contrast boxshadowl cv">
<a name="cv"></a>
<div class="top_a">&nbsp;</div>
<div class="gs960 mara">
<article class="">
<h1  class="abel contrast txtac text size100">cv</h1>
<h2 class="contrast txtac abel size300 mtxl ">I <span class="icon_heart disblin">&nbsp;</span> sharing</h2>
<ul class="horiz height120 mtxl txtac ">
<!--<li class="size1of5 icon_contrast" ><a href="http://www.linkedin.com/in/naiaraabaroa" target="_blank">
<i class="social foundicon-linkedin hole_contrast text size55"></i>
<span class="hide">Linkedin</span></a> 

<li class="size1of5 icon_contrast" ><a href="https://twitter.com/#!/nabaroa" target="_blank">
<i class="social foundicon-twitter hole_contrast text size55"></i>
<span class="hide">Twitter</span></a></li>
<li class="size1of5 icon_contrast" ><a href="http://pinterest.com/nabaroa/" target="_blank">
<i class="social foundicon-pinterest hole_contrast text size55"></i>
<span class="hide">Pinterest</span></a>
<li class="size1of5 icon_contrast" ><a href="https://plus.google.com/u/0/106783201431526527457/posts" target="_blank">
<i class="social foundicon-google-plus hole_contrast text size55"></i>
<span class="hide">Google +</span></a>
</li>
<li class="size1of5 icon_contrast" ><a href="http://naknakblog.wordpress.com/" target="_blank"><i class="social foundicon-wordpress hole_contrast text size55"></i>
<span class="hide">Blog</span></a>
</li>-->
<li class="size1of6" ><a href="http://www.linkedin.com/in/naiaraabaroa/en" target="_blank"><i class="icon-linkedin contrast size700"></i><em class="disb">&nbsp;</em></a> </li>
<li class="size1of6" ><a href="https://github.com/nabaroa" target="_blank"><i class="icon-github contrast size700"></i></a> </li>
<li class="size1of6 " ><a href="https://twitter.com/#!/nabaroa" target="_blank"><i class="icon-twitter contrast size700"></i></a></li>
<li class="size1of6" ><a href="http://pinterest.com/nabaroa/" target="_blank"><i class="icon-pinterest contrast size700"></i></a>
<li class="google size1of6" ><a href="https://plus.google.com/u/0/106783201431526527457/posts" target="_blank"><em class="disb">&nbsp;</em></a>
</li>
<li class="wordpress size1of6" ><a href="http://www.naknak.me/blog" target="_blank"><em class="disb">&nbsp;</em></a> 
</li>


</ul>	

<p class="size300 abel txtac mtxl">All my CV is on these social platforms. <br> 
<span class="underline_contrast">Feel free </span>to gossip.</p>
</article>
</div>
</div>

<div class="mainboxfree pattern3 contrast boxshadowl works">
<a name="projects"></a>
<div class="top_k">&nbsp;</div>
<article>
<h1  class="abel hole_dark txtac text size100">works</h1>   
<!--
<nav><ul>
<li>web</li>
<li>design</li>
</ul></nav>

-->


  
  <section id="content"> 
<!--
<div class="tac size1of1 mara">
    <h2 class="mtl bare wire"><span class="underline pbm">monographic</span> master classes</h2>
    <ul class="fll size1of1 li4 height400  mtxxl">
      <li class="tac "><a href="http://www.naknak.me/w8" target="_blank">
        <img  src="plugings/skin/skin/w8_logo.png" alt="">
        <span class="hide">Windows 8 apps design</span>
      </a></li>

      <li class="tac   "><a href="http://www.naknak.me/zenCoding" target="_blank">
        <img  src="plugings/skin/skin/zen_logo_nak.png" alt="">
        <span class="hide">Zen Coding</span></a> -->
        <!--<div class="coming-soon">&nbsp;</div>-->
     <!-- </li>
      
      <li class="tac  "><a href="http://www.naknak.me/emmet" target="_blank">
        <img  src="plugings/skin/skin/emmet_logo.jpg" alt="">
        <span class="hide">emmet.io</span></a>
        <div class="coming-soon">&nbsp;</div>
      </li>
      <li class="tac"><a href="http://www.slid.us/ga7#/ " target="_blank"><img src="bilbostack/components/images/logo.png" height="180" alt=""></a>
      
      </li>
    </ul>
  </div>-->
  
    
<!--  <div class="tac size1of1 mara line">
    <h2 class="mtl mbl wire tshadow bare">Web</h2>
  </div>-->
<div id="container" class="transitions-enabled clearfix">

<div class="box col4"> 
  <img src="http://www.naknak.me/useconcept/portada.jpg"  >
  <h2 class="abel contrast">Practice safe design, use a concept</h2>
  <p>Web slides for the online class of <a href="http://escuela.it/cursos/curso-gratuito-de-iniciacion-al-desarrollo-web/" target="_blank">Escuela IT</a></p>
  <p class="firm">2013</p>
  <p><a href="http://www.slid.us/f25W#/" target="_blank">Go to site</a></p>
  </div>
  
 <div class="box col4"> 
  <img src="http://images.indiegogo.com/medias/958015/primary_pictures/full/20130731151522-anticamp_crowdfunding.jpg?1375308926" width="400" height="250" >
  <h2 class="abel contrast">TheAntiCamp</h2>
  <p class="firm">2013</p>
  <p><a href="http://anticamp.org" target="_blank">Go to site</a></p>
  </div>

<!--
  <div class="box col4"> 
  <div class="cooking">&nbsp;</div> 
  <img src="https://pbs.twimg.com/media/BJLFTGmCUAA_sHO.jpg" width="400" height="250" >
  <h2 class="abel contrast">HTML & CSS clases</h2>-->
  <!--<p>HTML & CSS clases</p>--> 
 <!-- <p class="firm">2013</p>
  <p>Project created for <a href="http://cursohtml5.m4f.es/" target="_blank" class="firm">cursohtml5.m4f.es/</a></p>-->
  <!--<p><a href="http://www.slid.us/abd2#/" target="_blank">Go to site</a></p>  -->
 <!-- </div>-->

  <div class="box col4"> 
 <!-- <div class="cooking">&nbsp;</div> -->
  <img src="assets/cross.jpg" width="400" height="250" >
  <h2 class="abel contrast"><3 the cross browser</h2>
  <p>Web slides</p>
  <p class="firm">2013</p>
  <p>Project created for <a href="http://www.html5-spain.com/html5-spain/fridaywebforward/landing.html" target="_blank" class="firm">#FridayWebFordward</a></p>
  <p><a href="http://www.slid.us/abd2#/" target="_blank">Go to site</a></p>  
  </div>
  
  <div class="box col3">  
  <img src="assets/placecolor.jpg" width="400" height="300" >
  <h2 class="abel contrast">placeColor.in</h2>
  <p>Web: Design and front-end development</p>
  <p class="firm">2013</p>
  <p>Project created in the <a href="http://hackmite.elcomite.org/" target="_blank" class="firm">#hackmite</a></p>
  <p><a href="#" target="_blank">Go to site</a></p>    
  </div>
  
  <div class="box col4">  
  <img src="dribbble/images/css.jpg" width="400" height="300" >
  <h2 class="abel contrast">The CSS Preprocessor</h2>
  <p>Web slides for the speech in Bilbostack </p>
  <p class="firm">2013</p>
 
  <p><a href="http://www.slid.us/ga7#/ " target="_blank">Go to site</a></p>    
  </div>  
  <div class="box col3">  
  <img src="dribbble/images/emmet.jpg" width="400" height="200" >
  <h2 class="abel contrast">Emmet.io Improve your HTML & CSS workflow</h2>
  <p>Web slides</p>
  <p class="firm">2012</p>
 
  <p><a href="/emmet " target="_blank">Go to site</a></p>    
  </div> 
   
  <div class="box col3">  
  <img src="dribbble/images/zen.jpg" width="400" height="200" >
  <h2 class="abel contrast">Zen coding</h2>
  <p>Web slides</p>
  <p class="firm">2012</p> 
  <p><a href="/zencoding " target="_blank">Go to site</a></p>    
  </div>  
   
  <div class="box col3">  
  <img src="dribbble/images/nak.jpg" width="300" height="200" >
  <h2 class="abel contrast">Corporate image #nak</h2>
  <p>Cards, steakers,...</p>
  <p class="firm">2012</p> 
  <!--<p><a href="/w8 " target="_blank">Go to site</a></p>--> 
  </div>
  
  <div class="box col2">  
  <img src="plugings/skin/skin/w8_logo.png" width="200" height="150" >
  <h2 class="abel contrast">Diseño de apps Windows 8</h2>
  <p>Web slides</p>
  <p class="firm">2012</p> 
  <p><a href="/w8 " target="_blank">Go to site</a></p>    
  </div>

  <div class="box col3">  
  <img src="dribbble/images/dribbble.jpg" width="300" height="200" >
  <h2 class="abel contrast">Dribbble</h2>
  <p>Web: Design and front-end development</p>
  <p class="firm">2012</p>
  <p>An exercise to practice the framework Tuktuk</p>
  <p><a href="http://www.naknak.me/dribbble" target="_blank">Go to site</a></p>    
  </div>
  
  <div class="box col3">  
  <img src="assets/esoft_m.jpg" width="280" height="422">
  <h2 class="abel contrast">eSOFT</h2>
  <p>Web: Design and front-end development</p>
  <p class="firm">2011</p>
  <p><a href="http://www.e-soft.es" target="_blank">Go to site</a></p>    
  </div>
  <!--
  <div class="box col2">  
  <img src="assets/koopelektrik_m.jpg" width="280" height="131">
  <h2 class="abel contrast">Koopelektrik</h2>
  <p>Web: Design and front-end development</p>
  <p class="firm">2012</p>
  <p><a href="http://www.koopelektrik.com" target="_blank">Go to site</a></p>    
  </div>-->
  

  
    <div class="box col3">  
  <img src="assets/bolidismo_m.jpg" width="280" height="150">
  <h2 class="abel contrast">Bolidismo</h2>
  <p>Web: Design and front-end development.</p> 
  <p class="firm">2011</p>
  <p><a href="http://www.bolidismo.com" target="_blank">Go to site</a></p>     
  </div>
  
          <div class="box col2">  
  <img src="assets/boga_m.jpg" width="180" height="120">
  <h2 class="abel contrast">Guk ere boga!</h2>
  <p>Design: press advertising</p>
  <p class="firm">2011</p> 

  </div>
  
  <div class="box col4">  
  <img src="assets/iaran_m.jpg" width="380" height="324">
  <h2 class="abel contrast">Iaran</h2>
  <p>Restyling corporate image. Web project.</p>
  <p class="firm">2011</p>
    
  </div>
  
  <div class="box col1">  
  <img src="assets/iaran2_m.jpg" width="80" height="858">
  <h2 class="abel contrast">Iaran</h2>
  <p>Catalog</p>
  <p class="firm">2011</p> 
  </div>
  
  <div class="box col3">  
  <img src="assets/eguiluz_m.jpg" width="280" height="118">
  <h2 class="abel contrast">Mercedes Eguiluz</h2>
  <p>Web: Design and front-end development</p>
  <p class="firm">2011</p> 
  <p><a href="http://www.mercedeseguiluz.com" target="_blank">Go to site</a></p>  
  </div>
  
    <div class="box col3">  
  <img src="assets/izarbidean_m.jpg" width="280" height="104">
  <h2 class="abel contrast">Izarbidean</h2>
  <p>Web: Design and front-end development</p>
  <p class="firm">2011</p> 
  <p><a href="http://www.izarbidean.org" target="_blank">Go to site</a></p>  
  </div>

   <!-- <div class="box col1">  
  <img src="assets/e1_m.jpg" width="80" height="53">
  <h2 class="abel contrast">eSOFT</h2>
  <p>Design: Product logo</p>
  <p class="firm">2010</p> 
 
  </div>-->
  

  
  <div class="box col2">  
  <img src="assets/walk_m.jpg" width="180" height="88">
  <h2 class="abel contrast">Walk and Talk</h2>
  <p>Web: Design and front-end development</p>
  <p class="firm">2011</p> 
  <p><a href="http://www.walkandtalk.es" target="_blank">Go to site</a></p>  
  </div>
  
  <div class="box col2">  
  <img src="assets/janire_m.jpg" width="180" height="136">
  <h2 class="abel contrast">Janire Oñederra</h2>
  <p>Design: logo, shop window</p>
  <p class="firm">2012</p> 
  </div>
  
  <div class="box col1">  
  <img src="assets/katafora_m.jpg" width="80" height="190">
  <h2 class="abel contrast">Katafora</h2>
  <p>Web: Design and front-end development. Logo design</p>
  <p class="firm">2012</p> 
  <p><a href="http://www.katafora.com" target="_blank">Go to site</a></p> 
  </div>
  
      <div class="box col3">  
  <img src="assets/epaia_m.jpg" width="280" height="131">
  <h2 class="abel contrast">Restaurante Epaia</h2>
  <p>Web: design front-end development</p>
  <p class="firm">2009</p> 
  <p><a href="http://www.restauranteepaia.com/" target="_blank">Go to site</a></p> 
  </div>
  
  <div class="box col2">  
  <img src="assets/aguirreoa_m.jpg" width="180" height="209">
  <h2 class="abel contrast">Aguirreoa</h2>
  <p>Design of packaging of some of their products</p>
  <p class="firm">2010</p> 
  </div>
  
 <div class="box col2">  
  <img src="assets/launa_m.jpg" width="180" height="97">
  <h2 class="abel contrast">Bodegas Launa</h2>
  <p>Web: front-end development</p>
  <p class="firm">2010</p> 
  <p><a href="http://www.bodegaslauna.com/" target="_blank">Go to site</a></p> 
  </div>
 
  <div class="box col3">  
  <img src="assets/carlton_m.jpg" width="280" height="156">
  <h2 class="abel contrast">Restaurante Carlton</h2>
  <p>Web: design front-end development</p>
  <p class="firm">2009</p> 
  <p><a href="http://www.restaurantecarlton.com/" target="_blank">Go to site</a></p> 
  </div>
  

  
  <div class="box col3">  
  <img src="assets/urline_m.jpg" width="280" height="191">
  <h2 class="abel contrast">Urline</h2>
  <p>Web: design front-end development</p>
  <p class="firm">2011</p> 
  <p><a href="http://www.urline.es" target="_blank">Go to site</a></p> 
  </div>
  
  <div class="box col3">  
  <img src="assets/estudio3_m.jpg" width="280" height="191">
  <h2 class="abel contrast">Estudio 3</h2>
  <p>Web: design front-end development</p>
  <p class="firm">2009</p>   
   </div>
   
   <!-- <div class="box col1">  
  <img src="assets/visio_m.jpg" width="80" height="210"> 
  <h2 class="abel contrast">Conferencia Visio</h2>
  <p>Web: design front-end development</p>
  <p class="firm">2011</p> 
  <p><a href="http://www.conferencia-visio.com/" target="_blank">Go to site</a></p> 
 </div>-->
 
 
      <div class="box col3">  
  <img src="assets/margo_m.jpg" width="280" height="143"> 
  <h2 class="abel contrast">Lekeitioko margo erakusketa</h2>
  <p>Design: Catalog</p>
  <p class="firm">2009</p> 
 </div>
 
 

</div> <!-- #container --> 
<a name="find"></a>
<div class="gs960 mara">
  <h1  class="abel txtac text size100 contrast mtxxl find">Find me at...</h1>  
    <div class="size1of2 fll calendar find">
    <h2 class="abel">Speaking <span class="contrast"></span></h2>
    <div class="rotate90 ab upcoming">Upcoming</div>
    <ul>
    
    <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">07/08/2013</span> Desarrolloweb.com, clase <a href="http://escuela.it/" target="_blank">Escuela IT</a> online</li>
          <li>Practive safe design, use a concept</li>
          <li>
          <a href="http://escuela.it/cursos/curso-gratuito-de-iniciacion-al-desarrollo-web/" target="_blank"><i class="icon-external-link"></i></a>
          <a href="http://www.slid.us/f25W#/" target="_blank">
            <i class="icon-slides"></i>
          </a>
          <a href="http://www.youtube.com/watch?v=LCBf0qh6LQI" target="_blank">
            <i class="icon-facetime-video"></i>
          </a>
          
            </li>
        </ul>
      </li>
   
      <li><i class="icon-circle "></i>
        <ul>
          <li><span class="firm">02/04/2013</span> Desarrolloweb.com, Hangout online</li>
          <li>SASS. #devIO</li>
          <li>
          <a href="http://www.desarrolloweb.com/en-directo/preprocesadores-css-devio-8054.html" target="_blank"><i class="icon-external-link"></i></a>
          <a href="http://www.slid.us/ga7#/"  target="_blank"><i class="icon-slides"></i></a>
          <a href="http://www.youtube.com/watch?v=MUN8CwzCecI&list=PLIcuwIrm4rKdiX6EJpH3dPMv0KkNHD_8q&index=12" target="_blank">
            <i class="icon-facetime-video"></i>
          </a>
          </li>
        </ul>
      </li>
       
      </li>
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">22/03/2013</span> #FridayWebForward. Madrid</li>
          <li>Love the Cross-browser</li>
          <li>
          <a href="http://www.html5-spain.com/html5-spain/fridaywebforward/landing.html" target="_blank"><i class="icon-external-link"></i></a>
          <a href="http://www.slid.us/abd2#/" target="_blank">
            <i class="icon-slides"></i>
          </a>
          <a href="http://www.youtube.com/watch?v=WLNDykQpI9A" target="_blank">
            <i class="icon-facetime-video"></i>
          </a>
          
            </li>
        </ul>
      </li>
     
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">1/03/2013 </span>Hack For Good Bilbao</li>
          <li>Emmet.io Improve your HTML & CSS workflow</li>
          <li>
          <a href="http://hackforgood.net/bilbao/" target="_blank">
            <i class="icon-external-link"></i>
          </a>
          <a href="http://www.naknak.me/emmet" target="_blank">
            <i class="icon-slides"></i>
          </a>
          
          </li>
        </ul> 
      </li>
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">28/02/2013</span> HTML5Spain. Hangout online</li>
          <li>CSS Preprocessor. La revolución</li>
          <li>
            <a href="http://www.meetup.com/HTML5-Spain/events/105307612/"  target="_blank"><i class="icon-external-link"></i></a>
            <a href="http://www.slid.us/ga7#/"  target="_blank"><i class="icon-slides"></i></a>
            <a href="http://www.youtube.com/watch?v=BQaKHGvjCYI&list=UU31NJL93O-T0seb7sOgxtsw&index=2" target="_blank">
              <i class="icon-facetime-video"></i>
            </a>
          </li>
        </ul> 
      </li>
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">26/01/2013</span> Bilbostack. Bilbao</li>
          <li>CSS Preprocessor. La revolución</li>
          <li>  
            <a href="http://bilbostack.com/"  target="_blank"><i class="icon-external-link"></i></a>
            <a href="http://www.slid.us/ga7#/"  target="_blank"><i class="icon-slides"></i></a>
            <a href="http://www.youtube.com/watch?feature=player_embedded&v=pDTmukK6kAY" target="_blank">
              <i class="icon-facetime-video"></i>
            </a>
            </li>
        </ul> 
      </li>
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">13/10/2012</span> Desarrolloweb.com. Hangout online</li>
          <li>Emmet.io Improve your HTML & CSS workflow</li>
          <li>
            <a href="http://www.desarrolloweb.com/en-directo/devio-emmet-new-zencoding-7639.html" target="_blank"> <i class="icon-external-link"></i> </a>
            <a href="http://www.naknak.me/emmet" target="_blank"> <i class="icon-slides"></i> </a>
            <a href="http://www.youtube.com/watch?feature=player_embedded&v=ASELM0mYqtA" target="_blank">
              <i class="icon-facetime-video"></i>
            </a>
          </li>
        </ul> 
      </li>
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">11/10/2012</span> Tapcoders by Tapquo. Bilbao</li>
          <li>Zen Coding</li>
          <li> <a href="http://www.naknak.me/zenCoding" target="_blank"> <i class="icon-slides"></i> </a>
            <a href="http://www.naknak.me/blog/?p=115" target="_blank">
              <i class="icon-blog"></i>
            </a></li>
        </ul> 
      </li>
      <li><i class="icon-circle"></i>
      <ul>
          <li><span class="firm">8/09/2012 </span>Megathon Windows 8. Bilbao</li>
          <li>Diseño de apps Windows 8</li>
          <li><a href="http://megathonwindows8.azurewebsites.net" target="_blank"> <i class="icon-external-link"></i> </a>
          <a href="http://www.naknak.me/w8" target="_blank"> <i class="icon-slides"></i> </a>
          <a href="http://www.naknak.me/blog/?p=89" target="_blank">
              <i class="icon-blog"></i>
            </a>
          </li>
        </ul> </li>
    </ul>
    <div class="rotate90 ab past">Past</div>
    
    </div>
   
    <div class="size1of2 flr calendar find"><h2 class="abel">Teaching</h2>
    
    
    <div class="rotate90 ab upcoming">Upcoming</div>
    <ul>
    
    <!--  <li><i class="icon-circle firm"></i>
        <ul>
          <li><span class="firm">01/11/2013-02/11/2013 </span> <a href="http://anticamp.org" target="_blank">TheAntiCamp. Barcelona</a></li>
          <li>SASS workshop</li>
          <li>
          <a href="http://anticamp.org" target="_blank">
            <i class="icon-external-link"></i>
          </a>
      
          
          </li>
          </ul></li> 
          
           <li><i class="icon-circle firm"></i>
        <ul>
          <li><span class="firm">05/10/2013-06/10/2013 </span> <a href="http://anticamp.org" target="_blank">TheAntiCamp. Madrid</a></li>
          <li>SASS workshop</li>
          <li>
          <a href="http://anticamp.org" target="_blank">
            <i class="icon-external-link"></i>
          </a>
      
          
          </li>
          </ul></li>-->
      
       <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">27/09/2013-1/10/2013 </span> <br> Diploma de Especialización de Soluciones <br>Software para Internet. Universidad de Deusto.</li>
          <li>CSS3</li>
          <li>
          <a href="http://www.postgrado.deusto.es/cs/Satellite/estudiantes/es/buscador-de-postgrados/diploma-de-especializacion-en-soluciones-software-para-internet-/programa" target="_blank">
            <i class="icon-external-link"></i>
          </a>
          <a href="http://www.slid.us/T32l#/" target="_blank">
            <i class="icon-slides"></i>
          </a>
      
          
          </li>
          </ul></li>
      
     <!--  <li><i class="icon-circle firm"></i>
        <ul>
          <li><span class="firm">7/09/2013-8/09/2013 </span> <a href="http://anticamp.org" target="_blank">TheAntiCamp. Bilbao</a></li>
          <li>SASS workshop</li>
          <li>
          <a href="http://anticamp.org" target="_blank">
            <i class="icon-external-link"></i>
          </a>
      
          
          </li>
          </ul></li> -->
      <!--
      <li><i class="icon-circle firm"></i>
        <ul>
          <li><span class="firm">09/2013 (estimated date)</span> <br> Curso completo de desarrollo en HTML5</li>
          <li>HTML and CSS clases</li>
          <li>
          <a href="http://cursohtml5.m4f.es/" target="_blank">
            <i class="icon-external-link"></i>
          </a>
      
          
          </li>
        </ul> 
      </li>-->
      <!-- <li><i class="icon-play "></i><span class="today firm">Today</span> -->
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">06/04/2013</span> Escuela IT. Workshop online</li>
          <li>Taller de preprocesadores CSS: Sass</li>
          <li><a href="http://www.escuela.it/cursos/sass/" target="_blank"><i class="icon-external-link"></i></a> </li>
        </ul>
      </li>
        </ul> 
      </li>   
      
      
     
    </ul>
    <div class="rotate90 ab past">Past</div>
    </div>
      
      
</div>
<div class="size1of2 flr calendar find mtx"><h2 class="abel">Participate</h2>
    
    <div class="rotate90 ab upcoming">Upcoming</div>
    <ul>
    
      
     <!-- <li><i class="icon-play firm"></i><span class="today firm">Today</span>
      </li>-->
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">28/09/2013 </span>Apps4health de Anesvad</li>
          <li>Djigbée</li>
          <li>
          <a href="http://apps4health.es/#/" target="_blank">
            <i class="icon-external-link"></i>
          </a><a href="https://github.com/jce00006/GhanaCNMJ" target="_blank">
            <i class="icon-github"></i>
          </a>
         
          
          </li>
        </ul> 
      </li>


      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">20/07/2013-21/07/2013 </span>TheAntiEvent</li>
          <li>Flexbox</li>
          <li>
          <a href="http://theantievent.wordpress.com/" target="_blank">
            <i class="icon-external-link"></i>
          </a>
          <a href="http://www.slid.us/Z24e#/" target="_blank">
            <i class="icon-slides"></i>
          </a>
          
          </li>
        </ul> 
      </li>
      
      
      <li><i class="icon-circle"></i>
        <ul>
          <li><span class="firm">15/02/2013-17/02/2013 </span>Hackmité</li>
          <li>Placecolor.in</li>
          <li>
          <a href="http://hackmite.elcomite.org/" target="_blank">
            <i class="icon-external-link"></i>
          </a>
          <!--<a href="http://www.placecolor.in" target="_blank">
            <i class="icon-slides"></i>
          </a>-->
          
          </li>
        </ul> 
      </li>
      
      <li><i class="icon-circle"></i>
      <ul>
          <li><span class="firm">17/11/2012 </span>Blackberry Jam Sesion. Bilbao</li>
          <li>Biker Citizens</li>
          <li><a href="http://megathonwindows8.azurewebsites.net" target="_blank"> <i class="icon-external-link"></i> </a>
          <!--<a href="http://www.naknak.me/w8" target="_blank"> <i class="icon-slides"></i> </a>-->
          <a href="http://www.naknak.me/blog/?p=208" target="_blank">
              <i class="icon-blog"></i>
          </a>
          <a href="https://plus.google.com/photos/100789713336116884250/albums/5811785324167255809" target="_blank">
            <i class="icon-picture"></i>
          </a>
          </li>
        </ul> 
      </li>   
      
      <li><i class="icon-circle"></i>
      <ul>
          <li><span class="firm">8/09/2012 </span>Megathon Windows 8. Bilbao</li>
          <li>App para Windows 8: Emoticons</li>
          <li><a href="http://megathonwindows8.azurewebsites.net" target="_blank"> <i class="icon-external-link"></i> </a>
          <!--<a href="http://www.naknak.me/w8" target="_blank"> <i class="icon-slides"></i> </a>-->
          <a href="http://www.naknak.me/blog/?p=89" target="_blank">
              <i class="icon-blog"></i>
            </a>
          </li>
        </ul> 
      </li>
     
    </ul>
    <div class="rotate90 ab past">Past</div>
    </div>
      
      <div class="clear"></div>
</div>

</article> 

 
 </div>
 
     
 
</div>
</div>

<div class="mainbox inspire">
<a name="inspiration"></a>
<h1  class="abel hole text size100 txtac mtx h1rwd">Inspiration</h1> 
            
   <div class="bgfirm pvl mtx"><p class="size300 mtl tac contrast" >"They didn't <strong>know it was impossible</strong>, so they <strong>did it</strong>!"</p> 
      <p class="small tac">Mark Twain</p> </div>
  </div>


<footer  class="mainbox foot">
<a name="about"></a>
<div class="mara pal">
 

    <div class="top_nak mtxl">&nbsp;</div>
	<h1  class="abel hole text size100 txtac mtl">about</h1> 
	
	 <p class="mtl txtac text size2">My name is Naiara Abaroa</p> 

	 <ul class="ch-grid">
    <li>
        <div class="ch-item ch-img-1">              
            <div class="ch-info-wrap">
                <div class="ch-info">
                    <div class="ch-info-front ch-img-1"></div>
                    <div class="ch-info-back">
                        <h3>Naiara Abaroa</h3>
                    </div>  
                </div>
            </div>
        </div>
    </li>
</ul>
	<p class="text size2 tac">If you want to contact me <a href="https://twitter.com/nabaroa" target="_blank"><span class="text bold firm">send me a tweet </span>to @nabaroa</a> or a DM</p>
 
<div class="notfinished">scroll down <br>to see the credits</div>

<!--<p>Used bibliography</p>
<p>Used elements:</p>

<ul>
<li>SVG images</li>
<li>Media Query</li>
<li>Media Query</li>
</ul>-->
    


</div>


   
</footer>
<div class="bgopaque size1of1 pal tac contrast">
<h1  class="abel hole text size100 txtac mtx h1rwd">Credits</h1> 
  
  <p  class="mtl">The source of this work:</p>
   <ul  >
    <li><a href="https://twitter.com/stubornella" target="_blank" class="firm">@stubornella</a>: oocss </li>
    <li><a href="http://sass-lang.com/" target="_blank" class="firm">Sass</a>  </li>
  
   <li><a href="https://twitter.com/desandro" target="_blank" class="firm">@desandro</a>: jquery Masonry </li> 
   <li><a href="http://www.dwuser.com/education/content/quick-guide-adding-smooth-scrolling-to-your-webpages/" target="_blank" class="firm">Nathan Rohler</a>: Smooth Scrolling </li> 
   
   <li><a href="https://twitter.com/nounproject" target="_blank" class="firm">@nounproject</a>: SVG icons</li>
   <li><a href="https://twitter.com/fortaweso_me" target="_blank" class="firm">Font awesome</a>: social icons</li>
   <li><a href="https://twitter.com/sormenpills" target="_blank" class="firm">@sormenpills</a>: friendship ;)</li>
  
   </ul>
  <p> + my apportation ;)</p>
  <p class="size150 mtl">Thank you! You all are <span class="bold text firm">my heroes</span>.</p>  
  
     <p class="mtl small">Index images atributions are on <a href="http://pinterest.com/nabaroa/kristaletik-begira/" target="_blank">my 
        pinterest board: "kristaletik begira"</a></p>
</div>

<script src="../js/jquery-1.7.1.min.js"></script>
<script  src="../js/smoothscroll.js"></script>
<script src="../js/query.masonry.min.js"></script>
<script>
  $(function(){
    
    $('#container').masonry({
      itemSelector: '.box',
      columnWidth: 100,
      isAnimated: !Modernizr.csstransitions
    });
    
  });
</script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-32740256-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body>
</html>  
