        let totalCookies = 0;
        let cookiesPerClick = 1;
        let clickImg = document.getElementById("toClick");
        let info = document.getElementById("infoGive");
        let boom = document.getElementById("boom");
        let color1 = "red";

        let dingMusic = document.getElementById("ding");
        let bgMusic = document.getElementById("bg");
        
        // rickRoll
        let video = document.getElementById("video")
        let rickVideo = document.getElementById("rickroll")

        let unlock20 = false;
        let unlock100 = false;
        let unlockRickroll = false;

            clickImg.onclick = function() {
                totalCookies = totalCookies + cookiesPerClick;
                info.textContent = `You have total ${totalCookies} cookies!`
                document.body.style.boxShadow = "inset 0px 0px 20px rgba(2, 0, 150, 0.31)";
                document.body.style.transition = "0.3s";

                setTimeout(()=>{
                    document.body.style.boxShadow = "none"
                },500)

                clickImg.style.transform = "translateY(10px)"

                setTimeout(function(){
                    clickImg.style.transform = "translateY(0px)"
                },100);

                if (totalCookies >= 20 && !unlock20) {
                    document.getElementById("coin1").style.display = "flex"
                    cookiesPerClick = 5;
                    unlock20 = true;
                }

                if (totalCookies >= 100 && !unlock100) {
                    document.getElementById("coin2").style.display = "flex"
                    cookiesPerClick = 10;
                    document.getElementById("boom").style.display = "flex"
                    unlock100 = true;
                }

                if (totalCookies >= 2000 && !unlockRickroll) {
                    video.style.display = "flex";
                    rickVideo.style.display = "flex";
                    rickVideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
                    unlockRickroll = true;
                }   
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