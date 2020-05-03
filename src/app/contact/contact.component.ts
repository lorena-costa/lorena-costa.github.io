import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      _replyto: [null, [Validators.required,Validators.email]],
      message: [null, Validators.required]
    });

  }
  // TODO: Verificar maneira de impedir melhor spam
  send() {
    if(this.form.valid) {
      let url = 'https://formspree.io/lorenacosta.ufu@gmail.com'
      this.http.post(url, this.form.value).subscribe(() => {
        // TODO: Alertar que mensagem foi enviada com sucesso
      })
    } else {
      this.form.markAllAsTouched()
    }
  }

  email(){
    this.copyMessage('lorenacosta.ufu@gmail.com')
  }

  linkedin(){
    window.open("https://www.linkedin.com/in/lorena-fernandes-costa-611202157", "_blank");
  }

  wpp(){
    this.copyMessage('+5534991529928')
  }

  copyMessage(val: string){
    const auxBox = document.createElement('textarea');
    auxBox.style.position = 'fixed';
    auxBox.style.left = '0';
    auxBox.style.top = '0';
    auxBox.style.opacity = '0';
    auxBox.value = val;
    document.body.appendChild(auxBox);
    auxBox.focus();
    auxBox.select();
    document.execCommand('copy');
    document.body.removeChild(auxBox);
  }

  get invalidEmail() {
    return this.form.controls['_replyto'].invalid && this.form.controls['_replyto'].touched
  }
  get invalidName() {
    return this.form.controls['name'].invalid && this.form.controls['name'].touched
  }
  get invalidMessage() {
    return this.form.controls['message'].invalid && this.form.controls['message'].touched
  }
}
