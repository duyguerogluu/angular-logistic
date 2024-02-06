import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//Menu Bar
export interface Menu {
    headTitle?: string,
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    badgeClass?: string;
    active?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root'
})

export class NavService implements OnDestroy {

    private unsubscriber: Subject<any> = new Subject();
    public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

    public megaMenu: boolean = false;
    public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
    public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
    public fullScreen: boolean = false;
    constructor(
        private router: Router
    ) {
        this.setScreenWidth(window.innerWidth);
        fromEvent(window, 'resize').pipe(
            debounceTime(1000),
            takeUntil(this.unsubscriber)
        ).subscribe((evt: any) => {
            this.setScreenWidth(evt.target.innerWidth);
            if (evt.target.innerWidth < 991) {
                this.collapseSidebar = false;
                this.megaMenu = false;
            }
            if (evt.target.innerWidth < 1199) {
                this.megaMenuCollapse = true;
            }
        });
        if (window.innerWidth < 991) {
            this.router.events.subscribe(event => {
                this.collapseSidebar = false;
                this.megaMenu = false;
            });
        }
    }


    ngOnDestroy() {
        this.unsubscriber.next(true);
        this.unsubscriber.complete();
    }
    
    private setScreenWidth(width: number): void {
        this.screenWidth.next(width);
    }
    
