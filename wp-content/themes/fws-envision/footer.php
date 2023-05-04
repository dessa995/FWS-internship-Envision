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
		<div class="container"></div>
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
