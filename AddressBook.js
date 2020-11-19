class contact
{
    //constructor
    constructor(...params)
    {
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }
    //getter setters
    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName= firstName;
        else throw "Invalid firstname";
    }
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName= lastName;
        else throw "Invalid lastname";
    }
    get address(){return this._address;}
    set address(address)
    {
        let addressRegex= RegExp('^[A-Za-z0-9]{4,}$');
        if(addressRegex.test(address))
            this._address= address;
        else throw "Invalid address";
    }
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex= RegExp('^[A-Za-z]{4,}$');
        if(cityRegex.test(city))
            this._city= city;
        else throw "Invalid city";
    }
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex= RegExp('^[A-Za-z]{4,}$');
        if(stateRegex.test(state))
            this._state= state;
        else throw "Invalid state";
    }
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex= RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip= zip;
        else throw "Invalid zip";
    }
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneNumberRegex= RegExp('^([0-9]{2}[ ])?[6-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else throw "Invalid phone number";   
    }
    get email(){return this._email;}
    set email(email)
    {
        let emailRegex= RegExp('^[a-zA-Z0-9]+([-.+_#$][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2})?$')
        if(emailRegex.test(email))
            this._email = email;
        else throw "Invalid Email";
    }
    //To string method for displaying contacts
    toString()
    {
        return "First Name: " + this.firstName + " Last Name: " + this.lastName + " Address: " + this.address + " City: " + this.city 
        + " State: " + this.state + " Zipcode: " + this.zip + " Phone Number: " + this.phoneNumber + " email: " + this.email; 
    }
}
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email)
{
    try
    {
        let newcontact = new contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        if(AddressBook.find(person => person.firstName == newcontact.firstName && person.lastName==newcontact.lastName))
            throw "Details you are entering already exists";
        else
        {
            AddressBook.push(newcontact);        
        }
    }
    catch(e)
    {
        console.error(e);
    }
}
function EditContact(firstName, lastName, address, city, state)
{
    AddressBook.filter(contact=>contact.firstName== firstName && contact.lastName == lastName ).forEach(contact=>{contact.address = address ; contact.city= city ; contact.state= state});
}
function DeleteContact(firstName, lastName)
{
    for(let index = 0; index < AddressBook.length; index++)
    {
        if(AddressBook[index].firstName == firstName && AddressBook[index].lastName==lastName)
        {
            AddressBook.splice(index,1);
        }
    }   
}
function Main()
{
    console.log("Welcome to address book");
    //Adding contacts
    console.log("-------------Adding contact-----------------");
    AddContact("Siddhi","Seth","GopalVihar","Jabalpur","MadhyaPradesh","562562","8596585695","siddhi@gmail.com");
    AddContact("Samriddhi","Seth","GopalVihar","Jabalpur","MadhyaPradesh","562562","8596856695","samriddhi@gmail.com");
    AddContact("Prashant","Seth","GopalVihar","Jabalpur","MadhyaPradesh","562562","8596584753","prashant@gmail.com");
    AddContact("Siddhi","Seth","GopalVihar","Jabalpur","MadhyaPradesh","562562","8596585695","siddhi@gmail.com");
    //Printing Array
    AddressBook.forEach(contact=>console.log(contact.toString()));
    //Editing Contact by name
    console.log("-------------Editing contact-----------------");
    EditContact("Siddhi", "Seth", "DamohNaka", "Bangalore", "Karnataka");
    AddressBook.forEach(contact=>console.log(contact.toString()));
    //Deleting contact
    console.log("-------------Deleting contact-----------------");
    DeleteContact("Siddhi", "Seth");
    AddressBook.forEach(contact=>console.log(contact.toString()));
    //Get Number of contacts
    function Count(count, contact)
    {
        return ++count;
    }
    let contactCount= AddressBook.reduce(Count, 0);
    console.log("Number of contact: " + contactCount);
}
let AddressBook = new Array();
Main();
