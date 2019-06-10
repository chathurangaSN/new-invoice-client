import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  entry:any;
  entries:any;
  
  i:number;
  zip: {
    id: number;
    name: string;
  }
  zips=[
    { id: 1, name: 'sachith' },
    { id: 2, name: 'malith' },
    { id: 3, name: 'lalith' },
    { id: 4, name: 'sajith' }
  ]
  items=[
    'vitz',
    'civic',
    'vezel',
    'q2'
  ]

  entryForm = this.fb.group(
    {
      firstName: ['',Validators.required],
      lastName: [''],

      address: this.fb.group(
        {
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }
      )
    }
  );


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.entryForm.value);
this.entry=this.entryForm.value;
this.entries=[this.entry];
// this.entries.push(this.i++);
console.log(this.entries.pop());
  }
  updateEntry() {
    this.entryForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
