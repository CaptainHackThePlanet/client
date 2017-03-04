$( document ).ready(function() {
    console.log( "ready!" );

    function myPlay(ray) {
      // console.log(ray);

      for(let i = 1; i < ray.length; i++) {
        if(ray[i] === 0) {
          ray[i] = 1;
        }
        let idStr = `#n${ray[i]}`;
        let note = $(idStr)[0];

        setTimeout(function(){

          if(i === ray.length ) {
            note.pause();
          } else {
            note.play();
          }

        }, i * 400);
      }

    }


    function drumPlay(ray) {
      // console.log(ray);

      for(let i = 1; i < ray.length; i++) {
        if(ray[i] === 0) {
          ray[i] = 1;
        }

        ray[i] = (ray[i] % 11) + 1;
        console.log(ray[i]);

        let idStr = `#d${ray[i]}`;
        let note = $(idStr)[0];

        setTimeout(function(){

          if(i === ray.length ) {
            note.pause();
          } else {
            note.play();
          }

        }, i * 400);
      }

    }



  let data =
  {
    "entries": [
      {
        "time": "2017-03-04T15:00:00",
        "cloudTopTemp": 210.81600952148438,
        "groundTemp": 279.302001953125,
        "evapRate": 174
      },
      {
        "time": "2017-03-04T18:00:00",
        "cloudTopTemp": 208.7840118408203,
        "groundTemp": 296.95599365234375,
        "evapRate": 495
      },
      {
        "time": "2017-03-04T21:00:00",
        "cloudTopTemp": 204.43202209472656,
        "groundTemp": 297.9020080566406,
        "evapRate": 694
      },
      {
        "time": "2017-03-05T00:00:00",
        "cloudTopTemp": 204.6190185546875,
        "groundTemp": 288.9519958496094,
        "evapRate": 155
      },
      {
        "time": "2017-03-05T03:00:00",
        "cloudTopTemp": 204.2010040283203,
        "groundTemp": 280.3689880371094,
        "evapRate": 150
      },
      {
        "time": "2017-03-05T06:00:00",
        "cloudTopTemp": 203.96900939941406,
        "groundTemp": 277.93798828125,
        "evapRate": 106
      },
      {
        "time": "2017-03-05T09:00:00",
        "cloudTopTemp": 203.47100830078125,
        "groundTemp": 276.9389953613281,
        "evapRate": 104
      },
      {
        "time": "2017-03-05T12:00:00",
        "cloudTopTemp": 203.53700256347656,
        "groundTemp": 275.86199951171875,
        "evapRate": 85
      },
      {
        "time": "2017-03-05T15:00:00",
        "cloudTopTemp": 204.59400939941406,
        "groundTemp": 280.5320129394531,
        "evapRate": 196
      },
      {
        "time": "2017-03-05T18:00:00",
        "cloudTopTemp": 205.5910186767578,
        "groundTemp": 293.1499938964844,
        "evapRate": 569
      },
      {
        "time": "2017-03-05T21:00:00",
        "cloudTopTemp": 211.87501525878906,
        "groundTemp": 295.39801025390625,
        "evapRate": 788
      },
      {
        "time": "2017-03-06T00:00:00",
        "cloudTopTemp": 211.98199462890625,
        "groundTemp": 288.572998046875,
        "evapRate": 297
      },
      {
        "time": "2017-03-06T03:00:00",
        "cloudTopTemp": 214.23800659179688,
        "groundTemp": 281.218994140625,
        "evapRate": 149
      },
      {
        "time": "2017-03-06T06:00:00",
        "cloudTopTemp": 214.71900939941406,
        "groundTemp": 278.26300048828125,
        "evapRate": 80
      },
      {
        "time": "2017-03-06T09:00:00",
        "cloudTopTemp": null,
        "groundTemp": 278.3590087890625,
        "evapRate": 156
      },
      {
        "time": "2017-03-06T12:00:00",
        "groundTemp": 277.50201416015625,
        "evapRate": 117
      },
      {
        "time": "2017-03-06T15:00:00",
        "cloudTopTemp": null,
        "groundTemp": 275.9100036621094,
        "evapRate": 377
      },
      {
        "time": "2017-03-06T18:00:00",
        "groundTemp": 278.8810119628906,
        "evapRate": 626
      },
      {
        "time": "2017-03-06T21:00:00",
        "cloudTopTemp": null,
        "groundTemp": 279.1059875488281,
        "evapRate": 574
      },
      {
        "time": "2017-03-07T00:00:00",
        "groundTemp": 275.45001220703125,
        "evapRate": 310
      },
      {
        "time": "2017-03-07T03:00:00",
        "cloudTopTemp": null,
        "groundTemp": 268.47100830078125,
        "evapRate": 2
      },
      {
        "time": "2017-03-07T06:00:00",
        "groundTemp": 268.64898681640625,
        "evapRate": 73
      },
      {
        "time": "2017-03-07T09:00:00",
        "cloudTopTemp": null,
        "groundTemp": 268.01800537109375,
        "evapRate": 120
      },
      {
        "time": "2017-03-07T12:00:00",
        "groundTemp": 268.2760009765625,
        "evapRate": 59
      },
      {
        "time": "2017-03-07T15:00:00",
        "cloudTopTemp": null,
        "groundTemp": 273.4620056152344,
        "evapRate": 213
      },
      {
        "time": "2017-03-07T18:00:00",
        "groundTemp": 287.489990234375,
        "evapRate": 473
      },
      {
        "time": "2017-03-07T21:00:00",
        "cloudTopTemp": null,
        "groundTemp": 288.32598876953125,
        "evapRate": 710
      },
      {
        "time": "2017-03-08T00:00:00",
        "cloudTopTemp": 209.3769989013672,
        "groundTemp": 282.4389953613281,
        "evapRate": 53
      },
      {
        "time": "2017-03-08T03:00:00",
        "cloudTopTemp": 210.8249969482422,
        "groundTemp": 273.00799560546875,
        "evapRate": 18
      },
      {
        "time": "2017-03-08T06:00:00",
        "cloudTopTemp": 212.33502197265625,
        "groundTemp": 272.364013671875,
        "evapRate": 40
      },
      {
        "time": "2017-03-08T09:00:00",
        "cloudTopTemp": null,
        "groundTemp": 271.302001953125,
        "evapRate": 29
      },
      {
        "time": "2017-03-08T12:00:00",
        "groundTemp": 271.0199890136719,
        "evapRate": 28
      },
      {
        "time": "2017-03-08T15:00:00",
        "cloudTopTemp": null,
        "groundTemp": 278.7070007324219,
        "evapRate": 170
      },
      {
        "time": "2017-03-08T18:00:00",
        "cloudTopTemp": 208.81201171875,
        "groundTemp": 294.260009765625,
        "evapRate": 464
      },
      {
        "time": "2017-03-08T21:00:00",
        "cloudTopTemp": 208.3620147705078,
        "groundTemp": 296.2799987792969,
        "evapRate": 603
      },
      {
        "time": "2017-03-09T00:00:00",
        "cloudTopTemp": 219.63299560546875,
        "groundTemp": 287.54901123046875,
        "evapRate": 164
      },
      {
        "time": "2017-03-09T03:00:00",
        "cloudTopTemp": 206.91700744628906,
        "groundTemp": 282.114013671875,
        "evapRate": 82
      },
      {
        "time": "2017-03-09T06:00:00",
        "cloudTopTemp": 207.81800842285156,
        "groundTemp": 280.5780029296875,
        "evapRate": 52
      },
      {
        "time": "2017-03-09T09:00:00",
        "cloudTopTemp": 213.9709930419922,
        "groundTemp": 276.5169982910156,
        "evapRate": 19
      },
      {
        "time": "2017-03-09T12:00:00",
        "cloudTopTemp": 213.28501892089844,
        "groundTemp": 275.04400634765625,
        "evapRate": 22
      },
      {
        "time": "2017-03-09T15:00:00",
        "cloudTopTemp": 209.61302185058594,
        "groundTemp": 281.94500732421875,
        "evapRate": 207
      },
      {
        "time": "2017-03-09T18:00:00",
        "cloudTopTemp": 209.61502075195312,
        "groundTemp": 294.74700927734375,
        "evapRate": 764
      },
      {
        "time": "2017-03-09T21:00:00",
        "cloudTopTemp": null,
        "groundTemp": 301.80999755859375,
        "evapRate": 495
      },
      {
        "time": "2017-03-10T00:00:00",
        "groundTemp": 291.7510070800781,
        "evapRate": 217
      },
      {
        "time": "2017-03-10T03:00:00",
        "cloudTopTemp": null,
        "groundTemp": 281.12701416015625,
        "evapRate": 77
      },
      {
        "time": "2017-03-10T06:00:00",
        "groundTemp": 278.7909851074219,
        "evapRate": 48
      },
      {
        "time": "2017-03-10T09:00:00",
        "cloudTopTemp": null,
        "groundTemp": 277.2080078125,
        "evapRate": 49
      },
      {
        "time": "2017-03-10T12:00:00",
        "groundTemp": 276.1929931640625,
        "evapRate": 57
      },
      {
        "time": "2017-03-10T15:00:00",
        "cloudTopTemp": null,
        "groundTemp": 283.09100341796875,
        "evapRate": 242
      },
      {
        "time": "2017-03-10T18:00:00",
        "cloudTopTemp": 206.92701721191406,
        "groundTemp": 300.56298828125,
        "evapRate": 593
      },
      {
        "time": "2017-03-10T21:00:00",
        "cloudTopTemp": 206.96299743652344,
        "groundTemp": 296.9530029296875,
        "evapRate": 888
      },
      {
        "time": "2017-03-11T00:00:00",
        "cloudTopTemp": 208.3870086669922,
        "groundTemp": 289.8280029296875,
        "evapRate": 239
      },
      {
        "time": "2017-03-11T03:00:00",
        "cloudTopTemp": 216.88600158691406,
        "groundTemp": 279.35101318359375,
        "evapRate": 16
      },
      {
        "time": "2017-03-11T06:00:00",
        "cloudTopTemp": 228.62600708007812,
        "groundTemp": 281.3280029296875,
        "evapRate": 108
      },
      {
        "time": "2017-03-11T09:00:00",
        "cloudTopTemp": 231.0030059814453,
        "groundTemp": 275.19000244140625,
        "evapRate": 11
      },
      {
        "time": "2017-03-11T12:00:00",
        "cloudTopTemp": 231.0019989013672,
        "groundTemp": 274.9599914550781,
        "evapRate": 59
      },
      {
        "time": "2017-03-11T15:00:00",
        "cloudTopTemp": null,
        "groundTemp": 282.0509948730469,
        "evapRate": 315
      },
      {
        "time": "2017-03-11T18:00:00",
        "cloudTopTemp": 225.76901245117188,
        "groundTemp": 290.27099609375,
        "evapRate": 846
      },
      {
        "time": "2017-03-11T21:00:00",
        "cloudTopTemp": 216.46202087402344,
        "groundTemp": 288.9840087890625,
        "evapRate": 718
      },
      {
        "time": "2017-03-12T00:00:00",
        "cloudTopTemp": 221.4080047607422,
        "groundTemp": 282.4649963378906,
        "evapRate": 276
      },
      {
        "time": "2017-03-12T03:00:00",
        "cloudTopTemp": 233.1380157470703,
        "groundTemp": 275.0840148925781,
        "evapRate": 160
      },
      {
        "time": "2017-03-12T06:00:00",
        "cloudTopTemp": 229.87399291992188,
        "groundTemp": 270.54998779296875,
        "evapRate": 124
      },
      {
        "time": "2017-03-12T09:00:00",
        "cloudTopTemp": 229.2130126953125,
        "groundTemp": 268.4490051269531,
        "evapRate": 81
      },
      {
        "time": "2017-03-12T12:00:00",
        "cloudTopTemp": 229.2150115966797,
        "groundTemp": 267.3340148925781,
        "evapRate": 40
      },
      {
        "time": "2017-03-12T15:00:00",
        "cloudTopTemp": null,
        "groundTemp": 267.989013671875,
        "evapRate": 75
      },
      {
        "time": "2017-03-12T18:00:00",
        "groundTemp": 270.8240051269531,
        "evapRate": 177
      },
      {
        "time": "2017-03-12T21:00:00",
        "cloudTopTemp": 223.9090118408203,
        "groundTemp": 271.2250061035156,
        "evapRate": 197
      },
      {
        "time": "2017-03-13T00:00:00",
        "cloudTopTemp": 222.70701599121094,
        "groundTemp": 268.1510009765625,
        "evapRate": 75
      },
      {
        "time": "2017-03-13T03:00:00",
        "cloudTopTemp": 221.26499938964844,
        "groundTemp": 265.4930114746094,
        "evapRate": 3
      },
      {
        "time": "2017-03-13T06:00:00",
        "cloudTopTemp": 221.32301330566406,
        "groundTemp": 262.49700927734375,
        "evapRate": 0
      },
      {
        "time": "2017-03-13T09:00:00",
        "cloudTopTemp": null,
        "groundTemp": 263.0580139160156,
        "evapRate": 6
      },
      {
        "time": "2017-03-13T12:00:00",
        "cloudTopTemp": 224.37001037597656,
        "groundTemp": 261.71502685546875,
        "evapRate": 15
      },
      {
        "time": "2017-03-13T15:00:00",
        "cloudTopTemp": 223.98101806640625,
        "groundTemp": 264.83599853515625,
        "evapRate": 73
      },
      {
        "time": "2017-03-13T18:00:00",
        "cloudTopTemp": 223.98101806640625,
        "groundTemp": 275.3909912109375,
        "evapRate": 229
      },
      {
        "time": "2017-03-13T21:00:00",
        "cloudTopTemp": null,
        "groundTemp": 275.635986328125,
        "evapRate": 246
      },
      {
        "time": "2017-03-14T00:00:00",
        "groundTemp": 270.6029968261719,
        "evapRate": 66
      },
      {
        "time": "2017-03-14T03:00:00",
        "cloudTopTemp": null,
        "groundTemp": 264.1839904785156,
        "evapRate": 7
      },
      {
        "time": "2017-03-14T06:00:00",
        "groundTemp": 263.37799072265625,
        "evapRate": 22
      },
      {
        "time": "2017-03-14T09:00:00",
        "cloudTopTemp": null,
        "groundTemp": 261.7640075683594,
        "evapRate": 19
      },
      {
        "time": "2017-03-14T12:00:00",
        "groundTemp": 260.5560302734375,
        "evapRate": 21
      },
      {
        "time": "2017-03-15T00:00:00",
        "groundTemp": 273.4700012207031,
        "evapRate": 21
      },
      {
        "time": "2017-03-15T12:00:00",
        "groundTemp": 264.41400146484375,
        "evapRate": 19
      },
      {
        "time": "2017-03-16T00:00:00",
        "groundTemp": 279.3489990234375,
        "evapRate": 61
      },
      {
        "time": "2017-03-16T12:00:00",
        "groundTemp": 268.5039978027344,
        "evapRate": 18
      },
      {
        "time": "2017-03-17T00:00:00",
        "groundTemp": 285.531005859375,
        "evapRate": 76
      },
      {
        "time": "2017-03-17T12:00:00",
        "groundTemp": 272.55499267578125,
        "evapRate": 35
      },
      {
        "time": "2017-03-18T00:00:00",
        "groundTemp": 290.69000244140625,
        "evapRate": 105
      },
      {
        "time": "2017-03-18T12:00:00",
        "groundTemp": 276.1050109863281,
        "evapRate": 14
      },
      {
        "time": "2017-03-19T00:00:00",
        "groundTemp": 288.9880065917969,
        "evapRate": 209
      },
      {
        "time": "2017-03-19T12:00:00",
        "groundTemp": 276.21600341796875,
        "evapRate": 2
      },
      {
        "time": "2017-03-20T00:00:00",
        "groundTemp": 286.7749938964844,
        "evapRate": 239
      }
    ],
    cloudTempMax: 233.1380157470703,
    cloudTempMin: 203.47100830078125,
    groundTempMax: 301.80999755859375,
    groundTempMin: 260.5560302734375,
    evapRateMax: 888,
    evapRateMin: 2
  };

  let evapRay = [];
  let cloudTempRay = [];
  let groundTempRay = [];

  for(let i = 0; i < data.entries.length; i++) {
    let evapNum = parseInt((((data.entries[i].evapRate)-data.evapRateMin)/(data.evapRateMax-data.evapRateMin)) * 88);

    let cloudTempNum = 1;
    if(data.entries[i].cloudTopTemp) {
      cloudTempNum = parseInt((((data.entries[i].cloudTopTemp)-data.cloudTempMin)/(data.cloudTempMax-data.cloudTempMin)) * 88);
    }

    let groundTempNum = 1;
    if(data.entries[i].groundTemp) {
      groundTempNum = parseInt((((data.entries[i].groundTemp)-data.groundTempMin)/(data.groundTempMax-data.groundTempMin)) * 88);
    }

    evapRay.push(evapNum);
    cloudTempRay.push(cloudTempNum);
    groundTempRay.push(groundTempNum);
  }


  myPlay(groundTempRay);
  drumPlay(groundTempRay);

});
