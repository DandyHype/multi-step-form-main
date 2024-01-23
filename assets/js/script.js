document.addEventListener("DOMContentLoaded", function(){

    const name = {
        input: document.querySelector(".name__input"),
        label: document.querySelector(".name__label"),
        msg: document.querySelector(".name__error-msg")
    }

    const email = {
        input: document.querySelector(".email__input"),
        label: document.querySelector(".email__label"),
        msg: document.querySelector(".email__error-msg")
    }

    const phone = {
        input: document.querySelector(".phone__input"),
        label: document.querySelector(".phone__label"),
        msg: document.querySelector(".phone__error-msg")
    }

    const buttons = {
        back: document.querySelector(".nav__buttons-back"),
        next: document.querySelector(".nav__buttons-next"),
        finish: document.querySelector(".nav__buttons-finish"),
        switch: document.querySelector(".subscription__swithcer")
    }

    var[arcade, advanced, pro] = document.querySelectorAll(".card__price")
    const planPrices = {
        arcade: arcade,
        advanced: advanced,
        pro: pro
    }
    console.log(planPrices);

    const subPlan = {
        monthly: document.querySelector(".subscription__monthly"),
        yearly: document.querySelector(".subscription__yearly")
    }

    const discountMsg = document.querySelectorAll(".card__discount");

    const prices = {
         arcade: {
            monthly: "$9/mo",
            yearly: "$90/yr"
        },
        advanced: {
            monthly: "$12/mo",
            yearly: "$120/yr"
        },
        pro: {
            monthly: "$15/mo",
            yearly: "$150/yr"
        }

    }

    const navSteps = document.querySelectorAll(".link__number");

    const planCards = document.querySelectorAll(".info-cards__card");

    const content = this.querySelectorAll(".main__content");

    function showError(credential) {
        credential.msg.classList.remove("hidden");
        credential.input.style.borderColor = "var(--clr-error)";
    }

    function hideError(credential) {
        credential.msg.classList.add("hidden");
        credential.input.style.borderColor = "var(--clr-neutral-600)";
    }
    

    function checkCredentials(name, email, phone){
        let flag = true;
        if(name.input.value == ""){
            showError(name);
            flag = false;
        }else 
            hideError(name);
        if(email.input.value == ""){
            showError(email);
            flag = false;
        }else 
            hideError(email);
        if(phone.input.value == ""){
            showError(phone);
            flag = false;
        } else
            hideError(phone);

        return flag;
    }

    function switchPlanButton(button){
        if(button.style.justifyContent === "") {
            button.style.justifyContent = "flex-end";
            discountMsg.forEach(message => {
                message.style.display = "block";
            });
            for(var plan in planPrices){
                planPrices[plan].innerHTML = prices[plan].yearly;
            }
            subPlan.monthly.style.color = "var(--clr-neutral-500)";
            subPlan.yearly.style.color = "var(--clr-primary)";
        }else if(button.style.justifyContent === "flex-end") {
            button.style.justifyContent = "";
            discountMsg.forEach(message => {
                message.style.display = "none";
            });
            for(var plan in planPrices){
                planPrices[plan].innerHTML = prices[plan].monthly;
            }
            subPlan.monthly.style.color = "var(--clr-primary)";
            subPlan.yearly.style.color = "var(--clr-neutral-500)";
        }
    }

    buttons.next.onclick = function() {
        if(checkCredentials(name, email, phone)) {
            navSteps[0].classList.remove("link__number-active");
            navSteps[3].classList.add("link__number-active");
            content[0].style.display = "none";
            content[3].style.display = "grid";
        }
    }

    buttons.switch.addEventListener("click", function(){
        switchPlanButton(buttons.switch);
    });

    planCards.forEach(function(card) {
        card.addEventListener("click", function() {
            planCards.forEach(function(card) {
                card.classList.remove("card-selected");
            })
            this.classList.add("card-selected");
        });

    });
    
    
});