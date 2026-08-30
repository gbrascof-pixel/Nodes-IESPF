function createGenerator(createFn, ratePerSecond) {
        let lastTime = 0;
    
        function loop(timestamp) {
            if (timestamp - lastTime >= 1000 / ratePerSecond) {
                createFn();
                lastTime = timestamp;
            }
            requestAnimationFrame(loop);
        }
    
        requestAnimationFrame(loop);
    }
    
    
    function createSnowflake() {
        const el = document.createElement("div");
        el.className = "snowflake";
        el.textContent = "❄";
    
        const size = Math.random() * 20 + 10;
    
        el.style.left = Math.random() * window.innerWidth + "px";
        el.style.fontSize = size + "px";
        el.style.opacity = Math.random();
        el.style.animationDuration = (Math.random() * 4 + 6) + "s";
    
        document.body.appendChild(el);
        el.addEventListener("animationend", () => el.remove());
    }
    
    
    function createGift() {
        const el = document.createElement("div");
        el.className = "gift";
        el.textContent = "🎁";
    
        const size = Math.random() * 20 + 20;
    
        el.style.left = Math.random() * window.innerWidth + "px";
        el.style.fontSize = size + "px";
        el.style.animationDuration = (Math.random() * 3 + 4) + "s";
    
        document.body.appendChild(el);
        el.addEventListener("animationend", () => el.remove());
    }
    
    createGenerator(createSnowflake, 3);
    
    createGenerator(createGift, 0.5);
