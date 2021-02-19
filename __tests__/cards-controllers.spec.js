const cards_controllers = require("../src/controllers/cards")
const { mockRequest, mockResponse } = require('../test/util/interceptor')

describe("Controller functions test", () => {
    describe("GETTING all cards", () => {
        it("it should get all cards", async () => {
            const req = mockRequest()
            const res = mockResponse()

            const output = [
                {
                    "id": 1, "name": "Ars Almal", "color": "White", "card_type": "SIGNI"
                },
                {
                    "id": 2, "name": "Himawari Honma", "color": "White", "card_type": "SIGNI"
                },
                {
                    "id": 3, "name": "Lulu Suzuhara", "color": "Black", "card_type": "SIGNI"
                },
                {
                    "id": 4, "name": "Nui Sociere", "color": "Black", "card_type": "SIGNI"
                }
            ]

            await cards_controllers.getCards(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
    })

    describe("GETTING card by id", () => {
        it("it should get card with id 1", async () => {
            let req = mockRequest()
            req.params.id = 1
            const res = mockResponse()

            const output = [
                {
                    "id": 1, "name": "Ars Almal", "color": "White", "card_type": "SIGNI"
                }
            ]

            await cards_controllers.getCardByID(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
        it("it should return empty array with id -1", async () => {
            let req = mockRequest()
            req.params.id = -1
            const res = mockResponse()

            const output = []

            await cards_controllers.getCardByID(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
    })

    describe("ADDING a new card", () => {
        it("it should add new card", async () => {
            let req = mockRequest()
            req.body = {
                "id": 5, "name": "Roa Yuzuki", "color": "White", "card_type": "SIGNI"
            }
            const res = mockResponse()

            const output = { message: 'A new card has been added!' }

            await cards_controllers.addCard(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
        it("it should get card with id 5", async () => {
            let req = mockRequest()
            req.params.id = 5
            const res = mockResponse()

            const output = [
                {
                    "id": 5, "name": "Roa Yuzuki", "color": "White", "card_type": "SIGNI"
                }
            ]

            await cards_controllers.getCardByID(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
    })

    describe("UPDATING a card", () => {
        it("it should update card with id 3", async () => {
            let req = mockRequest()
            req.params.id = 3
            req.body = {
                "id": 3, "name": "Lulu Suzuhara", "color": "Colorless", "card_type": "SIGNI"
            }
            const res = mockResponse()

            const output = { message: `The card with ID ${req.params.id} has been updated!` }

            await cards_controllers.updateCard(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
        it("it should get card with id 3", async () => {
            let req = mockRequest()
            req.params.id = 3
            const res = mockResponse()

            const output = [
                {
                    "id": 3, "name": "Lulu Suzuhara", "color": "Colorless", "card_type": "SIGNI"
                }
            ]

            await cards_controllers.getCardByID(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
    })

    describe("REMOVING a card", () => {
        it("it should remove card with id 4", async () => {
            let req = mockRequest()
            req.params.id = 4
            const res = mockResponse()

            const output = { message: `The card with ID ${req.params.id} has been deleted!` }

            await cards_controllers.removeCard(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
        it("it should return empty array with id 4", async () => {
            let req = mockRequest()
            req.params.id = 4
            const res = mockResponse()

            const output = []

            await cards_controllers.getCardByID(req, res)
            expect(res.json).toHaveBeenCalledTimes(1)
            expect(res.json.mock.calls.length).toBe(1)
            expect(res.json).toHaveBeenCalledWith(output)
        })
    })
})