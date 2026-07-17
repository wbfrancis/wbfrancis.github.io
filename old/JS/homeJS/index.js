import { getPanels } from './homePanels.js'
import { getText } from './homeText.js';
import { getGradients } from './homeGradients.js';
import { getTransition } from './homeTransitions.js';

const canvas = d3.select('.canvas');

const svg = canvas.append('svg');
const cv = document.getElementsByClassName('canvas');
const height = cv[0].clientHeight;
const width = cv[0].clientWidth;

svg.attr('height', height)
svg.attr('width', width)
console.log(width, height)

const PHI = (1+ Math.sqrt(5))/2;
const gX =  width - width / PHI;
const gY =  height - height / PHI;

window.onresize = function(){ location.reload(); }
let v = getVertices(gX, gY, width, height)




// getTransition(svg, v, gX, gY, width, height, 'social media' )
getPanels(svg, v, gX, gY, width, height)

getGradients(svg, v, gX, gY, width, height)
getText(svg, v, gX, gY, width, height)


let circle = svg.append('circle')
let min = Math.min(width, height)

    circle.attr('cx', gX)
        .attr('class', 'darkCircle')
        .attr('cy', gY)
        .attr('r', min/10)
        .attr('fill', 'black')  

circle.on("click", function(){
    svg.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('fill', '#0')
        .attr('fill-opacity', '0')
        .transition()
        .duration(2000)
        .attr('fill-opacity', '1')
        .on('end', ()=>{window.location.href = 'black.html'})
    
    // let x = d3.selectAll('stop').transition().duration(300).attr('offset', Math.floor(Math.random() * 201) - 100 +'%')
    // let x = d3.selectAll('stop').transition().duration(300).attr('style', 'stop-color:rgb(0,0,0);stop-opacity:1')
    // x= d3.selectAll('.rightPanel').attr('stroke', 'white').attr('stroke-width', 5)


})

// svg.append('image')
//         .attr('href', './assets/shine.png')
//         .attr('width', width/20)
//         .attr('height', width/20)
//         .attr('x', gX)
//         .attr('y', gY-(width/80))



function getVertices(gX, gY, width, height){
    return [
        gX + ' ' + gY,
        0 + ' ' + -(width/(width*.08)),
        0 + ' ' + gY,
        0 + ' ' + (gY + height*.2),
        0 + ' ' + (height+(height*.3)),
        (gX+.1555*width) + ' ' + 0,
        (width + (width*.10)) + ' ' + 0,
        width + ' ' + gY,
        (width) + ' ' + (height*1.03)
    ]
}