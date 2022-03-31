/*---------------------- [ SideBar Navigation 'Dropdown' ] --------------------------*/

function dashboardDropDown() {
    document.getElementById("dbdd").classList.toggle("dd-show");
    document.getElementById("dbddClickable").classList.toggle("ddBackground");
}

function invoiceDropDown() {
    document.getElementById("idd").classList.toggle("dd-show");
    document.getElementById("inddClickable").classList.toggle("ddBackground");
}

function ecoDropDown() {
    document.getElementById("ecdd").classList.toggle("dd-show");
    document.getElementById("ecddClickable").classList.toggle("ddBackground");
}

function userDropDown() {
    document.getElementById("userdd").classList.toggle("dd-show");
    document.getElementById("userddClickable").classList.toggle("ddBackground");
}

function pageDropDown() {
    document.getElementById("pagedd").classList.toggle("dd-show");
    document.getElementById("pageddClickable").classList.toggle("ddBackground");
}

/*---------------------- [ Theme Icon ] --------------------------*/

function darkTheme() {
    document.body.classList.toggle("dark-mode");
    document.getElementById('sideNav').classList.toggle("dark");
    document.getElementById('navbar').classList.toggle("dark");
    document.getElementById('search').classList.toggle("dark");
    document.getElementById('starDropdown').classList.toggle("dark");
    document.getElementById('notifiDropdown').classList.toggle("dark");
    document.getElementById('settingDropdown').classList.toggle("dark");
    document.getElementById('featureDropdown').classList.toggle("dark");
    document.getElementById('filter').classList.toggle("dark");
    document.getElementById('searchContent').classList.toggle("dark");
    document.getElementById('shopDescriptionContent').classList.toggle("dark");
    document.getElementById('settings-box').classList.toggle("dark");
}

/*---------------------- [ Search Icon ] --------------------------*/

let search_icon = document.getElementById('search-icon');
search_icon.onclick = function() {
    document.getElementById('search').classList.toggle("searchIcon-hide");
}
document.getElementById('close-setting-icon').onclick = () => {
    document.getElementById('search').classList.toggle("searchIcon-hide");
}

/*---------------------- [ Star Icon 'Dropdown' ] --------------------------*/

let star = document.getElementById('StarIcon');
star.onclick = () => {
    document.getElementById('starDropdown').classList.toggle("star-active");
}

/*---------------------- [ Notification Icon 'Dropdown' ] --------------------------*/

let noti = document.getElementById('notification');
noti.onclick = () => {
    document.getElementById('notifiDropdown').classList.toggle("noti-active");
    document.getElementById("notifi-num").style.display = "none";
}

/*---------------------- [ Setting Icon 'Dropdown' ] --------------------------*/

let setting = document.getElementById('setting');
setting.onclick = () => {
        document.getElementById('settingDropdown').classList.toggle("setting-active");
    }
    /*---------------------- [ Featured Dropdown ] --------------------------*/

let feature = document.getElementById('feature');
feature.onclick = () => {
    document.getElementById('featureDropdown').classList.toggle("feature-active");
}

/*---------------------- [ Range Input ] --------------------------*/

let sliderOne = document.getElementById("range-slide-1");
let sliderTwo = document.getElementById("range-slide-2");
let valueOne = document.getElementById("range-1");
let valueTwo = document.getElementById("range-2");
let minGap = 10;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("range-slide-1").max;

function slideOneFun() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    valueOne.textContent = sliderOne.value;
    fillColor();
}

function slideTwoFun() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    valueTwo.textContent = sliderTwo.value;
    fillColor();
}

function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #7367f0 ${percent1}%, #7367f0 ${percent2}%, #dadae5 ${percent2}%)`;
}

window.onload = function() {
    slideOneFun();
    slideTwoFun();
}

/*---------------------- [ Show Cards Data ] --------------------------*/

