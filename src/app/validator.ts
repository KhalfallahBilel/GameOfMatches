import { FormGroup } from '@angular/forms';

//Voir si les deux noms des joueurs sont identiques
export function namesCheck(nameP1: string, nameP2: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[nameP1];
        const matchingControl = formGroup.controls[nameP2];
        // Error s'ils sont identiques
        if (control.value == matchingControl.value) {
            matchingControl.setErrors({ namesCheck: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}