    MENUITEMS: Menu[] = [ 

        {
            title: '', type: 'link', icon: 'mdi-access-point', badgeType: 'danger', badgeValue: 'Hot', active: false,
            
        },//boşluk kalsın diye ekledim


        {
            title: 'Uluslararası Kara Nakliye', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
            children: [
                {  
                    title: 'Tanımlamalar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                    path: '/uluslararasi-karanakliye/tanimlamalar',
                }
            ]
        },//Uluslararası Kara Nakliye


        {
            title: 'YurtIciKaraNakliye', type: 'link', icon: 'mdi-access-point', badgeType: 'danger', badgeValue: '3', active: false,
            children: [
            {  
                    title: 'Operasyon Yönetimi', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                    children: [
                        { title: 'Yük Siparişleri', type: 'sub',
                          children: [
                            {
                                path: '/YurtIciKaraNakliye/YukSiparisleri', title:'Yurtiçi Genel', type:'link'
                            }
                          ]
                        },
                        { title: 'Proje Yük Siparişleri', type: 'sub',
                        children: [
                            {
                                path: '/YurtIciKaraNakliye/ProjeYukSiparisleri/Aktarmali', title:'Aktarmalı', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeYukSiparisleri/ArabaTasima', title:'Araba Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeYukSiparisleri/Kargo', title:'Kargo', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeYukSiparisleri/Madencilik', title:'Madencilik', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeYukSiparisleri/TekstilTasima', title:'Tekstil Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeYukSiparisleri/YurticiGenel', title:'Yurtiçi Genel', type:'link',
                            },
                          ]
                        },
                        { title: 'Pozisyon Planlama', type: 'sub',
                        children: [
                            {
                                path: '/YurtIciKaraNakliye/PozisyonPlanlama/Aktarmali', title:'Aktarmalı', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/PozisyonPlanlama/ArabaTasima', title:'Araba Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/PozisyonPlanlama/Kargo', title:'Kargo', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/PozisyonPlanlama/Madencilik', title:'Madencilik', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/PozisyonPlanlama/TekstilTasima', title:'Tekstil Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/PozisyonPlanlama/YurticiGenel', title:'Yurtiçi Genel', type:'link',
                            },
                          ]
                        },
                        { title: 'Proje Pozisyon Planlama', type: 'sub',
                        children: [
                            {
                                path: '/YurtIciKaraNakliye/ProjePozisyonPlanlama/Aktarmali', title:'Aktarmalı', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjePozisyonPlanlama/ArabaTasima', title:'Araba Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjePozisyonPlanlama/Kargo', title:'Kargo', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjePozisyonPlanlama/Madencilik', title:'Madencilik', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjePozisyonPlanlama/TekstilTasima', title:'Tekstil Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjePozisyonPlanlama/YurticiGenel', title:'Yurtiçi Genel', type:'link',
                            },
                          ]
                        },
                        { title: 'Yükleme Boşaltma Siparişleri', type: 'sub',
                        children: [
                            {
                                path: '/YurtIciKaraNakliye/YuklemeBosaltmaSiparisleri/Aktarmali', title:'Aktarmalı', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/YuklemeBosaltmaSiparisleri/ArabaTasima', title:'Araba Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/YuklemeBosaltmaSiparisleri/Kargo', title:'Kargo', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/YuklemeBosaltmaSiparisleri/Madencilik', title:'Madencilik', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/YuklemeBosaltmaSiparisleri/TekstilTasima', title:'Tekstil Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/YuklemeBosaltmaSiparisleri/YurticiGenel', title:'Yurtiçi Genel', type:'link',
                            },
                          ]
                        },
                        { title: 'Proje Havuz Siparişleri', type: 'sub',
                        children: [
                            {
                                path: '/YurtIciKaraNakliye/ProjeHavuzSiparisleri/Aktarmali', title:'Aktarmalı', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeHavuzSiparisleri/ArabaTasima', title:'Araba Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeHavuzSiparisleri/Kargo', title:'Kargo', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeHavuzSiparisleri/Madencilik', title:'Madencilik', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeHavuzSiparisleri/TekstilTasima', title:'Tekstil Taşıma', type:'link',
                            },
                            {
                                path: '/YurtIciKaraNakliye/ProjeHavuzSiparisleri/YurticiGenel', title:'Yurtiçi Genel', type:'link',
                            },
                          ]
                        },
                        { title: 'Proje Özel Siparişleri', type: 'link',},
                             ]
            }, //Operasyon Yönetimi
            {
                path: '/YurtIciKaraNakliye/YukSiparisleri', title: 'Faturalama', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   
            },//Faturalama
            {
                title: 'Sürücü ve Sefer Hesabı', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/YurtIciKaraNakliye/SurucuSeferHesabı/Seferler', title: 'Seferler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/SurucuSeferHesabı/SurucuHesaplari', title: 'Sürücü Hesapları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/SurucuSeferHesabı/AracHesaplari', title: 'Araç Hesapları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/SurucuSeferHesabı/PozisyonlarHesabi', title: 'Pozisyonlar Hesabı', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/SurucuSeferHesabı/SurucuBorcAlacakRaporu', title: 'Sürücü Borç Alacak Raporu', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                  
                ]
            },//Sürücü ve Sefer Hesabı
            {
                title: 'Anlaşma Yönetimi', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                children:[
                    { path: '/YurtIciKaraNakliye/AnlasmaYonetimi/AnlasmaSemasi', title: 'Anlaşma Şeması', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/AnlasmaYonetimi/AnlasmaSemasiProje', title: 'Anlaşma Şeması-Proje', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/AnlasmaYonetimi/Eslestirme', title: 'Eşleştirme', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/AnlasmaYonetimi/Anlasmalar', title: 'Anlaşmalar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/AnlasmaYonetimi/TopluAnlasmaGuncelleme', title: 'Toplu Anlaşma Güncelleme', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                  
                ]
            },// Anlaşma Yönetimi
            {
                title: 'Tanimlamalar', type: 'sub', icon: 'home', active: false,
                   children:[
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/MusteriTedarikci', title: 'MusteriTedarikci', type: 'link'},
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/Treyler', title: 'Treyler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/Arac', title: 'Araç', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/Surucu', title: 'Sürücü', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/Guzergah', title: 'Güzergah', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/Sehirler', title: 'Şehirler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/Ilceler', title: 'İlçeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/Semtler', title: 'Semtler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/SabitTanim', title: 'Sabit Tanım', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/DovizTuru', title: 'Döviz Türü', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/DovizKurlari', title: 'Döviz Kurları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/HizmetKalemi', title: 'Hizmet Kalemi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/Subeler', title: 'Şubeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/SubeKullaniciEslestirme', title: 'Şube Kullanıcı Eşleştirme', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/LokasyonEslestirmeleri', title: 'Lokasyon Eşleştirmeleri', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/SubeBolgeTanimi', title: 'Şube Bölge Tanımı', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/BolgeTanimlari', title: 'Bölge Tanımları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/SiparisDurumlari', title: 'Sipariş Durumları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/ProjeSubeOzelKodlari', title: 'Proje Şube Özel Kodları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/TeslimYeriTanimlari', title: 'Teslim Yeri Tanımları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/SabitGiderGruplari', title: 'Sabit Gider Grupları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/TirKarnesi', title: 'Tır Karnesi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/YurtiçiKartlari', title: 'Yurtiçi Kartları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/YurtiçiUrunGruplari', title: 'Yurtiçi Ürün Grupları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/YakitOranlari', title: 'Yakıt Oranları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/YetkiliPErsonelTanimlari', title: 'Yetkili Personel Tanımları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/YurtIciKaraNakliye/Tanimlamalar/VarisBolgeleri', title: 'Varış Bölgeleri', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                   ]
            },//Tanımlamalar
            {
                title: 'Filo Yönetimi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Filo Yönetimi
            {
                title: 'Raporlama', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Raporlama
            ]
        },//YurtiçiKara Nakliye

        {
            title: 'Uluslararası Kara Nakliye', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
            children: [
                {  
                    title: 'Sipariş İşlemleri', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                    children: [
                        { path: '/UluslararasıKaraNakliye/SİparisIslemleri/IhracatSiparisleri',title: 'İhracat Siparişleri', type: 'link', }, 
                        { path: '/UluslararasıKaraNakliye/SİparisIslemleri/IthalatSiparisleri',title: 'İthalat Siparişleri', type: 'link', }, 
                   
                    ]
                }, //Sipariş İşlemleri
                {
                  title: 'Pozisyon İşlemleri', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   
                },//Pozisyon İşlemleri
                {
                title: 'Sürücü ve Sefer Hesabı', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/UluslararasıKaraNakliye/SurucuSeferHesabı/Seferler', title: 'Seferler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasıKaraNakliye/SurucuSeferHesabı/SurucuHesaplari', title: 'Sürücü Hesapları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasıKaraNakliye/SurucuSeferHesabı/AracHesaplari', title: 'Araç Hesapları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasıKaraNakliye/SurucuSeferHesabı/PozisyonlarHesabi', title: 'Pozisyonlar Hesabı', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasıKaraNakliye/SurucuSeferHesabı/SurucuBorcAlacakRaporu', title: 'Sürücü Borç Alacak Raporu', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                  
                   ]
                },//Sürücü ve Sefer Hesabı
                {
                title: 'Anlaşma Yönetimi', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/UluslararasıKaraNakliye/AnlasmaYonetimi/AnlasmaSemasi', title: 'Anlaşma Şeması', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                   { path: '/UluslararasıKaraNakliye/AnlasmaYonetimi/AnlasmaSemasiProje', title: 'Anlaşma Şeması-Proje', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                   { path: '/UluslararasıKaraNakliye/AnlasmaYonetimi/Eslestirme', title: 'Eşleştirme', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                   { path: '/UluslararasıKaraNakliye/AnlasmaYonetimi/Anlasmalar', title: 'Anlaşmalar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                   { path: '/UluslararasıKaraNakliye/AnlasmaYonetimi/TopluAnlasmaGuncelleme', title: 'Toplu Anlaşma Güncelleme', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                 ]
                },//Anlaşma Yönetimi
                {
                title: 'Tanımlamalar', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/MusteriTedarikci', title: 'Müşteri Tedarikçi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Treyler', title: 'Treyler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Arac', title: 'Araç', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Surucu', title: 'Sürücü', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Guzergah', title: 'Güzergah', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Ulkeler', title: 'Ülkeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Sehirler', title: 'Şehirler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Ilceler', title: 'İlçeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Semtler', title: 'Semtler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/SabitTanim', title: 'Sabit Tanım', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/DovizTuru', title: 'Döviz Türü', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/DovizKurlari', title: 'Döviz Kurları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/HizmetKalemi', title: 'Hizmet Kalemi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Subeler', title: 'Şubeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/SubeKullaniciEslestirme', title: 'Şube Kullanıcı Eşleştirme', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Incoterms', title: 'Incoterms', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/UrunGruplari', title: 'Ürün Grupları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/UrunKartlari', title: 'Ürün Kartları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/GumrukAlanlari', title: 'Gümrük Alanları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                     { path: '/UluslararasiKaraNakliye/Tanimlamalar/SabitGiderGruplari', title: 'Sabit Gider Grupları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/TirKarnesi', title: 'Tır Karnesi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/Antrepolar', title: 'Antrepolar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/YakitOranlari', title: 'Yakıt Oranları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Tanimlamalar/GondericiAliciTanimlari', title: 'Gönderici Alıcı Tanımları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                  
                   ]
                },//Tanımlamalar
                {
                title: 'Raporlar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
                },//Raporlar
                {
                title: 'Faturalama', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/UluslararasiKaraNakliye/Faturalama/AlısFaturasi', title: 'Alış Faturası', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/SatisFaturasi', title: 'Satış Faturası', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/IhracatAlisFaturalari', title: 'İhracat Alış Faturaları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/IthalatAlisFaturalari', title: 'İthalat Alış Faturaları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/IhracatSatisFaturalari', title: 'İhracat Satış Faturaları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/IthalatSatisFaturalari', title: 'İthalat Satış Faturaları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/IhracatTopluFaturalamaYuk', title: 'İhracat Toplu Faturalama(Yük)', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/IthalatTopluFaturalamaYuk', title: 'İthalat Toplu Faturalama(Yük)', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/IhracatTopluFaturalamaPozisyon', title: 'İhracat Toplu Faturalama(Pozisyon)', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiKaraNakliye/Faturalama/IthalatTopluFaturalamaPozisyon', title: 'İthalat Toplu Faturalama(Pozisyon)', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                  
                   ]
                },//Faturalama
            ]
        },//Uluslararası Kara Nakliye

        {
            title: 'Uluslararası Deniz Nakliye', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
            children: [
            {  
                    title: 'Sipariş İşlemleri', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                    children: [
                        { path: '/YurtIciKaraNakliye/OperasyonYonetimi/YukSiparisleri',title: 'Yük Siparişleri', type: 'sub', }, 
                    ]
            }, //Sipariş İşlemleri
            {
               title: 'Faturalama', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   
            },//Faturalama
            {
                title: 'Tanımlamalar', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/MusteriTedarikci', title: 'Müşteri Tedarikçi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/Ulkeler', title: 'Ülkeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/Sehirler', title: 'Şehirler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/Limanlar', title: 'Limanlar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/SabitTanim', title: 'Sabit Tanım', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/DovizTuru', title: 'Döviz Türü', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/DovizKurlari', title: 'Döviz Kurları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/HizmetKalemi', title: 'Hizmet Kalemi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/Subeler', title: 'Şubeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/SubeKullaniciEslestirme', title: 'Şube Kullanıcı Eşleştirme', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/Incoterms', title: 'Incoterms', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/KonteynerTipleri', title: 'Konteyner Tipleri', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/Gemiler', title: 'Gemiler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/TasimaHatlari', title: 'Taşıma Hatları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/UrunGruplari', title: 'Ürün Grupları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/UrunKartlari', title: 'Ürün Kartları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/GumrukAlanlari', title: 'Gümrük Alanları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/Seferler', title: 'Seferler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/UluslararasiDenizNakliye/Tanimlamalar/YetkiliPersonelTanimlari', title: 'Yetkili Personel Tanımları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                      
                   ]
            },//Tanımlamalar
            {
                title: 'Raporlamalar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Raporlamalar
            {
                title: 'Süreç Ayarları', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/SurecAyarlari/Tanimlamalar/AdimTanimlari', title: 'Adım Tanımları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/SurecAyarlari/Tanimlamalar/IhracatSurecPlanlama', title: 'İhracat Süreç Planlama', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/SurecAyarlari/Tanimlamalar/IthalatSurecPlanlama', title: 'İthalat Süreç Planlama', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/SurecAyarlari/Tanimlamalar/TransitSurecPlanlama', title: 'Transit Süreç Planlama', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                   
                   ]
            },//Süreç Ayarları
            {
                title: 'Alış Fiyatları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Alış Fiyatları
            {
                title: 'Konşimento', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Konşimento
            {
                title: 'Süreç Yönetimi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Süreç Yönetimi
            {
                title: 'Satış Fiyatları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Satış Fiyatları
            ]
        },//Uluslararası Deniz Nakliye

        {

            title: 'Depo ve Antrepo', type: 'link', icon: '', badgeType: 'danger', badgeValue: 'Hot', active: false,
            children: [
            {  
                 title: 'Operasyon Yönetimi', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                 children: [
                    { path: '/DepoveAntrepo/OperasyonYonetimi/DepoBazliIsEmirleri',title: 'Depo Bazlı İş Emirleri', type: 'link', }, 
                    { path: '/DepoveAntrepo/OperasyonYonetimi/DepoBazliSiparisler',title: 'Depo Bazlı Siparişler', type: 'link', }, 
                  
                    ]
            }, //Operasyon Yönetimi
            {
               title: 'Faturalama', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
               children: [
                { path: '/DepoveAntrepo/Faturalama/AlisFaturalari',title: 'Depo Bazlı İş Emirleri', type: 'sub', }, 
                { path: '/DepoveAntrepo/Faturalama/SatisFaturalari',title: 'Satış Faturaları', type: 'sub', }, 
                { path: '/DepoveAntrepo/Faturalama/DepoBazliAlisFaturalari',title: 'Depo Bazlı Alış Faturaları', type: 'link', }, 
                { path: '/DepoveAntrepo/Faturalama/DepoBazliSatisFaturalari',title: 'Depo Bazlı Satış Faturaları', type: 'link', }, 
                { path: '/DepoveAntrepo/Faturalama/DepoBazliTopluFaturalama',title: 'Depo Bazlı Toplu Faturalama', type: 'link', }, 
               
            ]    
            }, // Faturalama
            {
                title: 'Anlaşma Yönetimi', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                { path: '/DepoveAntrepo/AnlasmaYonetimi/AnlasmaTemasi',title: 'Anlaşma Teması', type: 'link', }, 
                { path: '/DepoveAntrepo/AnlasmaYonetimi/AnlasmaSemasi',title: 'Anlaşma Şeması', type: 'link', }, 
                { path: '/DepoveAntrepo/AnlasmaYonetimi/AnlasmaSemasiDepo',title: 'Anlaşma Şeması Depo', type: 'link', }, 
                { path: '/DepoveAntrepo/AnlasmaYonetimi/Eslestirme',title: 'Eşleştirme', type: 'link', }, 
                { path: '/DepoveAntrepo/AnlasmaYonetimi/Anlasmalar',title: 'Anlaşmalar', type: 'link', }, 
             
                   ]
            },//Anlaşma Yönetimi
            {
                title: 'Tanımlamalar', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/DepoveAntrepo/Tanimlamalar/Depolar', title: 'Depolar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/UrunKartlari', title: 'Ürün Kartları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/MusteriTedarikci', title: 'Müşteri Tedarikçi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/Sehirler', title: 'Şehirler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/İlceler', title: 'İlçeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/Sehirler', title: 'Şehirler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/Ilceler', title: 'İlçeler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/Semtler', title: 'Semtler', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/SabitTanim', title: 'Sabit Tanım', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/DovizTuru', title: 'Döviz Türü', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/DovizKurlari', title: 'Döviz Kurları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/HizmetKalemi', title: 'Hizmet Kalemi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/UrunGruplari', title: 'Ürün Grupları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/DepoKullaniciYerleri', title: 'Depo Kullanıcı Yerleri', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Tanimlamalar/DepoMusterileri', title: 'Depo Müşterileri', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                   
                   ]
            },// Tanımlamalar
            {
                title: 'Raporlar', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/DepoveAntrepo/Raporlar/DepoStokHareketRaporu', title: 'Depo Stok Hareket Raporu', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Raporlar/DepoStokRaporu', title: 'Depo Stok Raporu', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    { path: '/DepoveAntrepo/Raporlar/DepoStokSeriNumarasi', title: 'Depo Stok Seri Numarası', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false },
                    
                   ]
            },//Raporlar
           
            ]
        },//Depo ve Antrepo

        {
            title: 'Konteyner Saha Takip', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
            children: [
            {  
                    title: 'Rezervasyon İşlemleri', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                    children: [
                        { path: '/KonteynerSahaTakip/RezervasyonIslemleri/KonteynerGiris',title: 'Konteyner Giriş', type: 'link', }, 
                        { path: '/KonteynerSahaTakip/RezervasyonIslemleri/KonteynerCikis',title: 'Konteyner Çıkış', type: 'link', }, 
                   
                    ]
            }, //Rezervasyon İşlemleri
            {
               title: 'Konteyner İşlemleri', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
               children: [
                { path: '/KonteynerSahaTakip/KonteynerIslemleri/KonteynerYonetim',title: 'Konteyner Yönetim', type: 'link', }, 
                { path: '/KonteynerSahaTakip/KonteynerIslemleri/BakimOnarim',title: 'Bakım Onarım', type: 'link', }, 
                { path: '/KonteynerSahaTakip/KonteynerIslemleri/KonteynerDepo',title: 'Konteyner Depo', type: 'link', }, 
           
            ]
            },//Konteyner İşlemleri
            {
                title: 'Tanımlamalar', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                   { path: '/KonteynerSahaTakip/Tanimlamar/MusteriTedarikci',title: 'Müşteri Tedarikçi', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/Tanimlamar/SahaAlanTanimlari',title: 'Saha Alan Tanımları', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/Tanimlamar/SabitTanim',title: 'Sabit Tanım', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/Tanimlamar/DovizTuru',title: 'Döviz Türü', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/Tanimlamar/HizmetKalemi',title: 'Hizmet Kalemi', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/Tanimlamar/KonteynerHasarTurleri',title: 'Konteyner Hasar Türleri', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/Tanimlamar/KonteynerTipleri',title: 'Konteyner Tipleri', type: 'link', }, 
                   
                ]
            },//Tanımlamalar
            {
                title: 'Raporlama', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/KonteynerSahaTakip/Raporlama/Raporlar',title: 'Raporlar', type: 'link', }, 
              
                   ]
            },//Raporlama
            {
                title: 'Faturalama', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    ]
            },//Faturalama
            {
                title: 'Anlaşma Yönetimi', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                   { path: '/KonteynerSahaTakip/AnlasmaYonetimi/AnlasmaSemasi',title: 'Anlaşma Şeması', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/AnlasmaYonetimi/AnlasmaSemasiDepo',title: 'Anlaşma Şeması Depo', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/AnlasmaYonetimi/Eslestirme',title: 'Eşleştirme', type: 'link', }, 
                   { path: '/KonteynerSahaTakip/AnlasmaYonetimi/Anlasmalar',title: 'Anlaşmalar', type: 'link', }, 
                ]
            },//Anlaşma Yönetimi
            {
                title: 'Fiyatlar', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    {
                        path: '/KonteynerSahaTakip/KonteynerIslemleri/KonteynerDepo',title: 'Alış Fiyatları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                    },
                    {
                        path: '/KonteynerSahaTakip/KonteynerIslemleri/KonteynerDepo',title: 'Satış Fiyatları', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   },
                   ]
            },//Fiyatlar
           
            ]
        },//Konteyner ve Saha Takip 


        {
            title: 'Ön Muhasebe', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
            children: [
            {  
                    title: 'İşlemler', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                    children: [
                        { path: '/OnMuhasebe/Islemler/AnlasmaSemasi',title: 'Anlaşma Şeması', type: 'link', }, 
                        { path: '/OnMuhasebe/Islemler/AnlasmaSemasiDepo',title: 'Anlaşma Şeması Depo', type: 'link', }, 
                        { path: '/OnMuhasebe/Islemler/Eslestirme',title: 'Eşleştirme', type: 'link', }, 
                        { path: '/OnMuhasebe/Islemler/Anlasmalar',title: 'Anlaşmalar', type: 'link', }, 
                   
                    ]
            }, //İşlemler
            {
               title: 'Raporlar', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
               children: [
                { path: '/OnMuhasebe/Raporlar/MusteriBorcAlacakRaporu',title: 'Anlaşma Şeması', type: 'link', }, 
                { path: '/OnMuhasebe/Raporlar/KasaEkstresi',title: 'Anlaşma Şeması Depo', type: 'link', }, 
                { path: '/OnMuhasebe/Raporlar/Raporlar',title: 'Eşleştirme', type: 'sub',
                children: [
                    { path: '/OnMuhasebe/Raporlar/Raporlar/BABSFormu',title: 'BA BS Formu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/BABSFormuRaporu',title: 'BA BS Formu Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/BankaBakiyeRaporu',title: 'Eşleştirme', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/BankaHareketRaporu',title: 'Banka Hareket Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/BorcAlacakTakipRaporu',title: 'Borç Alacak Takip Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/BorcYaslandirmaRaporu',title: 'Borç Yaşlandırma Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/CekVadeRaporu',title: 'Çek Vade Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/FaturaVadeRaporu',title: 'FaturaVadeRaporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/HesapOzetiRaporu',title: 'Hesap Özeti Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/HizmetKalemiBazliBorc',title: 'Hizmet Kalemi Bazlı Borç', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/AlacakRaporu',title: 'Alacak Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/HizmetKalemiBocAlacak',title: 'Hizmet Kalemi Borç Alacak', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/BakiyeRaporu',title: 'Bakiye Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/KiralikAracKarlilikRaporu',title: 'Kiralık Araç Karlılık Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/KrediKartiBorcAlacak',title: 'Kredi Kartı Borç Alacak', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/MusteriBazliGuncelBakiyeRaporu',title: 'Müşteri Bazlı Güncel Bakiye Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/MusteriBorcAlacakOdeme',title: 'Müşteri Borç Alacak Ödeme', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/TahsilatRaporuYeni',title: 'Tahsilat Raporu Yeni', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/VadeGunuRaporu',title: 'Vade Günü Raporu', type: 'link', }, 
                    { path: '/OnMuhasebe/Raporlar/Raporlar/YaslandirmaRaporu',title: 'Yaşlandırma Raporu', type: 'link', }, 
                    
                ]
            }, 
               
            ]
            },//Raporlar
            {
                title: 'Faturalar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Faturalar
           
            ]
        },//Ön Muhasebe


        {
            title: 'Pazarlama Satış', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
            children: [
            {  
                    title: 'Görüşmeler', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                    children: [
                        { path: '/PazarlamaSatis/Gorusmeler/YurticiKaraModulu',title: 'Yurtiçi Kara Modülü', type: 'sub', }, 
                        { path: '/PazarlamaSatis/Gorusmeler/UluslararasiKaraModulu',title: 'Uluslararası Kara Modülü', type: 'sub', }, 
                        { path: '/PazarlamaSatis/Gorusmeler/UluslararasiDenizModulu',title: 'Uluslararası Deniz Modülü', type: 'sub', }, 
                        { path: '/PazarlamaSatis/Gorusmeler/DepoModulu',title: 'Depo Modülü', type: 'sub', }, 
                        { path: '/PazarlamaSatis/Gorusmeler/DemirYoluModulu',title: 'Demir Yolu Modülü', type: 'sub', }, 
                  
                    ]
            }, //Görüşmeler
            {
               title: 'Teklif Verme', type: 'sub', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
               children: [
                { path: '/PazarlamaSatis/TeklifVerme/YurticiKaraModulu',title: 'Yurtiçi Kara Modülü', type: 'sub', }, 
                { path: '/PazarlamaSatis/TeklifVerme/UluslararasiKaraModulu',title: 'Uluslararası Kara Modülü', type: 'sub', }, 
                { path: '/PazarlamaSatis/TeklifVerme/UluslararasiDenizModulu',title: 'Uluslararası Deniz Modülü', type: 'sub', }, 
                { path: '/PazarlamaSatis/TeklifVerme/DepoModulu',title: 'Depo Modülü', type: 'sub', }, 
                { path: '/PazarlamaSatis/TeklifVerme/DemirYoluModulu',title: 'Demir Yolu Modülü', type: 'sub', }, 
          
            ]
            },//Teklif Verme
            {
                title: 'Tanımlamalar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[
                    { path: '/PazarlamaSatis/Tanimlamalar/MusteriTedarikci',title: 'Müşteri Tedarikçiç', type: 'sub', }, 
                    { path: '/PazarlamaSatis/Tanimlamalar/YetkiliPeronelTanaimlari',title: 'Yetkili Personel Tanımları', type: 'sub', }, 
                    { path: '/PazarlamaSatis/Tanimlamalar/SabitTanim',title: 'Sabit Tanım', type: 'sub', }, 
                    { path: '/PazarlamaSatis/Tanimlamalar/TeklfMetinSablonlari',title: 'Teklif Metin Şablonları', type: 'sub', }, 
                    { path: '/PazarlamaSatis/Tanimlamalar/HizmetKalemi',title: 'Hizmet Kalemi', type: 'sub', }, 
          
                   ]
            },//Tanımlamalar
            {
                title: 'Raporlar', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false,
                   children:[]
            },//Raporlar
           
            ]
        },//Pazarlama Satış






        //Eskiler
        { headTitle: 'MAIN' },
        {
            path: '/dashboard', title: 'Dashboard', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false
        },
        { headTitle: 'WIDGETS' },
        {
            path: '/widgets', title: 'Widgets', type: 'link', icon: 'grid', badgeType: 'danger', badgeValue: 'Hot', active: false
        },

        { headTitle: 'ELEMENTS' },
        {
            title: 'Components', icon: 'database', type: 'sub', active: false,
            children: [
                { path: '/components/default-calendar', title: 'Default Calendar', type: 'link' },
                { path: '/components/counters', title: 'Counters', type: 'link' },
                { path: '/components/notifications', title: 'Notifications', type: 'link' },
                { path: '/components/sweet-alerts', title: 'Sweet Alerts', type: 'link' },
                { path: '/components/cards-design', title: 'Cards Design', type: 'link' },
                { path: '/components/default-chat', title: 'Default Chat', type: 'link' },
                { path: '/components/range-slider', title: 'Range slider', type: 'link' },
                { path: '/components/content-scrollbar', title: 'Content Scrollbar', type: 'link' },
                { path: '/components/loaders', title: 'Loaders', type: 'link' },
                { path: '/components/rating', title: 'Rating', type: 'link' },
                { path: '/components/timeline', title: 'Time Line', type: 'link' },
                { path: '/components/treeview', title: 'Treeview', type: 'link' },
            ]
        },

        {
            title: 'Elements', icon: 'package', type: 'sub', active: false,
            children: [
                { path: '/elements/alerts', title: 'Alerts', type: 'link' },
                { path: '/elements/avatar-square', title: 'Avatars Square', type: 'link' },
                { path: '/elements/avatar-rounded', title: 'Avatars Rounded', type: 'link' },
                { path: '/elements/avatar-radius', title: 'Avatars Radius', type: 'link' },
                { path: '/elements/badges', title: 'Badges', type: 'link' },
                { path: '/elements/breadcrumbs', title: 'Breadcrumb', type: 'link' },
                { path: '/elements/buttons', title: 'Buttons', type: 'link' },
                { path: '/elements/colors', title: 'Colors', type: 'link' },
                { path: '/elements/dropdowns', title: 'Dropdowns', type: 'link' },
                { path: '/elements/pagination', title: 'Pagination', type: 'link' },
                { path: '/elements/navigation', title: 'Navigation', type: 'link' },
                { path: '/elements/typography', title: 'Typography', type: 'link' },
                { path: '/elements/panels', title: 'Panel', type: 'link' },
                { path: '/elements/list', title: 'List', type: 'link' },
                { path: '/elements/tags', title: 'Tags', type: 'link' },
                { path: '/elements/thumbnails', title: 'Thumbnails', type: 'link' },

            ]
        },
        
        {
            title: 'Advanced Elements', icon: 'file', type: 'sub', active: false,
            children: [
                { path: '/advanced-elements/accordion', title: 'Accordion', type: 'link' },
                { path: '/advanced-elements/carousel', title: 'Carousel', type: 'link' },
                { path: '/advanced-elements/media-object', title: 'Media Object', type: 'link' },
                { path: '/advanced-elements/tabs', title: 'Tabs', type: 'link' },
                { path: '/advanced-elements/modal', title: 'Modal', type: 'link' },
                { path: '/advanced-elements/tooltip-popover', title: 'Tooltip and Popover', type: 'link' },
                { path: '/advanced-elements/progress', title: 'Progress', type: 'link' },
                { path: '/advanced-elements/user-list', title: 'User List', type: 'link' },
                { path: '/advanced-elements/headers', title: 'Headers', type: 'link' },
                { path: '/advanced-elements/footers', title: 'Footers', type: 'link' },
                { path: '/advanced-elements/search', title: 'Search', type: 'link' },
                { path: '/advanced-elements/crypto-currencies', title: 'Crypto Currencies', type: 'link' },

            ]
        },

        { headTitle: 'CHARTS & TABLES' },
        {
            title: 'Charts', icon: 'pie-chart', type: 'sub', badgeType: 'success', badgeValue: '6', active: false,
            children: [
                { path: '/charts/apex-charts', title: 'Apex Charts', type: 'link' },
                { path: '/charts/chartjs', title: 'ChartJS', type: 'link' },
                { path: '/charts/chartist', title: 'Chartist', type: 'link' },
                { path: '/charts/echarts', title: 'ECharts', type: 'link' },
                
            ]
        },

        {
            title: 'Tables', icon: 'clipboard',  badgeValue: '3', badgeClass: 'secondary', type: 'sub', active: false,
            children: [
                { path: '/tables/default-tables', title: 'Default Table', type: 'link' },
                { path: '/tables/data-tables', title: 'Data Table', type: 'link' }
            ]
        },
        { headTitle: 'PAGES' },
        {
            title: 'Pages', icon: 'layers', type: 'sub', active: false,
            children: [
                { path: '/pages/profile', title: 'Profile', type: 'link' },
                { path: '/pages/edit-profile', title: 'Edit Profile', type: 'link' },
                { path: '/pages/about-company', title: 'About Company', type: 'link' },
                { path: '/pages/mail-inbox', title: 'Mail Inbox', type: 'link' },
                { path: '/pages/mail-compose', title: 'Mail Compose', type: 'link' },
                { path: '/pages/gallery', title: 'Gallery', type: 'link' },
                { path: '/pages/services', title: 'Services', type: 'link' },
                { path: '/pages/invoice', title: 'Invoice', type: 'link' },
                { path: '/pages/terms', title: 'Terms', type: 'link' },
                { path: '/pages/pricing-tables', title: 'Pricing Tables', type: 'link' },
                { path: '/pages/faqs', title: 'Faqs', type: 'link' },
                { path: '/pages/empty-page', title: 'Empty Page', type: 'link' },
                { path: '/custom-pages/under-construction', title: 'Under Construction', type: 'link' },

                {
                    title: 'Blog', type: 'sub',active: false,children: [
                        { path: '/pages/blog/blog', title: 'Blog', type: 'link' },
                        { path: '/pages/blog/blog-details', title: 'Blog Details', type: 'link' },
                        { path: '/pages/blog/blog-post', title: 'Blog Post', type: 'link' },
                    ]
                },
                
                {
                    path: '/maps', title: 'Maps', type: 'link', icon: 'globe', badgeType: 'danger', badgeValue: '3', active: false
                },

                {
                    title: 'E-Commerce', icon: 'shopping-cart', type: 'sub', badgeType: 'danger', badgeValue: '3', active: false,
                    children: [
                        { path: '/pages/ecommerce/products', title: 'Products', type: 'link' },
                        { path: '/pages/ecommerce/product-details', title: 'Product Details', type: 'link' },
                        { path: '/pages/ecommerce/shopping-cart', title: 'Shopping Cart', type: 'link' },
                        { path: '/pages/ecommerce/wishlist', title: 'Wishlist', type: 'link' },
                        { path: '/pages/ecommerce/checkout', title: 'Checkout', type: 'link' },
                    ]
                },
                {
                    title: 'File manager', type: 'sub', active: false,
                    children: [
                        { path: '/pages/files/file-manager', title: 'File Manager', type: 'link' },
                        { path: '/pages/files/file-manager-list', title: 'File Manager List', type: 'link' },
                        { path: '/pages/files/file-details', title: 'File Details', type: 'link' },
                        { path: '/pages/files/file-attachments', title: 'File Attachments', type: 'link' }
                    ]
                },
            ]
        },
                
        { headTitle: 'CUSTOM & ERROR PAGES' },
        {
            title: 'Custome Pages', icon: 'settings', type: 'sub', active: false,
            children: [
                { path: '/custom-pages/login', title: 'Login', type: 'link' },
                { path: '/custom-pages/register', title: 'Register', type: 'link' },
                { path: '/custom-pages/forget-password', title: 'Forget Password', type: 'link' },
                { path: '/custom-pages/lock-screen', title: 'Lock Screen', type: 'link' },
                {
                    title: 'Error Pages', icon: 'info', type: 'sub', active: false,
                    children: [
                        { path: '/error/error400', title: '400', type: 'link' },
                        { path: '/error/error401', title: '401', type: 'link' },
                        { path: '/error/error403', title: '403', type: 'link' },
                        { path: '/error/error404', title: '404', type: 'link' },
                        { path: '/error/error500', title: '500', type: 'link' },
                        { path: '/error/error503', title: '503', type: 'link' },
                    ]
                }        
            ]
        },

        { headTitle: 'FORMS & ICONS' },
        {
            title: 'Forms', icon: 'file-text', type: 'sub',  active: false, badgeClass: 'warning', badgeValue:'5',
            children: [
                {path:'forms/form-elements', title:'Form Element', type:'link'},
                {path:'forms/form-advanced', title:'Advanced Form', type:'link'},
                {path:'forms/form-validation', title:'Form Validation', type:'link'},
                {path:'forms/form-wizards', title:'Form Wizards', type:'link'},
                {path:'forms/form-editor', title:'Form Editor', type:'link'},
            ]
        },

        {
            title: 'Icons', icon: 'command', type: 'sub', badgeType: 'warning', badgeValue: '11', active: false,
            children: [
                { path: '/icons/font-awesome', title: 'Font Awesome Icons', type: 'link' },
                { path: '/icons/material-design', title: 'Material Design Icons', type: 'link' },
                { path: '/icons/simple-line', title: 'Simple Line Icons', type: 'link' },
                { path: '/icons/feather-icons', title: 'Feather Icons', type: 'link' },
                { path: '/icons/ionic-icons', title: 'Ionic Icons', type: 'link' },
                { path: '/icons/flag-icons', title: 'Flag Icons', type: 'link' },
                { path: '/icons/pe7-icons', title: 'pe7 Icons', type: 'link' },
                { path: '/icons/themify-icons', title: 'Themify Icons', type: 'link' },
                { path: '/icons/typicons', title: 'Typicons Icons', type: 'link' },
            ]
        },
        
       
    ];

    //array
    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}