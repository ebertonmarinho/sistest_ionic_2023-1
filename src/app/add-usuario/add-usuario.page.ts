import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Api } from '../../services/api';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  
  idusuario: string = "---";
  nome: string = "";
  cpf : string = "";
  num_CNH : string = "";
  validade_CNH : string = "";
  telefone : string = "";
  email : string = "";

  constructor(private actRoute:ActivatedRoute, 
    private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
     // Act Router para receber e passar parâmetros entre páginas
     this.actRoute.params.subscribe((data:any)=>{
      this.idusuario = "";
      this.nome = data.nome;
      this.cpf = data.cpf;
      this.email = data.email;
      this.num_CNH = data.num_CNH;
      this.validade_CNH = data.validade_CNH;
      this.telefone = data.telefone;
    });
  }
  salvar(){
    return new Promise(resolve => {
      let dados = {
        idusuario : this.idusuario,
        nome : this.nome,
        cpf : this.cpf,
        email : this.email,
        num_CNH : this.num_CNH,
        validade_CNH : this.validade_CNH,
        telefone : this.telefone,
      }
      this.provider.dadosApi(dados, 'inserir.php').subscribe(
        (data : any) => {
          //console.log("Usuário Cadastrado com sucesso.");
          if(data['erro'] == 0){
            this.mensagemSucesso(data['mensagem']);
            this.limparCampos();
          }else if(data['erro'] == 1){
            this.mensagemErro(data['mensagem']);
          }
        }
      );
    });
  }

  async mensagemSucesso(msg: string) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mensagemErro(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'danger',
    });

    await toast.present();
  }

  backtoUsuarios(){
    this.router.navigate(['usuarios']);
  }

  limparCampos(){
    this.nome = "";
    this.cpf = "";
    this.num_CNH  = "";
    this.validade_CNH  = "";
    this.telefone  = "";
    this.email  = "";
  }


}
