import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AllergyReasonForRemoval } from '@mdobject/mdobject';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  form: FormGroup;
  removalReason = AllergyReasonForRemoval;

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.initForm(this.data);
    }
  }

  initForm = (data: any): void => {
    this.form = new FormGroup({
      stopDate: new FormControl(data.stopDate),
      removalReason: new FormControl(''),
    });
  }

  cancel = (): void => {
    this.dialogRef.close();
  }

  submit = (): void => {
    return {
      ...this.data,
      stopDate: this.form.get('stopDate').value,
      removalReason: this.form.get('removalReason').value
    };
  }
}
