import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Api } from '../../../services/api';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { ModalUsuarioPage } from '../../usuarios/modal-usuario/modal-usuario.page';

@Component({
  selector: 'app-add-carro',
  templateUrl: './add-carro.page.html',
  styleUrls: ['./add-carro.page.scss'],
})
export class AddCarroPage implements OnInit {

  idcarro: string = "---";
  placa: string = "";
  marca_modelo: string = "";
  cor: string = "";
  fk_idusuario: string = "";
  proprietario: string = "";

  message: string = "";

  constructor(private actRoute:ActivatedRoute, 
    private provider: Api,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salvar(){

  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalUsuarioPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      //this.message = `Hello, ${data}!`;
      console.log(this.message);
      this.fk_idusuario = data[0];
      this.proprietario = data[1];
    }
  }

  carregarUsuario(){
    return new Promise(resolve => {
      let dados = {
        idusuario: this.fk_idusuario,
      }
      this.provider.dadosApi(dados, 'pegar.php').subscribe((data: any) => {
        if (data['itens'] == '0') {
            this.mensagemErro(data['mensagem']);
        } else {
          this.proprietario = data['itens'][0].nome;          
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

  backtoCarros(){
    this.router.navigate(['usuarios']);
  }

  limparCampos(){

    this.idcarro = "---";
    this.placa = "";
    this.marca_modelo = "";
    this.cor = "";
    this.fk_idusuario = "";
    this.proprietario = "";

  }

}
