window.onload = function() {
  var chart1 = new CanvasJS.Chart('chartContainer1', {
    animationEnabled: true,
    theme: 'light2', // "light1", "light2", "dark1", "dark2"
    title: {
      text: 'Web Developer'
    },
    axisY: {
      title: '',
      suffix: '%',
      includeZero: false
    },
    axisX: {
      title: 'My Skills'
    },
    data: [
      {
        type: 'column',
        yValueFormatString: '#,##0.0#"%"',
        dataPoints: [
          { label: 'Html', y: 95 },
          { label: 'Bootstrap', y: 80 },
          { label: 'MaterialCSS', y: 80 },
          { label: 'CSS', y: 95 },
          { label: 'javaScript', y: 90 },
          { label: 'jQuery', y: 90 },
          { label: 'React', y: 90 },
          { label: 'Node.js', y: 80 },
          { label: 'MongoDB', y: 80 },
          { label: 'Mysql', y: 90 }
        ]
      }
    ]
  });
  chart1.render();

  var chart2 = new CanvasJS.Chart('chartContainer2', {
    animationEnabled: true,
    theme: 'light2', // "light1", "light2", "dark1", "dark2"
    title: {
      text: 'App Developer'
    },
    axisY: {
      title: '',
      suffix: '%',
      includeZero: false
    },
    axisX: {
      title: 'My Skills'
    },
    data: [
      {
        type: 'column',
        yValueFormatString: '#,##0.0#"%"',
        dataPoints: [
          { label: 'Html', y: 95 },
          { label: 'Bootstrap', y: 80 },
          { label: 'MaterialCSS', y: 80 },
          { label: 'CSS', y: 90 },
          { label: 'JavaScript', y: 80 },
          { label: 'jQuery', y: 90 },
          { label: 'React', y: 70 },
          { label: 'Node.js', y: 70 },
          { label: 'MongoDB', y: 70 },
          { label: 'Mysql', y: 70 }
        ]
      }
    ]
  });
  chart2.render();
};
