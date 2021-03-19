const gotoTop = function () {

    const btn = document.querySelector( '.button' );
          let nowY;

    btn.addEventListener( eventType, function () {	
        ( function doScroll() {		
            nowY = window.scrollY || window.pageYOffset;
            window.scrollTo( 0, nowY / 1.1 );	
            if ( nowY > 0 ) {
                setTimeout( doScroll, 10 );
            }
        } ) ();	
    }, false );
		
}

gotoTop();