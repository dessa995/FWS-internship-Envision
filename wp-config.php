<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'wordpress' );

/** Database hostname */
define( 'DB_HOST', 'database' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fgI7 Rt2MNSbAGM)J  gD>zXlo.PBi-9ML@-+*~tpF_ppeIA/N)p%sww2CkQXr6m' );
define( 'SECURE_AUTH_KEY',  '}FcX~y<kO?r51jz73j4;X1kLVAQPgfii~wY+xQFDK:.`:*)$2$g3)%^xJ5Fyl-2/' );
define( 'LOGGED_IN_KEY',    'mgGwV(C$_VvqXS2*%l)lU&[pWZPHNtA4@gH %VkNj+ dmX8kHOm2/pll#r#iL 9j' );
define( 'NONCE_KEY',        'xQ/NhHndT=^i$6xIM:}X4l1oKcB:#WVkr4]G[>{~3wKs4c/V+uKXol1Do47HOkL_' );
define( 'AUTH_SALT',        '&gSNr+:* 08@ciLw.qUue(W`/Mpcq*3G,S|>DKaKhfn/B2AN@hJ$*B,k:h,lO?84' );
define( 'SECURE_AUTH_SALT', '85fsNu:l?Au=a4s)ihN4V8Dx$:.)cB=,JLr{n8u+}Z_,AbM4X!mN>2&%RA<pYe&H' );
define( 'LOGGED_IN_SALT',   'gu+AbQE#Fe$^o>XWE]`KjeUix9;19?6p7)m:{6]+Fq^7-2S/tSJaL!4b]SE__<E9' );
define( 'NONCE_SALT',       'AY:>dIdA_)sgD$[v:=%QoI`94U+N6:CvpsFZ`Xt|-~*irWH6qKBPh9:BAx4XF.H0' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
