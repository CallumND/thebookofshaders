<?php

	$path = "..";
	include($path."/header.php");
	include($path."/src/parsedown/Parsedown.php");

	echo '
	<div class="header"><p><a href="http://patriciogonzalezvivo.com/2015/thebookofshaders/">The Book of Shaders</a> by <a href="http://patriciogonzalezvivo.com">Patricio Gonzalez Vivo</a></p></div>
	<hr>
	<div id="content" class="gallery">
	';

	$Parsedown = new Parsedown();
	echo $Parsedown->text(file_get_contents ('README.md'));

	echo '
	</div>
	<hr>
	<ul class="navigationBar" >
		<li class="navigationBar" onclick="homePage()"> Home </li>
	</ul>

	<footer>
		<p> Copyright 2015 <a href="http://www.patriciogonzalezvivo.com" target="_blank">Patricio Gonzalez Vivo</a> </p>
	</footer>

	<script>
		(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,"script","//www.google-analytics.com/analytics.js","ga");

		ga("create", "UA-18824436-2", "auto");
		ga("send", "pageview");
	</script>
</body>
</html>';
?>
