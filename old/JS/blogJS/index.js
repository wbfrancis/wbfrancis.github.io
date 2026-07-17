import { getPanels } from '../nonHomePanels.js'
import { getGradients } from '../homeJS/homeGradients.js';

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


// getText(svg, vertices)

// getTransition(svg, v, gX, gY, width, height, 'social media' )
getPanels(svg, v, gX, gY, width, height, '#4213c1')
getGradients(svg, v, gX, gY, width, height)

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