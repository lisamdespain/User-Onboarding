// testing the form

describe("New User Onboarding", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:3000/")
    })
    const fNameInput = () => cy.get("input[name=first_name]");
    const lNameInput = () => cy.get("input[name=last_name]");
    const emailInput = () => cy.get("input[name=email]");
    const tosInput = () => cy.get("input[type=checkbox], input[name=tos]");
    const submitButton = () => cy.get(`button[id="submitButton"]`);

    it("sanity check", () =>{
        expect(true).to.equal(true);
        expect({}).not.to.equal({});
    })

    it("showing expected elements", () =>{
        fNameInput().should("exist");
        lNameInput().should("exist");
        emailInput().should("exist");
        tosInput().should("exist");
        submitButton().should("exist");
        cy.contains(/submit/i).should("exist");
    })

    describe("Filling out the fields", () =>{
        it("can navigate to the site", () =>{
            cy.url().should("include", "localhost");
        })
        it("submit button starts out disabled", () =>{
            submitButton().should("be.disabled");
        })
        it("allows for entries in the input fields", () =>{
            fNameInput()
            .should("have.value", "")
            .type("Lisa")
            .should("have.value", "Lisa");
            lNameInput()
            .should("have.value", "")
            .type("DeSpain")
            .should("have.value", "DeSpain");
            emailInput()
            .should("have.value", "")
            .type("ldespain@cox.net")
            .should("have.value", "ldespain@cox.net");
            tosInput
            .should("not.be.checked")
            .check()
            .should("be.checked");
        })
        it("submit button enables when all the fields are filled out", () =>{
            fNameInput().type("Lisa");
            lNameInput().type("DeSpain");
            emailInput().type("ldespain@cox.net");
            tosInput().check();
            submitButton().should("not.be.disabled");
        })



    })

    describe("adding a new user", () =>{
        it("can add a new user", () =>{
            fNameInput().type("Lisa");
            lNameInput().type("DeSpain");
            emailInput().type("ldespain@cox.net");
            tosInput().check();
            submitButton().click();
        })
    })


})