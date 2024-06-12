  document.addEventListener("DOMContentLoaded", function() {
      var loadingDiv = document.getElementById('loading');
      var countdown = 3;  

      function updateCountdown() {
        loadingDiv.innerHTML = "<h1 style='color:red'>2024 Digital Thorana<br> P.L.Methuka Madew ගේ නිර්මාණයකි</h1>" +
                               "<h1 style='color:yellow'>තොරන් Load වීමට මද වේලාවක් රැදී සිටින්න.<br>ඔබගේ 𝕊𝕚𝕘𝕟𝕒𝕝 𝕊𝕥𝕣𝕖𝕟𝕘𝕥𝕙 එක අනුව ⓁⓄⒶⒹ වීමට කාලය ගතවෙයි.</h1>" +
                               "<h2 style='color:blue'>Created By P.L.Methuka Madew </h4>" +
                               "<h4>Web Page will show in " + countdown + " seconds...</h3>";

        countdown--;
        if (countdown >= 0) {
          setTimeout(updateCountdown, 1000);
        } else {
          loadingDiv.style.display = 'none';
        }
      }

      updateCountdown();
    });
