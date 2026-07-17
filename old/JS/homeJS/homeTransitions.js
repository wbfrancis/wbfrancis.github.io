export function getTransition(svg, v, gX, gY, width, height, type){
    let t = {type: type, path:[]}
    
    switch (type) {
        case 'contact':
            t.fillColor = 'gold'
            t.path[0] = 'M ' + v[0] + 
                ' L ' + v[1] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[4] +
                ' L ' + v[2] + ' Z'

            t.path[1] = 'M ' + v[0] + 
                ' L ' + gX + ' ' + 0 +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[4] +
                ' L ' + v[3] + ' Z'
            
            t.path[2] = 'M ' + v[0] + 
                ' L ' + v[5] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[4] +
                ' L ' + v[4] + ' Z'
            
            t.path[3] = 'M ' + v[0] + 
                ' L ' + v[6] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[8] +
                ' L ' + v[8] + ' Z'
            
            t.path[4] = 'M ' + v[0] + 
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] + ' Z'
            break

        case 'about':
            t.fillColor='#c13c3c'

            t.path[0] = 'M ' + v[0] + 
                ' L ' + v[2] +
                ' L ' + v[1] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[4] + 
                ' L ' + v[3] + ' Z'
                
            t.path[1] = 'M ' + v[0] + 
                ' L ' + v[1] +
                ' L ' + v[1] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[4] + 
                ' L ' + v[4] + ' Z'

            t.path[2] = 'M ' + v[0] + 
                ' L ' + v[5] +
                ' L ' + v[5] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[8] + 
                ' L ' + v[8] + ' Z'

            t.path[3] = 'M ' + v[0] + 
                ' L ' + v[6] +
                ' L ' + v[6] +
                ' L ' + v[6] +
                ' L ' + width + ' ' + (2/3*height) +
                ' L ' + width + ' ' + (2/3*height) + 
                ' L ' + width + ' ' + (2/3*height) + ' Z'

            t.path[4] = 'M ' + v[0] + 
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] + 
                ' L ' + v[7] + ' Z'
            break

        case 'blog':
            t.fillColor='#4213c1'
            t.path[0] = 'M ' + v[0] + 
                ' L ' + v[3] +
                ' L ' + v[1] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[4] + ' Z'

            t.path[1] = 'M ' + v[0] + 
                ' L ' + v[1] +
                ' L ' + v[1] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + gX + ' ' + height + ' Z'
            
            t.path[2] = 'M ' + v[0] + 
                ' L ' + v[5] +
                ' L ' + v[5] +
                ' L ' + v[6] +
                ' L ' + v[8] +
                ' L ' + v[8] + ' Z'
            
            t.path[3] = 'M ' + v[0] + 
                ' L ' + v[6] +
                ' L ' + v[6] +
                ' L ' + v[6] +
                ' L ' + width + ' ' + (2/3*height) +
                ' L ' + width + ' ' + (2/3*height) + ' Z'
            
            t.path[4] = 'M ' + v[0] + 
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] +
                ' L ' + v[7] + ' Z'
            break

        case 'cs-portfolio':
            t.fillColor = 'gold'
            t.path[0] = 'M ' + v[0] + 
                ' L ' + v[5] +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + v[8] +
                ' L ' + v[6] + ' Z'

            t.path[1] = 'M ' + v[0] + 
                ' L ' + gX + ' ' + 0 +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + v[8] +
                ' L ' + v[8] + ' Z'
            
            t.path[2] = 'M ' + v[0] + 
                ' L ' + v[1] +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + v[4] +
                ' L ' + v[4] + ' Z'
            
            t.path[3] = 'M ' + v[0] + 
                ' L ' + 0 + ' ' + (.5*gY) +
                ' L ' + 0 + ' ' + (.5*gY) +
                ' L ' + v[3] +
                ' L ' + v[3] +
                ' L ' + v[3] + ' Z'
            
            t.path[4] = 'M ' + v[0] + 
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] + ' Z'
            break

        case 'photos':
            t.fillColor='#c13c3c'
            t.path[0] = 'M ' + v[0] + 
                ' L ' + v[6] +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + v[8] +
                ' L ' + v[7] + ' Z'

            t.path[1] = 'M ' + v[0] + 
                ' L ' + v[5] +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + v[8] +
                ' L ' + v[8] + ' Z'
            
            t.path[2] = 'M ' + v[0] + 
                ' L ' + v[1] +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + v[4] +
                ' L ' + v[4] + ' Z'
            
            t.path[3] = 'M ' + v[0] + 
                ' L ' + 0 + ' ' + (.5*gY) +
                ' L ' + 0 + ' ' + (.5*gY) +
                ' L ' + v[3] +
                ' L ' + v[3] +
                ' L ' + v[3] + ' Z'
            
            t.path[4] = 'M ' + v[0] + 
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] + ' Z'
            break

        case 'screenwriting':
            t.fillColor='#4213c1'
            t.path[0] = 'M ' + v[0] + 
                ' L ' + v[7] +
                ' L ' + v[6] +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + v[8] + ' Z'

            t.path[1] = 'M ' + v[0] + 
                ' L ' + v[6] +
                ' L ' + v[6] +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + gX + ' ' + height + ' Z'
            
            t.path[2] = 'M ' + v[0] + 
                ' L ' + v[5] +
                ' L ' + v[5] +
                ' L ' + v[1] +
                ' L ' + v[4] +
                ' L ' + v[4] + ' Z'
            
            t.path[3] = 'M ' + v[0] + 
                ' L ' + v[1] +
                ' L ' + v[1]+
                ' L ' + v[1] +
                ' L ' + v[3] +
                ' L ' + v[3] + ' Z'
            
            t.path[4] = 'M ' + v[0] + 
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] +
                ' L ' + v[2] + ' Z'
            break

    }

    svg.append('rect')
        .attr('class','transition')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('fill', t.fillColor)
        .attr('mask', 'url(#mask1)')

    let defs = svg.append('defs')
    let mask = defs.append('mask')
        .attr('id', 'mask1')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', '100%')
            .attr('height', '100%')
    
    mask.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('fill', '#ffffff')

    mask.append('path')
            .attr('class','transition')
            .attr('id', 'maskPath')
            .attr('d', t.path[0])
            .attr('fill', '#0')

    runTransition(t)

}

function runTransition(t){
    d3.select('#maskPath')
        .transition()
        .ease(d3.easeLinear)
        .duration(100)
        .attr('d', t.path[1])
        .transition()
        .ease(d3.easeLinear)
        .duration(100)
        .attr('d', t.path[2])
        .transition()
        .ease(d3.easeLinear)
        .duration(50)
        .attr('d', t.path[3])
        .transition()
        .ease(d3.easeLinear)
        .duration(50)
        .attr('d', t.path[4])
        .on('end', ()=>{window.location.href = t.type + '.html'})
} 

    






