A simple responsive boilerplate
===========

This is a really simple responsive boilerplate based on percentage widths/gutters. It's essentially a really simple grid that I like to use as a foundation for projects. It's mobile first, uses SASS and has some Grunt tasks ready for use. It works in IE8 and up (in IE8 it will just set a fixed width to the container which is configurable in _grid.scss).

Features
--------

*    Mobile first
*    Responsive (percentage based)
*    Configurable Grid
*    Grunt SASS compilation, Autoprefixer LiveReload and CSS/JS minification
*    Selectivizr and Modernizr included
*    IE8+

Configuration
--------

The following are found in sass/partials_grid.scss

*    $content-width - The maximum size that you want your rows to be (default: 1300px)
*    $gutter - A percentage value of how big you want your gutters (default: 2.5%)
*    $columns - How many columns you want in your grid (default: 12)
*    $ie8-content-width - The fixed width that IE8 will fall back to (default: 1024px)

Usage
--------
Run "npm install" to install all node dependencies 
Run "grunt watch" in terminal to get grunt running.
To set columns use the columns() mixin. This takes in a parameter between 1 and however many columns you have set in your configuration.
I've included some mixins and extra stuff I like using, for example an icon font and some mixins that can be useful.

