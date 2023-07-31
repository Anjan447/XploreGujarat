import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { FooterComponent } from './footer/footer.component';
import { FestivalDetailsComponent } from './festival-details/festival-details.component';
import { SaputaraDetailsComponent } from './saputara-details/saputara-details.component';
import { NavratriDetailsComponent } from './navratri-details/navratri-details.component';
import { DarbarDetailsComponent } from './darbar-details/darbar-details.component';
import { GirComponent } from './gir/gir.component';
import { VadnagarComponent } from './vadnagar/vadnagar.component';
import { StatueComponent } from './statue/statue.component';
import { SmritivanComponent } from './smritivan/smritivan.component';
import { RajchandraAshramComponent } from './rajchandra-ashram/rajchandra-ashram.component';
import { SunTempleComponent } from './sun-temple/sun-temple.component';
import { DholaviraComponent } from './dholavira/dholavira.component';
import { RaniKiVavComponent } from './rani-ki-vav/rani-ki-vav.component';
import { MaqbaraComponent } from './maqbara/maqbara.component';
import { MitiyalaComponent } from './mitiyala/mitiyala.component';
import { GirnarHillsComponent } from './girnar-hills/girnar-hills.component';
import { AshokeEdictsComponent } from './ashoke-edicts/ashoke-edicts.component';
import { BuddhistCavesComponent } from './buddhist-caves/buddhist-caves.component';
import { NavghanKuwoComponent } from './navghan-kuwo/navghan-kuwo.component';
import { UparkotComponent } from './uparkot/uparkot.component';
import { DamodarKundComponent } from './damodar-kund/damodar-kund.component';
import { SomnathTempleComponent } from './somnath-temple/somnath-temple.component';
import { TriveniSangamComponent } from './triveni-sangam/triveni-sangam.component';
import { PrabhasPatanComponent } from './prabhas-patan/prabhas-patan.component';
import { BhalkaTirthComponent } from './bhalka-tirth/bhalka-tirth.component';
import { AhmedpurMandviComponent } from './ahmedpur-mandvi/ahmedpur-mandvi.component';
import { AdiKadiVavComponent } from './adi-kadi-vav/adi-kadi-vav.component';
import { KirtiToranComponent } from './kirti-toran/kirti-toran.component';
import { JainTempleComponent } from './jain-temple/jain-temple.component';
import { BachucharaMataTempleComponent } from './bachuchara-mata-temple/bachuchara-mata-temple.component';
import { TarangaCavesComponent } from './taranga-caves/taranga-caves.component';
import { PanchasaraParshwanathComponent } from './panchasara-parshwanath/panchasara-parshwanath.component';
import { PatanPatolaComponent } from './patan-patola/patan-patola.component';
import { BuddhistMonasteryComponent } from './buddhist-monastery/buddhist-monastery.component';
import { HatkeshwarTempleComponent } from './hatkeshwar-temple/hatkeshwar-temple.component';
import { RanchodraiTempleComponent } from './ranchodrai-temple/ranchodrai-temple.component';
import { SayajiBaugComponent } from './sayaji-baug/sayaji-baug.component';
import { KoteshwarMahadevTempleComponent } from './koteshwar-mahadev-temple/koteshwar-mahadev-temple.component';
import { GreatRannOfKutchComponent } from './great-rann-of-kutch/great-rann-of-kutch.component';
import { NarayanSarovarComponent } from './narayan-sarovar/narayan-sarovar.component';
import { LakhpatFortComponent } from './lakhpat-fort/lakhpat-fort.component';
import { RatanmahalSlothComponent } from './ratanmahal-sloth/ratanmahal-sloth.component';
import { DumasBeachComponent } from './dumas-beach/dumas-beach.component';
import { ShoolpaneshwarComponent } from './shoolpaneshwar/shoolpaneshwar.component';
import { JambughodaComponent } from './jambughoda/jambughoda.component';
import { LaxmiVilasPalaceComponent } from './laxmi-vilas-palace/laxmi-vilas-palace.component';
import { KirtiMandirComponent } from './kirti-mandir/kirti-mandir.component';
import { KaloDungarComponent } from './kalo-dungar/kalo-dungar.component';
import { NironaComponent } from './nirona/nirona.component';
import { NargolBeachComponent } from './nargol-beach/nargol-beach.component';
import { TithalBeachComponent } from './tithal-beach/tithal-beach.component';
import { PadamDungriEcotourismComponent } from './padam-dungri-ecotourism/padam-dungri-ecotourism.component';
import { PurnaWildlifeComponent } from './purna-wildlife/purna-wildlife.component';
import { TrailsComponent } from './trails/trails.component';
import { RegisterComponent } from './register/register.component';
import { PackagesComponent } from './packages/packages.component';
import { MuseumComponent } from './museum/museum.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { GujaratiThaliComponent } from './gujarati-thali/gujarati-thali.component';
import { BarodaMuseumComponent } from './baroda-museum/baroda-museum.component';
import { RoyalCarCollectionComponent } from './royal-car-collection/royal-car-collection.component';
import { DinosaurMuseumComponent } from './dinosaur-museum/dinosaur-museum.component';
import { FloraFaunaComponent } from './flora-fauna/flora-fauna.component';
import { DonHillStationComponent } from './don-hill-station/don-hill-station.component';
import { SardarSarovarComponent } from './sardar-sarovar/sardar-sarovar.component';
import { ChhariDhandComponent } from './chhari-dhand/chhari-dhand.component';
import { ReligiousSitesComponent } from './religious-sites/religious-sites.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomepageComponent,
    LoginComponent,
    ContactComponent,
    DestinationsComponent,
    FestivalsComponent,
    FooterComponent,
    FestivalDetailsComponent,
    SaputaraDetailsComponent,
    NavratriDetailsComponent,
    DarbarDetailsComponent,
    GirComponent,
    VadnagarComponent,
    StatueComponent,
    SmritivanComponent,
    RajchandraAshramComponent,
    SunTempleComponent,
    DholaviraComponent,
    RaniKiVavComponent,
    MaqbaraComponent,
    MitiyalaComponent,
    GirnarHillsComponent,
    AshokeEdictsComponent,
    BuddhistCavesComponent,
    NavghanKuwoComponent,
    UparkotComponent,
    DamodarKundComponent,
    SomnathTempleComponent,
    TriveniSangamComponent,
    PrabhasPatanComponent,
    BhalkaTirthComponent,
    AhmedpurMandviComponent,
    AdiKadiVavComponent,
    KirtiToranComponent,
    JainTempleComponent,
    BachucharaMataTempleComponent,
    TarangaCavesComponent,
    PanchasaraParshwanathComponent,
    PatanPatolaComponent,
    BuddhistMonasteryComponent,
    HatkeshwarTempleComponent,
    RanchodraiTempleComponent,
    SayajiBaugComponent,
    KoteshwarMahadevTempleComponent,
    GreatRannOfKutchComponent,
    NarayanSarovarComponent,
    LakhpatFortComponent,
    RatanmahalSlothComponent,
    DumasBeachComponent,
    ShoolpaneshwarComponent,
    JambughodaComponent,
    LaxmiVilasPalaceComponent,
    KirtiMandirComponent,
    KaloDungarComponent,
    NironaComponent,
    NargolBeachComponent,
    TithalBeachComponent,
    PadamDungriEcotourismComponent,
    PurnaWildlifeComponent,
    TrailsComponent,
    RegisterComponent,
    PackagesComponent,
    MuseumComponent,
    CuisineComponent,
    GujaratiThaliComponent,
    BarodaMuseumComponent,
    RoyalCarCollectionComponent,
    DinosaurMuseumComponent,
    FloraFaunaComponent,
    DonHillStationComponent,
    SardarSarovarComponent,
    ChhariDhandComponent,
    ReligiousSitesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
