function changeText() {
    document.getElementById("text").innerHTML = "Text has been changed!";
}

window.onload = function() {
    const rainContainer = document.createElement('div');
    rainContainer.id = 'rain';
    rainContainer.style.position = 'fixed';
    rainContainer.style.top = '0';
    rainContainer.style.left = '0';
    rainContainer.style.width = '100%';
    rainContainer.style.height = '100%';
    rainContainer.style.pointerEvents = 'none';
    rainContainer.style.zIndex = '-1';
    document.body.appendChild(rainContainer);

    for(let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDelay = Math.random() * 2 + 's';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        rainContainer.appendChild(drop);
    }
}