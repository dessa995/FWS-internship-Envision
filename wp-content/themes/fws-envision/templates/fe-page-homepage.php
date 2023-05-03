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

// close main content wrappers
do_action( 'fws_starter_s_after_main_content' );

// get footer
get_footer();
