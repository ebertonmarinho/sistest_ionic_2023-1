import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../../services/api';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.page.html',
  styleUrls: ['./list-usuarios.page.scss'],
})
export class ListUsuariosPage implements OnInit {

  itens: any = [];
  pesquisa: string = "";
  start: number = 0;
  limit: number = 10;

  constructor(private router: Router,
    private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  backtoUsuarios() {
    this.router.navigate(['usuarios']);
  }

  carregar() {
    return new Promise(resolve => {
      let dados = {
        pesquisa: this.pesquisa,
        start: this.start,
        limit: this.limit,
      }
      this.provider.dadosApi(dados, 'listar.php').subscribe((data: any) => {
        if (data['itens'] == '0') {
          if(this.start > 0){
            this.start -= this.limit;
            this.carregar();
            this.mensagemErro("Final da paginação!");
          }
        } else {
          this.itens = [];
          for (let item of data['itens']) {
            this.itens.push(item);
          }
        }
      }
      );

    });

  }

  async mensagemErro(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'danger',
    });

    await toast.present();
  }

  paginaAnterior(){
    this.start -= this.limit;
    if(this.start < 0){
      this.start = 0;
      this.mensagemErro("Início da Paginação!");
    }
    this.carregar();
  }

  paginaPosterior(){
    this.start += this.limit;
    this.carregar();
  }

  editarUsuario(idusuario: string){
    this.router.navigate(['/edit-usuario/'+idusuario])
  }

  excluirUsuario(idusuario: string){
    return new Promise(resolve => {
      let dados = {
        idusuario: idusuario,
      }
      this.provider.dadosApi(dados, 'excluir.php').subscribe((data: any) => {
        if (data['erro'] == '1') {
          this.mensagemErro(data['mensagem']);
        } else if(data['erro'] == 0){
          this.mensagemSucesso(data['mensagem']);
          this.carregar();
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

}