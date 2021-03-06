console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
    if (event.target.id === "showRed") {
        filterLegos("Red")
    } else if (event.target.id === "showAll") {
        makeLegoList(useLegos())
    }
})

navElement.addEventListener("click", (event) => {
    if (event.target.id === "showGreen") {
        filterLegos("Green")
    } else if (event.target.id === "showAll") {
        makeLegoList(useLegos())
    }
})

const materialElement = document.querySelector("#showMaterial")
materialElement.addEventListener("change", (event) => {
    if (event.target.id === "showMaterial") {
        const materialType = (event.target.value);
        filterMaterial(materialType);
    } else if (event.target.id === "showAll") {
        makeLegoList(useLegos())
    }
})


const filterMaterial = (whatFilter) => {
    const filterArray = useLegos().filter(singleLego => {
        if (singleLego.Material.includes(whatFilter)) {
            return singleLego;
        }
    })
    makeLegoList(filterArray);
}

const filterLegos = (whatFilter) => {
    const filterArray = useLegos().filter(singleLego => {
        if (singleLego.LegoName.includes(whatFilter)) {
            return singleLego;
        }
    })
    makeLegoList(filterArray);
}

const search = document.querySelector("#searchId")

search.addEventListener("click", (event) => {
    if (event.target.id === "searchId") {
        const search = document.querySelector("#search");
        filterLegosById(search.value)
    }
})

const filterLegosById = (whatFilter) => {
    const filterArray = useLegos().filter(singleLego => {
        if (singleLego.LegoId.includes(whatFilter)) {
            return singleLego;
        }
    })
    makeLegoList(filterArray);
}

const startEIA = () => {
    loadLegos()
        .then(legoArray => {
            makeLegoList(legoArray)
        })

}

startEIA();


/// EventListeners added to make page dyanmic and filter data. 

///The .filter() for the search box will filter out all Legos that correspond to that LegoId. Mulitple Legos will display.