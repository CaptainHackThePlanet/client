let data = [];

let evapRay = [];
let cloudTempRay = [];
let groundTempRay = [];
let soundEvap = [];
let groundTempSound = [];
let cloudTempSound = [];

  $("#play-button").hide();
  $("#metricForm").hide();
  $("#please-wait-h2").show();

$(document).ready(function() {

    $.get('http://localhost:3000/data')
        .then((data) => {
            for (let i = 0; i < data.entries.length; i++) {
                let evapNum = parseInt((((data.entries[i].evapRate) - data.evapRateMin) / (data.evapRateMax - data.evapRateMin)) * 88);
                let evapObj = {
                    letter: i,
                    frequency: data.entries[i].evapRate
                };

                let cloudTempNum = 1;
                let cloudObj = {
                    letter: i,
                    frequency: data.cloudTempMin
                };
                if (data.entries[i].cloudTopTemp) {
                    cloudTempNum = parseInt((((data.entries[i].cloudTopTemp) - data.cloudTempMin) / (data.cloudTempMax - data.cloudTempMin)) * 88);
                    cloudObj = {
                        letter: i,
                        frequency: data.entries[i].cloudTopTemp
                    };
                }

                let groundTempNum = 1;
                let groundTempSoundObj = {
                    letter: i,
                    frequency: 200
                };
                if (data.entries[i].groundTemp) {
                    groundTempNum = parseInt((((data.entries[i].groundTemp) - data.groundTempMin) / (data.groundTempMax - data.groundTempMin)) * 88);
                    groundTempSoundObj = {
                        letter: i,
                        frequency: conversion(data.entries[i].groundTemp)
                    };
                }

                evapRay.push(evapNum);
                cloudTempRay.push(cloudTempNum);
                groundTempRay.push(groundTempNum);
                soundEvap.push(evapObj);
                groundTempSound.push(groundTempSoundObj);
                cloudTempSound.push(cloudObj);

            }
            $("#metricForm").show();
            $("#play-button").show();
            generateClickHandlers();
            $("#please-wait-h2").remove();

            let start = data.entries[0].time;
            let end = data.entries[data.entries.length -1].time;
            start = moment(start).format('MM/DD/YYYY');
            end = moment(end).format('MM/DD/YYYY');
            const startHTML = $(`<h3>Start Date: ${start}    End Date: ${end}</h3>`);
            const fillerHTML = $(`<h5 id="fillerText" >Information is polled every 3 hours from start to finish.<h5>`)
            const $anchor  = $('#dataContainer');
            $anchor.append(startHTML);
            $anchor.append(fillerHTML);
        });

});


