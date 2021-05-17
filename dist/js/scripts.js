
(function ($) {
    "use strict"; // Début d'utilisation strict

    // Défilement fluide à l'aide de anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Ferme le menu réactif lorsqu'un lien de déclenchement de défilement est cliqué
    $(".js-scroll-trigger").on('click', function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activez scrollspy pour ajouter une classe active aux éléments de la barre de navigation lors du défilement
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Réduire la barre de navigation
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Réduire maintenant si la page n'est pas en haut
    navbarCollapse();
    // Réduire la barre de navigation lors du défilement de la page
    $(window).on('scroll', navbarCollapse);

})(jQuery); // Fin d'utilisation stricte
