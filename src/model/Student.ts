export class Student {
  name: string | "";
  surname: string | "";
  date: string | "";
  id: string | "";
  phone : string | ""
  filiary: string | "";
  niveau: string | "";

  constructor(
    name: string,
    surname: string,
    date: string,
    id: string,
    phone : string,
    filiary: string,
    niveau: string
  ) {

     this.name = name
     this.surname = surname
     this.date = date
     this.id = id
     this.phone = phone
     this.filiary = filiary
     this.niveau = niveau
  }
 
}
