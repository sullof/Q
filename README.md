Q
=

The goal of Q is to better create DOM object with jQuery.

## Brief history

During development of Passpack I need a fast way to create DOM objects.
Also I more control on the created objects, so I created the plugin [jQuick](http://jquick.sullof.com).
But, this plugin, surely more elegant that Q causes security issues with Adobe AIR so I adapted it and I developed Q.

## How to use Q

Q is very simple to use. Suppose you want to obtain the following html code:

	<div class="big">
	  <span id="one" class="ps">Hello Joe<i>!</i></span>
	</div>

Using Q you could create the corresponding DOM elements with the following code:

	Q("DIV",{'class':'big'},
		Q("SPAN",{id:'one','class':'ps'},
	    	'Hello Joe', Q("I",'!')
	    )
	);

Now suppose that you want to append to the `big` div an animated `SPAN` element, referring the DOM element with
the name of the person (Joe) with the variable `name`. You could write:

	$('#big').append(
	  	Q("SPAN",{id:'one','class':'ps'},
	   		'Hello ', 
	   		name = Q("B",'Joe')
	 	)
	 	.animate({left: 50,opacity:'show'},1000)
	);

After you can change, for example, the style of `Joe` with:
	
	name.css({fontSize:14});

Finally, Q supports HTML code. It is useful if you have to pass the innerHTML of one tag to another.

	Q("DIV",{'class':'big'},
	  '<span class="ps">Hello Joe<i>!</i></span>'
	);

In some cases you can insert in Q arrays of objects as:

	Q("DIV",{'class':'big'},
		[ '<span>Ciao </span>'
		, Q("BR")
	  	, Q("I","Joe")
	  	]
	);

but it won't work if nested.

## Credits

O is (c) Francesco Sullo <sullof@sullof.com>
The modules are (c) of respective authors.

## License 

(The MIT License)

Copyright (c) 2010 Francesco Sullo <sullof@sullof.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
