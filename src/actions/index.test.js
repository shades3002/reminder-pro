const index = require("./index")
// @ponicode
describe("index.addReminder", () => {
    test("0", () => {
        let callFunction = () => {
            index.addReminder("Foo bar", "32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.addReminder("foo bar", "01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.addReminder("foo bar", "01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.addReminder("This is a Text", "01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.addReminder("Foo bar", "01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.addReminder(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.deleteReminder", () => {
    test("0", () => {
        let callFunction = () => {
            index.deleteReminder(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.deleteReminder("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.deleteReminder(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.deleteReminder(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.deleteReminder(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.deleteReminder(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.clearReminders", () => {
    test("0", () => {
        let callFunction = () => {
            index.clearReminders()
        }
    
        expect(callFunction).not.toThrow()
    })
})
