
var players = [
    {name: "Vader",
     role:'player', //Player or Opponent
     status: 'alive',
     healthPoints:180,
     attackPower:12,
     attackMultiplier:12,
     counterAttack: this.attackMultiplier,
     incrementAttack: ()=>{
        this.attackPower += this.attackMultiplier
     }, 
     attack: ()=>{
        let currentAttack = this.attackPower;
        incrementAttack();
        return currentAttack;
     },
     receiveDamage: (num)=>{
        this.healthPoints -= num;
     },
     statusCheck: ()=>{
        this.status = (this.healthPoints > 0) ? 'alive' : 'dead'; 
     }
    },
    {name: "Clone",
     role:'player', //Player or Opponent
     status: 'alive',
     healthPoints:50,
     attackPower:4,
     attackMultiplier:4,
     counterAttack: this.attackMultiplier,
     incrementAttack: ()=>{
        this.attackPower += this.attackMultiplier
     }, 
     attack: ()=>{
        let currentAttack = this.attackPower;
        incrementAttack();
        return currentAttack;
     },
     receiveDamage: (num)=>{
        this.healthPoints -= num;
     },
     statusCheck: ()=>{
        this.status = (this.healthPoints > 0) ? 'alive' : 'dead'; 
     }
    },
    {name: "Dooku",
     role:'player', //Player or Opponent
     status: 'alive',
     healthPoints:160,
     attackPower:16,
     attackMultiplier:16,
     counterAttack: this.attackMultiplier,
     incrementAttack: ()=>{
        this.attackPower += this.attackMultiplier
     }, 
     attack: ()=>{
        let currentAttack = this.attackPower;
        incrementAttack();
        return currentAttack;
     },
     receiveDamage: (num)=>{
        this.healthPoints -= num;
     },
     statusCheck: ()=>{
        this.status = (this.healthPoints > 0) ? 'alive' : 'dead'; 
     }
    },
    {name: "Yoda",
     role:'player', //Player or Opponent
     status: 'alive',
     healthPoints:220,
     attackPower:8,
     attackMultiplier:8,
     counterAttack: this.attackMultiplier,
     incrementAttack: ()=>{
        this.attackPower += this.attackMultiplier
     }, 
     attack: ()=>{
        let currentAttack = this.attackPower;
        incrementAttack();
        return currentAttack;
     },
     receiveDamage: (num)=>{
        this.healthPoints -= num;
     },
     statusCheck: ()=>{
        this.status = (this.healthPoints > 0) ? 'alive' : 'dead'; 
     }
    },
    {name: "Obi-Wan",
     role:'player', //Player or Opponent
     status: 'alive',
     healthPoints:130,
     attackPower:10,
     attackMultiplier:10,
     counterAttack: this.attackMultiplier,
     incrementAttack: ()=>{
        this.attackPower += this.attackMultiplier
     }, 
     attack: ()=>{
        let currentAttack = this.attackPower;
        incrementAttack();
        return currentAttack;
     },
     receiveDamage: (num)=>{
        this.healthPoints -= num;
     },
     statusCheck: ()=>{
        this.status = (this.healthPoints > 0) ? 'alive' : 'dead'; 
     }
    },
    {name: "Luke",
     role:'player', //Player or Opponent
     status: 'alive',
     healthPoints:170,
     attackPower:16,
     attackMultiplier:16,
     counterAttack: this.attackMultiplier,
     incrementAttack: ()=>{
        this.attackPower += this.attackMultiplier
     }, 
     attack: ()=>{
        let currentAttack = this.attackPower;
        incrementAttack();
        return currentAttack;
     },
     receiveDamage: (num)=>{
        this.healthPoints -= num;
     },
     statusCheck: ()=>{
        this.status = (this.healthPoints > 0) ? 'alive' : 'dead'; 
     }
    }
];