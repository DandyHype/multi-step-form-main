document.addEventListener("DOMContentLoaded", function(){

    var step = 0;

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
        navButtons: document.querySelector(".nav__buttons"),
        switch: document.querySelector(".subscription__swithcer")
    }

    var[arcade, advanced, pro] = document.querySelectorAll(".card__price")
    const planPrices = {
        arcade: arcade,
        advanced: advanced,
        pro: pro
    }
    

    const subPlan = {
        monthly: document.querySelector(".subscription__monthly"),
        yearly: document.querySelector(".subscription__yearly")
    }

    const discountMsg = document.querySelectorAll(".card__discount");

    const prices = {
         arcade: {
            monthly: 9,
            yearly: 90
        },
        advanced: {
            monthly: 12,
            yearly: 120
        },
        pro: {
            monthly: 15,
            yearly: 150
        }

    }

    var userChoice = {

        yearlyPlan : false,

        userPlan: {
            arcade : true,
            advanced : false,
            pro : false
        },
        userExtras: {
            onlineService : false,
            extraStorage : false,
            customProfile : false
        }
    }

    const navSteps = document.querySelectorAll(".link__number");

    const planCards = document.querySelectorAll(".info-cards__card");
    const extrasCards = document.querySelectorAll(".addon__cards-card");
    const extrasCheckBoxes = document.querySelectorAll("input[type='checkbox']");

    const content = document.querySelectorAll(".main__content");

    const resumeAddons = document.querySelector(".resume__addons");
    
    

    function showError(credential) {
        credential.msg.classList.remove("hidden");
        credential.input.style.borderColor = "var(--clr-error)";
    }

    function hideError(credential) {
        credential.msg.classList.add("hidden");
        credential.input.style.borderColor = "var(--clr-neutral-600)";
    }

    function writeAddonService(addon) {
        resumeAddons.document.write('<div class="addons__service">');
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
            userChoice.yearlyPlan = true;
            discountMsg.forEach(message => {
                message.style.display = "block";
            });
            for(var plan in planPrices){
                planPrices[plan].innerHTML = "$" + prices[plan].yearly + "/yr";
            }
            subPlan.monthly.style.color = "var(--clr-neutral-500)";
            subPlan.yearly.style.color = "var(--clr-primary)";
        }else if(button.style.justifyContent === "flex-end") {
            button.style.justifyContent = "";
            userChoice.yearlyPlan = false;
            discountMsg.forEach(message => {
                message.style.display = "none";
            });
            for(var plan in planPrices){
                planPrices[plan].innerHTML = "$" + prices[plan].monthly + "/mo";
            }
            subPlan.monthly.style.color = "var(--clr-primary)";
            subPlan.yearly.style.color = "var(--clr-neutral-500)";
        }
    }

    buttons.next.onclick = function() {
        switch(step){
            case 0:
                if(checkCredentials(name, email, phone)) {
                navSteps[step].classList.remove("link__number-active");
                navSteps[step + 1].classList.add("link__number-active");
                content[step].style.display = "none";
                content[step + 1].style.display = "grid";
                step++;
                }
                
            break;

            case 1:
                navSteps[step].classList.remove("link__number-active");
                navSteps[step + 1].classList.add("link__number-active");
                content[step].style.display = "none";
                content[step + 1].style.display = "grid";
                step++;
            break;

            case 2:
                navSteps[step].classList.remove("link__number-active");
                navSteps[step + 1].classList.add("link__number-active");
                buttons.next.style.display = "none";
                buttons.finish.style.display = "block";
                content[step].style.display = "none";
                content[step + 1].style.display = "grid";
                step++;
            break;

            case 3:
                
                content[step].style.display = "none";
                content[step + 1].style.display = "grid";
                step++;
            break;

            case 4:
                content[step].style.display = "none";
                content[step + 1].style.display = "grid";
            break;

        }

        
    }

    buttons.back.onclick = function() {
        switch (step) {
            case 4:
                navSteps[step].classList.remove("link__number-active");
                navSteps[step - 1].classList.add("link__number-active");
                content[step].style.display = "none";
                content[step - 1].style.display = "grid";
                step--;
                break;
        
            case 3:
                navSteps[step].classList.remove("link__number-active");
                navSteps[step - 1].classList.add("link__number-active");
                buttons.next.style.display = "block";
                buttons.finish.style.display = "none";
                content[step].style.display = "none";
                content[step - 1].style.display = "grid";
                step--;
            break;
            
            case 2:
                navSteps[step].classList.remove("link__number-active");
                navSteps[step - 1].classList.add("link__number-active");
                content[step].style.display = "none";
                content[step - 1].style.display = "grid";
                step--;
            break;

            case 1:
                navSteps[step].classList.remove("link__number-active");
                navSteps[step - 1].classList.add("link__number-active");
                content[step].style.display = "none";
                content[step - 1].style.display = "grid";
                step--;

            break;

            case 0:
            break;

        }
    }

    buttons.finish.onclick = function(){
        content[step].style.display = "none";
        content[step + 1].style.display = "grid";
        buttons.navButtons.style.display = "none";
    }

    buttons.switch.addEventListener("click", function(){
        switchPlanButton(buttons.switch);
    });

    planCards.forEach(function(card) {
        card.addEventListener("click", function() {
            var self = this;
            planCards.forEach(function(card) {
                card.classList.remove("card-selected");
                
                userChoice.userPlan[card.dataset.plan] = card.dataset.plan == self.dataset.plan;
            });
            this.classList.add("card-selected");
            userChoice.userPlan[this.dataset.plan] = true;
        });

    });

    extrasCards.forEach(function(card) {
        card.addEventListener("click", function() {

            if(this.classList.contains('card-selected')){
                this.classList.remove("card-selected");
                this.querySelector('input[type="checkbox"]').checked = false;
                userChoice.userExtras[this.dataset.extras] = false;
            } else if(this.classList.contains('card-selected') == false) {
                this.classList.add("card-selected");
                this.querySelector('input[type="checkbox"]').checked = true;
                userChoice.userExtras[this.dataset.extras] = true;
            }
        });

    });


    
    
});