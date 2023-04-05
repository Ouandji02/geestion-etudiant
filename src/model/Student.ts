export class Student {
  name: string | "";
  surname: string | "";
  date: string | "";
  matricule: string | "";
  filiary: string | "";
  niveau: string | "";

  constructor(
    name: string,
    surname: string,
    date: string,
    matricule: string,
    filiary: string,
    niveau: string
  ) {

     this.name = name
     this.surname = surname
     this.date = date
     this.matricule = matricule
     this.filiary = filiary
     this.niveau = niveau
     
  }

  fromJson = (json : any) => {
   return new Student(
      json.name,
      json.surname,
      json.date,
      json.matricule,
      json.filiary,
      json.niveau
   )
  }
 
}
