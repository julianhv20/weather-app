export class Store{

    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = 'Medellin';
        this.defaultCountry = 'co';
    }

    getLocation(){

        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        }else{
            
            this.city = localStorage.getItem('city')
        }

        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultcountryCode;
        }else{
            
            this.countryCode = localStorage.getItem('city')
        }

        return {
            city: this.city,
            countryCode: this.countryCode,
        }
        
    }

    setLocation(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

}