(function (jQuery) {
	/*
	
	Q 1.1 for jQuery - Sep. 2009 - http://www.sullof.com
	
	Copyright (c) 2008/9 Francesco Sullo, www.sullof.com
	Dual licensed under the MIT (MIT-LICENSE.txt) 
	and GPL (GPL-LICENSE.txt) licenses.
	
	*/
	
	Q = function () {
		var tag = arguments[0].toLowerCase(),
			attr = arguments[1]||{},
			z = typeof attr == 'string' || typeof attr== 'number' ? 0: 1,
			str = '<'+tag,
			exc = {input:"type",iframe:"name"};
		
		//fix readonly input type and readonly iframe name																									
		if (z && exc[tag])
		 	for (var j in attr)
			 	if (j.toLowerCase()==exc[tag]) {
				 	if (attr[j]) str += ' '+exc[tag]+'="' + attr[j]+'"';
					delete attr[j];
					break;
				}
		str += ">";
		var n = jQuery(str);
		if (z) n.attr(attr,tag);
		for (var i=z+1;i<arguments.length;i++) {
			var a = arguments[i];
			if (!a) continue;
			if (a.constructor != Array) n.append(a);
			else for (var k=0;k<a.length;k++) n.append(a[k]);
		}
		return n;
	};
	
})(jQuery);

/*
 *  For compatibility with jQuick 
 *  (it doesn't work with Adobe AIR) 
 */

//var tags = "BLOCKQUOTE<BR<BUTTON<CAPTION<COLGROUP<DD<DIV<DL<DT<EMBED<FIELDSET<HR<INPUT<LEGEND<LI<META<OBJECT<OL<OPTGROUP<OPTION<P<PARAM<PRE<SELECT<TABLE<TBODY<TD<TFOOT<TH<THEAD<TR<UL<A<ABBR<ACRONYM<ADDRESS<B<BASE<BDO<BIG<CITE<CODE<COL<DEL<DFN<EM<FONT<FORM<H1<H2<H3<H4<H5<H6<H7<I<IFRAME<IMG<INS<KBD<LABEL<LINK<MAP<Q<SAMP<SMALL<SPAN<STRONG<STYLE<SUB<SUP<TEXTAREA<TITLE<TT<VAR".split("<");
//for (var j=0;j<tags.length;j++)
//	eval("$."+tags[j]+" = function () {var args=['"+tags[j]+"'];for(var i=0; i<arguments.length; i++) args.push(arguments[i]); return Q.apply(this,args);}");



// HTML string creator. Good for Zepto.

var H = function () {
	var a = arguments, 
		s = "br.img.link.hr.meta".split("."),
		tag = a[0].toLowerCase(),
		attr = tag && typeof a[1] == 'object' ? a[1] : null,
		z = attr ? 2 : 1,
		str = tag ? '<'+tag : ''; 
 	if (attr) for (var j in attr) str += ' '+j+'="'+attr[j]+'"';
	str += tag ? (s[tag]?"/":'') + ">" : '';
	for (var i=z;i<a.length;i++) {
		str += a[i];
	}
	if (tag && !s[tag]) str += "</"+tag+">";
	return str;
};


