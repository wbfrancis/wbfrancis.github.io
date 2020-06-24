export function getText(svg, v, gX, gY, width, height){

    let gold = 'white'
    let red = 'white'
    let blue = 'white'
    let min = Math.min(width, height)
    var textPadding = min*.03;



    let offsetLeftMod = 7
    if (width <= 830){
        offsetLeftMod = 14
    }
 
        // contact text
    let path = 'M ' + 0 + ' ' + (gY - textPadding) +
    'L ' + gX + ' ' + (gY-textPadding) + ' Z';

    svg.append("defs").append("path")
    .attr("id", "contactTextPath")
    .attr('d', path);

    svg.append("path")
    .attr("d", path);

    let skewG = svg.append('g').attr('id', 'skewer')

    skewG.append("text").append("textPath")
    .attr("xlink:href", "#contactTextPath")
    .attr('fill', gold)
    // .attr('text-shadow', 'black') 
    .attr('font-family', "'Noto Sans HK', sans-serif")
    .text('contact')
    .attr('startOffset', 20-offsetLeftMod+'%')


    // social media text
    path = 'M ' + 0 + ' ' + (gY + height*.2 - textPadding) +
    'L ' + gX + ' ' + (gY-textPadding) + ' Z';

    svg.append("defs").append("path")
    .attr("id", "socialMediaTextPath")
    .attr('d', path);

    svg.append("path")
    .attr("d", path);

    svg.append("text").append("textPath")
    .attr("xlink:href", "#socialMediaTextPath")
    .attr('fill', red)
    .attr('font-family', "'Noto Sans HK', sans-serif")
    // .attr('text-shadow', 'black')
    .text('about me')
    .attr('startOffset', 18.5-offsetLeftMod+'%');


    //  web blog text
    path = 'M ' + 0 + ' ' + (height+(height*.3) - textPadding*1.5) + 
    'L ' + gX + ' ' + (gY - textPadding*1.5) + ' Z';

    svg.append("defs").append("path")
    .attr("id", "webBlogTextPath")
    .attr('d', path);

    svg.append("path")
    .attr("d", path);

    let blogOffset
    if (offsetLeftMod !== 0){
        blogOffset=26-offsetLeftMod
    } else {
        blogOffset = 20
    }

    if (width<850){
        blogOffset+=10
        if (height<600){
            blogOffset-=5
        }
        if (width < 400){
            blogOffset=24
        }
    }

    

    svg.append("text").append("textPath")
    .attr("xlink:href", "#webBlogTextPath")
    .attr('fill', blue)
    .attr('font-family', "'Noto Sans HK', sans-serif")
    // .attr('text-shadow', 'black')
    .text('web blog')
    .attr('startOffset', blogOffset + '%');


    // about me text
    path = 'M ' + gX + ' ' + (gY - textPadding) +
    'L ' + (width + (width*.10)) + " "  + (-textPadding) + ' Z';

    svg.append("defs").append("path")
    .attr("id", "bioTextPath")
    .attr('d', path);

    svg.append("path")
    .attr("d", path);

    svg.append("text").append("textPath")
    .attr("xlink:href", "#bioTextPath")
    .attr('fill', gold)
    .attr('font-family', "'Noto Sans HK', sans-serif")
    // .attr('text-shadow', 'black')
    .text('cs portfolio')
    .attr('startOffset', "15%");


    // cs portfolio text
    path = 'M ' + gX + ' ' + (gY - textPadding) +
    'L ' + width + ' ' + (gY - textPadding) + ' Z';

    svg.append("defs").append("path")
    .attr("id", "portfolioTextPath")
    .attr('d', path);

    svg.append("path")
    .attr("d", path);

    svg.append("text").append("textPath")
    .attr("xlink:href", "#portfolioTextPath")
    .attr('fill', red)
    .attr('font-family', "'Noto Sans HK', sans-serif")
    // .attr('text-shadow', 'black')
    .text('photography')
    .attr('startOffset', "17%");


    // music, photography, art text 
    path = 'M ' + gX + ' ' + (gY - textPadding) + 
    'L ' + (width) + ' ' + (height*1.03 - textPadding ) + ' Z';

    svg.append("defs").append("path")
    .attr("id", "artTextPath")
    .attr('d', path)

    svg.append("text").append("textPath")
    .attr("xlink:href", "#artTextPath")
    .attr('fill', blue)
    .attr('font-family', "'Noto Sans HK', sans-serif")
    // .attr('text-shadow', 'black')
    .text('screenwriting')
    .attr('startOffset', "17%")
}