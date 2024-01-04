let _time = document.getElementById('_time')
        let elip = document.getElementById('elip')
        let cart = document.querySelectorAll('#_all>.rot')
        let restart = document.getElementById('restart')
        let imgall = document.querySelectorAll('.rot>div:nth-of-type(1)>img:nth-of-type(5)')
        let zi = document.querySelectorAll('.rot>div:nth-of-type(1)')
        let p = 100
        let y = 0
        let a = 0
        let q = ''
        let g = []
        let s = 0
        const imgs = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png', 'img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png']
        // time of the game
        setInterval(() => {
                if (p > 0) {
                        p--
                        _time.innerHTML = p
                }
                else if (p == 0) {
                        restart.style.visibility = 'visible'
                        _time.innerHTML = 0
                        p = 0
                }
        }, 1000);
        // click for page 2
        restart.addEventListener('click', () => {
                restart.style.visibility = 'hidden'
                _time.innerHTML = 100
                p = 100
                location.reload()
        })
        if ((_time.innerHTML) > 0) {
                cart.forEach(element => {
                        element.addEventListener('click', () => {
                                s++
                                elip.innerHTML = s
                                g.push(element.children[0].children[4])
                                element.style.transform = 'perspective(800px) rotatey(180deg)'
                                element.children[0].style.zIndex = '1'
                                element.children[1].style.zIndex = '-1'
                                y++
                                console.log(y);
                                if ((y == 3) && (g[0].src !== g[1].src)) {
                                        g = []
                                        tr()

                                }
                                else if (g[0].src == g[1].src) {
                                        g[0].parentElement.parentElement.setAttribute('data-status', 'on')
                                        g[1].parentElement.parentElement.setAttribute('data-status', 'on')
                                        g = []
                                        tr()
                                        a++
                                        if (a == 8) {
                                                restart.style.visibility = 'visible'
                                                restart.children[0].innerHTML = 'YOU WON'
                                        }
                                }
                        })
                });
        }
        function tr() {
                cart.forEach(val => {
                        if (val.getAttribute('data-status') == 'off') {
                                val.style.transform = 'perspective(800px) rotatey(0deg)'
                                val.children[0].style.zIndex = '0'
                                val.children[1].style.zIndex = '0'
                                y = 0
                        }
                });

        }
        // imgs change
        function changes() {
                const arr = []
                for (let l = arr.length; l < imgs.length;) {
                        u = Math.floor(Math.random() * imgs.length)
                        if (arr.includes(u)) {
                                u = Math.floor(Math.random() * imgs.length)
                        }
                        else {
                                arr.push(u)
                        }
                        if (arr.length == 16) {
                                break
                        }
                }
                imgall.forEach((value, i) => {
                        value.src = imgs[arr[i]]
                });
        }
        changes()