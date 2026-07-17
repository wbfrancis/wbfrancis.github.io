export function getPanels(svg, v, gX, gY, width, height, bgColor){
    
        let strokeColor = 'black'
        
    svg.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('fill', bgColor)
    
        // CONTACT PANEL
    svg.append('path')
        .attr('class', 'panel')
        .attr('d', 'M ' + v[1] + 
                ' L ' + v[0] +
                ' L ' + v[2])
        .attr('stroke', strokeColor)


        // 
        // SOCIAL MEDIA PANEL
        // 
    svg.append('path')
        .attr('d', 'M ' + v[2] + 
                ' L ' + v[0] +
                ' L ' + v[3])
        .attr('stroke', strokeColor)
        .attr('class', 'panel')

        // 
        // WEB BLOG PANEL
        // 
    svg.append('path')
        .attr('d', 'M ' + v[3] + 
                ' L ' + v[0] +
                ' L ' + v[4])
        .attr('stroke', strokeColor)
        .attr('class', 'panel')

        // about me
    svg.append('path')
        .attr('d', 'M ' + v[5] + 
                ' L ' + v[0] +  
                ' L ' + v[6])
        .attr('stroke', strokeColor)
        .attr('class', 'panel')

            // cs portfolio 
    svg.append('path')
        .attr('d', 'M ' + v[6] + 
                ' L ' + v[0] + 
                ' L ' + v[7])
        .attr('stroke', strokeColor)
        .attr('class', 'panel')

            // music, photography, art 
    svg.append('path')
        .attr('d', 'M ' + v[7] + 
                ' L ' + v[0] + 
                ' L ' + v[8])
        .attr('stroke', strokeColor)
        .attr('class', 'panel')

    

    return svg
}