function doTheThings(dataArray, yLabel) {
    // Mike Bostock "margin conventions"
    var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    // D3 scales = just math
    // x is a function that transforms from "domain" (data) into "range" (usual pixels)
    // domain gets set after the data loads
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);
    var y = d3.scale.linear()
        .range([height, 0]);
    // D3 Axis - renders a d3 scale in SVG
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(20);
    // create an SVG element (appended to body)
    // set size
    // add a "g" element (think "group")
    // annoying d3 gotcha - the 'svg' variable here is a 'g' element
    // the final line sets the transform on <g>, not on <svg>
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
    svg.append("g")
        .attr("class", "y axis")
        .append("text") // just for the title (ticks are automatic)
        .attr("transform", "rotate(-90)") // rotate the text!
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(yLabel);
    // d3.tsv is a wrapper around XMLHTTPRequest, returns array of arrays (?) for a TSV file
    // type function transforms strings to numbers, dates, etc.


    var test = [{
            letter: '12-01-01',
            frequency: 233.1380157470703
        }, {
            letter: '12-01-02',
            frequency: 203.47100830078125
        }, {
            letter: '12-01-03',
            frequency: 301.80999755859375
        }, {
            letter: '12-01-04',
            frequency: 309.80999755859375
        }]
        // d3.tsv(test, type, function(error, data) {
    replay(dataArray);
    // });
    function type(d) {
        // + coerces to a Number from a String (or anything)
        d.frequency = +d.frequency;
        return d;
    }

    function replay(data) {
        var slices = [];
        for (var i = 0; i < data.length; i++) {
            slices.push(data.slice(0, i + 1));
        }
        slices.forEach(function(slice, index) {
            // console.log(slice);
            setTimeout(function() {
                draw(slice);
            }, index * timeoutTime);
        });
    }

    function draw(data) {
        // measure the domain (for x, unique letters) (for y [0,maxFrequency])
        // now the scales are finished and usable
        x.domain(data.map(function(d) {
            return d.letter;
        }));
        y.domain([0, d3.max(data, function(d) {
            return d.frequency;
        })]);
        // another g element, this time to move the origin to the bottom of the svg element
        // someSelection.call(thing) is roughly equivalent to thing(someSelection[i])
        //   for everything in the selection\
        // the end result is g populated with text and lines!
        svg.select('.x.axis').transition().duration(300).call(xAxis);
        // same for yAxis but with more transform and a title
        svg.select(".y.axis").transition().duration(300).call(yAxis)
            // THIS IS THE ACTUAL WORK!
        var bars = svg.selectAll(".bar").data(data, function(d) {
                return d.letter;
            }) // (data) is an array/iterable thing, second argument is an ID generator function
        bars.exit()
            .transition()
            .duration(300)
            .attr("y", y(0))
            .attr("height", height - y(0))
            .style('fill-opacity', 1e-6)
            .remove();
        // data that needs DOM = enter() (a set/selection, not an event!)
        bars.enter().append("rect")
            .attr("class", "bar")
            .attr("y", y(0))
            .attr("height", height - y(0));
        // the "UPDATE" set:
        bars.transition().duration(300).attr("x", function(d) {
                return x(d.letter);
            }) // (d) is one item from the data array, x is the scale object from above
            .attr("width", x.rangeBand()) // constant, so no callback function(d) here
            .attr("y", function(d) {
                return y(d.frequency);
            })
            .attr("height", function(d) {
                return height - y(d.frequency);
            }); // flip the height, because y's domain is bottom up, but SVG renders top down
    }
}

function generateClickHandlers() {
    const $playButton = $('#play-button');
    let yLabel;

    $playButton.click(() => {
        const value = $('input[name=metric]:checked', '#metricForm').val();
        let thisRay = null;
        let displayRay = null;
        if (value === 'cloud') {
            yLabel = "Cloud Temperature";
            thisRay = cloudTempRay;
            displayRay = cloudTempSound;
        } else if (value === 'ground') {
          yLabel = "Ground Temperature";
            thisRay = groundTempRay;
            displayRay = groundTempSound;
        } else {
          yLabel = "Evap Rate";
            thisRay = evapRay;
            displayRay = soundEvap;
        }
        doTheThings(displayRay, yLabel);
        myPlay(thisRay);
        // drumPlay(groundTempRay);
    })
}

function myPlay(ray) {
    // console.log(ray);

    for (let i = 1; i < ray.length; i++) {
        if (ray[i] === 0) {
            ray[i] = 1;
        }
        let idStr = `#n${ray[i]}`;
        let note = $(idStr)[0];

        setTimeout(function() {

            if (i === ray.length) {
                note.pause();
            } else {
                note.play();
            }

        }, i * timeoutTime);
    }

}


function drumPlay(ray) {
    // console.log(ray);

    for (let i = 1; i < ray.length; i++) {
        if (ray[i] === 0) {
            ray[i] = 1;
        }

        ray[i] = (ray[i] % 11) + 1;
        // console.log(ray[i]);

        let idStr = `#d${ray[i]}`;
        let note = $(idStr)[0];

        setTimeout(function() {

            if (i === ray.length) {
                note.pause();
            } else {
                note.play();
            }

        }, i * timeoutTime);
    }

}

function conversion(k){
  return ((9/5)*(k - 273) + 32);
}
