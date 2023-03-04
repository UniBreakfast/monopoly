export const chance = [
  {
    "text": "Advance to Go. Collect $200.",
    "action": "move",
    "destination": 0,
    "amount": 200
  },
  {
    "text": "Advance to Illinois Ave. If you pass Go, collect $200.",
    "action": "move",
    "destination": 24,
    "amount": 200
  },
  {
    "text": "Advance to St. Charles Place. If you pass Go, collect $200.",
    "action": "move",
    "destination": 11,
    "amount": 200
  },
  {
    "text": "Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total of ten times the amount thrown.",
    "action": "moveToNearestUtility",
    "amount_multiplier": 10
  },
  {
    "text": "Advance token to the nearest Railroad and pay owner twice the rental to which they are otherwise entitled. If Railroad is unowned, you may buy it from the Bank.",
    "action": "move_to_nearest_railroad",
    "rent_multiplier": 2
  },
  {
    "text": "Bank pays you dividend of $50.",
    "action": "credit",
    "amount": 50
  },
  {
    "text": "Get out of jail free. This card may be kept until needed, or traded/sold.",
    "action": "getOutOfJailFree",
    "type": "jail"
  },
  {
    "text": "Go back 3 spaces.",
    "action": "move",
    "destination": -3
  },
  {
    "text": "Go directly to Jail. Do not pass Go, do not collect $200.",
    "action": "move",
    "destination": 10,
    "type": "jail"
  },
  {
    "text": "Make general repairs on all your property. For each house pay $25, for each hotel pay $100.",
    "action": "debitPerBuilding",
    "house_cost": 25,
    "hotel_cost": 100
  },
  {
    "text": "Pay poor tax of $15.",
    "action": "debit",
    "amount": 15
  },
  {
    "text": "Take a trip to Reading Railroad. If you pass Go, collect $200.",
    "action": "move",
    "destination": 5,
    "amount": 200
  },
  {
    "text": "Take a walk on the Boardwalk. Advance token to Boardwalk.",
    "action": "move",
    "destination": 39
  },
  {
    "text": "You have been elected Chairman of the Board. Pay each player $50.",
    "action": "debitFromPlayers",
    "amount": 50
  },
  {
    "text": "Your building loan matures. Collect $150.",
    "action": "credit",
    "amount": 150
  },
  {
    "text": "You have won a crossword competition. Collect $100.",
    "action": "credit",
    "amount": 100
  },
  {
    "text": "Advance to Boardwalk.",
    "action": "move",
    "destination": 39
  },
  {
    "text": "Advance to nearest Railroad and pay owner twice the rental to which they are otherwise entitled. If Railroad is unowned, you may buy it from the Bank.",
    "action": "move_to_nearest_railroad",
    "rent_multiplier": 2
  },
  {
    "text": "Advance to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total of ten times the amount thrown.",
    "action": "moveToNearestUtility",
    "amount_multiplier": 10
  },
  {
    "text": "Advance token to Reading Railroad. If you pass Go, collect $200.",
    "action": "move",
    "destination": 5,
    "amount": 200
  },
  {
    "text": "Advance token to the nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total of ten times the amount thrown.",
    "action": "moveToNearestUtility",
    "amount_multiplier": 10
  },
  {
    "text": "Bank pays you dividend of $50.",
    "action": "credit",
    "amount": 50
  },
  {
    "text": "Get out of Jail Free. This card may be kept until needed or sold.",
    "action": "getOutOfJailFree",
    "type": "jail"
  },
  {
    "text": "Go back 3 spaces.",
    "action": "move",
    "destination": -3
  },
  {
    "text": "Go directly to Jail. Do not pass Go, do not collect $200.",
    "action": "move",
    "destination": 10,
    "type": "jail"
  },
  {
    "text": "Go to Jail. Go directly to Jail. Do not pass Go, do not collect $200.",
    "action": "move",
    "destination": 10,
    "type": "jail"
  }
]