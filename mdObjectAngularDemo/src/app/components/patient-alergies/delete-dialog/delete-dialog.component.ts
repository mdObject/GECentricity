import { Component, Inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllergyReasonForRemoval } from '../../../../../../mdObject/src/enums/enums';

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
      stopDate: new FormControl(data.stopDate, [Validators.required]),
      removalReason: new FormControl('', [Validators.required]),
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
    }
  }
}
