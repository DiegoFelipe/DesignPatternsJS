const person = {
    name: 'Diego Felipe',
    age: 28
}

const showMessageHandler = {
    get: function(target, property) {
       return property == 'age' ? `${target.name}'s age is ${target.age}` : target[property] 
    }
}

const validateAgeHandler = {
    set: function(target, property, value) {
        if (property == 'age' && !Number.isInteger(value)) {
            throw new TypeError('Age is not an integer')
        } else {

            target[property] = value // default behaviour
            return true
        }
    }
}

const showAgeMessageProxy = new Proxy(person, showMessageHandler)
const validateAgeProxy = new Proxy(person, validateAgeHandler)

person.age = 29

console.log(showAgeMessageProxy.age)
