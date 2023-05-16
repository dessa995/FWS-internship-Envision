<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package fws_starter_s
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/favicon.png"/>

	<!-- preload fonts-->
	<!-- TODO: Preload all fonts in this manner that are used in the project. Make sure only .woff2 versions are preloaded. -->
	<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/src/assets/fonts/OpenSans-Bold.woff2" as="font" crossorigin />
	<link rel="preload" href="<?php echo get_template_directory_uri(); ?>/src/assets/fonts/OpenSans-Regular.woff2" as="font" crossorigin />

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'fws_starter_s' ); ?></a>

	<header id="masthead" class="site-header js-site-header">
		<div class="header--container">
			<div class="pre-header js-pre-header">
				<div class="container">
					<div class="pre-header--links-wrapper">
						<a class="pre-header--social-icon" href="https://www.instagram.com/forwardslash/">
							<?php echo fws()->render()->inlineSVG( 'ico-instagram', 'pre-header-icon' ); ?>
						</a>
						<a class="pre-header--social-icon" href="https://twitter.com/?lang=sr">
							<?php echo fws()->render()->inlineSVG( 'ico-twitter', 'pre-header-icon' ); ?>
						</a>
						<a class="pre-header__login-btn js-preheader-button" href="javascript:;">LOGIN</a>
					</div>
				</div><!-- container -->
			</div> <!-- pre-header -->
			<div class="container">
				<div class="site-header__container">
					<div class="site-header__branding">
						<a class="site-header__logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
							<img class="site-header__logo-img" src="<?php echo fws()->images()->assetsSrc('logo-header.png'); ?>" alt="<?php bloginfo( 'name' ); ?> Logo" title="<?php bloginfo( 'name' ); ?>">
							<span class="site-header__logo-text">CELEBRATING 10 YEARS!</span>
						</a>
					</div><!-- site-header__branding -->

					<div class="site-header__nav-outer js-nav-outer">
						<div class="site-header__nav-inner js-nav-inner">
							<nav id="site-navigation" class="site-nav">
								<ul class="site-nav__list">
									<li class="menu-item">
										<a class="header-nav__link" href="#">SOLUTIONS</a>
									</li>

									<li class="menu-item menu-item-has-children">
										<a class="header-nav__link" href="#">ENVISION IN ACTION</a>
										<!-- <ul class="sub-menu">
											<li class="menu-item">
												<a href="#">Submenu Item</a>
											</li>

											<li class="menu-item menu-item-has-children">
												<a href="#">Submenu Item 2</a>
												<ul class="sub-menu">
													<li class="menu-item">
														<a href="#">Third Level Item</a>
													</li>

													<li class="menu-item">
														<a href="#">Third Level Item 2</a>
													</li>
												</ul>
											</li>
										</ul> sub-menu -->
									</li>

									<li class="menu-item">
										<a class="header-nav__link" href="#">OUR VISION</a>
									</li>
									<li class="menu-item">
										<a class="header-nav__link" href="#">INFOGRAPH</a>
									</li>
									<li class="menu-item">
										<a class="header-nav__link" href="#">360° VISION</a>
									</li>
									<li class="menu-item">
										<a class="header-nav__link" href="#">CONTACT US</a>
									</li>
								</ul><!-- site-nav__list -->
							</nav><!-- #site-navigation -->
						</div><!-- site-header__nav-inner -->
					</div><!-- site-header__nav-outer -->
				</div><!-- site-header__container -->
			</div> <!-- container -->
		</div><!-- header--container -->

		<a href="javascript:" class="site-header__hamburger hamburger js-menu-btn"><span></span></a>
	</header>

	<div id="content" class="site-content">