const productResult = [{
        "id": 1,
        "name": "Apple Watch Series 5",
        "price": 339.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 2,
        "name": "Apple iPhone 11 (64GB, Black)",
        "price": 669.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 3,
        "name": "Apple iMac 27-inch",
        "price": 999.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 4,
        "name": "OneOdio A71 Wired Headphones",
        "price": 49.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 5,
        "name": "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
        "price": 999.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 6,
        "name": "Switch Pro Controller",
        "price": 429.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 7,
        "name": "Google - Google Home - White/Slate fabric",
        "price": 129.29,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "google",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 8,
        "name": "Sony 4K Ultra HD LED TV",
        "price": 7999.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 9,
        "name": "OnePlus 7 Pro",
        "price": 14.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Philips",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 10,
        "name": "Logitech K380 Wireless Keyboard",
        "price": 81.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/10.a197f12f.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Logitech",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 11,
        "name": "Nike Air Max",
        "price": 81.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/11.196910d4.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Nike",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 12,
        "name": "New Apple iPad Pro",
        "price": 799.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/12.87084176.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 13,
        "name": "Vankyo leisure 3 mini projector",
        "price": 99.99,
        "rating": 2,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13.e7c28d6c.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Vankyo Store",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 14,
        "name": "Wireless Charger 5W Max",
        "price": 10.83,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/14.df784ed6.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "3M",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 15,
        "name": "Laptop Bag",
        "price": 29.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/15.2b721276.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "TAS",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 16,
        "name": "Adidas Mens Tech Response Shoes",
        "price": 54.59,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/16.a9b3f7ab.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Adidas",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 17,
        "name": "Oculus Quest All-in-one VR",
        "price": 645,
        "rating": 1,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/18.fac01044.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Oculus",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 18,
        "name": "Handbags for Women Large Designer bag",
        "price": 39.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/17.024d4a22.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Hobo",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 19,
        "name": "Giotto 32oz Leakproof BPA Free Drinking Water",
        "price": 16.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/19.1c1f4cf1.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "3M",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 20,
        "name": "PlayStation 4 Console",
        "price": 339.95,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/20.ad629602.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Sony",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 21,
        "name": "Bugani M90 Portable Bluetooth Speaker",
        "price": 56,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/21.940a62ff.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Bugani",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 22,
        "name": "Toshiba Canvio Advance 2TB Portable External Hard Drive",
        "price": 69.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/23.ec286c40.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Toshiba",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 23,
        "name": "Tile Pro - High Performance Bluetooth Tracker",
        "price": 29.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/22.450e8e03.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Tile",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 24,
        "name": "Ronyes Unisex College Bag Bookbags for Women",
        "price": 23.99,
        "rating": 2,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/24.79a14740.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Ronyes",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 25,
        "name": "Willful Smart Watch for Men Women 2020,",
        "price": 29.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/25.e1f92d21.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Willful",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 26,
        "name": "VicTsing Wireless Mouse,",
        "price": 10.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/27.9b4c2313.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "VicTsing",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 27,
        "name": "Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses",
        "price": 249,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/26.257af602.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Bose",
        "available": true,
        "colors": ["red", "purple", "green"]
    }
];

const productLength = productResult.length;

function showData(list) {
    let data = '';
    for (let i = 0; i < list.length; i++) {
        data += `
                <div class="card" id="card">
                    <div class="image" id="card-image">
                        <img src="${list[i].img}" alt="${list[i].name}" />
                    </div>
                    <div class="card-info" id="card-info">
                        <div class="card-info-first">
                            <div>`;
        for (let x = 0; x < 5; x++) {
            if (x < list[i].rating) {
                data += `<i class="fas fa-star"></i>`;
            } else {
                data += `<i class="far fa-star"></i>`;
            }
        }
        data += `
                            </div>
                            <span>${list[i].price}</span>
                        </div>
                        <div class="card-info-second">
                            <h3>${list[i].name}</h3>
                            <p>${list[i].discription}</p>
                        </div>
                    </div>
                    <div class="card-link" id="card-link">
                            <button id="card-link-btn"><i class="fas fa-heart" id="heart-icon" onclick="changeHeart()"></i> Washlist</button>`;
        data += `<button><i class="fas fa-cart-arrow-down"></i> View In Cart</button>
                    </div>
                </div>

                `;
    }
    const element = document.getElementById("shopDescriptionContent");
    element.innerHTML = '';
    // debugger

    element.innerHTML = data;
}

