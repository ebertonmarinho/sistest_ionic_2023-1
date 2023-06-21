import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.page.html',
  styleUrls: ['./edit-usuario.page.scss'],
})
export class EditUsuarioPage implements OnInit {
  idusuario: string = "";
  nome: string = "";
  cpf : string = "";
  num_CNH : string = "";
  validade_CNH : string = "";
  telefone : string = "";
  email : string = "";

  constructor(private activatedRoute: ActivatedRoute,
    private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data:any) => {
      this.idusuario = data.idusuario;
    });
    return new Promise(resolve => {
      let dados = {
        idusuario : this.idusuario,
      }
      this.provider.dadosApi(dados, 'pegar.php').subscribe(
        (data : any) => {
          if(data['itens'] == 0){
            this.mensagemSucesso(data['mensagem']);
          }else{
            for(let item of data['itens']){
              this.nome = item.nome;
              this.cpf = item.cpf;
              this.num_CNH = item.num_CNH;
              this.validade_CNH = item.validade_CNH;
              this.telefone = item.telefone;
              this.email = item.email;
            }
          }
        }
      );
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
      this.provider.dadosApi(dados, 'editar.php').subscribe(
        (data : any) => {
          //console.log("Usuário Cadastrado com sucesso.");
          if(data['erro'] == 0){
            this.mensagemSucesso(data['mensagem']);
            //this.limparCampos();
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

  backtoListUsuarios() {
    this.router.navigate(['list-usuarios']);
  }

}
