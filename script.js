let bg = document.getElementById("bg");
                let moon = document.getElementById("moon");
                let mountain = document.getElementById("mountain");
                let house = document.getElementById("house");
                let text = document.getElementById("text");
        
                window.addEventListener('scroll', function(){
                    var value = window.scrollY;
        
                    bg.style.top = value * 0.1 + 'px';
                    moon.style.left = value * +1 + 'px';
                    mountain.style.top = -value * -0.15 + 'px';
                    house.style.top = value * 0.15 + 'px';
                    text.style.top = value * 0.99+ 'px';
                })