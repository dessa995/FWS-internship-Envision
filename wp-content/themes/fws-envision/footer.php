<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package fws_starter_s
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="footer__container">
				<div class="footer__contact-box">
					<h3 class="footer__heading"> 
						Contact us for a free demonstration and quote.
					</h3>
					<ul class="site-nav__list site-nav__list-footer">
						<li class="menu-item">
							<a class="footer__content footer__content-telephone-link" href="tel:718-406-7566">
								718-406-7566
							</a>
						</li>
						<li class="menu-item">
							<a class="footer__content footer__content-address-line" href="https://www.google.com/maps/place/Forwardslash/@45.2397678,19.834966,17z/data=!3m1!4b1!4m6!3m5!1s0x475b1019b4cdb1d3:0xb27d975146dde195!8m2!3d45.2397678!4d19.8375409!16s%2Fg%2F11fqpvbbv2" target="_blank">Address Line</a>
						</li>
						<li class="menu-item">
							<a class="footer__content footer__content-email-link"  href="mailto:envision@loremipsum.com" target="_blank" rel="noopener noreferrer">envision@loremipsum.com</a>
						</li>
					</ul>
					<div class="footer__social-links-box">
						<a class="footer__social-link footer__social-link-facebook" href="https://www.facebook.com/forwardslashny/" target="_blank">
							<?php echo fws()->render()->inlineSVG( 'ico-facebook', 'footer-icon footer-icon__facebook' ); ?>
						</a>
						<a class="footer__social-link footer__social-link-instagram" href="https://www.instagram.com/forwardslash/" target="_blank">
							<?php echo fws()->render()->inlineSVG( 'ico-instagram', 'footer-icon footer-icon__instagram' ); ?>
						</a>
					</div>
				</div>
				<div class="footer-navigation__box">
					<ul class="site-nav__list site-nav__list-footer">
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Home</a>
						</li>
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">About Us</a>
						</li>
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Envision in Action</a>
						</li>
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Our Vision</a>
						</li>
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Get Started</a>
						</li>
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Contact</a>
						</li>
					</ul>
				</div>
				<div class="footer-navigation__box second">
					<ul class="site-nav__list site-nav__list-footer">
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Pre construction Survey</a>
						</li>
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Conctruction Photo Documentation</a>
						</li>
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Punch List Service</a>
						</li>
						<li class="menu-item">
							<a class="footer__content" href="javascript:;">Privacy</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="sub-footer__container">
				<div class="sub-footer__logo-box">
					<a class="site-footer__logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
						<img class="site-footer__logo-img" src="<?php echo fws()->images()->assetsSrc('footer-logo-img.png'); ?>" alt="<?php bloginfo( 'name' ); ?> Logo" title="<?php bloginfo( 'name' ); ?>">
					</a>
				</div>

				<div class="sub-footer__copyright-box">
					<p class="sub-footer__text">Copyright © 2023 Envision. All rights reserved. Project by  <a class="sub-footer__text sub-footer__text-fws" href="https://forwardslashny.com/" target="_blank">Forwardslash</a></p>
				</div>
			</div><!-- sub-footer__container -->
		</div><!-- container -->
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
