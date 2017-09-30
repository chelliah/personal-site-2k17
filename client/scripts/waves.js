const morphObjects = [
{
    target: '#morph .st1',
    fill: "#3f3994",
    d: 'M1920,742v338H0V0h1585c-0.8,36.5-7.5,142.2,7,176c34,79,115.1,65,149,118c29.3,45.8-23.9,169,8,213 c41.4,57.1,99.8,14.7,131,78C1896.6,618.7,1887.3,723.6,1920,742z',
    duration: 12300
},
    {
    target: '#morph .st2',
    fill: "#271959",
    d: 'M1920,872v208H0V0h1258c-35,82-42,137.6-18,217c14.7,48.5,48.4,76.3,88,108c55,44,91.1,54.9,140,96 c54.8,46.1,108,160,133,238c20.6,64.4,36.3,173.2,122,199C1777.1,874.3,1866.3,854.6,1920,872z',
    duration: 12730
},
{
    target: '#morph .st3',
    fill: "#200b70",
    d: 'M1675,1080H0V0h725c9,54,43.6,106.1,76,147c34,43,71.9,50.1,98,94c41.5,69.7,11.8,152.4,70,209 c85.1,82.8,165.2,100.9,252,182c40.1,37.5,55.1,136.4,102,165c74.3,45.4,201.2,97.2,268,153C1646,996,1662.9,1026.7,1675,1080z',
    duration: 14350
},
{
    target: '#morph .st4',
    fill: "#3b1d71",
    d: 'M1297,1080H0V0h332c42.3,43.5,244.3,143.2,263,202c22.2,69.8-14.2,231.3,31,289c66.8,85.3,79.6,47.1,126,145 c41,86.5,175.9,105.8,234,182c33.1,43.4,61.2,94.8,113,112c51.8,17.2,103.6,17.4,145,53C1264,1000.3,1289,1054.8,1297,1080z',
    duration: 18010
},
{
    target: '#morph .st5',
    fill: "#3842a3",
    d: 'M696,1080H0V62c57.3,21.6,91.6,91.5,133,137c57.6,63.3,112.9,85,134,168c21.1,83-37,195.4,10,267 c43.8,66.7,280.2,104.9,343,154C723.4,868.8,648.6,957.7,696,1080z',
    duration: 16280
},
{
    target: '#morph .st6',
    fill: "#3018a1",
    d: 'M458,1080H0V609c8.9,3.6,22,7.6,30,13c38.4,25.8,76,71.8,77,118c0.8,39.7-22.2,108.5-9,146 c16.3,46.2,99-15,205,29C407.3,958.3,430.8,1015.7,458,1080z',
    duration: 8520
}
];



for (var i in morphObjects) {
anime({
    targets: morphObjects[i].target,
    duration: morphObjects[i].duration,
    d: morphObjects[i].d,
    fill: morphObjects[i].fill,
    direction: "alternate",
    easing: 'easeInOutSine',
    loop: true
})
}
