<?php
/**
 * Template Name: FE Dev - Homepage
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package fws_starter_s
 */

// get header
get_header();

// open main content wrappers
do_action( 'fws_starter_s_before_main_content' );

// get content blocks
get_template_part( 'template-views/blocks/banner/_fe-banner' );
get_template_part( 'template-views/blocks/client-list/_fe-client-list' );
get_template_part( 'template-views/blocks/tabs-section/_fe-tabs-section' );
get_template_part( 'template-views/blocks/box-section/_fe-box-section' );
get_template_part( 'template-views/blocks/services/_fe-services' );
get_template_part( 'template-views/blocks/more-info/_fe-more-info' );
get_template_part( 'template-views/blocks/reviews/_fe-reviews' );
get_template_part( 'template-views/blocks/email-form/_fe-email-form' );

// close main content wrappers
do_action( 'fws_starter_s_after_main_content' );

// get footer
get_footer();
