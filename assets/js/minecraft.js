const tabDiv = $(".tabs");
// tabDiv.css('margin-left', (~~(tabDiv.width() / $(window).width()) / 2 * 100) + '%');
const tabs = document.getElementsByClassName("tab");
let selected = tabs[0];

const plans = {
    premium: [
        {
            name: "Premium Minecraft 1GB",
            price: 3,
            pay_cycle: "Qtly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=1"
        },
        {
            name: "Premium Minecraft 2GB",
            price: 6,
            pay_cycle: "Qtly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=2"
        },
        {
            name: "Premium Minecraft 3GB",
            price: 3,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=3"
        },
        {
            name: "Premium Minecraft 4GB",
            price: 4,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=4"
        },
        {
            name: "Premium Minecraft 5GB",
            price: 5,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=5"
        },
        {
            name: "Premium Minecraft 6GB",
            price: 6,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=6"
        },
        {
            name: "Premium Minecraft 7GB",
            price: 7,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=7"
        },
        {
            name: "Premium Minecraft 8GB",
            price: 8,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=8"
        },
        {
            name: "Premium Minecraft 9GB",
            price: 9,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=11"
        },
        {
            name: "Premium Minecraft 10GB",
            price: 10,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=9"
        },
        {
            name: "Premium Minecraft 12GB",
            price: 12,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=110"
        },
        {
            name: "Premium Minecraft 16GB",
            price: 16,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=10"
        }
    ],
    extreme: [
        {
            name: "Extreme Minecraft 1GB",
            price: 3.00,
            pay_cycle: "Mthly",
            url:"https://billing.revivenode.com/cart.php?a=add&pid=60"
        },
        {
            name: "Extreme Minecraft 2GB",
            price: 6.00,
            pay_cycle: "Mthly",
            url:"https://billing.revivenode.com/cart.php?a=add&pid=61"
        },
        {
            name: "Extreme Minecraft 3GB",
            price: 9.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=62"
        },
        {
            name: "Extreme Minecraft 4GB",
            price: 12.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=63"
        },
        {
            name: "Extreme Minecraft 5GB",
            price: 15.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=64"
        },
        {
            name: "Extreme Minecraft 6GB",
            price: 18.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=65"
        },
        {
            name: "Extreme Minecraft 7GB",
            price: 21.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=66"
        },
        {
            name: "Extreme Minecraft 8GB",
            price: 24.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=67"
        },
        {
            name: "Extreme Minecraft 9GB",
            price: 27.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=68"
        },
        {
            name: "Extreme Minecraft 10GB",
            price: 30.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=69"
        },
        {
            name: "Extreme Minecraft 12GB",
            price: 36.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=109"
        },
        {
            name: "Extreme Minecraft 16GB",
            price: 48.00,
            pay_cycle: "Mthly",
            url: "https://billing.revivenode.com/cart.php?a=add&pid=71"
        }
    ]
}

const images = {
    "premium": "./assets/img/icons/minecraft.png",
    "extreme": "./assets/img/icons/3.png"
}
const planList = $('.plans').first();

const setPlans = (plans, plan) => {
    planList.empty();
    const image = images[plan];
    plans.forEach(plan => {
        planList.append(`<div class="plan"><h4 class="titles">${plan.name}</h4><img src="${image}" class="plan_image"><div class="price1"><p class="amount">$${plan.price.toFixed(2)}</p><p class="slash">&#47;</p><p class="pay_cycle">${plan.pay_cycle}</p></div><div class="order_now"><a href="${plan.url}">Order Now</a></div></div>`)
    })
}

setPlans(plans.premium, "premium");



for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.addEventListener("click", () => {
        if (selected) selected.classList.remove("selected");
        tab.classList.add("selected");
        selected = tab;

        setPlans(plans[tab.innerHTML.toLowerCase()], tab.innerHTML.toLowerCase());
    })
}