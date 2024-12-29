  window.onscroll = function() {
            document.getElementById("backToTop").style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
        };

        function scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }