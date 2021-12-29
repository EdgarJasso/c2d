<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package datatech
 */

?>
	<?php global $datatech_opt; ?>	
	<?php if (!empty($datatech_opt['datatech_widget_hide']) && $datatech_opt['datatech_widget_hide']==true): ?>				
		<!-- FOOTER MIDDLE AREA -->
			<?php $footer_sidebar_count = $datatech_opt['datatech_widget_column_count']; ?>
				<?php if( 0 != $footer_sidebar_count ) { ?>
					<div class="footer-middle"> 
						<div class="<?php if(!empty($datatech_opt['datatech_footer_box_layout']) && $datatech_opt['datatech_footer_box_layout']=="footer_full"){echo esc_attr('container-fluid');}else{ echo esc_attr('container'); }?>">
							<div class="row">
								<?php // Default Sidebar count to 4
								if( '' == $footer_sidebar_count ) $footer_sidebar_count = 4;
								// Get the sidebar class
								$footer_sidebar_class = floor( 12/$footer_sidebar_count ); ?>
								<?php for( $footer = 1; $footer <= $footer_sidebar_count; $footer++ ) { ?>
									<?php if ( is_active_sidebar( 'datatech-footer-' . $footer ) ) { ?>
										<div class="col-sm-12 col-md-6 col-lg-<?php echo esc_attr( $footer_sidebar_class ); ?> <?php if( $footer == $footer_sidebar_count ) echo esc_attr('last'); ?>">
											<?php dynamic_sidebar( 'datatech-footer-' . $footer ); ?>
										</div>
										
									<?php } ?>
								<?php } ?>
							</div>
						</div>
					</div>
				<?php } // if 0 != sidebars ?>	
		<?php endif; ?>
	<!-- FOOTER COPPYRIGHT SECTION -->		
	<?php if (!empty($datatech_opt['datatech_copyright_hide']) && $datatech_opt['datatech_copyright_hide']==true): ?>				
		<div class="footer-bottom">
			<div class="<?php if(!empty($datatech_opt['datatech_footer_box_layout']) && $datatech_opt['datatech_footer_box_layout']=="footer_full"){echo esc_attr('container-fluid');}else{ echo esc_attr('container'); }?>">
		<div class="row">
		<?php if(!empty($datatech_opt['datatech_footer_copyright_style']) && $datatech_opt['datatech_footer_copyright_style']=="copy_s1"){?>
				<div class="col-md-12 footer_style_1">			
					<div class="copy-right-text text-center">
						<!-- FOOTER COPYRIGHT TEXT -->
						<?php if (!empty($datatech_opt['datatech_copyright_text'])): ?>
							<p>
								<?php						
									echo wp_kses($datatech_opt['datatech_copyright_text'], array(
										'span' => array(),
										'a' => array(
											'href' => array(),
											'title' => array()										
										),
										'b' => array(),
										'p' => array(),
										'strong' => array(),
										'em' => array(),
										'br' => array(),
									));	
								?>
							</p>
						<?php endif ?>					
					</div>
				</div>
		<!-- FOOTER COPYRIGHT STYLE 2 -->		
		<?php }elseif(!empty($datatech_opt['datatech_footer_copyright_style']) && $datatech_opt['datatech_footer_copyright_style']=="copy_s2"){?>
				<div class="col-md-12  col-sm-12">
					<div class="copy-right-text">
						<!-- FOOTER COPYRIGHT TEXT -->
						<?php if (!empty($datatech_opt['datatech_copyright_text'])): ?>
							<p>
								<?php						
									echo wp_kses($datatech_opt['datatech_copyright_text'], array(
										'span' => array(),
										'a' => array(
											'href' => array(),
											'title' => array()										
										),
										'b' => array(),
										'p' => array(),
										'strong' => array(),
										'em' => array(),
										'br' => array(),
									));	
								?>
							</p>
						<?php endif ?>	
					</div>
<script>
    $(document).ready(function () {
        var pathArray = window.location.pathname.split('/');
        var secondLevelLocation = pathArray[1];
        if(secondLevelLocation == 'en'){
            $("#modo_lg").empty();
            $("#modo_lg").append('<footer class="footer"><div class="row"><div class="footer-info col-md-3 col-sm-4"><center><a href="https://chat2desk.mx/en/"><img src="https://chat2desk.mx/wp-content/uploads/2021/06/cropped-ICONO_2021-removebg-preview-1.png" alt="" srcset="" style="width: 100px !important;"></a><p style="font-family:Arial, Helvetica, sans-serif; font-size: 15px; font-weight: bold;">Improving the customer service experience</p><p><a href="https://www.facebook.com/Chat2deskMexico/" target="_blank" class="footer_icon"><i class="fab fa-facebook-f"></i></a><a href="https://instagram.com/chat2desk_mx?igshid=2wrnk38log" target="_blank" class="footer_icon"><i class="fab fa-instagram"></i></a></p><br><p><a href="https://www.youtube.com/channel/UC11H6trBo_ZTlWGD3co9DAw" target="_blank" class="footer_icon"><i class="fas fa-video"></i></a><a href="https://www.linkedin.com/posts/chat2desk-mexico_chat2desk-atecionalcliente-marketingtips-activity-6798295940294852609-DrRi" target="_blank" class="footer_icon"><i class="fab fa-linkedin-in"></i></a></p></center></div><ul class="footer-menu col-md-6"><div class="row"><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Chat2Desk</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx/en/waba-account/">WABA Account</a> </li><li> <a href="https://chat2desk.mx/en/reseller/">Reseller</a> </li><li> <a href="https://chat2desk.mx/en/about-us/">About us</a> </li><li> <a href="https://chat2desk.mx/en/pricing-plan/">Pricing plan</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Resources</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx/en/integrations/">Integrations</a> </li><li> <a href="https://chat2desk.mx/en/blog/">Blog</a> </li><li> <a href="https://chat2desk.mx/en/basedeconocimiento/">Knowledge Base</a> </li><li> <a href="https://learn.chat2desk.com.mx:8080/" target="_blank">C2D University</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Features</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx/en/helpdesk/">Helpdesk</a> </li><li> <a href="https://chat2desk.mx/en/mobile-app/">Mobile APP</a> </li><li> <a href="https://chat2desk.mx/en/tunnels-and-bots/">Tunnels and Bots</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Applications</span></span><ul class="text-secondary"><li><a href="https://chat2desk.mx/en/industries/">Industries</a> </li><li><a href="https://chat2desk.mx/en/use-cases/">Use cases</a> </li></ul></li></div></ul><ul class="footer-apps col-md-3"><li><a class="footer-apps__btn"href="https://play.google.com/store/apps/details?id=com.chat2desk&amp;hl=en" target="_blank"rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/es-419_badge_web_generic.png"alt="Google Play" width="250px"> </a> </li><li> <a class="footer-apps__btn" href="https://apps.apple.com/us/app/chat2desk/id1504626870" target="_blank"rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/ios.png"alt="Apple Store" style="width: 85% !important;margin-left: 15px !important;"> </a> </li></ul></div><div class="row"><ul class="footer-docs col-md-3"><li><a href="https://chat2desk.mx/en/terms-of-use/" target="_blank">Terms of use</a> </li><li><a href="https://chat2desk.mx/en/policies/" target="_blank">Privacy Policy</a></li></ul><div class="footer-social col-md-9"><div class="row"><span>Copyright © 2021 Chat2Desk all rights reserved. </span></div></div></div></footer></div>');


$("a.dtbtn.pum-trigger").text("Sign in");        

}else if(secondLevelLocation == 'ru'){
            $("#modo_lg").empty();
            $("#modo_lg").append('<footer class="footer"><div class="row"><div class="footer-info col-md-3 col-sm-4"><center><a href="https://chat2desk.mx/ru/"><img src="https://chat2desk.mx/wp-content/uploads/2021/06/cropped-ICONO_2021-removebg-preview-1.png" alt="" srcset="" style="width: 100px !important;"></a><p style="font-family:Arial, Helvetica, sans-serif; font-size: 15px; font-weight: bold;">Улучшение опыта обслуживания клиентов</p><p><a href="https://www.facebook.com/Chat2deskMexico/" target="_blank" class="footer_icon"><i class="fab fa-facebook-f"></i></a><a href="https://instagram.com/chat2desk_mx?igshid=2wrnk38log" target="_blank" class="footer_icon"><i class="fab fa-instagram"></i></a></p><br><p><a href="https://vm.tiktok.com/ZMep74LPu/" target="_blank" class="footer_icon"><i class="fas fa-video"></i></a><a href="https://www.linkedin.com/posts/chat2desk-mexico_chat2desk-atecionalcliente-marketingtips-activity-6798295940294852609-DrRi" target="_blank" class="footer_icon"><i class="fab fa-linkedin-in"></i></a></p></center></div><ul class="footer-menu col-md-6"><div class="row"><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Chat2Desk</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx/ru/%d1%81%d1%87%d0%b5%d1%82-waba/">Счет WABA</a> </li><li> <a href="https://chat2desk.mx/ru/%d1%80%d0%b5%d1%81%d0%b5%d0%bb%d0%bb%d0%b5%d1%80/">реселлер</a> </li><li> <a href="https://chat2desk.mx/ru/%d0%be-%d0%bd%d0%b0%d1%81/">О нас</a> </li><li> <a href="https://chat2desk.mx/ru/%d0%bf%d0%bb%d0%b0%d0%bd-%d1%86%d0%b5%d0%bd%d0%be%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f/">Лицензирование</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Ресурсы</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx/ru/%d0%b8%d0%bd%d1%82%d0%b5%d0%b3%d1%80%d0%b0%d1%86%d0%b8%d0%b8/">Интеграции</a> </li><li> <a href="https://chat2desk.mx/ru/%d0%b1%d0%bb%d0%be%d0%b3/">Блог</a> </li><li> <a href="https://chat2desk.mx/ru/basedeconocimiento/">База знаний</a> </li><li> <a href="https://learn.chat2desk.com.mx/" target="_blank">Университет C2D</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Характеристики</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx/ru/%d1%81%d0%bb%d1%83%d0%b6%d0%b1%d0%b0-%d0%bf%d0%be%d0%b4%d0%b4%d0%b5%d1%80%d0%b6%d0%ba%d0%b8/">Служба поддержки</a> </li><li> <a href="https://chat2desk.mx/ru/%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d0%be%d0%b5-%d0%bf%d1%80%d0%b8%d0%bb%d0%be%d0%b6%d0%b5%d0%bd%d0%b8%d0%b5/">Мобильное приложение</a> </li><li> <a href="https://chat2desk.mx/ru/%d1%82%d1%83%d0%bd%d0%bd%d0%b5%d0%bb%d0%b8-%d0%b8-%d0%b1%d0%be%d1%82%d1%8b/">Туннели и боты</a> </li></ul></li><li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary"><span>Приложения</span></span><ul class="text-secondary"><li> <a href="https://chat2desk.mx/ru/%d0%be%d1%82%d1%80%d0%b0%d1%81%d0%bb%d0%b8/">Отрасли</a> </li><li> <a href="https://chat2desk.mx/ru/%d0%bf%d1%80%d0%b8%d0%bc%d0%b5%d1%80%d1%8b-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f/">Примеры использования</a> </li></ul></li></div></ul><ul class="footer-apps col-md-3"><li> <a class="footer-apps__btn" href="https://play.google.com/store/apps/details?id=com.chat2desk&amp;hl=en" target="_blank" rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/es-419_badge_web_generic.png" alt="Google Play" width="250px"> </a> </li><li> <a class="footer-apps__btn" href="https://apps.apple.com/us/app/chat2desk/id1504626870" target="_blank" rel="nofollow"> <img src="https://chat2desk.mx:8081/wp-content/uploads/2021/05/ios.png" alt="Apple Store" style="width: 85% !important; margin-left: 15px !important;"> </a> </li></ul></div><div class="row"><ul class="footer-docs col-md-3"><li> <a href="https://chat2desk.mx/ru/%d1%83%d1%81%d0%bb%d0%be%d0%b2%d0%b8%d1%8f-%d0%b8%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d1%8f/" target="_blank">Условия использования</a> </li><li> <a href="https://chat2desk.mx/ru/%d0%bf%d0%be%d0%bb%d0%b8%d1%82%d0%b8%d0%ba%d0%b0/" target="_blank">Политика конфиденциальности</a> </li></ul><div class="footer-social col-md-9"><div class="row"><span>Copyright © 2021 Chat2Desk все права защищены. </span></div></div></div></footer>');
        }
    });
</script>    

<footer class="footer">
    <div class="row">
        <!-- botones de login -->
        <div class="footer-info col-md-3 col-sm-4">
            <center>
                <a href="https://chat2desk.mx/">
                    <img src="https://chat2desk.mx/wp-content/uploads/2021/06/cropped-ICONO_2021-removebg-preview-1.png" alt="" srcset="" style="width: 100px !important;">
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
                    <a href="https://www.youtube.com/channel/UC11H6trBo_ZTlWGD3co9DAw" target="_blank" class="footer_icon">
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
                        <li> <a href="https://chat2desk.mx/cuenta-waba/">WhatsApp API</a> </li>
                        <li> <a href="https://chat2desk.mx/reseller/">Reseller</a> </li>
                        <li> <a href="https://chat2desk.mx/nosotros/">Acerca de Nosotros</a> </li>
                        <li> <a href="https://chat2desk.mx/pricing-plan/">Licenciamiento</a> </li>
                    </ul>
                </li>
                <li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary">
                        <span>Recursos</span></span>
                    <ul class="text-secondary">
                        <li> <a href="https://chat2desk.mx/integraciones/">Integraciones</a> </li>
                        <li> <a href="https://chat2desk.mx/blog/">Blog</a> </li>
                        <li> <a href="https://chat2desk.mx/basedeconocimiento/">Base de Conocimiento</a> </li>
                        <li> <a href="https://learn.chat2desk.com.mx/" target="_blank">C2D University</a> </li>
                    </ul>
                </li>
                <li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary">
                        <span>Funcionalidades</span></span>
                    <ul class="text-secondary">
                        <li> <a href="https://chat2desk.mx/helpdesk/">Helpdesk</a> </li>
                        <li> <a href="https://chat2desk.mx/app-movil/">App Movil</a> </li>
                        <li> <a href="https://chat2desk.mx/tuneles-y-bots/">Tuneles y Bots</a> </li>
                    </ul>
                </li>
                <li class="footer-menu__folder col-md-3 col-sm-5"> <span class="text-primary">
                        <span>Aplicaciones</span></span>
                    <ul class="text-secondary">
                        <li> <a href="https://chat2desk.mx/industrias">Industrias</a> </li>
                        <li> <a href="https://chat2desk.mx/casos-de-uso">Casos de usos</a> </li>
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
                        src="https://chat2desk.mx/wp-content/uploads/2021/11/app.png"
                        alt="Google Play" width="250px"> </a> </li>
            <li> <a class="footer-apps__btn" href="https://apps.apple.com/us/app/chat2desk/id1504626870" target="_blank"
                    rel="nofollow"> <img src="https://chat2desk.mx/wp-content/uploads/2021/11/appstore.png"
                        alt="Apple Store" style="width: 85% !important;
                        margin-left: 15px !important;"> </a> </li>
        </ul>
        <!-- apps-->
    </div>
    <div class="row">
        <!-- documentos-->
        <ul class="footer-docs col-md-3">
            <li> <a href="https://chat2desk.mx/terminos_uso/" target="_blank">Terminos de uso</a> </li>
            <li> <a href="https://chat2desk.mx/politicas/" target="_blank">Politica de privacidad</a> </li>
        </ul>
        <!-- documentos-->
        <div class="footer-social col-md-9">
            <div class="row">
                <span>
                 Copyrigth &copy 2021 Chat2desk S.A. de C.V. 
                </span>
            </div>
        </div>
    </div>
</footer> 
</div>



</div>
<!-- reset ps -->
<script>
    $(document).ready(function () {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const hash = urlParams.get('hash');

        console.log(hash);
        if (hash == null) {
            console.log('esta vacio');
        } else {
            console.log('aqui se mostrar el modal');
            $('#exampleModal').modal({
                show: true
            });
            $("#form_password").append('<form id="form_reset_password"><div class="form-group"><center><input type="hidden" class="form-control" id="password_hash"><br><input id="newpassword" class="form-control" type="password" name="newpassword" placeholder="Password"><br><input id="newpasswordC" class="form-control" type="password" name="newpasswordC" placeholder="Confirm Password"><br><button id="btn_newpassword" type="button" class="btn btn-primary">Change Password</button><br><div id="error_log_password"></div></center></div></form>');
            $("#password_hash").val(hash);
        }

        $('#btn_newpassword').click(function (e) {
            var ApiUrl = 'https://web.chat2desk.com.mx';
            var HostUrl = 'https://chat2desk.mx';
            $.ajax({
                method: 'POST',
                url: ApiUrl + '/api/user/change_password',
                contentType: "application/json; charset=UTF-8",
                dataType: 'json',
                data: JSON.stringify({
                    password: $('#newpassword').val(),
                    password_confirmation: $('#newpasswordC').val(),
                    hash: $('#password_hash').val()
                }),
                success: function (response) {
                    if (response.status === 'success') {
                        location.href = ApiUrl + '?auth_key=' + response.auth_key
                    } else {
                        console.error('response', response);
                        var result = [];
                        for (var a in response.errors) {
                           result.push(response.errors[a][0]);
                        }
                        $("#error_log_password").addClass("alert alert-danger");
                        $('#error_log_password').show().html(result.join('<br/>'));
                    }
                }
            })

        });

    });
</script>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header modal-header bg-primary text-white">
                <h5 class="modal-title" id="exampleModalLabel">Enter new password</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div id="form_password"></div>
            </div>
        </div>
    </div>
</div>
<style>
    .img-modal {
        width: 100%;
        height: 100%;
    }
</style>

<!-- reset ps -->
		<!-- FOOTER COPYRIGHT STYLE 3 -->		
		<?php }elseif(!empty($datatech_opt['datatech_footer_copyright_style']) && $datatech_opt['datatech_footer_copyright_style']=="copy_s3"){?>
				<div class="col-md-6  col-sm-12 footer_style_3">
					<div class="footer-menu">
						<!-- FOOTER COPYRIGHT MENU -->				
						 <?php if ( has_nav_menu( 'menu-4' ) ) {
								wp_nav_menu( array(
								'theme_location' => 'menu-4',
								'menu_class' => 'text-left',
								'fallback_cb' => false,
								'container' => '',
								) );
						 } ?> 
					</div>
				</div>		
				<div class="col-md-6  col-sm-12 footer_style_3">
					<div class="copy-right-text text-right">
						<!-- FOOTER COPYRIGHT TEXT -->
						<?php if (!empty($datatech_opt['datatech_copyright_text'])): ?>
							<p>
								<?php						
									echo wp_kses($datatech_opt['datatech_copyright_text'], array(
										'span' => array(),
										'a' => array(
											'href' => array(),
											'title' => array()										
										),
										'b' => array(),
										'p' => array(),
										'strong' => array(),
										'em' => array(),
										'br' => array(),
									));	
								?>
							</p>
						<?php endif ?>	
					</div>
				</div>
				
		<!-- FOOTER COPYRIGHT STYLE 4 -->		
		<?php }elseif(!empty($datatech_opt['datatech_footer_copyright_style']) && $datatech_opt['datatech_footer_copyright_style']=="copy_s4"){?>
				<div class="col-md-6 col-sm-12">
					<div class="copy-right-text">
						<!-- FOOTER COPYRIGHT TEXT -->
						<?php if (!empty($datatech_opt['datatech_copyright_text'])): ?>
							<p>
								<?php						
									echo wp_kses($datatech_opt['datatech_copyright_text'], array(
										'span' => array(),
										'a' => array(
											'href' => array(),
											'title' => array()										
										),
										'b' => array(),
										'p' => array(),
										'strong' => array(),
										'em' => array(),
										'br' => array(),
									));	
								?>
							</p>
						<?php endif ?>	
					</div>
				</div>
				<div class="col-md-6 col-sm-12">				
					<div class="footer-menu">
						<!-- FOOTER COPYRIGHT SOCIAL MENU -->
						<ul class="text-right">
							<?php 
								foreach($datatech_opt['datatech_social_icons'] as $key=>$value ) { 
								
									if($value != ''){						
										 echo '<li><a class="'.esc_attr($key).' social-icon" href="'.esc_url($value).'" title="'.ucwords(esc_attr($key)).'" ><i class="fa fa-'.esc_attr($key).'"></i></a></li>';
									}
								}
							?>							
						
						</ul>				
					</div>
				</div>
			<?php } ?>			
		</div>	
	</div>
	</div>
	<!-- DEFAULT STYLE IF NOT ACTIVE THEME OPTION  -->
	<?php else: ?>
	<?php $footer_sidebar_count =4; ?>
		<?php if( 0 != $footer_sidebar_count ) { ?>
			<div class="footer-middle wpfd"> 
				<div class="container">
					<div class="row">
						<?php // Default Sidebar count to 4
						if( '' == $footer_sidebar_count ) $footer_sidebar_count = 4;
						// Get the sidebar class
						$footer_sidebar_class = floor( 12/$footer_sidebar_count ); ?>
						<?php for( $footer = 1; $footer <= $footer_sidebar_count; $footer++ ) { ?>
							<?php if ( is_active_sidebar( 'datatech-footer-' . $footer ) ) { ?>
								<div class="wpfdp col-sm-12 col-md-<?php echo esc_attr( $footer_sidebar_class ); ?> <?php if( $footer == $footer_sidebar_count ) echo esc_attr('last'); ?>">
									<?php dynamic_sidebar( 'datatech-footer-' . $footer ); ?>
								</div>
							<?php } ?>
						<?php } ?>
					</div>
				</div>
			</div>
		<?php } ?>	
		<div class="footer-bottom">
			<div class="<?php if(!empty($datatech_opt['datatech_footer_box_layout']) && $datatech_opt['datatech_footer_box_layout']=="footer_full"){echo esc_attr('container-fluid');}else{ echo esc_attr('container'); }?>">
				<div class="row">			
					<div class="col-md-12">
						<div class="copy-right-text text-center">
							<!-- FOOTER COPYRIGHT TEXT -->
								<p>
									<?php						
										echo esc_html_e("Copyright &copy; datatech 2019 all right reserved.","datatech"); 
									?>
								</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php endif; ?>
	</div>
<?php wp_footer(); ?>

<!-- chat c2d -->

<script src="https://livechat-v2.chat2desk.com.mx/packs/ie-11-support.js"></script>

<script>
  window.chat24_token = "6f57b2739e72ad18c17594502695ae3e";
  window.chat24_url = "https://livechat-v2.chat2desk.com.mx";
  window.chat24_socket_url ="wss://livechat-v2.chat2desk.com.mx/widget_ws_new";
  window.chat24_show_new_wysiwyg = "true";
  window.chat24_static_files_domain = "https://storage.chat2desk.com.mx/";
  window.lang = "es";
  window.fetch("".concat(window.chat24_url, "/packs/manifest.json?nocache=").concat(new Date().getTime())).then(function (res) {
    return res.json();
  }).then(function (data) {
    var chat24 = document.createElement("script");
    chat24.type = "text/javascript";
    chat24.async = true;
    chat24.src = "".concat(window.chat24_url).concat(data["application.js"]);
    document.body.appendChild(chat24);
  });
</script>

<!-- chat c2d -->
</body>
</html>
