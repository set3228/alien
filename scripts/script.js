window.addEventListener('load', function() {
   let navLinks = document.querySelectorAll('.nav li');

   Array
      .from(navLinks)
      .forEach(
         item => {
            item.addEventListener('click', e => {
               Array
                  .from(navLinks)
                  .forEach(
                     item => item.classList.remove('active')
                  );

               item.classList.add('active');
               console.dir(e);
               console.log(navLinks);
            })
         }
      );

})