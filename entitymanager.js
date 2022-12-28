/*
Manages and creates Entities.
A Entity Factor

Entity - any object within the game. Components are attached to the entities to give them functionality.



*/

class EntityManager {

    constructor(params){
        this.entities = []
        this.entitiyMap = new Map()
        this.totalEntities = 0
        this.toAddEntities = []
    }

    

    addEntity() {
        let e = new Entity()
        this.toAddEntities.push(e)
        this.totalEntities++
        return e
    }

    get getEntities() {
        return this.entities
    }

    getEntity(tag) {
        return this.entitiyMap.get(tag)
    }

    update() {
        for(let e in this.toAddEntities) {
            this.entities.push(e)
            this.entitiyMap.set(e.tag, this.totalEntities++)
        }

        removed = this.removeDeadEntities()
        this.toAddEntities.length = 0
        for(let tag in removed) {
            this.entitiyMap.delete(tag)
        }
    }
    removeDeadEntities() {
        removed = []
        for(let i = this.totalEntities - 1; i > 0; i--) {
            e = this.entities[i]
            if(!e.isAlive) {
                removed.push(e.tag)
                this.entities.splice(i, 1)
            }
        }
    }

}

class Entity  {

    constructor() {
        this.id = 0,
        this.tag = 'default',
        this.isAlive = true,

        this.CTransform = {
            pos:        [0.0,0.0],
            velocity:   [0.0, 0.0],
            angle:      0
        },

        this.CCollision = {
            radius: 0
        
        },

        this.CLifeSpan = {
            remaining: 0,
            total: 0,
        },

        this.CSprite = null
    }

    draw(ctx, engine) {
        
        ctx.drawImage(this.CSprite, 64,64)
    }

    destroy() {
        this.isAlive = false
    }
    update() {
        
    }
}

