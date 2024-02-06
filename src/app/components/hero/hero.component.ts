import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { basics } from '@cv';
import { Profile } from '../../models/Profile';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = basics.name;
  public label: string = basics.label;
  public image: string = basics.image;
  public phone: string = basics.phone;
  public email: string = basics.email;
  public profiles: Profile[] = basics.profiles;
  public city: string = basics.location.city;
  public region: string = basics.location.region;
  public country: string = basics.location.countryCode;
  public titleEmail: string = `Enviar un correo electrónico a ${this.name} al correo ${this.email}`;
  public titlePhone: string = `Llamar por teléfono a ${this.name} al número ${this.phone}`;
  private linkedInUrl?: string = this.profiles.find(profile => profile.network === 'LinkedIn')?.url;
  public contactInformation: string [] = [
    this.email,
    this.phone,
    this.linkedInUrl ? this.linkedInUrl : ''
  ];

  constructor(public sanitizer:DomSanitizer){ }

}
