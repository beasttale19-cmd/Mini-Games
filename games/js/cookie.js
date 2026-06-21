        let totalCookies = 0;
        let cookiesPerClick = 1;
        let clickImg = document.getElementById("toClick");
        let info = document.getElementById("infoGive");
        let boom = document.getElementById("boom");
        let color1 = "red";

        let dingMusic = document.getElementById("ding");
        let bgMusic = document.getElementById("bg");

            clickImg.onclick = function() {
                totalCookies = totalCookies + cookiesPerClick;
                info.textContent = `You have total ${totalCookies} cookies!`

                clickImg.style.transform = "translateY(10px)"

                setTimeout(function(){
                    clickImg.style.transform = "translateY(0px)"
                },100);

                if (totalCookies === 20) {
                    document.getElementById("coin1").style.display = "flex"
                    cookiesPerClick = 5;
                }

                if (totalCookies === 100) {
                    document.getElementById("coin2").style.display = "flex"
                    cookiesPerClick = 10;
                    document.getElementById("boom").style.display = "flex"
                }

                boom.onclick = function(){
                    document.getElementById("body").style.backgroundColor = color1;
                    document.getElementById("h").style.display = "flex";
                    document.getElementById("boom").style.display = "none";
                    bgMusic.currentTime = 0;
                    bgMusic.play()

                    cookiesPerClick = 50;
                    setTimeout(function() {
                        document.getElementById("h").style.display = "none";
                        cookiesPerClick = 10;
                        document.getElementById("body").style.backgroundColor = "rgb(94, 35, 35)";
                        bgMusic.currentTime = 0;
                        bgMusic.pause()
                    },10000);

                    
                }

            }