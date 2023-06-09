  // ****************** Mobile Menu Trigger *******************
  function toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('mobile-menu-visible');
  }






  // ****************** Feedback Card Animation *******************
  const feedbackcardWrapper = document.querySelector('.feedbackcard-wrapper');
  const feedbackcardContent = feedbackcardWrapper.querySelector('div');
  const feedbackcardItems = Array.from(feedbackcardContent.querySelectorAll('div'));
  const speed = 6;
  const pauseTime = 1000;
  const transitionTime = 500;

  feedbackcardContent.style.display = 'flex';

  feedbackcardItems.forEach(item => {
      item.style.flexShrink = '0';
  });

  feedbackcardContent.innerHTML += feedbackcardContent.innerHTML;

  function feedbackcardScroll() {
      if (feedbackcardWrapper.matches(':hover')) {
          return;
      }

      if (feedbackcardWrapper.scrollLeft % feedbackcardItems[0].offsetWidth === 0) {
          clearInterval(feedbackcardTimer);
          setTimeout(() => {
              feedbackcardTimer = setInterval(feedbackcardScroll, speed);
          }, pauseTime);
      }
      feedbackcardWrapper.scrollLeft += 1;
      if (feedbackcardWrapper.scrollLeft >= feedbackcardContent.scrollWidth / 2) {
          feedbackcardWrapper.scrollLeft = 0;
      }
  }

  let feedbackcardTimer = setInterval(feedbackcardScroll, speed);

  function fadeOut(el, callback) {
      el.style.transition = `opacity ${transitionTime}ms`;
      el.style.opacity = 0;
      setTimeout(() => {
          el.style.display = 'none';
          callback();
      }, transitionTime);
  }

  function fadeIn(el) {
      el.style.display = 'block';
      el.style.transition = `opacity ${transitionTime}ms`;
      setTimeout(() => {
          el.style.opacity = 1;
      }, 0);
  }

  function cyclefeedbackcard() {
      const currentItem = feedbackcardItems[0];
      const nextItem = feedbackcardItems[1];
      fadeOut(currentItem, () => {
          fadeIn(nextItem);
          feedbackcardContent.appendChild(currentItem);
          feedbackcardItems.push(feedbackcardItems.shift());
          if (feedbackcardWrapper.scrollLeft === 0) {
              clearInterval(cycleTimer);
              setTimeout(() => {
                  cycleTimer = setInterval(cyclefeedbackcard, 3000);
              }, pauseTime);
          }
      });
  }

  let cycleTimer = setInterval(cyclefeedbackcard, 3000);







  // ******************************** Slider 1 ***************************************


  // ************************** Animated Tab *****************************8

  $(function () {
      $('.tab-content:not(:first)').hide();
      $('#tabs-nav a').bind('click', function (e) {
          e.preventDefault();
          $this = $(this);
          $target = $(this.hash);
          $('#tabs-nav a.current').removeClass('current');
          $('.tab-content:visible').fadeOut("slow", function () {
              $this.addClass('current');
              $target.fadeIn("slow");
          });
      }).filter(':first').click();
  });


  // ************************** Accordian Tab *****************************
  $(document).ready(function () {
      $('.accordion-header').click(function () {
          $(this).toggleClass('active');
          $(this).next('.accordion-content').slideToggle();
          $('.accordion-header').not(this).removeClass('active');
          $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
      });
  });






  // *********************** Progress Bar Animation ***********************
  $(document).ready(function () {
      var progressBarWidths = ["35%", "30%", "15%", "20%"];
      animateProgressBar($("#progress1"), 0);

      function animateProgressBar($progressBar, index) {
          $progressBar.animate({
              width: progressBarWidths[index]
          }, 2000, function () {
              // Animation complete, check if there is another progress bar
              var $nextProgressBar = $progressBar.next(".progress-bar-anim");
              if ($nextProgressBar.length) {
                  animateProgressBar($nextProgressBar, index + 1);
              }
          });
      }
  });

  //************************* Sticky Section Animation ***********************
  $(document).ready(function () {
      $(window).scroll(function () {
          var scrollPos = $(document).scrollTop();

          // Iterate through each section
          $('.scrolling-panels-content').each(function () {
              var sectionTop = $(this).offset().top;
              var sectionId = $(this).attr('id');

              // Check if the current section is in the viewport
              if (scrollPos >= sectionTop) {
                  // Remove the 'active' class from all list items
                  $('.scrolling-panels-sticky li').removeClass('active');

                  // Add the 'active' class to the corresponding list item
                  $('.scrolling-panels-sticky li').find('a[href="#' + sectionId + '"]').parent().addClass('active');
              }
          });
      });
  });