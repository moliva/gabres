!function(){"use strict";var e=function(e,r){angular.forEach(e,function(e,o){r.when(e.path,{templateUrl:e.templateUrl,controller:e.controller,controllerAs:e.controllerAlias})})};angular.module("gabres",["ngRoute","gabres-routes","gabres-main","gabres-directives","templates"]).config(["$routeProvider","$locationProvider","mainRoutes",function(r,o,t){o.hashPrefix("!"),e(t,r),r.otherwise({redirectTo:"/"})}])}();
!function(){"use strict";angular.module("gabres-company",[]).constant("company",{name:"Gabres S.L.U. - Plásticos Reforzados",shortName:"Gabres S.L.",physicalAddress:{street:"Partida de Algorós",city:"ELCHE - ALICANTE"},postalAddress:{street:"Apartado de Correo 5254",city:"(03080) ALICANTE"},emailAddress:"info@prgabres.com",phone:"+34965105963",phoneForShowing:"(+34) 965 105 963"}).constant("lines",[{id:"almacenamiento-liquidos",name:"Almacenamiento de Líquidos",description:"Disponemos de diversos modelos de depósitos abarcando todas las necesidades del instalador:\nCilíndricos, rectangulares, especiales bajo rampa, horizontales con pies de soporte, para enterrar, etc.\nTrabajamos a medida, es decir, con cualquier diámetro y altura según disponibilidad de espacio.\nUtilizando el tipo de resina adecuado para cada caso fabricamos depósitos para contención de agua potable, sistemas contraincendios, combustibles, químicos, abonos y productos alimenticios en general.\nRealizamos montaje de depósitos en el lugar final donde irán instalados con nuestros equipos de profesionales.",images:[{url:"images/almacenamiento-liquidos.jpg"}],products:[{name:"DC - Cilíndrico vertical de superficie",isMountable:!0,images:[{url:"images/cilindro-vertical-superficie.jpg"}],characteristics:["Su diseño cilíndrico les dota de una excelente resistencia a la presión hidrostática","Su superficie interior lisa facilita una perfecta limpieza","Fabricados con RESINAS DE USO ALIMENTICIO cuando se requiere almacenar agua potable","Todas las medidas y volúmenes hasta 75.000 litros"],accessories:["Tapa de registro en la parte superior","Boca hombre hermética en el lateral","Tomas de entrada, salida y rebosadero","Cinta de nivel"]},{name:"DC - Cilíndrico vertical para enterrar",isMountable:!1,images:[{url:"images/cilindro-vertical-enterrar-1.jpg"},{url:"images/cilindro-vertical-enterrar-2.jpg"}],characteristics:["Con tapa plana en el caso de construir una losa de hormigón armado para permitir tránsito","Con tapa curva para el caso de no poner losa","Refuerzos extra para poder soterrarlos","Las mismas características que los de superficie"],accessories:["Tapa de registro","Tomas de entrada, salida y rebosadero","Ganchos de carga"]},{name:"DH - Cilíndrico horizontal para enterrar",isMountable:!1,images:[{url:"images/cilindro-horizontal-enterrar.jpg"}],characteristics:["Las mismas características que los de superficie vertical"],accessories:["Tapa de registro","Tomas de entrada, salida y rebosadero","Ganchos de carga"]},{name:"DHS - Cilíndrico horizontal para superficie",isMountable:!1,images:[{url:"images/cilindro-horizontal-superficie.jpg"}],characteristics:["Indicados para el caso de espacio reducido","Las mismas características que los de superficie vertical"],accessories:["Tapa de registro","Tomas de entrada, salida y rebosadero","Ganchos de carga","Pies de soporte"]},{name:"DR - Rectangular y otros",isMountable:!0,images:[{url:"images/rectangular-y-otros-1.jpg"},{url:"images/rectangular-y-otros-2.jpg"}],characteristics:["Su diseño permite aprovechar cualquier espacio: rincones, bajo escaleras, bajo rampas","Su superficie interior lisa facilita una perfecta limpieza","Fabricados con RESINAS DE USO ALIMENTICIO cuando se requiere almacenar agua potable","Todas las medidas y volúmenes hasta 30.000 litros","Con refuerzos internos de hierro recubiertos entrecruzados"],accessories:["Tapa de registro en la parte superior","Boca hombre hermética en el lateral","Tomas de entrada, salida y rebosadero","Cinta de nivel"]},{name:"AC / AR - Arqueta acometida saneamiento",isMountable:!1,images:[{url:"images/arqueta-acometida-saneamiento-1.jpg"},{url:"images/arqueta-acometida-saneamiento-2.jpg"}],characteristics:["Medidas standard cilíndricas: 0,90 mts. de diámetro y 1,20 mts de alto","Medidas standard rectangulares: 0,90 x 0,90 x 1,20 mts de alto y 1,00 x 1,00 x 1,00 mts. de alto","Medidas especiales: Debido a la complejidad de la instalación, en ciertos casos es conveniente y/o necesario cambiar el sitio de la(s) entrada(s) y salida. Para ello está la opción de hacerlas a medida. Se entregan ciegas y a la medida solicitada para que el instalador la conecte. Luego se sellan las tomas tanto de entrada como de salida con poliester y fibras de vidrio IN SITU.","Nota: La toma de salida está centrada y a 600 mm. del fondo, en cara anterior (según normativa), y la toma de entrada centrada a 950 mm. en la cara posterior."],accessories:["Cuello de registro","Toma de entrada de 160 mm. de diámetro","Toma de salida de 200 mm. de diámetro"]}]},{id:"tratamiento-aguas",name:"Tratamiento de Aguas",description:"Sistemas de depuración para aguas residuales de uso doméstico con el objetivo de conseguir una calidad de vertido dentro de los parámentros establecidos por la normativa europea.",images:[{url:"images/tratamiento-aguas-1.jpg"},{url:"images/tratamiento-aguas-2.jpg"},{url:"images/tratamiento-aguas-3.jpg"}],products:[{name:"DDBA - Fosa séptica Decantador - Digestor",isMountable:!1,images:[],description:"Están especialmente indicadas para tratar aguas fecales de instalaciones en las que no sea necesaria una gran cantidad de vertido. Consta de dos compartimientos, en el primero los sedimentos decantan hacia el fondo, pasando el agua al segundo compartimiento, el digestor, donde las bacterias anacrobias, sin presencia de oxígeno, se encargan de metabolizar la materia orgánica aún presente. Son en general depósitos cilíndricos horizontales para enterrar.",characteristics:[],accessories:[]},{name:"DDBB - Fosa séptica Decantador - Digestor con filtros biológicos",description:"Es el mismo sistema que el anterior al que se le añade un tercer compartimiento donde se encuentra el relleno plástico que actúa como filtro. Este sistema es muy utilizado y cumple con la Ley de Aguas RD 606/2003. Están especialmente indicados para tratar las aguas fecales de pequeñas comunidades."},{name:"OX - Depuradora de oxidación total",images:[{url:"images/depuradora-oxidacion-total.jpg"}],description:"Es un sistema de depuración más eficiente, con aportación de aire para la descomposición biológica de la materia orgánica. Cumplen con la normativa actual de vertido RD 606/2003. Así como la normativa europea, directiva de consejo 91/271/CEE. Funciona descomponiendo la materia orgánica gracias a la aportación de aire y a la generación de microorganismos aerobios.",characteristics:["Reactor biológico (creación y mantenimiento de biomasa)","Aireación prolongada (oxidación total)","Decantador (clarificación del agua)","Recirculación del fango","Tiempo de funcionamiento prolongado","Rendimiento: 90 - 95 % en DBO5 - DQO","Mínimo mantenimiento","Exenta de olores.","Excelente calidad de vertido"],accessories:["Bomba de aire","Tomas de entrada y salida","Temporizador","Panel de control (opcional)"]},{name:"SGD - Separador de grasas",description:"Es un elemento esencial en el tratamiento de aguas residuales que pueden contener un aoprte considerable de grasas. (Por ejemplo: grasa de origen animal, aceites vegetales, detergentes, etc.). Las grasas se separan del agua gracias a la diferencia de densidades. Es por eso que el agua se recoge de la parte intermedia del depósito, a fin de evitar la salida de las grasas. Pueden ser fabricados sobre depósitos cilíndricos horizontales como verticales, dependiendo del volúmen a tratar."},{name:"SGE - Desarenador",description:"Están indicados como depósitos para recogida de aguas pluviales y como pretratamiento para aguas que luego se tratarán en separadores de hidrocarburos. Funcionan por decantación, los sólidos son retenidos en el primer compartimiento del depósito. Se pueden combinar en el mismo depósito el Separador de grasas y el Desarenador, según conveniencia."}]},{id:"revestimientos-impermeabilizacion",name:"Revestimientos / Impermeabilización",content:'<p class="text-justify">Revestimiento e impermeabilización de piscinas de obra, jardineras, aljibes, fosas de ascensor, fuentes, interiores de furgonetas, cuartos de ducha, cubiertas, naves industriales, etc.</p><p class="text-left"><b>Características:</b><ul class="text-left"><li>Rapidez en la ejecución</li><li>Mínimo mantenimiento</li><li>Fácil de limpiar</li><li>Distintos colores</li></ul></p>',images:[{url:"images/revestimientos-impermeabilizacion-1.jpg"},{url:"images/revestimientos-impermeabilizacion-2.jpg"},{url:"images/revestimientos-impermeabilizacion-3.jpg"}]},{id:"linea-nautica",name:"Línea Náutica",content:'<p class="text-justify">Canoas, kayacs y diferentes accesorios y piezas forman parte de nuestra producción.</p><p class="text-justify">Realizamos también reparaciones de cascos y cubiertas.</p>',images:[{url:"images/linea-nautica-1.jpg"},{url:"images/linea-nautica-2.jpg"},{url:"images/linea-nautica-3.jpg"}]}]).constant("otherWorks",{id:"trabajos-especiales",name:"Trabajos Especiales",content:'<p class="text-justify">Chapas para techos, canalones, encofrados para la construcción, maceteros, cachas de motos de competición, cubas para la cria de tortugas o algas, etc. Además de pequeñas producciones en serie.</p><p class="text-justify">Todo en poliester y fibras de vidrio.</p><p class="text-center"><strong>¡Consúltenos!</strong></p>',images:[{url:"images/trabajos-especiales-1.jpg"},{url:"images/trabajos-especiales-2.jpg"}]})}();
!function(){"use strict";angular.module("gabres-directives",["gabres-routes","gabres-company","duScroll"]).directive("menuBar",function(){return{restrict:"E",templateUrl:"assets/partials/menu-bar.html",controllerAs:"menu",controller:["mainRoutes","$location",function(t,e){this.items=t,this.shouldShowSubitems=function(t){return t.subitems&&t.subitems.length>0},this.isActive=function(t){return t===e.path()},this.pathFor=function(t){return t.path?"#!"+t.path:t.absolutePath},this.targetFor=function(t){return t.openInNewPage?"_blank":"_parent"}}]}}).directive("appFooter",function(){return{restrict:"E",templateUrl:"assets/partials/app-footer.html",controller:["$scope","company",function(t,e){t.company=e}]}}).directive("product",function(){return{restrict:"E",templateUrl:"assets/partials/product.html"}}).directive("productLine",function(){return{restrict:"E",templateUrl:"assets/partials/product-line.html"}}).directive("headerBar",function(){return{restrict:"E",templateUrl:"assets/partials/header-bar.html"}}).directive("scrollSpy",["$window",function(t){return{restrict:"A",controller:["$scope",function(t){t.spies=[],this.addSpy=function(e){t.spies.push(e)}}],link:function(e,n,r){var i=function(t,e){var n=null;return angular.forEach(t.find("product-line"),function(t,r){e.id===t.id&&(n=t)}),n},o=[];e.$watch("spies",function(t){angular.forEach(t,function(t,e){o[t.id]||(o[t.id]=i(n,t))})}),angular.element(t).bind("scroll",function(){var t=null;return 0===e.spies.length&&e.$watch("spies",function(t){angular.forEach(t,function(t,e){o[t.id]||(o[t.id]=i(n,t))})}),angular.forEach(e.spies,function(e,r){if(e.out(),o[e.id]=o[e.id]?o[e.id]:i(n,e),o[e.id]){var a=o[e.id].getBoundingClientRect().top;70>=a&&(e.pos=a,t=t?t:e,t.pos<e.pos&&(t=e))}}),null!==t?t["in"]():void 0})}}}]).directive("spy",["$document","$location","$anchorScroll",function(t,e,n){return{restrict:"A",require:"^scrollSpy",link:function(e,n,r,i){n.bind("click",function(){e.$apply(function(){var e=angular.element(document.getElementById(r.spy));t.scrollToElementAnimated(e,60)})}),i.addSpy({id:r.spy,"in":function(){n.addClass("active")},out:function(){n.removeClass("active")}})}}}]).directive("content",["$compile",function(t){var e=function(e,n,r){r.template&&n.html(r.template),t(n.contents())(e)};return{restrict:"E",replace:!0,link:e,scope:{content:"="}}}]).directive("map",function(){return{restrict:"E",templateUrl:"assets/partials/map.html",controller:["$scope",function(t){var e={lat:38.3193894,"long":-.5553162,city:"Gabres S.L.",desc:"Plásticos Reforzados"},n={zoom:16,center:new google.maps.LatLng(e.lat,e["long"]),mapTypeId:google.maps.MapTypeId.HYBRID};t.map=new google.maps.Map(document.getElementById("map"),n),t.markers=[];var r=new google.maps.InfoWindow,i=function(e){var n=new google.maps.Marker({map:t.map,position:new google.maps.LatLng(e.lat,e["long"]),title:e.city});n.content='<div class="infoWindowContent">'+e.desc+"</div>",google.maps.event.addListener(n,"click",function(){r.setContent("<h2>"+n.title+"</h2>"+n.content),r.open(t.map,n)}),t.markers.push(n)};i(e),t.openInfoWindow=function(t,e){t.preventDefault(),google.maps.event.trigger(e,"click")}}]}}).directive("companyFooter",function(){return{restrict:"E",templateUrl:"assets/partials/company-footer.html"}})}();
!function(){"use strict";angular.module("gabres-main",["ngRoute","ui.bootstrap","gabres-company"]).controller("ContactController",["$modal","company","$scope",function(o,t,n){n.company=t,this.openDialog=function(){o.open({templateUrl:"assets/partials/contact-form.html",size:"lg"})}}]).controller("ProductController",["$scope","$modalInstance","product",function(o,t,n){o.product=n,o.cancel=function(){t.dismiss("cancel")}}]).controller("ProductLinesController",["$modal","lines","otherWorks",function(o,t,n){this.open=function(t){o.open({templateUrl:"assets/partials/product-item.html",controller:"ProductController",resolve:{product:function(){return t}}})},this.allLines=function(){var o=t.slice(0);return o.push(n),o},this.hasProducts=function(o){return o.products&&o.products.length>0}}])}();
!function(){"use strict";angular.module("gabres-routes",[]).constant("mainRoutes",[{name:"Inicio",path:"/",templateUrl:"main/main.html"},{name:"Productos",path:"/products",templateUrl:"assets/partials/products.html",controller:"ProductLinesController",controllerAlias:"lineCtrl"},{name:"Catálogo",absolutePath:"images/gabres-catalogo-productos.pdf",openInNewPage:!0},{name:"Contacto",path:"/contact",templateUrl:"assets/partials/contact.html",controller:"ContactController",controllerAlias:"contactCtrl"}])}();