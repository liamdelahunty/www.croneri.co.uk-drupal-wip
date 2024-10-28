javascript: (function() {
    if (document.location.hostname != 'www.accountancydaily.co'){
        window.location.replace("https://www.accountancydaily.co");
    }
	var divc = "</div>";
	var tao = "<textarea class='form-control mb-5' rows='5'>";
	var tac = "</textarea>";
	var h1 = document.getElementsByTagName('h1')[0].innerText.trim();
	var intro = document.getElementsByClassName('well standfirst')[0].innerText.trim();
	var img = document.getElementsByClassName('img-responsive')[0].src;
	var url = document.URL;
	var imgparts = img.split('?');
    var square = imgparts[0].replace('/media_thumbnail/', '/news-square/');
    var threecol = imgparts[0].replace('/media_thumbnail/', '/news-threecol/');
    square_output_02 = '<div class="row mb-3 mb-lg-5" id="story1">';
    square_output_04 = '<div class="col-2 d-none d-lg-block"><a href="'+url+'?utm_campaign=3634&utm_medium=website&utm_source=direct&utm_content=www" target="_blank"><img src="'+square+'" class="img-fluid"></a></div>';
    square_output_06 = '<div class="col" style="text-align: left !important;">';
    square_output_08 = '<h4><a href="'+url+'?utm_campaign=3634&utm_medium=website&utm_source=direct&utm_content=www" target="_blank">'+h1+'</a></h4>';
    square_output_10 = '<p class="resettxt">'+intro+'</p>';
    square_output_12 = '</div>';
    square_output_14 = '</div>';
    threecol_output_02 = '<div class="row mb-3 mb-lg-5" id="story1">';
    threecol_output_04 = '<div class="col-2 d-none d-lg-block"><a href="'+url+'?utm_campaign=3634&utm_medium=website&utm_source=direct&utm_content=www" target="_blank"><img src="'+threecol+'" class="img-fluid"></a></div>';
    threecol_output_06 = '<div class="col" style="text-align: left !important;">';
    threecol_output_08 = '<h4><a href="'+url+'?utm_campaign=3634&utm_medium=website&utm_source=direct&utm_content=www" target="_blank">'+h1+'</a></h4>';
    threecol_output_10 = '<p class="resettxt">'+intro+'</p>';
    threecol_output_12 = '</div>';
    threecol_output_14 = '</div>';

    str = "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>";
    str += "<div class='container'><div class='row'><div class='col'>";
    str += "<h1 class='my-5'>Accountancy Daily Article Grabber</h1>\n";    
    str += "<h2>Square:</h2>\n";
    str += divc;
    str += divc;
    str += "<div class='row'><div class='col'>";
    str += tao + square_output_02 + "\n\t" + square_output_04 + "\n\t" + square_output_06 + "\n\t\t" + square_output_08 + "\n\t\t" + square_output_10 + "\n\t" + square_output_12 + "\n" + square_output_14 + "\n" + tac;
    str += divc;
    str += "<div class='col'>";
    str += square_output_02 + square_output_04 + square_output_06 + square_output_08 + square_output_10 + square_output_12 + square_output_14 + divc;
    str += divc;
   
    str += "<div class='row'><div class='col'>";
    str += "<h2>Threecol:</h2>\n";
    str += divc;
    str += divc;
    str += "<div class='row'><div class='col'>";
    str += tao + threecol_output_02 + "\n\t" + threecol_output_04 + "\n\t" + threecol_output_06 + "\n\t\t" + threecol_output_08 + "\n\t\t" + threecol_output_10 + "\n\t" + threecol_output_12 + "\n" + threecol_output_14 + "\n" + tac;
    str += divc;
    str += "<div class='col'>";
    str += threecol_output_02 + threecol_output_04 + threecol_output_06 + threecol_output_08 + threecol_output_10 + threecol_output_12 + threecol_output_14 + divc;
    str += divc;


    str += "<div class='row'><div class='col'>";
    str += "<h2>Top Stories / Editor's Picks:</h2>\n";
    str += divc;
    str += divc;
    str += "<div class='row'><div class='col'>";
    str += tao;
    str += '<li><strong>' + h1 + '</strong><br /><br />' + "\n";
    str += intro + '<br />' + "\n";
    str += '<a href="' + url + '" target="_blank">Read more</a><br /><br /></li>' + "\n";
    str += tac;
    str += divc;
    str += "<div class='col'>";
    str += '<ol><li><strong>' + h1 + '</strong><br /><br />' + "\n";
    str += intro + '<br />' + "\n";
    str += '<a href="' + url + '" target="_blank">Read more</a><br /><br /></li></ol>' + "\n";
    str += divc + divc;
    str += divc;

    str += "<footer>";
    str += "<p class='text-center'>Brought to you with love by Liam Delahunty</p>";
    str += "<p class='text-center'><a href='https://www.accountancydaily.co/' target='ad'>accountancydaily.co</a> | <a href='https://www.croneri.co.uk/' target='ci'>croneri.co.uk</a></p>";
    str += "</footer>";

    with(window.open()) {
        document.write(str);
        document.close();
    }
})();