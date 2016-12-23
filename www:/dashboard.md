---
layout  : default
title   : "Dogpagnie"
---


<div class="grid__development">
<div class="grid__container">
   <div class="grid__row">
	
			<div class="main">
				<div>
					<h3 class="onderTitel">Aantal Dogstops</h3>
					<div class="chart"><div class="card">
                        <div class="card-header bg-inverse">Speed Example</div>
                        <div class="card-body">
                            <div id="chart-e1"></div>
                        </div>
                    </div></div>
				</div>
				<div>
				<h3 class="onderTitel">Aantal Studentenvoorzieningen</h3>

					<div class="chart"></div>
				</div>
				<div><h3 class="onderTitel">Aantal keren gecontacteerd</h3>
					<div class="chart"></div>
				</div>
		</div>
		</div></div></div>
<script src="js/testmain.js"></script>
<script src="js/chartist.min.js"></script>
<script src="../dist/chartist-plugin-fill-donut.js"></script>
<script>
var chart = new Chartist.Pie('#chart-e1', {
        series: [160, 60 ],
        labels: ['', '']
    }, {
        donut: true,
        donutWidth: 20,
        startAngle: 210,
        total: 260,
        showLabel: false,
        plugins: [
            Chartist.plugins.fillDonut({
                items: [{
                    content: '<i class="fa fa-tachometer text-muted"></i>',
                    position: 'bottom',
                    offsetY : 10,
                    offsetX: -2
                }, {
                    content: '<h3>160<span class="small">mph</span></h3>'
                }]
            })
        ],
    });

    chart.on('draw', function(data) {
        if(data.type === 'slice' && data.index == 0) {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1200,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                                fill: 'freeze'
                            }
                        };

                        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
                        data.element.attr({
                            'stroke-dashoffset': -pathLength + 'px'
                        });

                        // We can't use guided mode as the animations need to rely on setting begin manually
                        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
                        data.element.animate(animationDefinition, true);
                    }
                });
        </script>