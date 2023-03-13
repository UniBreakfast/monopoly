export const communityChest = [
  {
    "text": "Advance to Go (Collect $200).",
    "action": "move",
    "destination": 0,
    "amount": 200
  },
  {
    "text": "Bank error in your favor. Collect $200.",
    "action": "credit",
    "amount": 200
  },
  {
    "text": "Doctor's fees. Pay $50.",
    "action": "debit",
    "amount": 50
  },
  {
    "text": "From sale of stock you get $50.",
    "action": "credit",
    "amount": 50
  },
  {
    "text": "Get out of jail free. This card may be kept until needed, or traded/sold.",
    "action": "getOutOfJailFree",
    "type": "jail"
  },
  {
    "text": "Go to jail. Go directly to jail. Do not pass Go, do not collect $200.",
    "action": "move",
    "destination": 10,
    "type": "jail"
  },
  {
    "text": "Grand Opera Night. Collect $50 from every player for opening night seats.",
    "action": "collectFromPlayers",
    "amount": 50
  },
  {
    "text": "Holiday Fund matures. Receive $100.",
    "action": "credit",
    "amount": 100
  },
  {
    "text": "Income tax refund. Collect $20.",
    "action": "credit",
    "amount": 20
  },
  {
    "text": "It's your birthday. Collect $10 from every player.",
    "action": "collectFromPlayers",
    "amount": 10
  },
  {
    "text": "Life insurance matures Collect $100.",
    "action": "credit",
    "amount": 100
  },
  {
    "text": "Hospital Fees. Pay $50.",
    "action": "debit",
    "amount": 50
  },
  {
    "text": "School fees. Pay $50.",
    "action": "debit",
    "amount": 50
  },
  {
    "text": "Receive $25 consultancy fee.",
    "action": "credit",
    "amount": 25
  },
  {
    "text": "You are assessed for street repairs: Pay $40 per house and $115 per hotel you own.",
    "action": "debitPerBuilding",
    "house_cost": 40,
    "hotel_cost": 115
  },
  {
    "text": "You have won second prize in a beauty contest. Collect $10.",
    "action": "credit",
    "amount": 10
  },
  {
    "text": "You inherit $100.",
    "action": "credit",
    "amount": 100
  },
  {
    "text": "You have been elected Chairman of the Board. Pay each player $50.",
    "action": "debitFromPlayers",
    "amount": 50
  },
  {
    "text": "Advance to Illinois Ave. If you pass Go, collect $200.",
    "action": "move",
    "destination": 24,
    "amount": 200
  },
  {
    "text": "Your building loan matures. Collect $150.",
    "action": "credit",
    "amount": 150
  },
  {
    "text": "Go directly to Jail. Do not pass Go, do not collect $200.",
    "action": "move",
    "destination": 10,
    "type": "jail"
  },
  {
    "text": "Pay poor tax of $15.",
    "action": "debit",
    "amount": 15
  },
  {
    "text": "Take a ride on the Reading. If you pass Go, collect $200.",
    "action": "move",
    "destination": 5,
    "amount": 200
  },
  {
    "text": "Advance to St. Charles Place. If you pass Go, collect $200.",
    "action": "move",
    "destination": 11,
    "amount": 200
  },
  {
    "text": "Make general repairs on all your property. For each house pay $25, for each hotel pay $100.",
    "action": "debitPerBuilding",
    "house_cost": 25,
    "hotel_cost": 100
  },
  {
    "text": "Pay each player $50 for compensation.",
    "action": "debit",
    "amount": 50
  },
  {
    "text": "Advance to Go. Collect $200.",
    "action": "move",
    "destination": 0,
    "amount": 200
  },
  {
    "text": "Get out of jail free. This card may be kept until needed, or traded/sold.",
    "action": "getOutOfJailFree",
    "type": "jail"
  },
  {
    "text": "Pay a $50 fine or take a Chance.",
    "action": "choice",
    "options": [
      {
        "text": "Pay $50",
        "action": "debit",
        "amount": 50
      },
      {
        "text": "Take a Chance",
        "action": "draw_chance_card"
      }
    ]
  },
  {
    "text": "You have won a crossword competition. Collect $100.",
    "action": "credit",
    "amount": 100
  },
  {
    "text": "Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total of ten times the amount thrown.",
    "action": "moveToNearestUtility",
    "amount_multiplier": 10
  },
  {
    "text": "Bank pays you dividend of $50.",
    "action": "credit",
    "amount": 50
  },
  {
    "text": "Advance to the nearest Railroad and pay owner twice the rental to which they are otherwise entitled. If Railroad is unowned, you may buy it from the Bank.",
    "action": "move_to_nearest_railroad",
    "rent_multiplier": 2
  }

]