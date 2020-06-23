import {getTransition} from './homeTransitions.js'
import {getGradients} from './homeGradients.js'

export function getPanels(svg, v, gX, gY, width, height,){
    
        let strokeColor = 'black'
        let gold = 'gold'
        let red = '#c13c3c'
        let purple = '#4213c1'
    
    
    
        // CONTACT PANEL
    svg.append('path')
        .attr('class', 'panel panelHover')
        .attr('d', 'M ' + v[1] + 
                ' L ' + v[0] +
                ' L ' + v[2])
        .attr('stroke', strokeColor)
        .attr('fill', gold)
        .on("click", function() { 
            svg.selectAll("*").remove()

            getTransition(svg, v, gX, gY, width, height, 'contact' )
            getPanels(svg, v, gX, gY, width, height)
            let panels = document.getElementsByClassName('panel')
            for (let p of panels){
                p.classList.remove('panelHover')
            }
            getGradients(svg, v, gX, gY, width, height)
        });


        // 
        // SOCIAL MEDIA PANEL
        // 
    svg.append('path')
        .attr('d', 'M ' + v[2] + 
                ' L ' + v[0] +
                ' L ' + v[3])
        .attr('stroke', strokeColor)
        .attr('fill', red)
        .attr('class', 'panel panelHover')
        .on("click", function() { 
            svg.selectAll("*").remove()
            getTransition(svg, v, gX, gY, width, height, 'about' )
            getPanels(svg, v, gX, gY, width, height)
            let panels = document.getElementsByClassName('panel')
            for (let p of panels){
                p.classList.remove('panelHover')
            }
            getGradients(svg, v, gX, gY, width, height)
        });

        // 
        // WEB BLOG PANEL
        // 
    svg.append('path')
        .attr('d', 'M ' + v[3] + 
                ' L ' + v[0] +
                ' L ' + v[4])
        .attr('stroke', strokeColor)
        .attr('fill', purple)
        .attr('class', 'panel panelHover')
        .on("click", function() { 
            svg.selectAll("*").remove()

            getTransition(svg, v, gX, gY, width, height, 'blog' )
            getPanels(svg, v, gX, gY, width, height)
            let panels = document.getElementsByClassName('panel')
            for (let p of panels){
                p.classList.remove('panelHover')
            }
            getGradients(svg, v, gX, gY, width, height)
        });

        // about me
    svg.append('path')
        .attr('d', 'M ' + v[5] + 
                ' L ' + v[0] +  
                ' L ' + v[6])
        .attr('stroke', strokeColor)
        .attr('fill', gold)
        .attr('class', 'panel rightPanel panelHover')
        .on("click", function() { 
            svg.selectAll("*").remove()
            getTransition(svg, v, gX, gY, width, height, 'cs-portfolio' )
            getPanels(svg, v, gX, gY, width, height)
            let panels = document.getElementsByClassName('panel')
            for (let p of panels){
                p.classList.remove('panelHover')
            }
            getGradients(svg, v, gX, gY, width, height)
        });

            // cs portfolio 
    svg.append('path')
        .attr('d', 'M ' + v[6] + 
                ' L ' + v[0] + 
                ' L ' + v[7])
        .attr('stroke', strokeColor)
        .attr('fill', red)
        .attr('class', 'panel rightPanel panelHover')
        .on("click", function() { 
            svg.selectAll("*").remove()
            getTransition(svg, v, gX, gY, width, height, 'photos' )
            getPanels(svg, v, gX, gY, width, height)
            let panels = document.getElementsByClassName('panel')
            for (let p of panels){
                p.classList.remove('panelHover')
            }
            getGradients(svg, v, gX, gY, width, height)
        });

            // music, photography, art 
    svg.append('path')
        .attr('d', 'M ' + v[7] + 
                ' L ' + v[0] + 
                ' L ' + v[8])
        .attr('stroke', strokeColor)
        .attr('fill', purple)
        .attr('class', 'panel rightPanel panelHover')
        .on("click", function() { 
            svg.selectAll("*").remove()
            getTransition(svg, v, gX, gY, width, height, 'art-portfolio' )
            getPanels(svg, v, gX, gY, width, height)
            let panels = document.getElementsByClassName('panel')
            for (let p of panels){
                p.classList.remove('panelHover')
            }
            getGradients(svg, v, gX, gY, width, height)
        });  

    return svg
}