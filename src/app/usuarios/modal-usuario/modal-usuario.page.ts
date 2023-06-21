import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { Api } from '../../../services/api';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.page.html',
  styleUrls: ['./modal-usuario.page.scss'],
})
export class ModalUsuarioPage implements OnInit {
  itens: any = [];
  pesquisa: string = "";
  start: number = 0;
  limit: number = 10;

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm(idusuario: string, nome: string) {
    let dados: string[] = [
      idusuario, nome
    ]
    return this.modalCtrl.dismiss(dados, 'confirm');
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

  async mensagemSucesso(msg: string) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
