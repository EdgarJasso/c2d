<script>
    $(document).ready(function () {
        var pathArray = window.location.pathname.split('/');
        var secondLevelLocation = pathArray[1];
        console.log(secondLevelLocation);
        if(secondLevelLocation == 'en'){
            console.log('modo ingles');
            $("#modo_lg").empty();
            $("#modo_lg").append('<footer class="footer"><div class="row"><div class="footer-info col-md-3 col-sm-4"><center><a href="https://chat2desk.mx:8081/en/"><img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/ICONO-512X512-1.png" alt="" srcset="" style="width: 100px !important;"></a><p style="font-family:Arial, Helvetica, sans-serif; font-size: 15px; font-weight: bold;">Improving the customer service experience</p><p><a href="https://www.facebook.com/Chat2deskMexico/" target="_blank" class="footer_icon"><i class="fab fa-facebook-f"></i></a><a href="https://instagram.com/chat2desk_mx?igshid=2wrnk38log" target="_blank" class="footer_icon"><i class="fab fa-instagram"></i></a></p><br><p><a href="https://vm.tiktok.com/ZMep74LPu/" target="_blank" class="footer_icon"><i class="fas fa-video"></i></a><a href="https://www.linkedin.com/posts/chat2desk-mexico_chat2desk-atecionalcliente-marketingtips-activity-6798295940294852609-DrRi" target="_blank" class="footer_icon"><i class="fab fa-linkedin-in"></i></a></p></center></div><ul class="footer-menu col-md-6"><div class="row"><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Chat2Desk</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx:8081/en/waba-account/">WABA Account</a> </li><li> <a href="https://chat2desk.mx:8081/en/reseller/">Reseller</a> </li><li> <a href="https://chat2desk.mx:8081/en/about-us/">About us</a> </li><li> <a href="https://chat2desk.mx:8081/en/pricing-plan/">Pricing plan</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Resources</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx:8081/en/integrations/">Integrations</a> </li><li> <a href="https://chat2desk.mx:8081/en/blog/">Blog</a> </li><li> <a href="https://chat2desk.mx:8081/en/basedeconocimiento/">Knowledge Base</a> </li><li> <a href="https://learn.chat2desk.com.mx:8080/" target="_blank">C2D University</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Features</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx:8081/en/helpdesk/">Helpdesk</a> </li><li> <a href="https://chat2desk.mx:8081/en/mobile-app/">Mobile APP</a> </li><li> <a href="https://chat2desk.mx:8081/en/tunnels-and-bots/">Tunnels and Bots</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Applications</span></span><ul class="text-secondary"><li><a href="https://chat2desk.mx:8081/en/industries/">Industries</a> </li><li><a href="https://chat2desk.mx:8081/en/use-cases/">Use cases</a> </li></ul></li></div></ul><ul class="footer-apps col-md-3"><li><a class="footer-apps__btn"href="https://play.google.com/store/apps/details?id=com.chat2desk&amp;hl=en" target="_blank"rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/es-419_badge_web_generic.png"alt="Google Play" width="250px"> </a> </li><li> <a class="footer-apps__btn" href="https://apps.apple.com/us/app/chat2desk/id1504626870" target="_blank"rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/ios.png"alt="Apple Store" style="width: 85% !important;margin-left: 15px !important;"> </a> </li></ul></div><div class="row"><ul class="footer-docs col-md-3"><li><a href="https://chat2desk.mx:8081/en/terms-of-use/" target="_blank">Terms of use</a> </li><li><a href="https://chat2desk.mx:8081/en/policies/" target="_blank">Privacy Policy</a></li></ul><div class="footer-social col-md-9"><div class="row"><span>Copyright © 2021 Chat2Desk all rights reserved. </span></div></div></div></footer></div>');
            $("a.dtbtn.pum-trigger").text("Sign in");
        }else if(secondLevelLocation == 'ru'){
            console.log('modo ruso');
            $("#modo_lg").empty();
            $("#modo_lg").append('<footer class="footer"><div class="row"><div class="footer-info col-md-3 col-sm-4"><center><a href="https://chat2desk.mx:8081/ru/"><img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/ICONO-512X512-1.png" alt="" srcset="" style="width: 100px !important;"></a><p style="font-family:Arial, Helvetica, sans-serif; font-size: 15px; font-weight: bold;">Улучшение опыта обслуживания клиентов</p><p><a href="https://www.facebook.com/Chat2deskMexico/" target="_blank" class="footer_icon"><i class="fab fa-facebook-f"></i></a><a href="https://instagram.com/chat2desk_mx?igshid=2wrnk38log" target="_blank" class="footer_icon"><i class="fab fa-instagram"></i></a></p><br><p><a href="https://vm.tiktok.com/ZMep74LPu/" target="_blank" class="footer_icon"><i class="fas fa-video"></i></a><a href="https://www.linkedin.com/posts/chat2desk-mexico_chat2desk-atecionalcliente-marketingtips-activity-6798295940294852609-DrRi" target="_blank" class="footer_icon"><i class="fab fa-linkedin-in"></i></a></p></center></div><ul class="footer-menu col-md-6"><div class="row"><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Chat2Desk</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx:8081/ru/%d1%81%d1%87%d0%b5%d1%82-waba/">Счет WABA</a> </li><li> <a href="https://chat2desk.mx:8081/ru/%d1%80%d0%b5%d1%81%d0%b5%d0%bb%d0%bb%d0%b5%d1%80/">реселлер</a> </li><li> <a href="https://chat2desk.mx:8081/ru/%d0%be-%d0%bd%d0%b0%d1%81/">О нас</a> </li><li> <a href="https://chat2desk.mx:8081/ru/%d0%bf%d0%bb%d0%b0%d0%bd-%d1%86%d0%b5%d0%bd%d0%be%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f/">Лицензирование</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Ресурсы</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx:8081/ru/%d0%b8%d0%bd%d1%82%d0%b5%d0%b3%d1%80%d0%b0%d1%86%d0%b8%d0%b8/">Интеграции</a> </li><li> <a href="https://chat2desk.mx:8081/ru/%d0%b1%d0%bb%d0%be%d0%b3/">Блог</a> </li><li> <a href="https://chat2desk.mx:8081/ru/basedeconocimiento/">База знаний</a> </li><li> <a href="https://learn.chat2desk.com.mx:8080/" target="_blank">Университет C2D</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Характеристики</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx:8081/ru/%d1%81%d0%bb%d1%83%d0%b6%d0%b1%d0%b0-%d0%bf%d0%be%d0%b4%d0%b4%d0%b5%d1%80%d0%b6%d0%ba%d0%b8/">Служба поддержки</a> </li><li> <a href="https://chat2desk.mx:8081/ru/%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d0%be%d0%b5-%d0%bf%d1%80%d0%b8%d0%bb%d0%be%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5/">Мобильное приложение</a> </li><li> <a href="https://chat2desk.mx:8081/ru/%d1%82%d1%83%d0%bd%d0%bd%d0%b5%d0%bb%d0%b8-%d0%b8-%d0%b1%d0%be%d1%82%d1%8b/">Туннели и боты</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Приложения</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx:8081/ru/%d0%be%d1%82%d1%80%d0%b0%d1%81%d0%bb%d0%b8/">Отрасли</a> </li><li> <a href="https://chat2desk.mx:8081/ru/%d0%bf%d1%80%d0%b8%d0%bc%d0%b5%d1%80%d1%8b-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f/">Примеры использования</a> </li></ul></li></div></ul><ul class="footer-apps col-md-3"><li> <a class="footer-apps__btn" href="https://play.google.com/store/apps/details?id=com.chat2desk&amp;hl=en" target="_blank" rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/es-419_badge_web_generic.png" alt="Google Play" width="250px"> </a> </li><li> <a class="footer-apps__btn" href="https://apps.apple.com/us/app/chat2desk/id1504626870" target="_blank" rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/ios.png" alt="Apple Store" style="width: 85% !important; margin-left: 15px !important;"> </a> </li></ul></div><div class="row"><ul class="footer-docs col-md-3"><li> <a href="https://chat2desk.mx:8081/ru/%d1%83%d1%81%d0%bb%d0%be%d0%b2%d0%b8%d1%8f-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f/" target="_blank">Условия использования</a> </li><li> <a href="https://chat2desk.mx:8081/ru/%d0%bf%d0%be%d0%bb%d0%b8%d1%82%d0%b8%d0%ba%d0%b0/" target="_blank">Политика конфиденциальности</a> </li></ul><div class="footer-social col-md-9"><div class="row"><span>Copyright © 2021 Chat2Desk все права защищены. </span></div></div></div></footer>');
        }
    });
