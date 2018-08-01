$(document).ready( function() {
    // $('div').each( function(index, element) {
    //     console.log($(this).text())
    //     let n = $(this);
    //     console.log( n.text() )
    //     console.log($(this).attr('class'));
    //     console.log($(this).css('background-color'))
    // })

    // $('img').attr({
    //     title: 'front End Developer',
    //     style: 'border: 2px solid black; width: 400px;'
    // })

    //append()/appendTo()
    //prepend()/prependto()
    //remove()

    // $('.myStyle').append(`<span>class-5 Content</span>`)
    // $
    // (`<span>class-5 Content</span>`).appendTo('.myStyle1')
    // $('div').append(`<strong>Multiple Append</strong>`)

    // $('.myStyle-3').prepend(` <strong>prepend</strong>`)
    // $('#header').wrap(`<header class="header__block" />`)

    // $('.myStyle').remove();

    // $('div').css('color', 'white');
    // $('div').css({
    //     'color' : 'white',
    //     'font-weight' : 'bold',
    //     'font-size' : '20px'
    // });

    // $('div, h1').addClass('newClass');

    // if( $('h1').hasClass('newClass') ) {
    //     console.log("h1 has a newClass");
    // }


    //Jquery Event Shortcuts
    /*
    click()
    blur()
    focus()
    mousemove()
    keydown()
    */

    // $('#header').click( function(event) {
    //     console.log(event)
    //     $('#small__header').click();
    // })

    // $('#small__header').click( function(event) {
    //     console.log('small__header was click')
    // })

    // $('div').on('click mouseenter mouseleave', function() {
    //     console.log('header was clicked')
    //     $(this).toggleClass('entered')
    // })

    // $('div').on( {
    //     mouseenter: function() {
    //         $(this).addClass('entered');
    //     },
    //     mouseleave: function(){
    //         $(this).removeClass('entered')
    //     }
    // })

    // $('div').hover(
    //     function() {
    //         $(this).addClass('entered');
    //     },
    //     function(){
    //         $(this).removeClass('entered')
    //     }
    // )

    //localStorage
    //sessionStorage
    let storage = window.localStorage;
    $('#saveBtn').click( function() {
        let name = $('#name').val();
        storage.setItem('userName', name)
        console.log(storage.key(0))
        remove
    })
})