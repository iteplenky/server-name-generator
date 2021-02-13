function Random () {

    var prefix = [
        'Funny', 'Nexus', 'Really', 
        'Play', 'Last', 'Apple', 
        'Green', 'Fun', 'Day',
        'Lucky', 'Holly', 'Bars', 
        'Sun', 'Dark', 'Cube', 
        'Hype', 'One', 'Easy'
    ];

    var suffix = [
        'Craft', 'Wix', 'Land', 
        'World', 'PvP', 'Mine', 
        'Game', 'Play', 'Pixel', 
        'Ground', 'Network', 'Grief', 
        'Stars', 'Cube', 'Games', 
        'Dex', 'Pex', 'PE/BE', 'Go'
    ];

    return prefix[Math.floor(Math.random() * prefix.length)] + suffix[Math.floor(Math.random() * suffix.length)];
}

    const btn = document.getElementById('button');
    const div = document.getElementById('div');

    btn.onclick = function() {
        div.innerHTML = Random();
    }
