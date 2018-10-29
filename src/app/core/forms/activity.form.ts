import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Activity } from "../models";

export class ActivityForm extends FormGroup {
  private _id: number;
    constructor(activity?: Activity) {
    if (!activity) { activity = new Activity()}
    super({
      date: new FormControl(activity.date, {validators: Validators.required}),
      description: new FormControl(activity.description),
      hours: new FormControl(activity.hours, {validators: Validators.required})
    });
    this._id = activity.id;
    
  }
  toActivity(hourlyPay: number): Activity {
    return new Activity().deserialize({
      id: this._id,
      date: this.controls['date'].value,
      description: this.controls['description'].value,
      hours: this.controls['hours'].value,
      pay: this.getPay(hourlyPay, this.controls['hours'].value)
    })
  }
  getPay(hourlyPay: number, hours: number): number {
    return hourlyPay * hours;
  }

  static toActivity(forms: ActivityForm[], hourlyPay: number): Activity[] {
    let activities: Activity[] = [];
    forms.forEach(form => activities.push(form.toActivity(hourlyPay)))
    return activities;
  }

}