export function getGradients(svg, v){
    var gradientDefs = svg.append('defs')
    .attr('class', 'gradientDefs')


    // RIGHT
    var gradient = gradientDefs.append('linearGradient')
        .attr('class', 'grader')
        .attr('id', 'grad1')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '100%')
        .attr('y2', '100%')
        .attr('gradientTransform', 'rotate(-57)')

    gradient.append('stop')
        .attr('offset', '4%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:1')
        
    gradient.append('stop')
        .attr('offset', '15%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:.8')

    gradient.append('stop')
        .attr('offset', '50%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:.3')

    var path = 'M ' + v[0] +
        ' L ' + v[5] + 
        ' L ' + v[6] +
        ' L ' + v[8] + ' Z';

    svg.append('path')
        .attr('class', 'gradientPath')
        .attr('d', path)
        .attr('fill', 'url(#grad1)')



    // TOP
    gradient = gradientDefs.append('linearGradient')
        .attr('id', 'grad2')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '100%')
        .attr('y2', '100%')
        .attr('gradientTransform', 'rotate(28)')

    gradient.append('stop')
        .attr('offset', '0%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:.2')

    gradient.append('stop')
        .attr('offset', '37%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:.8')
        
    gradient.append('stop')
        .attr('offset', '58%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:1')

    path = 'M ' + v[0] +
        ' L '  + v[1] +
        ' L ' + v[5]
        + ' Z';

    svg.append('path')
        .attr('class', 'gradientPath')
        .attr('d', path)
        .attr('fill', 'url(#grad2)')



    //  LEFT
    gradient = gradientDefs.append('linearGradient')
        .attr('id', 'grad3')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '100%')
        .attr('y2', '100%')
        .attr('gradientTransform', 'rotate(-70)')

    gradient.append('stop')
        .attr('offset', '0%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:.4')
        
    gradient.append('stop')
        .attr('offset', '20%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:.7')

    gradient.append('stop')
        .attr('offset', '40%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:1')

    path = 'M ' + v[0] +
        ' L '  + v[1] +
        ' L ' + v[4]
        + ' Z';

    svg.append('path')
        .attr('class', 'gradientPath')
        .attr('d', path)
        .attr('fill', 'url(#grad3)')



    //  BOTTOM
    gradient = gradientDefs.append('linearGradient')
        .attr('id', 'grad4')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '100%')
        .attr('y2', '100%')
        .attr('gradientTransform', 'rotate(26)')

    gradient.append('stop')
        .attr('offset', '18%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:1')
        
    gradient.append('stop')
        .attr('offset', '33%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:.8')

    gradient.append('stop')
        .attr('offset', '60%')
        .attr('style', 'stop-color:rgb(0,0,0);stop-opacity:.2')

    path = 'M ' + v[0] +
        ' L '  + v[4] +
        ' L ' + v[8]
        + ' Z';

    svg.append('path')
        .attr('class', 'gradientPath')
        .attr('d', path)
        .attr('fill', 'url(#grad4)')

}