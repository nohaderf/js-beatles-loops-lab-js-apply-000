// add solution here
var musicians= ['John Lennon', 'Paul McCartney','George Harrison', 'Ringo Starr'];
var instruments= ['Guitar', 'Bass Guitar', 'drums', 'bass'];

function theBeatlesPlay(musicians, instruments){
  var array= [ ];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