showData(productResult);

/*---------------------- [ Heart Icon Color ] --------------------------*/

// document.getElementById('card-link-btn').onclick = 
function changeHeart() {
    document.getElementById('heart-icon').classList.toggle("heart-active");
}

/*---------------------- [ Filtered Search ] --------------------------*/

// function searchFilteredFunction(memo) {
//     for (var i = 0; i < productLength; i++) {
//         if (productResult[i].name.toLowerCase().includes(memo.toLowerCase()) == true) {
//             data += `
//                 <div class="card" id="card">
//                     <div class="image" id="card-image">
//                         <img src="${productResult[i].img}" alt="${productResult[i].name}" />
//                     </div>
//                     <div class="card-info" id="card-info">
//                         <div class="card-info-first">
//                             <div>`;
//             for (let x = 0; x < 5; x++) {
//                 if (x < productResult[i].rating) {
//                     data += `<i class="fas fa-star"></i>`;
//                 } else {
//                     data += `<i class="far fa-star"></i>`;
//                 }
//             }
//             data += `
//                             </div>
//                             <span>${productResult[i].price}</span>
//                         </div>
//                         <div class="card-info-second">
//                             <h3>${productResult[i].name}</h3>
//                             <p>${productResult[i].discription}</p>
//                         </div>
//                     </div>
//                     <div class="card-link" id="card-link">
//                             <button id="card-link-btn"><i class="fas fa-heart" id="heart-icon" onclick="changeHeart()"></i> Washlist</button>`;
//             data += `<button><i class="fas fa-cart-arrow-down"></i> View In Cart</button>
//                     </div>
//                 </div>
//                 `;
//         } else {
//             console.log("errorrrrrrrrrrrrrrrrrr");
//         }
//     }
//     document.getElementById("shopDescriptionContent").innerHTML = data;
// }



// let searchFilter = document.getElementById('searchFilter');
// let searchFilteredResult = document.getElementById("searchFilteredResult");
// let searchFilterValue = searchFilter.value;
// let searchFilteredResultValue = searchFilteredResult.value;

let searchProduct = [];

// searchFilter.onkeyup = 
function searchFilteredFunction(searchValue) {

    for (var i = 0; i < productLength; i++) {
        // console.log(productResult[i].name.toLowerCase());
        // console.log(searchFilterValue.toLowerCase());
        // console.log(productResult[i].name.toLowerCase().includes(searchFilterValue.toLowerCase()));
        if (productResult[i].name.toLowerCase().includes(searchValue.toLowerCase())) {
            console.log("tttt");
            searchProduct.push(productResult[i]);
            console.log(searchProduct);
        } else {
            console.log("errorrrrrrrrrrrrrrrrrrrrr");
        }
    }
    // document.getElementById("shopDescriptionContent").innerHTML = data;
    showData(searchProduct);
}

/*---------------------- [ Filtered Multi-Range ] --------------------------*/

document.getElementById('all').onclick = function() {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].price <= 500 || productResult[i].price > 500) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

document.getElementById('ls10').onclick = function() {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].price <= 10) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

function filterArr() {
    let arrProductResult = [];
    for (var i = 0; i < productResult.length; i++) {
        if (productResult[i].price > 10 && productResult[i].price <= 100) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

document.getElementById('x10w100').addEventListener('click', function() {
    filterArr()
});


document.getElementById('100w500').onclick = function() {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].price > 100 && productResult[i].price <= 500) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

document.getElementById('gt500').onclick = function() {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].price > 500) {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}


/*---------------------- [ Filtered Some Brands ] --------------------------*/

