function addTeams(team, index){
  let labelValue = document.createElement('label');
  labelValue.innerHTML = team;
  let inputValue = document.createElement('input');
  inputValue.type = "radio";
  inputValue.name = 'group';
  let linebreak = document.createElement("br");
  document.querySelector(".scroll").appendChild(inputValue);
  document.querySelector(".scroll").appendChild(labelValue);
  document.querySelector(".scroll").appendChild(linebreak);

}

let teams = [
'Alabama Crimson Tide',
'Arizona Wildcats',
'Arizona State Sun Devils',
'Arkansas Razorbacks',
'Auburn Tigers',
'Baylor Bears',
'Boston College Eagles',
'California Golden Bears',
'Clemson Tigers',
'Colorado Buffaloes',
'Duke Blue Devils',
'Florida Gators',
'Florida State Seminoles',
'Georgia Bulldogs',
'Georgia Tech Yellow Jackets',
'Illinois Fighting Illini',
'Indiana Hoosiers',
'Iowa Hawkeyes',
'Iowa State Cyclones',
'Kansas Jayhawks',
'Kansas State Wildcats',
'Kentucky Wildcats',
'Louisville Cardinals',
'LSU Tigers',
'Maryland Terrapins',
'Miami Hurricanes',
'Michigan Wolverines',
'Michigan State Spartans',
'Minnesota Golden Gophers',
'Mississippi State Bulldogs',
'Missouri Tigers',
'NC State Wolfpack',
'Nebraska Cornhuskers',
'North Carolina Tar Heels',
'Northwestern Wildcats',
'Notre Dame Fighting Irish',
'Ohio State Buckeyes',
'Oklahoma Sooners',
'Oklahoma State Cowboys',
'Ole Miss Rebels',
'Oregon Ducks',
'Oregon State Beavers',
'Penn State Nittany Lions',
'Pittsburgh Panthers',
'Purdue Boilermakers',
'Rutgers Scarlet Knights',
'South Carolina Gamecocks',
'Stanford Cardinal',
'Syracuse Orange',
'TCU Horned Frogs',
'Tennessee Volunteers',
'Texas Longhorns',
'Texas A&M Aggies',
'Texas State Bobcats',
'Texas Tech Red Raiders',
'UCLA Bruins',
'USC Trojans',
'Utah Utes',
'Vanderbilt Commodores',
'Virginia Cavaliers',
'Virginia Tech Hokies',
'Wake Forest Demon Deacons',
'Washington Huskies',
'West Virginia Mountaineers',
'Wisconsin Badgers'
]

teams.forEach(addTeams)