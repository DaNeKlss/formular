import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MyFormGroup, TableData } from "./types/form";
import { FormBy } from "./types/form.type";

type Form = FormBy<MyFormGroup>;

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
})
export class AppComponent {
	public title = "Moje Aplikace";
	public myForm: Form;
	public tableData: TableData[] = [];

	constructor(private readonly fb: FormBuilder) {
		this.myForm = new FormGroup({
			name: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
			surname: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
		});
	}

	public onSubmit(): void {
		if (this.myForm.valid) {
			const formData = this.myForm.value;
			this.tableData.push({
				name: formData.name,
				surname: formData.surname,
			});
			console.log("Odeslaná data:", formData);
		}
	}
}
