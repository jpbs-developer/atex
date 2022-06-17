import { AngularMaterialModule } from './../../../../angular-material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DndDirective } from './../../directives/dnd.directive';
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-drop-file-modal',
  standalone: true,
  imports: [CommonModule, DndDirective, AngularMaterialModule],
  templateUrl: './drag-drop-file-modal.component.html',
  styleUrls: ['./drag-drop-file-modal.component.scss'],
})
export class DragDropFileModalComponent implements OnInit {
  file!: File;
  preview: string = '';

  constructor(
    public dialogRef: MatDialogRef<DragDropFileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  onFileDropped(event: any) {

    
    const reader = new FileReader();
    reader.readAsDataURL(event[0]);
    reader.onload = (result) => {
      this.preview = result.target?.result as string;
    };
  }

  upload(event: any) {
    const file = event.target.files[0];
    this.file = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (result) => {
      this.preview = result.target?.result as string;
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