document.getElementById('insignia').onclick = () => {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].brand == '3M') {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

document.getElementById('apple').onclick = () => {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].brand == 'apple') {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

document.getElementById('sony').onclick = () => {
    let arrProductResult = [];
    for (var i = 0; i < productLength; i++) {
        if (productResult[i].brand == 'Sony') {
            arrProductResult.push(productResult[i]);
        }
    }
    showData(arrProductResult);
}

/*---------------------- [ Sorting Card ] --------------------------*/

let low = document.getElementById('lowest');

low.onclick = function sortLowest() {
    var ascending = productResult.sort((cardOne, cardTwo) => parseFloat(cardOne.price) - parseFloat(cardTwo.price));
    console.log("yes");
    console.log(ascending);


    data += `${productResult.sort((cardOne, cardTwo) => parseFloat(cardOne.price) - parseFloat(cardTwo.price))}`;
    document.getElementById("shopDescriptionContent").innerHTML = data;

}


let high = document.getElementById('heighest');
high.onclick = () => {
    var descending = productResult.sort((cardOne, cardTwo) => parseFloat(cardTwo.price) - parseFloat(cardOne.price));
    console.log("yes");
    console.log(descending);
}


/*---------------------- [ Button Up ] --------------------------*/

let btnUP = document.querySelector(".btn-up");
window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnUP.style.display = "block";
    } else {
        btnUP.style.display = "none";
    }
}

btnUP.onclick = function topFunction() {
    document.body.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    document.documentElement.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


/*---------------------- [ Landscape And Portrait Button ] --------------------------*/

let landscapeBtn = document.getElementById('landscapeBtn');
landscapeBtn.onclick = () => {
    document.getElementById("shopDescriptionContent").classList.add('shopDescriptionContent-landscape');
    document.getElementById("card").classList.add('card-landscape');
    document.getElementById("card-image").classList.add('image-landscape');
    document.getElementById("card-info").classList.add('card-info-landscape');
    document.getElementById("card-link").classList.add('card-link-landscape');
    let data = ``;
    for (let i = 0; i < productLength; i++) {
        data += `
        <div class="card card-landscape" id="card">
            <div class="image image-landscape" id="card-image">
                <img src="${productResult[i].img}" alt="" />
            </div>
            <div class="card-info card-info-landscape" id="card-info">
                <div class="card-info-first">
                    <div>`;
        for (let x = 0; x < 5; x++) {
            if (x < productResult[i].rating) {
                data += `<i class="fas fa-star"></i>`;
            } else {
                data += `<i class="far fa-star"></i>`;
            }
        }
        data += `
                    </div>
                    <span>${productResult[i].price}</span>
                </div>
                <div class="card-info-second">
                    <h3>${productResult[i].name}</h3>
                    <p>${productResult[i].discription}</p>
                </div>
            </div>
            <div class="card-link card-link-landscape" id="card-link">
                    <button id="card-link-btn"><i class="fas fa-heart" id="heart-icon" onclick="changeHeart()"></i> Washlist</button>`;
        data += `<button><i class="fas fa-cart-arrow-down"></i> View In Cart</button>
            </div>
        </div>
        
        `;
    }
    document.getElementById("shopDescriptionContent").innerHTML = data;
}

let portraitBtn = document.getElementById('portraitBtn');
portraitBtn.onclick = () => {
    document.getElementById("shopDescriptionContent").classList.remove('shopDescriptionContent-landscape');
    document.getElementById("card").classList.remove('card-landscape');
    document.getElementById("card-image").classList.remove('image-landscape');
    document.getElementById("card-info").classList.remove('card-info-landscape');
    document.getElementById("card-link").classList.remove('card-link-landscape');
    showData();
}

/*---------------------- [ Setting Box ] --------------------------*/

document.querySelector(".settings-icon i").onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("searchBox-hide");

    document.getElementById('close-option-icon').onclick = () => {
        document.querySelector(".settings-box").classList.toggle("searchBox-hide");
    }
};

/*---------------------- [ Toggle Menu ] --------------------------*/

let togglebtn = document.querySelector(".toggle-menu");
let dash = document.getElementById('sideNav');

togglebtn.onclick = function(e) {
    this.classList.toggle("menu-active");
    dash.style.left = "0px";
    dash.style.width = "17%";
};