// You have to take on the elemental titans, but you can only launch one elemental attack to take it out so you have to make it count! Elements can be strong, weak or have no additional effect to your attacks.
// Elements that are strong against the titan will multiply your attack by 1.5, however elements that are weak against the titan will halve the damage done. Elemental attacks against a titan of the same type will be weakened. The following outlines the weakness and strengths of the four elements: "Fire", "Water", "Thunder" and "Earth".

// "Fire" : strong against "Earth " and weak against "Water" and "Fire".
// "Earth" : strong against "Thunder " and weak against "Fire" and "Earth".
// "Water" : strong against "Fire " and weak against "Thunder" and "Water".
// "Thunder" : strong against "Water " and weak against "Earth" and "Thunder".

// Write a program to return the damage done to the titan (this should be zero or below if the titan is defeated. Then you must return an action. If you defeat the titan (damage is zero or below), then you should "Attack". If your attack wont defeat the titan there is no shame in running and you should "Run!"

// You will be given your attack power "att" and the titan's defense "def". The damage will be the difference between defense of the titan and the final attack power. You will be supplied with your element (yourElement) and the titan's element (theirElement). Return the damage done and the action as an array in the form [damage,"Action"], where the action is either "Attack" or "Run!". Good luck!

function titanAttack(attack, health, yourElement, theirElement) {
  const magic = {
    Fire: { Earth: 1.5, Water: 0.5, Fire: 0.5 },
    Earth: { Thunder: 1.5, Fire: 0.5, Earth: 0.5 },
    Water: { Fire: 1.5, Thunder: 0.5, Water: 0.5 },
    Thunder: { Water: 1.5, Earth: 0.5, Thunder: 0.5 },
  }

  let battleResult = health - (magic[yourElement][theirElement] || 1) * attack

  return [battleResult, battleResult > 0 ? "Run!" : "Attack"]
}