</script>    
<div id="modo_lg">
<footer class="footer">
    <div class="row">
        <!-- botones de login -->
        <div class="footer-info col-md-3 col-sm-4">
            <center>
                <a href="https://chat2desk.mx:8081/">
                    <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/06/cropped-ICONO_2021-removebg-preview-1.png" alt="" srcset="" style="width: 100px !important;">
                </a>
                <p style="font-family:Arial, Helvetica, sans-serif; font-size: 15px; font-weight: bold;">
                    Mejorando la experiencia de atencion al cliente
                </p>
                <p>
                    <a href="https://www.facebook.com/Chat2deskMexico/" target="_blank" class="footer_icon">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/chat2desk_mx?igshid=2wrnk38log" target="_blank" class="footer_icon">
                        <i class="fab fa-instagram"></i>
                    </a>
                </p>
                <br>
                <p>
                    <a href="https://vm.tiktok.com/ZMep74LPu/" target="_blank" class="footer_icon">
                        <i class="fas fa-video"></i>
                    </a>
                    <a href="https://www.linkedin.com/posts/chat2desk-mexico_chat2desk-atecionalcliente-marketingtips-activity-6798295940294852609-DrRi" target="_blank" class="footer_icon">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </p>
            </center>
        </div>
        <!-- botones de login-->
        <!-- inicio menu paginas -->
        <ul class="footer-menu col-md-6">
            <div class="row">
                <li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary">
                        <span>Chat2Desk</span></span>
                    <ul class="text-secondary">
                        <li> <a href="https://chat2desk.mx:8081/cuenta-waba/">Cuenta WABA</a> </li>
                        <li> <a href="https://chat2desk.mx:8081/reseller/">Reseller</a> </li>
                        <li> <a href="https://chat2desk.mx:8081/nosotros/">Acerca de Nosotros</a> </li>
                        <li> <a href="https://chat2desk.mx:8081/pricing-plan/">Licenciamiento</a> </li>
                    </ul>
                </li>
                <li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary">
                        <span>Recursos</span></span>
                    <ul class="text-secondary">
                        <li> <a href="https://chat2desk.mx:8081/integraciones/">Integraciones</a> </li>
                        <li> <a href="https://chat2desk.mx:8081/blog/">Blog</a> </li>
                        <li> <a href="https://chat2desk.mx:8081/basedeconocimiento/">Base de Conocimiento</a> </li>
                        <li> <a href="https://learn.chat2desk.com.mx:8080/" target="_blank">C2D University</a> </li>
                    </ul>
                </li>
                <li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary">
                        <span>Funcionalidades</span></span>
                    <ul class="text-secondary">
                        <li> <a href="https://chat2desk.mx:8081/helpdesk/">Helpdesk</a> </li>
                        <li> <a href="https://chat2desk.mx:8081/app-movil/">App Movil</a> </li>
                        <li> <a href="https://chat2desk.mx:8081/tuneles-y-bots/">Tuneles y Bots</a> </li>
                    </ul>
                </li>
                <li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary">
                        <span>Aplicaciones</span></span>
                    <ul class="text-secondary">
                        <li> <a href="https://chat2desk.mx:8081/industrias">Industrias</a> </li>
                        <li> <a href="https://chat2desk.mx:8081/casos-de-uso">Casos de usos</a> </li>
                    </ul>
                </li>
            </div>
        </ul>
        <!-- fin menu paginas-->
        <!-- apps -->
        <ul class="footer-apps col-md-3">
            <li> <a class="footer-apps__btn"
                    href="https://play.google.com/store/apps/details?id=com.chat2desk&amp;hl=en" target="_blank"
                    rel="nofollow"> <img
                        src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/es-419_badge_web_generic.png"
                        alt="Google Play" width="250px"> </a> </li>
            <li> <a class="footer-apps__btn" href="https://apps.apple.com/us/app/chat2desk/id1504626870" target="_blank"
                    rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/ios.png"
                        alt="Apple Store" style="width: 85% !important;
                        margin-left: 15px !important;"> </a> </li>
        </ul>
        <!-- apps-->
    </div>
    <div class="row">
        <!-- documentos-->
        <ul class="footer-docs col-md-3">
            <li> <a href="https://chat2desk.mx:8081/terminos_uso/" target="_blank">Terminos de uso</a> </li>
            <li> <a href="https://chat2desk.mx:8081/politicas/" target="_blank">Politica de privacidad</a> </li>
        </ul>
        <!-- documentos-->
        <div class="footer-social col-md-9">
            <div class="row">
                <span>
                 Copyright © 2021 Chat2Desk todos los derechos reservados. 
                </span>
            </div>
        </div>
    </div>
</footer> 
</div>


