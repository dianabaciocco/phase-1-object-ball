function gameObject() {
		return {
				home: {
						teamName: 'Brooklyn Nets',
						colors: ['Black', 'White'],
						players:{
								'Alan Anderson': {
										number: 0,
										shoe: 16,
										points: 22,
										rebounds: 12,
										assists: 12,
										steals: 3,
										blocks: 1,
										slamDunks: 1,
								},
								'Reggie Evans': {
										number: 30,
										shoe: 14,
										points: 12,
										rebounds: 12,
										assists: 12,
										steals: 12,
										blocks: 12,
										slamDunks: 7,
								},
								'Brook Lopez': {
										number: 11,
										shoe: 17,
										points: 17,
										rebounds: 19,
										assists: 10,
										steals: 3,
										blocks: 1,
										slamDunks: 15,
								},
								'Mason Plumlee': {
										number: 1,
										shoe: 19,
										points: 26,
										rebounds: 12,
										assists: 6,
										steals: 3,
										blocks: 8,
										slamDunks: 5,
								},
								'Jason Terry': {
										number: 31,
										shoe: 15,
										points: 19,
										rebounds: 2,
										assists: 2,
										steals: 4,
										blocks: 11,
										slamDunks: 1,
								}

						} },
				away: {
						teamName: 'Charlotte Hornets',
						colors: ['Turquoise', 'Purple'],
						players:{
								'Jeff Adrien': {
										number: 4,
										shoe: 18,
										points: 10,
										rebounds: 1,
										assists: 1,
										steals: 2,
										blocks: 7,
										slamDunks: 2,
								},
								'Bismak Biyombo': {
										number: 0,
										shoe: 16,
										points: 12,
										rebounds: 4,
										assists: 7,
										steals: 7,
										blocks: 15,
										slamDunks: 10,
								},
								'DeSagna Diop': {
										number: 2,
										shoe: 14,
										points: 24,
										rebounds: 12,
										assists: 12,
										steals: 4,
										blocks: 5,
										slamDunks: 5,
								},
								'Ben Gordon': {
										number: 8,
										shoe: 15,
										points: 33,
										rebounds: 3,
										assists: 2,
										steals: 1,
										blocks: 1,
										slamDunks: 0,
								},
								'Brendan Haywood': {
										number: 33,
										shoe: 15,
										points: 6,
										rebounds: 12,
										assists: 12,
										steals: 22,
										blocks: 5,
										slamDunks: 12,
								},
						},
				}
		}
}
//console.log(gameObject())

// function homeTeamName() {
//   let object = gameObject()
//   return object['home']['teamName']
// }

//console.log(homeTeamName())

// logs "Brooklyn Nets"

// debug using console log --------------------------------------------
// function numPointsScored (playerInput) {
// 	const game = gameObject()
//   console.log('game', game)
// 	for (const gameKey in game) { // iterate through game keys (home, away)
// 		const teamObj = game[gameKey]
//     const playerObj = teamObj.players
//     console.log('team object', teamObj)
//     console.log('player object', playerObj)
// 		for (const playerKey in playerObj) { // iterate through players
//       console.log('player key', playerKey)
//       console.log('player input', playerInput)
// 			if (playerKey === playerInput) { // check to see if player matches function
//         console.log('if true', playerKey === playerInput)
// 			  return playerObj[playerKey].points // return the player's points
// 			}
// 		}

// 	}
// }

// other solution---------------------------
// function players() {
//   const game = gameObject()
//   const homePlayers = game.home.players
//   const awayPlayers = game.away.players

//   //const players = {...homePlayers, ...awayPlayers} //other way to add pairing to both things
//   return Object.assign({}, homePlayers, awayPlayers)
// }

// function numPointsScored (playerInput) {
// 		for (const playerName in players()) { // iterate through players
// 			if (playerName === playerInput) { // check to see if player matches function
// 			  return players()[playerName].points // return the player's points
// 			}
// 		}
// 	}

/* other solution short arrow function and find------------------------
function numPointsScored(playerInput){
  const playerArrays = Object.entries(players())
  const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
  return player[1].points
}
*/
				// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
				function numPointsScored(playerInput) {
				  return players()[playerInput].points
				}

				// function, shoeSize, argument of a player's name, returns the shoe size for that player. Find the shoe size of the correct player. player's name matches the name that has been passed into the function as an argument

				// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
				function colors(playerInput) {
					return players()[playerInput].colors
				}

				// Build a function, teamNames, that operates on the game object to return an array of the team names.


				function homeTeam() {
				  return gameObject().home
				}

				function awayTeam() {
				  return gameObject().away
				}

				// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
				function playerNumber(playerInput) {
					return players()[playerInput].number
				}

				// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function
				function playerStats() {
				  return players()[playerInput][3, 4, 5, 6, 7]
				}

				// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
				// First, find the player with the largest shoe size
				// Then, return that player's number of rebounds
				function bigShoeRebounds() {
					return players()[playerInput].rebounds
				}

				function players() {
				  return Object.assign({}, homeTeam().players, awayTeam().players)
				}

//console.log('desagna number of points', numPointsScored('DeSagna Diop'))