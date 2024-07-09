<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
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
define( 'DB_NAME', 'wordpress-db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         '^_LxC z|]_Rgyz>>C{G^b]JLbVTYu:Vs1Ile]eKvB^ue]]en44X{qwo,-}Ty#wq/' );
define( 'SECURE_AUTH_KEY',  'H[54?G}z6z?pimgoC,XAVm6T?M9-1~AD!byQ:a&atl)D~Pz9O-U|-t=t1O{6hm>I' );
define( 'LOGGED_IN_KEY',    'v&JVH+1y7uXRKQabU5nY0kogt50}MlpCUQxfq}?1oO8ZfZTUTSjRF}C~i&ql@Zq}' );
define( 'NONCE_KEY',        'TOm~U[F#x.0h:QB}fwEfw@8kJq.99:?hUamM:yF<.;-4wPUd.2QXVRrv.9QrT0@N' );
define( 'AUTH_SALT',        'B/IDGY$/]$1_9Ptz81@lp^(mL~-Cw5xln#KzWWh-^W2~(cf}ZUJ:FSyb%!Y#PKyu' );
define( 'SECURE_AUTH_SALT', 'Yhk%%&y-)DRx$]kHi>d}LVL{lM7V|BAFaeN~b;g} _R5/4| W81kSo+Mm<)pN-k?' );
define( 'LOGGED_IN_SALT',   '!!*D0dgej(#f.&^]%@>J5cJVPF&`-6F r@ZE<RYZ>XLG7+n;(Zs=D5HL(:$wP=f(' );
define( 'NONCE_SALT',       'SyPlMY>DVhkmb&igHt3.Tx])j@!NKh)prdub<_v%|haXwCCwZ<OTb~!6ck;kw.aH' );

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
