function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        // collectTaxes() - Increase treasury by  population * taxRate
        collectTaxes() {
            this.treasury += (this.population * this.taxRate)
        },
        // applyGrowth(percentage) - Increase population by given percentage
        applyGrowth(percentage) {
            this.population *= (1 + (percentage / 100))
        },
        // applyRecession(percentage) - Decrease treasury by given percentage
        applyRecession(percentage) {
            this.treasury *= (1 - (percentage / 100))
        }
    }
    return city

}

const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
// console.log(city);

