import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';  // Firebase modules for Database, Data list and Single object
export interface Member {
    $key: string;
    firstName: string;
    lastName: string;
    email: string
    mobileNumber: Number;
    designation: string;
 }
@Injectable({
  providedIn: 'root'
})

export class CrudService {
  membersRef!: AngularFireList<any>;    // Reference to Member data list, its an Observable
  memberRef!: AngularFireObject<any>;   // Reference to Member object, its an Observable too
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Member
  Addmember(member: Member) {
    this.membersRef.push({
      firstName: member.firstName,
      lastName: member.lastName,
      email: member.email,
      mobileNumber: member.mobileNumber,
      designation: member.designation
    })
  }

  // Fetch Single Member Object
  Getmember(id: string) {
    this.memberRef = this.db.object('members-list/' + id);
    return this.memberRef;
  }

  // Fetch members List
  GetmembersList() {
    this.membersRef = this.db.list('members-list');
    return this.membersRef;
  }  

  // Update Member Object
  Updatemember(member: Member) {
    this.memberRef.update({
      firstName: member.firstName,
      lastName: member.lastName,
      email: member.email,
      mobileNumber: member.mobileNumber,
      designation: member.designation
    })
  }  

  // Delete Member Object
  Deletemember(id: string) { 
    this.memberRef = this.db.object('members-list/'+id);
    this.memberRef.remove();
  }
  
}