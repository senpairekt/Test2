class Shopper {

    constructor(private firstname: string, private lastname: string)
    {
  
    }

    showName() {
        alert(`${this.firstname} ${this.lastname}`);
    }

}