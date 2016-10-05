$('window').ready(function() {

    var dataset = ['#anchor1', '#anchor2', '#anchor3', '#anchor4', '#anchor5'];

    var containerSlide = d3.select('#containerSlide')
        .style('z-index', 999999)
        .append('svg')
        .style('height', function(d){
          return (dataset.length * 2 * 12);
        })
        .style('width', '25px')
        .attr('id', 'iconoSeccion')
        .selectAll('a')
        .data(dataset)
        .enter()
        .append('a')
        .attr('href', function(d) {
          return d;
        })
        .append('circle')
        .attr('cx', 8)
        .attr('cy', function(d, i) {
          return 12 * (i + 1) + (12 * i);
        })
        .attr('r', 6)
        .attr('stroke', '#3C3C3C')
        .attr('fill', function(d, i) {
            if (i == 0) {
                return '#3C3C3C';
            } else {
                return 'none';
            }
        })
        .on('click', function(d, i){

          var circles = $('circle');
          var element = this;

          circles.each(function(k, v){
            if(element == this){
              this.setAttribute('fill', '#3C3C3C');
            } else {
              this.setAttribute('fill', 'none');
            }
          });
        });

    window.onhashchange = function () {
      var circles = $('circle');
      var hashUrl = window.location.hash;

      circles.each(function(k, v){
        if(hashUrl == this.parentNode.getAttribute('href')){
          this.setAttribute('fill', '#3C3C3C');
        } else {
          this.setAttribute('fill', 'none');
        }
      });
    }
})
