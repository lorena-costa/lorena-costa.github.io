import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
}
