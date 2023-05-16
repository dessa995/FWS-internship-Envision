<div class="banner">
	<div class="banner__background-video-container">
		<video class="background-video" autoplay loop muted poster="../../../src/assets/images/EnvisionVideoBanner_logo_black_PosterImage.png">
			<source src="<?php echo fws()->images()->assetsSrc('videos/EnvisionVideoBanner_logo_black.mp4'); ?>" type="video/mp4">
		</video>
	</div><!-- banner__background-video-container -->
	<div class="container">
		<div class="banner-container">
			<h1 class="banner-heading">Pictures worth more than just a thousand words.</h1>
			<a class="btn banner-btn" href="javascript:;">
				GET STARTED
			</a>
		</div><!-- banner-container -->
	</div><!-- container -->
	<div class="banner__features">
			<div class="container">
				<div class="banner__features-container" data-aos="fade-right" data-aos-duration="800" data-delay="200">
						<div class="banner__feature-card">
						<!-- <a class="banner__feature-card-link" href="javascript:;"> UNCOMENT IF LINK -->
							<?php echo fws()->render()->inlineSVG( 'ico-pre-construction-survey', 'banner__feature-card-icon banner__feature-card-icon--small' ); ?>
							<span class="banner__feature-card-text">PRE-CONSTRUCTION SURVEY</span>
						<!-- </a> UNCOMENT IF LINK -->
						</div>
						<div class="banner__feature-card">
							<!-- <a class="banner__feature-card-link" href="javascript:;"> UNCOMENT IF LINK -->
								<?php echo fws()->render()->inlineSVG( 'ico-3d-laser-scanning', 'banner__feature-card-icon banner__feature-card-icon-3d' ); ?>
								<span class="banner__feature-card-text">3D LASER SCANNING</span>
							<!-- </a> UNCOMENT IF LINK -->
						</div>
						<div class="banner__feature-card">
							<!-- <a class="banner__feature-card-link" href="javascript:;"> UNCOMENT IF LINK -->
							<?php echo fws()->render()->inlineSVG( 'ico-scan-to-bim', 'banner__feature-card-icon banner__feature-card-icon-bim' ); ?>
								<span class="banner__feature-card-text">SCAN TO BIM</span>
							<!-- </a> UNCOMENT IF LINK -->
						</div>
						<div class="banner__feature-card">
							<!-- <a class="banner__feature-card-link" href="javascript:;"> UNCOMENT IF LINK -->
							<?php echo fws()->render()->inlineSVG( 'ico-virtual-tours-and-digital-twin', 'banner__feature-card-icon banner__feature-card-icon-twin' ); ?>
								<span class="banner__feature-card-text">VIRTUAL TOURS AND DIGITAL TWIN</span>
							<!-- </a> UNCOMENT IF LINK -->
						</div>
						<div class="banner__feature-card">
							<!-- <a class="banner__feature-card-link" href="javascript:;"> UNCOMENT IF LINK -->
							<?php echo fws()->render()->inlineSVG( 'ico-drone-mapping', 'banner__feature-card-icon banner__feature-card-icon--small' ); ?>
								<span class="banner__feature-card-text">DRONE MAPPING</span>
							<!-- </a> UNCOMENT IF LINK -->
						</div>
				</div> <!-- banner__features-container -->
			</div><!-- container -->
	</div><!-- banner__features -->
</div><!-- .banner -->
