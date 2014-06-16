# FreeGallery
=============

FreeGallery is a very basic and simple (image) gallery.
It does not have any fancy features (yet) beside some fading effects.

The non-minified version is commented, so it is very easy to modify.

## What inspired you?
=====================

There are a lot of good plugins that do a better job.
But I only came across plugins that were paid when you want them to use for commercial projects.
And since I'm recently started to use jQuery, I wanted to test my skill and make something for myself.
I'm also kind of a beginner on GitHub, so why not make this project open-source.

Now not only I, but also you can benefit from it.
Just download and install!

And if you like, contribute.

## What makes FreeGallery special?
==================================

- It is lightweight
- Free for (non-)commercial
- Clean (lay-out is up to you)
- HTML5 + CSS3 compatible

## Installation/Getting Started
===============================

#### Step 1 - Load the necessary files
1. Download and unzip the latest version of FreeGallery.
2. Copy the "jquery.freegallery.min.js" file from the "source" folder to your site.
3. Load the necessary files (jQuery first!):
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="jquery.freegallery.min.js"></script>
```

#### Step 2 - Load/call the plugin
1. Add this to your page:
```
<ul id="freegallery-controls">
	<li>Categories:</li>
	<li><a href="#" id="all" class="active">All</a></li>
	<li><a href="#" id="cat1">Websites</a></li>
	<li><a href="#" id="cat2">Features</a></li>
</ul>
<div id="freegallery">
	<ul>
		<li class="cat1"></li>
    	<li class="cat2"></li>
    	<li class="cat2"></li>
	</ul>
</div>
```
1. Call the script by adding the following to the bottom of your page:
```
<script>
$("#freegallery").freegallery({
    galleryid: '#freegallery ul', // Gallery container
	controlid: '#freegallery-controls li a', // Controls container + li a
	animation_speed: 1000 // Animation speed for fade in miliseconds
});
</script>
```

Currently there is no documentation.
If you have suggestions or feedback regarding the installation guide and documentation, please contact me.

## Contributing
===============

At the moment this project is only maintained by me.
If you want to help make this project better you can:
- Report issues/bugs;
- Make Pull Requests;
- Submit any feedback;
- Or just contact me saying you like my work ;)
